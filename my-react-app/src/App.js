import React from 'react';
import './App.css';

function App() {
  // Define the function outside JSX
  function btn1() {
    var id = document.getElementById('1').textContent;
    var name = document.getElementById('2').textContent;
    var age = document.getElementById('3').textContent;
    var city = document.getElementById('4').textContent;
  
    alert('Row one data: ' + id + " " + name + " " + age + " "  + city);
  };
  
  function btn2() {
    var id = document.getElementById('5').textContent;
    var name = document.getElementById('6').textContent;
    var age = document.getElementById('7').textContent;
    var city = document.getElementById('8').textContent;
  
    alert('Row two data: ' + id + " " + name + " " + age + " "  + city);
  };
  
  function btn3() {
    var id = document.getElementById('9').textContent;
    var name = document.getElementById('10').textContent;
    var age = document.getElementById('11').textContent;
    var city = document.getElementById('12').textContent;
  
    alert('Row three data: ' + id + " " + name + " " + age + " "  + city);
  };

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
              <td id="1">1</td>
              <td id="2">zain</td>
              <td id="3">23</td>
              <td id="4">sahiwal</td>
              <td><button onClick={btn1}>click</button></td>
            </tr>
            <tr>
              <td id="5">2</td>
              <td id="6">Ahmad</td>
              <td id="7">24</td>
              <td id="8">okkara</td>
              <td><button onClick={btn2}>click</button></td>
            </tr>
            <tr>
              <td id="9">3</td>
              <td id="10">Ali</td>
              <td id="11">25</td>
              <td id="12">chichawatni</td>
              <td><button onClick={btn3}>click</button></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
