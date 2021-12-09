const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { each } = require('cheerio/lib/api/traversing');

const app = express();
const { resources } = require('./resources');

const getNewsItems = (html, selectors) => {
    const $ = cheerio.load(html);
    const newsItems = [];

    $(selectors.item, html).each(function(){
                            
        const title = selectors.title($(this));
        const desc = selectors.desc($(this));
        const url = selectors.url($(this));
        const image = selectors.image($(this));
        const date = selectors.date($(this));
        const author = selectors.author($(this));

        if(title){
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
    res.json('Welcome to my Crypto News API');
});

app.get('/news', (req, res) => {
    // TO DO : Retvie Crypto News From all resources
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
                    res.json(newsItems);
                })
            .catch( err => console.log(err))
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));