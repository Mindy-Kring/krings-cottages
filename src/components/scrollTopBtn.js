import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'


const ScrollTopBtn = () => {
//setting up state for the scroll arrow
    const [showScroll, setShowScroll] = useState(false);

//called when component mounts
   useEffect( function setUpListener() {
//on scroll sets showScroll state then conditionally styles the arrowUp
      const updateState = () => {
    //measures distance scrolled down from top of window
    let scrollY = window.pageYOffset;
   
  if (!showScroll && scrollY > 400) {
setShowScroll(true);
  }else if(showScroll && scrollY <= 400) {
setShowScroll(false);
  }  
 };
window.addEventListener('scroll', updateState);

//cleans up the event listener when the component is unmounted
return function cleanUpListener() {
   window.removeEventListener('scroll', updateState);
}
 });
 
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
 
 return (

<div>
    
<div id="scrollTopBtn" onClick={scrollTop} onKeyDown={scrollTop} role="link" aria-label="Scroll" tabIndex={0} style={showScroll === true ? {display: "block"} : {display: "none"}} ><FontAwesomeIcon  id="arrowUp" icon={faArrowCircleUp } /></div>
  
</div>
 );




}
export default ScrollTopBtn;