import {useState, useEffect} from 'react'
import axios from 'axios'

const TambahKaryawan = () => {
  

  const [selectOption, setSelectOption] = useState('')
  const [userId, setUserId] = useState('')
  const [karyawan, setKaryawan] = useState('')
  const [jamAbsen, setJamAbsen] = useState('')
  const [employees, setEmployees] = useState([])
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);

  const getEmployees = async () => {

 
  const {data} = await axios('https://ayohadir.id/v1/karyawan')
  // console.log(data.results)
  setEmployees(data.results)

 
}



useEffect(() => {

    
  getEmployees()

}, [])


  const handleChange =(e) =>{
    setSelectOption(e.target.value)
  }

  

  const handleSubmit = () => {

    setIsError(false)
    const data = {
      user_id: userId,
        karyawan: karyawan,
        jam_absen: new Date()
    }
    axios.post('https://ayohadir.id/v1/input_absen', data).then(res => {
      setData(res.data)
      setUserId('')
      setKaryawan('')
      setJamAbsen('')

      setLoading(false)
      
    }).catch(err => {
      setLoading(false)
      setIsError(true)
    })
  
  }

    return (
        <>

       
        <button type="button" className="btn btn-warning text-white text-lg fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
            + Absen Karywan
        </button>

       
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Absen Karyawan</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">

              <label className='mb-3'>Karyawan</label>

           

                <select className="form-select" value={userId} onChange={e => setUserId(e.target.value)}>
                
                {employees.map((result, index)=>{

                    return (<option key={index} value={result.user_id}>0{result.user_id} - {result.karyawan}</option>)
                  
                  })}
                  
                </select>

              </div>
              {isError && <small className='mt-3 d-inline-block text-danger'>Error</small>}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={handleSubmit} disabled={loading} className="btn btn-primary">
                  {loading ? 'loading...' : 'Submit'}</button>

                  {data && <div className='mt-3'>
                    <strong>Output:</strong>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    
                    </div>}
            </div>
            </form>
            </div>
        </div>
        </div>

    </>
  )
}

export default TambahKaryawan