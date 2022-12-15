const API_URL = 'https://crypto-news-api.b4a.app/'
const ROOT_TITLE = 'Welcome to nickglu86 Crypto News API'
const ROOT_DESC = 'Here are the relative endpoints:'
const API_CATEGORY = 'news/'
const THE_BLOCK_CRYPTO = 'theblockcrypto'
const THE_BLOCK_CRYPTO_DOMAIN = 'https://www.theblock.co'
const YAHOO_FINANCE = 'yahoofinance'
const YAHOO_FINANCE_DOMAIN = 'https://finance.yahoo.com'
const COIN_TELEGRAPH = 'cointelegraph'
const COIN_TELEGRAPH_DOMAIN = 'https://cointelegraph.com'

const root = {
    title: ROOT_TITLE,
    apiUrl: API_URL,
    desc: ROOT_DESC,
    endpoints: {
        theblockcrypto : API_CATEGORY + THE_BLOCK_CRYPTO,
        yahoofinance :  API_CATEGORY + YAHOO_FINANCE,
        cointelegraph : API_CATEGORY + COIN_TELEGRAPH
    }
}
const resources = [
        {   
            name: THE_BLOCK_CRYPTO,
            url: THE_BLOCK_CRYPTO_DOMAIN +'/latest',
            selectors : {
                item  : '.collectionLatest article.articleCard',
                title : title => title.find('.headline h2 span').text(),
                desc  : desc => desc.find('span.content-text').text(),
                url   : url => THE_BLOCK_CRYPTO_DOMAIN + url.find('.headline a').attr('href'),
                image : image => image.find('.featureImage img').attr('src'),
                date  : date => "",
                author: author =>  "",
                category: category => category.find('.meta .category a').text()
            }
        },
        {   
            name: YAHOO_FINANCE,
            url: YAHOO_FINANCE_DOMAIN +'/topic/crypto/',
            selectors : {
                item  : '.js-stream-content',
                title : title => title.find('h3').text(),
                desc  : desc => desc.find('p').text(),
                url   : url  => YAHOO_FINANCE_DOMAIN + url.find('a').attr('href'),
                image : image => image.find('img').attr('src'),
                date  : date => "",
                author: author => ""
            }
        },
        { 
            name: COIN_TELEGRAPH,
            url: COIN_TELEGRAPH_DOMAIN,
            selectors : {
                item  : '.main-page__posts article.post-card__article',
                title : title => title.find('.post-card__header span.post-card__title').text(),
                desc  : desc => desc.find('.post-card__text-wrp p.post-card__text').text(),
                url   : url => COIN_TELEGRAPH_DOMAIN + url.find('.post-card__header a.post-card__title-link').attr('href'),
                image : image => image.find('.lazy-image ').attr('src'),
                date  : date => date.find('.post-card__footer time.post-card__date').text(),
                author: author => author.find(".post-card__footer a.post-card__author-link").text()
            }
        }    
    ]

module.exports = {root, resources };