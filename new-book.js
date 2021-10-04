fetch("https://reqres.in/api/users",{
  method:'Post',
  headers:{
    'Content-Type':"applicaton/json"
  },
  body:JSON.stringify({
    name:"User 1"
  })
}).then(res=>{
  return res.json()
}).then(data=>console.log(data))
.catch(error=>console.log('ERROR'))

app.get('/books', (req, res) => {
  res.sendFile(__dirname+"/book-list.html");

});
