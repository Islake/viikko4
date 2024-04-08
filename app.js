import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cats'), (req, res) =>{
  const cat = {
    cat_id: 1,
    name: 'Masa',
    birthdate: '2010-06-06',
    weight: 6,
    owner: 2,
    Image: 'https://loremflickr.com/320/240/cat',
  };
}


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
