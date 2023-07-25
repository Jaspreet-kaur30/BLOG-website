import express from "express";
import mongoose from "mongoose";
import brouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
// import path from 'path';



const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", brouter);

// app.use(express.static(path.join(path.__dirname,'./frontend/build')));
// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
// })
mongoose.connect(
  "mongodb+srv://jaspreet:eUNHuNJV0IxigBsS@cluster0.n3vj9sj.mongodb.net/test"
    
    ).then(() => app.listen(5001))
    .then(() =>
      console.log("Connected TO Database and Listening TO Localhost 5001")
    )
    .catch((err) => console.log(err));



    



    //json script // "start": "nodemon --experimental-modules --es-module-specifier-resolution=node app.js",
    // "test": "echo \"Error: no test specified\""