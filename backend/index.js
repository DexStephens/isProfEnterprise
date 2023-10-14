let express = require("express");
const cors = require("cors")
let app = new express();

const allProfessors = [
    {
      name: "Gove Allen",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=5487"
    },
    {
      name: "Bonnie Anderson",
      title: "Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=1478"
    },
    {
      name: "Greg Anderson",
      title: "Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=29146"
    },
    {
      name: "Laura Cutler",
      title: "Assistant Teaching Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=6310"
    },
    {
      name: "James Gaskin",
      title: "Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=5438"
    },
    {
      name: "Justin Giboney",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=2916"
    },
    {
      name: "Spencer Hilton aka Spenny aka Spencer Out aka caughtIn4K",
      title: "Associate Teaching Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=71802"
    },
    {
      name: "Jeff Jenkins",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=26429"
    },
    {
      name: "Mark Keith",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=29237"
    },
    {
      name: "Degan Kettles aka CaliBoy",
      title: "Associate Teaching Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=56514"
    },
    {
      name: "Steve Liddle aka DevMaster",
      title: "Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=5352"
    },
    {
      name: "Tom Meservy",
      title: "Department Chair and Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=22394"
    },
    {
      name: "Clay Posey",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=77459"
    },
    {
      name: "Katy Reese",
      title: "Assistant Teaching Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=42655"
    },
    {
      name: "Ryan Schuetzler",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=1386"
    },
    {
      name: "Tanner Skousen",
      title: "Assistant Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=37648"
    },
    {
      name: "Jacob Steffen",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=13387"
    },
    {
      name: "Nathan Twyman",
      title: "Associate Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=25339"
    },
    {
      name: "Taylor Wells",
      title: "Assistant Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=36444"
    },
    {
      name: "Dave Wilson",
      title: "Assistant Professor",
      image: "https://marriott.byu.edu/msmadmin/securefile/empphoto?pid=1143"
    },
  ]
// set up database connection
const knex = require("knex")({
        client: "mysql",
        connection: {
        host:"paradisedonutcompany.cluster-c2ov7unnnal8.us-west-1.rds.amazonaws.com",
        user: "admin",
        password: "password1",
        database:"icecreamdonuts",
        port: 3306,
    },
});

app.use(cors())

app.get("/", (req, res) => {
    // knex
    //   .select()
    //   .from("professors")
    //   .orderBy("name") // Add the ORDER BY clause here
    //   .then((result) => {
    //     console.log(result);
    //     res.json(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.status(500).json({ error: 'An error occurred while fetching data.' });
    //   });
    res.json(allProfessors)
  });
  


app.listen(8080);