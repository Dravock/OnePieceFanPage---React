import React, { useState } from 'react'
import luffy from '../../includes/img/png/characters/luffy/luffy.png'
import Text_with_IMG from '../../components/Text_with_IMG/Text_with_IMG'
import Hero from "../../components/Herobanner/Hero.js"

function App() {
  
  return (
    <div className="App bg-wood">
        <section className='p-0'>
            <Hero height={"300px"} imgSRC={"https://wallpapercrafter.com/th800/99564-One-Piece-Monkey-D.-Luffy-anime-anime-boys.jpg"} space={"mb-4"} text={"Monkey D. Luffy / Gear 4 - Snakeman"}/>
        </section>

        <section>
          <Text_with_IMG headline={"Test Headlin"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} pos={""} space={"mb-5"} imgSRC={""} altDesc={"Nami IMG"} />
          <Text_with_IMG headline={"Test Headlin"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} pos={"text-left"} space={"mb-5"} imgSRC={""} altDesc={"Nami IMG"} />
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
