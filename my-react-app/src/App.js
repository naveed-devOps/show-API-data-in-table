import React from 'react';
import './App.css';

function App() {
  // Define the function outside JSX
  function handleButtonClick(event) {
    const row = event.currentTarget.parentElement.parentElement; // Get the parent row
    const cells = row.children; // Get all cells in the row

    const data = {
      id: cells[0].textContent,
      name: cells[1].textContent,
      age: cells[2].textContent,
      city: cells[3].textContent,
    };

    alert(`Row data: ${data.id} ${data.name} ${data.age} ${data.city}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Table Data</p>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>zain</td>
              <td>23</td>
              <td>sahiwal</td>
              <td><button onClick={handleButtonClick}>click</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ahmad</td>
              <td>24</td>
              <td>okkara</td>
              <td><button onClick={handleButtonClick}>click</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ali</td>
              <td>25</td>
              <td>chichawatni</td>
              <td><button onClick={handleButtonClick}>click</button></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
