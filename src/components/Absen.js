import {useState, useEffect} from 'react'
import axios from 'axios'
import AvatarIcon from '../assets/images/avatar.png'
import Momen from '../components/Momen'

const Absen = () => {


  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  // const [employeesPerPage, setEmployeesPerPage] = useState(10)

  const getEmployees = async () => {

    setLoading(true)
   
    const {data} = await axios('https://ayohadir.id/v1/absen')
    // console.log(data.results)
    setEmployees(data.results)

    setLoading(false)
   
  }

  useEffect(() => {

    
    getEmployees()

  }, [])



  return (
    <div className="Absen my-5">

       
        
        <div className='row justify-content-center'>
            <div className='col-md-6 col-sm-12'>

                <div className='card mt-3 rounded-0'>
                <table className="table table-hover">
                    <thead className='bg-primary text-white'>
                    <tr>
                        <th className='text-center'>No.</th>
                        <th className='d-none d-sm-block'>ID</th>
                        <th >Karyawan</th>
                        <th >Tanggal</th>
                        <th >Jam</th>
                    </tr>
                    </thead>
                    <tbody>

                        {loading &&  <tr className='ms-3'><td>Loading..</td></tr> }

                        {employees.map((result, index)=>{

                        return (
                                <tr key={index}>
                                <th scope="row" className='text-center'>{index+1}</th>
                                <td className='d-none d-sm-block'>
                                <span className='badge text-bg-success text-white rounded-4 py-2'>
                                    ID - 0{result.user_id}
                                    </span>
                                </td>
                                
                                <td>
                                    {/* <img src={AvatarIcon} alt="avatar" className='me-3 d-none d-sm-none d-md-block' width="35" /> */}
                                    <span className='text-secondary'>{result.karyawan}</span>
                                </td>
                                <td>
                                    <Momen format="DD MMMM YYYY">{result.jam_absen}</Momen>
                                </td>
                                <td>
                                    <Momen format="HH:MM">{result.jam_absen}</Momen>
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

export default Absen;