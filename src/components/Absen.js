import axios from 'axios'
import {useState, useEffect} from 'react'

const Absen = () => {

    const [attendances, setAttendances] = useState([])

    const getAttendances = async () => {
        const {data} = await axios('https://ayohadir.id/v1/absen')
        setAttendances(data.results)
    }

    useEffect(()=>{
        
        getAttendances()

    }, [])

  return (
    <div className="absen">

        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Karyawan</th>
                    <th>Jam Masuk</th>
                </tr>
            </thead>
            <tbody>
                {attendances.map((result, index)=>{
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

   
  )
}

export default Absen