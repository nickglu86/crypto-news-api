const API_URL = 'https://crypto-news-api.b4a.app/'
const ROOT_TITLE = 'Welcome to nickglu86 Crypto News API'
const ROOT_DESC = 'Here are the relative endpoints:'
const API_CATEGORY = 'news/'
const THE_BLOCK_CRYPTO = 'theblockcrypto'
const THE_BLOCK_CRYPTO_DOMAIN = 'https://www.theblock.co'
const YAHOO_FINANCE = 'yahoofinance'
const YAHOO_FINANCE_DOMAIN = 'https://finance.yahoo.com/topic/crypto/'
const COIN_TELEGRAPH = 'cointelegraph'
const COIN_TELEGRAPH_DOMAIN = 'https://cointelegraph.com'
const CRYPTOPOLITAN = 'cryptopolitan'
const CRYPTOPOLITAN_DOMAIN = 'https://www.cryptopolitan.com/news/'


const root = {
    title: ROOT_TITLE,
    apiUrl: API_URL,
    desc: ROOT_DESC,
    endpoints: {
        theblockcrypto : API_CATEGORY + THE_BLOCK_CRYPTO,
        yahoofinance :  API_CATEGORY + YAHOO_FINANCE,
        cointelegraph : API_CATEGORY + COIN_TELEGRAPH,
        cryptopolitan : API_CATEGORY + CRYPTOPOLITAN
    }
}
const resources = [
        {   
            name: THE_BLOCK_CRYPTO,
            url: THE_BLOCK_CRYPTO_DOMAIN +'/latest',
            selectors : {
                item  : 'section.collection .articles .articleCard',
                title : title => title.find('.headline h2 span').text(),
                desc  : desc => "",
                url   : url => THE_BLOCK_CRYPTO_DOMAIN + url.find('.headline a.appLink').attr('href'),
                image : image => image.find('.imageContainer img').attr('src'),
                date  : date => date.find('meta .pubDate').text(),
                author: author =>  "",
                category: category => category.find('.meta .category a').text()
            }
        },
        {   
            name: YAHOO_FINANCE,
            url: YAHOO_FINANCE_DOMAIN,
            selectors : {
                item  : '#Main li.js-stream-content',
                title : title => title.find('h3').text(),
                desc  : desc => desc.find('p').text(),
                url   : url  => YAHOO_FINANCE_DOMAIN + url.find('a').attr('href'),
                image : image => image.find('img').attr('src'),
                date  : date =>  "",
                author: author => ""
            }
        },
        { 
            name: COIN_TELEGRAPH,
            url: COIN_TELEGRAPH_DOMAIN,
            selectors : {
                item  : '.main-page article.post-card__article',
                title : title => title.find('span.post-card__title').text(),
                desc  : desc => desc.find('p.post-card__text').text(),
                url   : url => COIN_TELEGRAPH_DOMAIN + url.find('a.post-card__figure-link').attr('href'),
                image : image => image.find('img.lazy-image__img').attr('src'),
                date  : date => date.find('time.text-uiSWeak').text(),
                author: author => author.find(".post-card__author-link").text()
            }
        },
        { 
            name: CRYPTOPOLITAN,
            url: CRYPTOPOLITAN_DOMAIN,
            selectors : {
                item  : '.elementor-widget-container .elementor-loop-container.elementor-grid [data-elementor-type=loop-item]',
                title : title => title.find('h3.elementor-heading-title a').text(),
                desc  : desc => "",
                url   : url => url.find('h3.elementor-heading-title a').attr('href'),
                image : image => image.find('[data-widget_type=theme-post-featured-image.default] a img').attr('src'),
                date  : date => "",
                author: author => ""
            }
        }    
    ]

module.exports = {root, resources };