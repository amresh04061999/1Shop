
import { MantineProvider } from '@mantine/core'
import './App.css'

import Master from './core/components/Master'

function App() {
 
  return <div>
      <MantineProvider  >
      <Master/>
    </MantineProvider>
  </div>

}

export default App
