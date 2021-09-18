const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}.`);
});  