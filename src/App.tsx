

import { Ban } from 'lucide-react'
import './App.css'
import Alert from './components/ui/Alert/Alert'

function App() {


  return (
    <>
      <div style={{ margin: "2rem" }} >

        <Alert

          type={'alert-error'}
          icon={<Ban size={20} />}
          title={'Something Went Wrong'}
          description={'If You are working with a normal static file server'}

        />
      </div>




    </>
  )
}

export default App
