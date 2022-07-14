import {useState, useEffect} from 'react'
import axios from 'axios'
import AvatarIcon from '../assets/images/avatar.png'

const Karyawan = () => {


  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  

  const getEmployees = async (result) => {

    setLoading(true)

    const {data} = await axios('https://ayohadir.id/v1/karyawan')
    
    // console.log(data.results)
    

    setEmployees(data.results)
    
    setLoading(false)
   
  }

  useEffect(() => {


    getEmployees()
    

  }, [])

  

  return (
    <div className="container mt-5">
      
      <div className='row justify-content-center'>
        <div className='col-md-6 col-sm-12'>
        

            <table className="table table-hover my-3">
              <thead className='bg-primary text-white'>
                <tr>
                  <th scope="col" className='text-center'>No.</th>
                  <th scope="col">ID</th>
                  <th scope="col">Karyawan</th>
                </tr>
              </thead>
              <tbody>
 
                {loading &&  <tr className='ms-3'><td>Loading..</td></tr> }
 
                {employees.map((result, index)=>{
                  
                  return (
                    
                    <tr key={index}>
                        
                        <th scope="row" className='text-center'>{index+1} . </th>
                        <td>
                          <span className='badge text-bg-info my-2 text-white item-center rounded-4 py-2'>
                            ID - 0{result.user_id}

                          </span>
                        </td>
                        
                        <td>
                          <img src={AvatarIcon} alt="avatar" className='me-3' width="35" />
                            
                            <span className='text-secondary'>{result.karyawan}</span>
                        </td>
                        </tr>
                      
                      )}

                    )}
               
              </tbody>
            </table>
        </div>
      </div>


</div>


     
   
  );
}

export default Karyawan;