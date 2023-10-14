let express = require("express");
const cors = require("cors")
let app = new express();

// set up database connection
const knex = require("knex")({
        client: "mysql",
        connection: {
        host:"isprofdb.cwfm1szckd36.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "profassignment",
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