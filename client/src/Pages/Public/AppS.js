import React, { useState } from 'react'
import luffy from '../../includes/img/png/characters/luffy/luffy.png'

function App() {

  const [test,setTest]= useState()
  
  return (
    <div className="App ">
      <div className='bg-wood p-4'> 
        <div className='bg-paper-wood w-1/3  border-red-700 border-4 p-4 '>
          <img src={luffy} className='aspect-[4/8]' title='' alt='' width='100%' />
        </div>
        <div className=''> test</div>
        <div className='h-96'>test</div>
        <div className='h-96'> test</div>
      </div>
    </div>
  )
}

export default App
