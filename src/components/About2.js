import React from 'react'
import myPic from './elements/myPic.png'

function About2() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"><b>OUR TEAM</b></h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We listen, we advise and develop . We care about quality, craft and disciplined experimentation. We love to learn and use the latest technology.</p>

        <div className='divmypic'>
          <img className='mypic' src={myPic} alt="mypic"/>
        </div>
        <div class="text-xl font-sans font-bold">
        <p>Amit Kumar Aich</p>
        </div>
        <p>Amit Kumar Aich is a FullStack Developer Currently pursuing his Btech Computer Science & Engineering from Lovely Professional Unversity </p>
        <p>The Skills associated with him are HTML, Css, Javascript, ReactJs, API integration.</p>
        </div>
      </div>
    </section>
  )
}
export default About2