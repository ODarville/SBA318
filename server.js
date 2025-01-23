////////////////////////////
//// Require Statement /////
////////////////////////////

const notes = require('./routes/noteRoutes');
const accounts = require('./routes/accountRoutes');

const express = require('express');
const app = express();
const port = 3000;

// const accountsRouter = require('./routes/accountRoutes');
// const notesRouter = require('./routes/noteRoutes');

////////////////////////////
////// Middleware //////////
////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// I know this one is technically custom middleware, but I don't want to use it as one of my required middlewares. I just think this is good to use in most apps to help with logging and debugging.
app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });


////////////////////////////
///////// Routes ///////////
////////////////////////////

app.use("/api/accounts", accounts); 
app.use("/api/notes", notes);


////////////////////////////
////// Server Setup ////////
////////////////////////////


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})