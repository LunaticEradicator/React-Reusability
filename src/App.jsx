import './App.css'

// import Link from './component/Link'
import Sidebar from './component/Sidebar'
import Route from './component/Route'

import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

function App() {

  return (
    <div className='app'>
      <Sidebar></Sidebar>

      <div className='pageContent'>
        {/*  used to render site when state changes */}
        <Route path="/"><DropdownPage /></Route>
        <Route path="/accordion"><AccordionPage /></Route>
        <Route path="/button"><ButtonPage /></Route>
      </div>
    </div>
  )
}

export default App
