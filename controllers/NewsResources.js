const axios = require('axios');
  const { resources, root } = require('../service/Resources');
  const getNewsItems = require('../service/NewsItems');


  const GetNewsResource = async (req, res) => {
    const rsrcName = req.params.rsrcName;
    console.log('rsrcName' + rsrcName)
    const rsrc = resources.filter(resource => resource.name === rsrcName)[0];
    const rsrcURL = rsrc.url;
    const selectors = rsrc.selectors;

    axios.get(rsrcURL)
            .then( 
                response => {
                    const html = response.data;
                    const newsItems = getNewsItems(html, selectors)
                    res.header('Access-Control-Allow-Origin', '*')
                   return  res.json(newsItems);
                })
            .catch( err => console.log(err))
}
 
  
  module.exports = GetNewsResource;