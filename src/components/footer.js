import React from 'react'
import { Nav } from 'react-bootstrap';
import BtmNavbar from "../components/btmnavbar"

const gridContainer = {
    display: "inline-grid",
    gridTemplateRows: "auto auto",
  gridTemplateColumns: "auto auto auto",
    padding: "10px",
    backgroundColor: "black"
}
const infoContainerOne = {
    color: "white",
    padding: "20px"   
}
const infoContainerTwo = {
    color: "white",
    padding: "20px"
}
const infoContainerThree = {
    display: "flex",
    alignItems: "flex-end",
    color: "white",
    padding: "20px"
}
const Footer = () => {

return (
<div>
<div style={gridContainer}>
<div style={infoContainerOne}>
    <h4>About Us</h4>
    <p>Kring's cottages is a family-owned and operated business that has been in the Kring family for three generations. John and Mindy Kring have been operating the business for over 32 years. Kring's is located about 3.5 hours East of Toronto and 2 hours West of Ottawa. We look forward to meeting you.</p>
    <h4>Follow Us on Facebook</h4>
</div>
<div style={infoContainerTwo}>
   <h4>
       Kring's Cottages
   </h4>
   <ul>
       <li>
           <a>Plevna, Ontario Canada</a>
       </li>
        <li>
           <a href="tel:+1613-479-0028" style={{color: "#efedf5"}}>1-613-479-0028</a>
       </li>
        <li>
           
        <a
          style={{ color: "#efedf5" }}
          href="mailto:kringscottages@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kringscottages@yahoo.com
        </a>
      
       </li>
   </ul>
</div>
<div style={infoContainerThree}>
   <p>Website by <a style={{color: "#efedf5"}} href="https://terryjreynolds.dev" target="_blank" rel="noopener noreferrer" 
            >Terry J.
            Reynolds </a>© {new Date().getFullYear()}
         </p>
    <p> Built with <a style={{color: "#efedf5", display: "inline-block"}} href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby
           </a></p>
</div>


    </div>
    <BtmNavbar />
</div>
    


)


};

export default Footer;