
const resources = [
        { 
            name: 'cointelegraph',
            url: 'https://cointelegraph.com/rss',
            selectors : {
                item  : 'item',
                title : title => title.find('title').text().split('<![CDATA[').pop().split(']]>')[0],
                desc  : desc => desc.find('description p ').text(),
                url   : url => url.find('guid').text(),
                image : image => image.find('enclosure').attr('url'),
                date  : date => date.find('pubDate').text().replace(' +0000', ''),
                author: author => null
            }
        },
        {   
            name: 'coindesk',
            url: 'https://www.coindesk.com/markets/',
            selectors : {
                item  : '.article-card',
                title : title => title.find('.headline').text(),
                desc  : desc => desc.find('span.content-text').text(),
                url   : url => url.find('.img-block a').attr('href'),
                image : image => image.find('.img-block img').attr('src'),
                date  : date => date.find('.timing-data span').text(),
                author: author => author.find('.ac-author span').text()
            }
        },
        {   
            name: 'theblockcrypto',
            url: 'https://www.theblockcrypto.com',
            selectors : {
                item  : '.storyFeed article',
                title : title => title.find('.font-headline').text(),
                desc  : desc => desc.find('span.content-text').text(),
                url   : url => url.find('a.feedCard-readButton').attr('href'),
                image : image => image.find('.feedCard-image img').attr('src'),
                date  : date => date.find('.font-meta').text(),
                author: author => null
            }
        }
    
    ]

exports.resources = resources;