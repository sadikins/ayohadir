
import Absen from './components/Absen';
import Karyawan  from './components/Karyawan'
import "./App.css"
import Navigation from './components/Navigation';
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Navigation/>
    <div className="container h-100">

      {/* <Logo/> */}
      {/* <Karyawan/> */}
      <Absen/>

    </div>
    <Footer/>
    </div>

  )
}

export default App;
