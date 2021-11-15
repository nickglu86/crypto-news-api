const PORT = process.env.PORT || 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const { each } = require('cheerio/lib/api/traversing');

const app = express();
const articles = [];
const resourceRssURL = 'https://cointelegraph.com/rss';

app.get('/', (req, res) => {
    res.json('Welcome to my Crypto News API');
});

app.get('/cointelegraph', (req, res) => {
    axios.get(resourceRssURL)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        $('item', html).each(function(){
            const title = $(this).find('title').text().split('<![CDATA[').pop().split(']]>')[0];
            const desc = $(this).find('description p ').text();
            const url = $(this).find('guid').text();
            const image = $(this).find('enclosure').attr('url');
            const date = $(this).find('pubDate').text().replace(' +0000', '');
         
            if(title){
                articles.push ({
                    title,
                    desc,
                    image, 
                    url,
                    date
                })
            }
        })
        res.json(articles);
    })
 
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));