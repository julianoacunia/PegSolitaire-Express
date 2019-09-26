
const board = require ('./board.json');
//const users = require('./users.json')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.send('Hello Juliano!');
});
app.get('/products',  (req, res) => {
   res.send({id:1, 
   name:'alfajor'
});
  });
  app.get('/board', (req, res)  => {
    res.send(board)
  })
  
 /* app.get('/users',  (req, res) => {
    res.send({users});
   });
   */
app.listen(port,  () => {
  console.log(`Example app listening on port ${port}!`);
});
