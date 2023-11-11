let express = require("express");
let path = require("path")
let app = new express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));



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

// Your Express route
app.get("/", (req, res) => {
    const { search } = req.query;
  
    //Build the initial knex query
    let query = knex.select().from("professor").orderBy("name");
  
    // Check if the search parameter exists
    if (search) {
      // If the search parameter exists, add a WHERE clause to the query
      query = query.where("name", "like", `%${search}%`);
    }
  
    // Execute the query
    query
      .then((result) => {
        // Render the EJS template with the results and filter
        res.render("main", { professors: result, filter: search ? search : '', title: 'IS Professors'})
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      });
    
  });

app.listen(8080);