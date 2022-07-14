import {useState, useEffect} from 'react'
import axios from 'axios'

const TambahKaryawan = () => {
  const [data, setData] = useState([])

  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')

  useEffect(()=>{
    axios.get('https://ayohadir.id/v1/input_absen').then(res => {
        console.log("Getting from :::", res.data)
        setData(res.data)
    }).catch(err => console.log(err))
  },[])

  const postData =(e) => {
    e.preventDefault();
  }
    return (
    <form>
        <label>ID Karyawan</label>
        <input type="text" value={user_id} onChange={(e) => setUserId()}/>
        <label>Nama Karyawan</label>
    </form>
  )
}

export default TambahKaryawan