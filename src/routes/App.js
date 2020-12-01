import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home' 
import LsmComponents from '../pages/LsmComponents'
// import Buscar from '../pages/templates/Buscar'
// import Cuenta from '../pages/templates/Cuenta'
// import AccesosRapidos from '../pages/templates/AccesosRapidos'
// import Salir from '../pages/templates/Salir'
// import Inicio from '../pages/templates/Inicio'
// import Usuarios from '../pages/templates/Usuarios'
// import Atributos from '../pages/templates/Atributos'
// import Inmuebles from '../pages/templates/Inmuebles'
// import Propietarios from '../pages/templates/Propietarios'
// import Correos from '../pages/templates/Correos'
// import Administracion from '../pages/templates/Administracion'
// import Notificaciones from '../pages/templates/Notificaciones'

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lsm-components" component={LsmComponents} />
        {/* <Route exact path="/lsm-components/notificaciones" component={Notificaciones} />
        <Route exact path="/lsm-components/buscar" component={Buscar} />
        <Route exact path="/lsm-components/cuenta" component={Cuenta} />
        <Route exact path="/lsm-components/accesos-rapidos" component={AccesosRapidos} />
        <Route exact path="/lsm-components/salir" component={Salir} />
        <Route exact path="/lsm-components/inicio" component={Inicio} />
        <Route exact path="/lsm-components/usuarios" component={Usuarios} />
        <Route exact path="/lsm-components/atributos" component={Atributos} />
        <Route exact path="/lsm-components/inmuebles" component={Inmuebles} />
        <Route exact path="/lsm-components/propietarios" component={Propietarios} />
        <Route exact path="/lsm-components/correos" component={Correos} />
        <Route exact path="/lsm-components/administracion" component={Administracion} /> */}
      </Switch>
    </BrowserRouter>
)

export default App