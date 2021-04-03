import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'


const ScrollTopBtn = () => {
//setting up state for the scroll arrow
    const [showScroll, setShowScroll] = useState(false);
   console.log('useState', showScroll);

//called when component mounts
   useEffect( function setUpListener() {
console.log('instantiating event');
//on scroll sets showScroll state then conditionally styles the arrowUp
      const updateState = () => {
    console.log('im in updateState');
    console.log('state', showScroll);
    //measures distance scrolled down from top of window
    let scrollY = window.pageYOffset;
    console.log('scrollY', scrollY);
  if (!showScroll && scrollY > 400) {
     console.log('state1', showScroll);
console.log('scrollY', scrollY);
setShowScroll(true);
  }else if(showScroll && scrollY <= 400) {
     console.log('state2', showScroll);
console.log('scrollY', scrollY);
setShowScroll(false);
  }  
 };
window.addEventListener('scroll', updateState);

//cleans up the event listener when the component is unmounted
return function cleanUpListener() {
   console.log('cleaning up event');
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