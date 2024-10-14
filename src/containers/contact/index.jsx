import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageheaderContent from '../../components/pageHeaderContent';

const Contact=()=>{
  return (
    <section id="contact" className='contact'>
      <PageheaderContent
         headerText = 'My Contact'
         icon = {<BsInfoCircleFill size={40}/>}
        />
     </section>
    
  )
}
export default Contact;