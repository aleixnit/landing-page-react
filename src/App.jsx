// import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className= 'd-flex flex-row justify-content-center flex-wrap gap-5 p-5'>
        <Card titulo="Refrán" descripcion="Donde fueres haz lo que vieres" imagen="https://concepto.de/wp-content/uploads/2015/03/naturaleza-medio-ambiente-e1505407093531.jpeg" />
        <Card titulo="Po vamo" descripcion="A comeno uno patele" imagen="https://www.elagoradiario.com/wp-content/uploads/2020/09/cambio-clim%C3%A1tico-tiempo-1140x600.jpg" />
        <Card titulo="Padding" descripcion="Relleno que se crea alrededor..." imagen="https://topadventure.com/__export/1665678240120/sites/laverdad/img/2022/10/13/proteccion_naturaleza_portada_1.jpg_458425832.jpg" />
        <Card titulo="Habló el mudo" descripcion="Y dijo lo que pudo" imagen="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_52987642_Full.jpg?crop=0%2C233%2C4000%2C2200&wid=2000&hei=1100&scl=2.0" />
        <Card titulo="Refrán" descripcion="Donde fueres haz lo que vieres" imagen="https://concepto.de/wp-content/uploads/2015/03/naturaleza-medio-ambiente-e1505407093531.jpeg" />
        <Card titulo="Po vamo" descripcion="A comeno uno patele" imagen="https://www.elagoradiario.com/wp-content/uploads/2020/09/cambio-clim%C3%A1tico-tiempo-1140x600.jpg" />
        <Card titulo="Padding" descripcion="Relleno que se crea alrededor..." imagen="https://topadventure.com/__export/1665678240120/sites/laverdad/img/2022/10/13/proteccion_naturaleza_portada_1.jpg_458425832.jpg" />
        <Card titulo="Habló el mudo" descripcion="Y dijo lo que pudo" imagen="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_52987642_Full.jpg?crop=0%2C233%2C4000%2C2200&wid=2000&hei=1100&scl=2.0" />
      </div>
      <Footer className='p-3' />
    </>
  )
}

export default App
