import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import BtmNavbar from "../components/btmnavbar"



const Footer = () => {

    const infoContainerOne = {
    color: "white",
    padding: "20px 20px 0 20px",
     flex: "60%" 
}
const infoContainerTwo = {
      textAlign: "center",
    color: "white",
    padding: "20px 20px 0 20px",
    flex: "40%"  
}
const list ={
      listStyleType: "none",
  margin: "0 0 20px 0",
  padding: "0",
}
const authorContainer = {
    color: "white",
    backgroundColor: "black",
    borderBottom: "solid 1px white"
}
const author ={
   textAlign: "center"
}

return (
<div>
<div className="gridContainer1">
<div className="flex1" style={infoContainerOne}>
    <h4>About Us</h4>
    <p>Kring's cottages is a family-owned and operated business that has been in the Kring family for three generations. John and Mindy Kring have been operating the business for over 32 years. Kring's is located about 3.5 hours East of Toronto and 2 hours West of Ottawa. We look forward to meeting you.</p>
    <div className="socialMedia">
<h4>Follow Us</h4>
    <div>    
    <a 
    className="facebookIcon"
    aria-label="Link to Facebook page"
    target="_blank"
    rel= "noopener noreferrer"
    href="https://www.facebook.com/pages/category/Beach-Resort/Krings-Cottages-137291916323768/"><FontAwesomeIcon  style={{fontSize: "2rem", color: "#4267B2"}} icon={faFacebookSquare} /></a>
         </div>
    </div>  
</div>
<div className="flex2" style={infoContainerTwo}>
   <h4>
       Kring's Cottages
   </h4>
   <ul style ={list}>
       <li>
           <p>Plevna, Ontario Canada</p>
       </li>
        <li>
           <a href="tel:+1613-479-0028" style={{color: "#efedf5"}}><FontAwesomeIcon  style={{fontSize: "1.5rem"}} icon={faPhoneSquareAlt} /> 1-613-479-0028</a>
       </li>
        <li>          
        <a
          style={{ color: "#efedf5" }}
          href="mailto:krings_cottages@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon  style={{fontSize: "1.5rem"}} icon={faEnvelopeSquare} /> krings_cottages@yahoo.com
        </a>   
       </li>
   </ul> 
</div>
    </div>
      <div style={authorContainer}>
         <p style={author}>Website by <a  href="https://terryjreynolds.dev" target="_blank" rel="noopener noreferrer" 
            >Terry J.
            Reynolds </a>© {new Date().getFullYear()}
         </p>
</div>
    <BtmNavbar />
</div>
    


)


};

export default Footer;