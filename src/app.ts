import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes/route";
const app = express();
const port = process.env.PORT || 5000
app.use(cors())

// Get data in body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));

// API Routes
app.use('/api', routes);

// Cors for cross origin 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.listen(port, async () => {

  console.log(`Listening on port ${port}`);
});

// For Handling uncaught errors
process.on('uncaughtException', function (err) {
  console.log("Error", err)
})