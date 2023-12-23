const cheerio = require('cheerio');

const getNewsItems = (html, selectors) => {
    const $ = cheerio.load(html);
    const newsItems = [];

    $(selectors.item, html).each(function(){
                
        const title = selectors.title($(this));    
        const desc = selectors.desc($(this));
        const link = selectors.url($(this));
        const image_url = selectors.image($(this));
        const pubDate = selectors.date($(this));
        const creator = selectors.author($(this));

        if(true){
            newsItems.push ({
                title,
                desc,
                image_url, 
                link,
                pubDate,
                creator,
                content : ""
            })
        }
      })

      return newsItems;
} 

module.exports = getNewsItems;