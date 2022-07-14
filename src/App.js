
import Absen from './components/Absen';
import Karyawan  from './components/Karyawan'
import "./App.css"
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import TambahKaryawan from './components/TambahKaryawan';
import TotalAbsensi from './components/TotalAbsensi'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Karyawan/>} />
        <Route  path="/absen" element={<Absen/>} />
        <Route  path="/total-absensi" element={<TotalAbsensi/>} />
        <Route  path="/absen/add" element={<TambahKaryawan/>} />
      </Routes>
    
    </BrowserRouter>


    

  )
}

export default App;
