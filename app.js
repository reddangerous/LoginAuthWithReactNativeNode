const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => 
console.log('DB Connected')).catch(err => console.log(err));
const app = express();



app.get('/', (req, res) => {
    res.send('<h1 style ="color: red">Hello World</h1>');
}); 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
//mongodb+srv://reddangerous:<password>@cluster0.ars5w1n.mongodb.net/?retryWrites=true&w=majority