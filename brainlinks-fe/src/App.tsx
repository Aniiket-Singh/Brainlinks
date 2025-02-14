import './App.css'
import { Button } from './components/ui/Button'
import { iconSizeVariants } from './icons'
import { PlusIcon } from './icons/Plusicon'
function App() {


  return ( 
    <>
      <Button startIcon = {<PlusIcon size = {"lg"} />} size ="sm" variant="primary" text="Share"/>
      <Button size ="md" variant="primary" text="Share"/>
      <Button size ="lg" variant="secondary" text="Share"/>
      
    </>
  )
}

export default App
