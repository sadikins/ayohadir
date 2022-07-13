import axios from 'axios'
import {useState, useEffect} from 'react'

export const Karyawan = () => {


const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const {data} = await axios("https://ayohadir.id/v1/karyawan")
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
              </tr>
          
           
      )

    })}
     </tbody>

          </table>


        </div>

     
   
  );
}
