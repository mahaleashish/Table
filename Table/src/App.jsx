import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState()
  const tablearr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="App">
      <div className='tablecontainer'>
        <input className='inputnumber' placeholder='Enter any Number' onChange={(e) => setNumber(e.target.value)}  ></input>
        {
          number && (
            <table className='table'>
              <thead>
                <tr>
                  <th>Table of {number}</th>
                </tr>
              </thead>
              {tablearr.map((data, index) => (

                <tbody>
                  <tr key={index}>
                    <td>{number}X{data}={data * number}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          )
        }
      </div>
    </div>
  );
}

export default App;