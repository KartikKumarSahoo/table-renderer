import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Table from "./Table";
import { generateClassStats } from "./utils";

function App() {
  const [currentClass, setCurrentClass] = useState(null);

  return (
    <div className="app">
      <Table
        title="Class Table"
        className="class-table"
        data={generateClassStats(data)}
        onRowClick={klassName => {
          setCurrentClass(klassName);
        }}
      />
      {currentClass && (
        <Table
          title={`Student Table (${currentClass})`}
          className="student-table"
          data={data[currentClass]}
        />
      )}
    </div>
  );
}

export default App;
