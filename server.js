try {
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

        
   
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
  
   

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT =  30080;
app.listen(PORT, () => {
  console.log(`Server is running onn port ${PORT}.`);
});

  } catch(err) {
        res.status(400).send(err);
    }
