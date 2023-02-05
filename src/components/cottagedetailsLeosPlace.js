import React from "react"
import { Link } from 'gatsby'

 const CottageDetailsLeosPlace = () => {

const title = {
color: "#52bc77",
textAlign: "center",
paddingBottom: "1rem",
paddingTop: "2rem",
fontFamily: 'Rubik' 
 };
const P1 = {
color: "black",
fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
fontFamily: 'Rubik',    
width: "90%",  
textAlign: "center",  
margin: "0 auto"    
};
const P2 = {
color: "black",
fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
fontFamily: 'Rubik',
textAlign: "center",
margin: "0 auto"
};
const P3 = {
color: "black",
fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))",  
fontFamily: 'Rubik',
textAlign: "center",
margin: "0 auto"
};
const h3Style = {
color: "#52bc77",
textAlign: "center",
marginTop: "20px",
};
const List = {
color: "black",
fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
fontFamily: 'Rubik'
};
const Para = {
color: "black",
fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
fontFamily: 'Rubik'
};
const detailsWrapper= {
width: "90%",
margin: "0 auto"
};
    return (
   <div>
     <div style={detailsWrapper}>
<h1 style={title}>Cottage Details</h1>
   <p style={P1}> Our housekeeping cottages come with many modern amenities</p>
<div className="cottageDetailsContainer">

<div style={List}>
     <h3 style={h3Style}>Included with each Cottage</h3>
     <ul>
        <li>2 bedrooms, 1 queen bed, 1 king bed</li>
        <li>3-piece bathroom</li>
        <li>A/C, Propane Heat</li>
        <li>Screened Porch</li>
        <li>Electric stove</li>
        <li>Dishwasher</li>
        <li>Napolean Propane BBQ</li>
        <li>Washer and Dryer</li>
        <li>Dishes, cutlery and pots and pans</li>
        <li>Microwave, toaster</li>
        <li>Full-size refrigerator</li>
        <li>Built in 2013</li>
        <li>No pets</li>
     </ul>
</div> 
     <div style={Para}>
         <h3 style={h3Style}>More Cottage Features</h3>
         <p style= {P2}> 
This gorgeous, one-of-a-kind, lake-front cottage comes with a dock and 14-ft fibreglass boat, a screened porch and many modern amenities. With air conditioning, laundry and dishwasher, you'll experience all the comforts of home while relaxing at the lake. You'll also enjoy your own campfire ring all firewood is supplied, four Adirondack chairs and a picnic table. Gas is available for purchase on-site. 
No pets permitted.</p>

     </div>
   </div>  

     </div>
   
   
</div>
        
);
    }

export default CottageDetailsLeosPlace;