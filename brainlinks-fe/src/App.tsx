import './App.css'
import { Button } from './components/ui/Button'

import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
import { Card } from './components/ui/Card'

function App() {


  return ( 
    <>
    <div className='p-3'>
      <div className='flex justify-end gap-4'>
        <Button 
          startIcon = {<PlusIcon size = "md" />} 
          endIcon={ <ShareIcon size = "md" /> } 
          size ="md" 
          variant="primary" 
          text="Add Content"
        />
        <Button
          size ="md" 
          variant="secondary" 
          text="Share"
        />
      </div>
      
      <div className='flex gap-4'>
        <Card title="video" type='youtube' link='https://youtu.be/yxDpF3XqpV4?si=VSQHcoLeVORPlsoj'  />
        <Card title="tweet" type='twitter' link='https://x.com/gunk4188/status/1892850342095708515'  />
      </div>
      
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
