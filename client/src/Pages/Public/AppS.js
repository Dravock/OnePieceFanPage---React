import React, { useState } from 'react'
import luffy from '../../includes/img/png/characters/luffy/luffy.png'
import Text_with_IMG from '../../components/Text_with_IMG/Text_with_IMG'

function App() {
  
  return (
    <div className="App bg-wood p-4">
        <section>
          <main>
            <div className='bg-paper-wood w-1/3  border-red-700 border-4 p-4 '>
              <img src={luffy} className='aspect-[4/8]' title='' alt='' width='100%' />
            </div>
          </main>
        </section>

        <section>
          <Text_with_IMG headline={"Test Headlin"} text={"Lorem Ipsum"} pos={""} space={"mb-5"} imgSRC={""} altDesc={"Nami IMG"} />
        </section>
        
        <section>
          <main>
            <div className=''> test</div>
          </main>
        </section>

        <section>
          <main>
            <div className='h-96'> test</div>
          </main>
        </section>
    </div>
  )
}

export default App
