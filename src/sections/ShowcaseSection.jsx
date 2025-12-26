import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  
  useGSAP(()=>{
    const project = [project1Ref.current, project2Ref.current,project3Ref.current];
    project.forEach((card,index)=>{
     gsap.fromTo(
      card,
      {
        y:50 , opacity:0
      },
      {
        y:0,
        opacity:1,
        duration:1,
        delay:0.3 * (index + 1),
        scrollTrigger:{
          trigger:card,
          start: 'top bottom-=100'
        }
      }
     )
    })
    
      gsap.fromTo(sectionRef.current,
      { opacity:0},
      {opacity:1,duration:1.5})
   },[])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
     <div className='w-full '>
      <div className='showcaselayout'>
        <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
               <img src="/images/project1.png" alt="Project1" />     
            </div>
           <div className='text-content'>
  <h2>
    Discover Top-Quality Products at Unbeatable Prices
  </h2>
  <p className='text-white-50 md:text-xl'>
    Explore our curated collection of electronics, fashion, home essentials and more — all selected to bring you the best value and style. Shop now and enjoy fast delivery, secure checkout, and excellent customer service!
  </p>
</div>

        </div>
        <div className='project-list-wrapper overflow-hidden' >
          <div className="project" ref={project2Ref}>
            <div className='image-wrapper bg-[#ffefdb]'>
              <img src="/images/project2.png" alt="Library Management Platform" />
            </div>
            <h2>Employee Management System</h2>
          </div>
           <div className="project" ref={project3Ref}>
            <div className='image-wrapper bg-[#ffe7db]'>
              <img src="/images/project3.png" alt="YC Directory" />
            </div>
            <h2>AI Image Enhancer </h2>
          </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default ShowcaseSection