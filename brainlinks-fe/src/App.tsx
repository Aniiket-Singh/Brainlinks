import './App.css'
import { Button } from './components/ui/Button'

import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
import { Card } from './components/ui/Card'

function App() {


  return ( 
    <>
    <div>
      <Button 
        startIcon = {<PlusIcon size = "md" />} 
        endIcon={ <ShareIcon size = "md" /> } 
        size ="lg" 
        variant="primary" 
        text="Add Content"
      />
      <Button
        size ="lg" 
        variant="secondary" 
        text="Share"
      />
      
      <Card title="Feline" type='youtube' link='https://www.youtube.com/embed/V-zpTtQAlKw'  />
      
      <Button 
        size ="lg" 
        variant="secondary" 
        text="Share"
      />

    </div>

      
    </>
  )
}

export default App
