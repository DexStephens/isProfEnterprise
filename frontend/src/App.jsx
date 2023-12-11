import { ProfessorCard } from "./ProfessorCard";
import { SearchBar } from "./SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

const url =
  "http://isprof-back-471441940.us-west-1.elb.amazonaws.com/api"; // Specify the complete URL including the protocol and host

function App() {
  const [professors, setProfessors] = useState([]);
  const [originalProfessors, setOriginalProfessors] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then(resp => {
        if (resp.status === 200) {
          setOriginalProfessors(resp.data);
          setProfessors(resp.data);
        } else {
          console.log("Error retrieving data", resp.status);
        }
      })
      .catch(error => console.log("Error", error));
  }, []);

  useEffect(() => {
    if (filter != "") {
      setProfessors(
        professors.filter(professor =>
          professor.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      setProfessors(originalProfessors);
    }
  }, [filter, professors, originalProfessors]);

  return (
    <body className="bg-blue-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          IS Professors
        </h1>
        <SearchBar filter={filter} onChange={setFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProfessorCard professors={professors} />
        </div>
      </div>
    </body>
  );
}

export default App;
