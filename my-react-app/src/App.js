import React from 'react';
import './App.css';

function App() {

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
            <td>1</td>
            <td>zain</td>
            <td>23</td>
            <td>sahiwal</td>
            <td><button>click</button></td>
          </tbody>
          <tbody>
            <td>2</td>
            <td>Ahmad</td>
            <td>24</td>
            <td>okkara</td>
            <td><button>click</button></td>
          </tbody>
          <tbody>
            <td>3</td>
            <td>Ali</td>
            <td>25</td>
            <td>chichawatni</td>
            <td><button>click</button></td>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
