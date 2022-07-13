// import logo from './logo.svg';
// import './App.css';

import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [employees, setEmployees] = useState([])

  // async
  const getEmployees = async () => {
    const {data} = await axios("https://ayohadir.id/v1/absen")
    setEmployees(data.results)
  }

  useEffect(() => {

    getEmployees()

  }, [])
  return (
    <div className="App">

      <h2>AYOHADIR</h2>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Nama Karyawan</th>
            <th>Jam Absen</th>
          </tr>
        </thead>
        <tbody>
       


    {employees.map((result, index)=>{

      return (

         

              <tr key={index}>
                <td>{result.user_id}</td>
                <td>{result.karyawan}</td>
                <td>{result.jam_absen}</td>
              </tr>
          
           
      )

    })}
     </tbody>

          </table>


        </div>

     
   
  );
}

export default App;
