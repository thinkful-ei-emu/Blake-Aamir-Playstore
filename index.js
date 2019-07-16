const express = require('express');
const morgan = require('morgan');
const playstore = require('./playstore.js');

const app = express();
app.use(morgan('dev'));

app.get('/sort', (req, res)=>{
  const {sort, genre} = req.query;

  if(!(sort === 'rating' || sort === 'app')){
    return res.status(400)
      .send('Sort value in invalid');
  }
  if(!(genre === 'Action' || genre === 'Puzzle' || genre === 'Strategy' || genre ==='Casual' || genre ==='Arcade' || genre === 'Card' )){
    return res.status(400)
      .send('Genre value in invalid');
  }

  const workingArray = playstore;
  if (sort === 'rating'){
    workingArray.sort((a,b) => {
      return b.Rating - a.Rating;
    });
  }
  if (sort === 'app') {
    workingArray.sort((a,b) => {
      let aApp = a.App;
      let bApp = b.App;
      let aCharCode = aApp.charCodeAt(0);
      let bCharCode = bApp.charCodeAt(0);
      return aCharCode - bCharCode;
    });
  }
  const finalArray = workingArray.filter(item => {
    
    if (item.Genres.includes(genre)){
      console.log(item.Genres + ' includes: ' + genre);
      return true;
    }
    else{
      return false;
    }
  });

  return res.json(finalArray);


});





















app.listen(8080, () => {
  console.log('Express server is listening on port 8080!');
});