 const path=require('path');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.static(__dirname + '/public'));

const port = 3000;
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send('Hello World, from express');

});
app.get('/book',(req,res)=>{
  res.sendFile(__dirname+"/new-book.html");
});

app.get('/show',(req,res)=>{
  res.sendFile(__dirname+"/show.html");
});

app.post('/book', (req, res) => {
      const book = req.body;
      console.log(book);


      var d = new Date();
      var n = d.getTime().toString();
      book["id"]=n;
      // Outp the book to the console for debugging
      console.log(book);

      books.push(book);

});


app.get('/books', (req, res) => {
  res.send(books);
});
app.get('/book/:id', (req, res) => {
    // Reading isbn from the URL
    const id = req.params.id;
    console.log(id);
    res.send(id);
});
app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('login is edited');
});
app.delete('/books/:id',(req,res)=>{

  const{ id }=req.params;
  books=books.filter((user)=>user.id!==id);
  res.send("deleted");
});
app.patch('/books/:id',(req,res)=>{
  const {id}=req.params;
  const {firstname,lastname,email,number}=req.body;
  const user=books.find((user)=>user.id===id);
  if(firstname){
    user.firstname=firstname;
  }
    if(lastname){
      user.lastname=lastname;
    }
    if(email){
        user.email=email;
      }
      if(number){
          user.number=number;
        }
        res.send(`updated ${id}`);
    });





app.listen(port, () => console.log(`Hello world app book listening on port ${port}!`));
