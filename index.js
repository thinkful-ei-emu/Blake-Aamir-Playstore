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




  return res.send('it was valid');


});





















app.listen(8080, () => {
  console.log('Express server is listening on port 8080!');
});