import './App.css'
import { Button } from './components/ui/Button'

import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
import { Card } from './components/ui/Card'
import { CreateContentModal } from './components/ui/ContentModal'

import { useState } from 'react'
import { Sidebar } from './components/ui/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return ( 
    <>
      <Sidebar/>
      <div className='p-3 ml-72 min-h-screen bg-gray-100'>
        <CreateContentModal open = {modalOpen} onClose={() => { setModalOpen(false)}}/>

        <div className='flex justify-end gap-4'>
          <Button
            onClick={() => setModalOpen(true)} 
            startIcon = {<PlusIcon size = "md" />}  
            size ="md" 
            variant="primary" 
            text="Add Content"
          />
          
          <Button
            startIcon={ <ShareIcon size = "md" /> }
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
