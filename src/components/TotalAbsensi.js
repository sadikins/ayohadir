import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TambahKaryawan from './TambahKaryawan';

 
export default function TotalAbsensi() {

    let [attendances, setAttendances] = useState([]);

    useEffect(() => {
        const getAbsen = () => {
        axios
        .get("https://ayohadir.id/v1/absen")
        .then(response => setAttendances(response.data.results));
        }    
        getAbsen();
    }, [])
 
    const getAttendances = [...new Map(attendances.map(item =>
        [item["karyawan"], item]
    )).values()];
 
    function totalAttendances(karyawan) {
        let keyCount = 0;
        for ( var i = 0; i < attendances.length; ++i ) {
            if (attendances[i]["karyawan"] === karyawan) {
                keyCount+=1;
            }
        }
        return keyCount;
    };
    return (
      <div className='absen'>
        <TambahKaryawan/>
        <h1>Data Kehadiran Karyawan</h1>
        <p>Total Kehadiran : {getAttendances.length} Orang</p>

        <div className='card mt-3'>

        
        <table className='table table-hover'>
            <thead className='bg-primary text-white'>
            <tr>
                <th className='text-center'>No</th>
                <th className='d-none d-sm-block'>Karyawan</th>
                <th>Jumlah Kehadiran</th>
            </tr>
            </thead>
            <tbody>
            {
                getAttendances.map((data, key) => {
                let no = 1 + key;
                return (
                    <tr key={data.user_id}>
                        <td ccope="row" className='text-center'>{no}</td>
                        <td>{data.karyawan}</td>
                        <td className=''>
                            {
                                totalAttendances(data.karyawan)
                            }
                        </td>
                    </tr>
                )
 
                })
            }
            </tbody>
        </table>
        </div>
    </div>
  )
}
 