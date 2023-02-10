import React from "react"

 const CottageDetailsTwoBedroom = () => {

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
}
    return (
   <div >
     <div style={detailsWrapper}>
<h1 style={title}>Cottage Details</h1>
   <p style={P1}> Our housekeeping cottages come with many modern amenities</p>
<div className="cottageDetailsContainer">

<div style={List}>
     <h3 style={h3Style}>Included with each Cottage</h3>
     <ul>
       <li>1 queen and 2 twin beds</li>
       <li>Gas or electric stove</li>
       <li>Toaster and coffeemaker</li>
       <li>Microwave</li>
       <li>Dishes, cutlery and pots and pans</li>
       <li>Full-size refrigerator</li>
       <li>Hot and cold water</li>
       <li>Coin-operated shower</li>
     </ul>
</div> 
     <div style={Para}>
         <h3 style={h3Style}>More Cottage Features</h3>
         <p style= {P2}> 
Each cottage has a dining/living area with a wood stove for heat and an enclosed front porch with a perfect view of the lake. All cottages are located on the water with a dock. A 14-foot fibreglass boat, your own campfire ring (all firewood is supplied), four Adirondack chairs and a picnic table are included with your rental. Gas is available for purchase on-site. No pets permitted.</p>
     </div>
   </div>  

     </div>
   
</div>
        
);
    }

export default CottageDetailsTwoBedroom;