const port = process.env.PORT || 8001;
const app = require('express')();
const { resources, root } = require('./service/Resources');
 
app.use('/', (req, res) => {
    res.json(root);
});

const newsResources = require("./routes/NewsResources");
app.use('/news',newsResources)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});