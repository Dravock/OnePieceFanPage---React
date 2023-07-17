import React, { useState } from 'react'
import luffy from '../../includes/img/png/characters/luffy/luffy.png'

function App() {

  return (
    <div className="App bg-wood p-4">
        <section>
          <div className='bg-paper-wood w-1/3  border-red-700 border-4 p-4 '>
            <img src={luffy} className='aspect-[4/8]' title='' alt='' width='100%' />
          </div>
        </section>

        <section>
          <div className='h-96'>test</div>
        </section>
        
        <section>
          <div className=''> test</div>
        </section>

        <section>
          <div className='h-96'> test</div>
        </section>
    </div>
  )
}

export default App
