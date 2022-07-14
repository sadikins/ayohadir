import {useState, useEffect} from 'react'
import axios from 'axios'
import AvatarIcon from '../assets/images/avatar.png'

const Karyawan = () => {


  // const [loading, setLoading] = useState(false)
  const [employees, setEmployees] = useState([])
  // const [employeesPerPage, setEmployeesPerPage] = useState(10)

  const getEmployees = async () => {
   
    const {data} = await axios('https://ayohadir.id/v1/karyawan')
    setEmployees(data.results)
   
  }

  useEffect(() => {

    // setLoading(true)
    getEmployees()
    // setLoading(false)

  }, [])

  return (
    <div className="Karyawan">

      
      <div className='row justify-content-center'>
        <div className='col-md-6 col-sm-12'>
        
          <div class="d-grid">
            <button className='btn btn-warning text-white fw-bold btn-lg btn-block'>Tambah Karyawan</button>
          </div>
          
      <div className='card mt-3 rounded-0'>
      <table className="table table-hover">
        <thead className='bg-primary text-white'>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">ID</th>
            <th scope="col">Karyawan</th>
          </tr>
        </thead>
        <tbody>
       


    {employees.map((result, index)=>{

      return (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                  00{result.user_id}
                </td>
               
                <td>
                  <img src={AvatarIcon} alt="avatar" className='me-3' width="35" />
                    
                   {result.karyawan}
                </td>
                
              </tr>
      )

    })}
     </tbody>
    </table>
    </div>
    </div>
    </div>


        </div>


     
   
  );
}

export default Karyawan;