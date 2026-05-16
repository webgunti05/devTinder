const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async(req, res) => {
    const userObj = {
        firstName: "anji",
        lastName: "Gunti",
        age: 35,
        password: "anji@123"
    }

    const user = new User(userObj);
   try{
     user.save();
    res.send("User added succesfully")
   } catch(err){
    res.status(400).send("Error in saving the user:" + err.message)
   }
})

connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("server is listening on the port 5000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed. Real error:");
    console.error(err); // <--- This will tell you exactly what went wrong
  });

