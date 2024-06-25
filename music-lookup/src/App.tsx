import './App.css'
import { Application } from './components/Application';

import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


console.clear();



function App() {



  return (
    <>
      <ReactNotifications />
      <div className="app-container">
        <Application/>
      </div>
    </>


    

  )
}

export default App
