import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Formulario from './pages/clase-1'

export const ROUTES = {
  HOME: {
    path: '/',
    // component: () => import('./pages/home') // lazy load
  },
  FORMULARIO: {
    path: '/formularioIngreso',
    // component: () => import('./pages/clase-1') // lazy load
  }
}


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME.path} element={<Home/>}/>
          <Route path={ROUTES.FORMULARIO.path} element={<Formulario/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
