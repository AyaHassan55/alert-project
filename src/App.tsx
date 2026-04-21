

import { Ban, CheckCheck, Info, TriangleAlert } from 'lucide-react'
import './App.css'
import Alert from './components/ui/Alert/Alert'

function App() {


  return (
    <>
      <div style={{ margin: "2rem" }} >

        <Alert

          type={'alert-default'}
          icon={<Ban size={20} />}
          title={'Upgrade Your Plan'}
          description=''
      
        >
          <p>
            Lorem ipsum dolor sit <a>amet consectetur </a>adipisicing elit. Molestias iusto corporis ab at itaque cum harum sint error? Quo ipsam, iure id expedita voluptatum repellendus a non laboriosam rem nam!
          </p>
        </Alert>
         <Alert

          type={'alert-info'}
          icon={<Info size={20} />}
          title={'Note'}
          description=''
      
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto corporis ab at itaque cum harum sint error? Quo ipsam, iure id expedita <a>voluptatum repellendus</a> a non laboriosam rem nam!
          </p>
        </Alert>

         <Alert

          type={'alert-sucess'}
          icon={<CheckCheck size={20} />}
          title={'Your Order has been processed'}
          description=''
      
        >
          <p>
            Lorem <a>ipsum dolor sit</a> amet consectetur adipisicing elit. Molestias iusto corporis ab at itaque cum harum sint error? Quo ipsam, iure id expedita voluptatum repellendus a non laboriosam rem nam!
          </p>
        </Alert>

         <Alert

          type={'alert-error'}
          icon={<Ban size={20} />}
          title={'Something Went Wrong'}
          description=''
      
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto corporis ab at itaque cum harum sint error? Quo ipsam, iure id expedita voluptatum repellendus a non laboriosam rem nam!
          </p>
        </Alert>
         <Alert

          type={'alert-warning'}
          icon={<TriangleAlert  size={20} />}
          title={'Tips & Tricks'}
          description=''
      
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto corporis ab at itaque cum harum sint error? Quo ipsam, iure id expedita voluptatum repellendus a non laboriosam rem nam!
          </p>
        </Alert>
      </div>




    </>
  )
}

export default App
