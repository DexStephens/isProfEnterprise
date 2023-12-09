let express = require("express");
const cors = require("cors")
let app = new express();

// set up database connection
const knex = require("knex")({
        client: "mysql",
        connection: {
        host:"isprofdb.c9fkgys4lhg9.us-west-1.rds.amazonaws.com",
        user: "admin",
        password: "password",
        database:"isprofessors",
        port: 3306,
    },
});

app.use(cors())

app.get("/api/", (req, res) => {
    knex
      .select()
      .from("professor")
      .orderBy("name") // Add the ORDER BY clause here
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      });
  });
  


app.listen(8080);