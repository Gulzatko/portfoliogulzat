import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageheaderContent from '../../components/pageHeaderContent'

const About=()=>{
  return (
   
    <section id="about" className='about'>

        <PageheaderContent
          headerText = 'About Me'
           icon = {<BsInfoCircleFill size={40}/>}
        />
    </section>
    
  )
}
export default About;

