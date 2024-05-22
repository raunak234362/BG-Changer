/* eslint-disable no-unused-vars */
import { useState } from 'react'

function App () {
  const [color, setColor] = useState('green')
  


  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-xl">
          <button onClick={()=>setColor('red')} className='outline-none px-5 py-3 rounded-2xl text-white shadow-lg' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')} className='outline-none px-5 py-3 rounded-2xl text-white shadow-lg' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('yellow')} className='outline-none px-5 py-3 rounded-2xl text-white shadow-lg' style={{backgroundColor:'yellow'}}>Yellow</button>
          
        </div>
      </div>
     
    </div>
  )
}

export default App
