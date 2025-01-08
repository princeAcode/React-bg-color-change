import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[color, setColor] = useState('olive') 

  function changeColor(color){
    setColor(color)
  }

  return (
    <div  style={{backgroundColor: color}}>
      <a href='www.google.com'>

      <h3>this is a new app</h3>
      </a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci perspiciatis quaerat fugit eaque doloremque deleniti obcaecati eveniet quod. Soluta quasi eius dolorum doloremque labore libero ea excepturi voluptas nulla?</p>
      <button 
      onClick={() => setColor('red')}
      style={{backgroundColor: 'red'}}
      >red</button>
      <button
      onClick={() => setColor('green')}
      style={{backgroundColor: 'green'}}
      >blue</button>

    
  </div>
  )
}

export default App
