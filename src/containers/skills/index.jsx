import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageheaderContent from '../../components/pageHeaderContent';

const Skills=()=>{
  return (
    <section id="skills" className='skills'>

      <PageheaderContent
      headerText = 'My Skills'
       icon = {<BsInfoCircleFill size={40}/>}
    />
</section>
    
  )
}
export default Skills;