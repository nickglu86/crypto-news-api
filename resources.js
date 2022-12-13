
const resources = [
        { 
            name: 'cointelegraph',
            url: 'https://cointelegraph.com/',
            selectors : {
                item  : '.main-page__posts article.post-card__article',
                title : title => title.find('.post-card__header span.post-card__title').text(),
                desc  : desc => desc.find('.post-card__text-wrp p.post-card__text').text(),
                url   : url => url.find('.post-card__header a.post-card__title-link').attr('href'),
                image : image => "",
                date  : date => date.find('.post-card__footer time.post-card__date').text(),
                author: author => author.find(".post-card__footer a.post-card__author-link").text()
            }
        },
        // {   
        //     name: 'coindesk',
        //     url: 'https://www.coindesk.com/livewire/',
        //     selectors : {
        //         item  : '.articles-wrapper .article-card',
        //         title : title => title.find('.articleTextSection a.card-title').text(),
        //         desc  : desc => desc.find('.articleTextSection span.content-text').text(),
        //         url   : url => url.find('.img-block a').attr('href'),
        //         image : image => image.find('.img-block picture').attr('srcset'),
        //         date  : date => '',
        //         author: author => ''
        //     }
        // },
        {   
            name: 'theblockcrypto',
            url: 'https://www.theblock.co/latest',
            selectors : {
                item  : '.collectionLatest article.articleCard',
                title : title => title.find('.headline h2 span').text(),
                desc  : desc => desc.find('span.content-text').text(),
                url   : url => url.find('.headline a').attr('href'),
                image : image => image.find('.featureImage img').attr('src'),
                date  : date => "",
                author: author =>  "",
                category: category => category.find('.meta .category a').text()
            }
        },
        {   
            name: 'yahoofinance',
            url: 'https://finance.yahoo.com/topic/crypto/',
            selectors : {
                item  : '.js-stream-content',
                title : title => title.find('h3').text(),
                desc  : desc => desc.find('p').text(),
                url   : url  => url.find('a').attr('href'),
                image : image => image.find('img').attr('src'),
                date  : date => "",
                author: author => ""
            }
        }
    
    ]

exports.resources = resources;