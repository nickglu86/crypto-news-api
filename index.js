const PORT = process.env.PORT || 8002;
const app = require('express')();
const axios = require('axios');
const cheerio = require('cheerio');


const { resources, root } = require('./data');

 
const getNewsItems = (html, selectors) => {
    const $ = cheerio.load(html);
    const newsItems = [];

    $(selectors.item, html).each(function(){
                
        const title = selectors.title($(this));
        console.log(title)     
        const desc = selectors.desc($(this));
        const url = selectors.url($(this));
        const image = selectors.image($(this));
        const date = selectors.date($(this));
        const author = selectors.author($(this));

        if(true){
            newsItems.push ({
                title,
                desc,
                image, 
                url,
                date,
                author
            })
        }
      })

      return newsItems;
} 
app.get('/', (req, res) => {
    res.json(root);
});

app.get('/news', (req, res) => {
    res.json(root.endpoints);
})

app.get('/news/:rsrcName', async (req, res) => {
    const rsrcName = req.params.rsrcName;
    const rsrc = resources.filter(resource => resource.name === rsrcName)[0];
    const rsrcURL = rsrc.url;
    const selectors = rsrc.selectors;

    axios.get(rsrcURL)
            .then( 
                response => {
                    const html = response.data;
                    const newsItems = getNewsItems(html, selectors)
                    res.header('Access-Control-Allow-Origin', '*')
                    res.json(newsItems);
                })
            .catch( err => console.log(err))
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));