import './App.css'
import { Button } from './components/ui/Button'

import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
function App() {


  return ( 
    <>
    <div>
      <Button startIcon = {<PlusIcon size = "md" />} endIcon={ <ShareIcon size = "md" /> } size ="lg" variant="primary" text="Add Content"/>
      <Button size ="lg" variant="secondary" text="Share"/>
    </div>

      
    </>
  )
}

export default App
