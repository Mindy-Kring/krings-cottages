
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
    paddingTop: "2rem",
  width: "90%",
  textAlign: "center",
  margin: "0 auto"
};
  
const P3 = {
color: "black",
  fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
    fontFamily: 'Rubik',
    paddingTop: "2rem",
    paddingBottom: "2rem",
  width: "90%",
  textAlign: "center",
  margin: "0 auto"
};
const h3Style = {
   color: "#52bc77",
   textAlign: "center",
   marginTop: "20px"
};
const List = {
  color: "black",
  fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
  fontFamily: 'Rubik',
};

const container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap"
};
  
 const LandingTwo = () => {

    return (

   <div >
   <h1 style={title}>What We Offer</h1>
   <p style={P1}> Kring's Cottages offers fourteen well-maintained housekeeping cottages located on the sandy shores of Sand Lake. The cottages are situated on 100 acres near Plevna, Ontario. Sand Lake is a wonderful place to swim, fish, ski, or just enjoy our natural-sand beach.</p>
    <p style= {P2}> 
Each cottage overlooks the water and includes a 14-foot fibreglass boat at your own dock. Motors are also available to rent. Sand Lake is connected to Shawenegog Lake, which gives you two great lakes to fish for bass, walleye and pike.</p>
     <p style= {P3}> 
This third-generation business offers families and fishermen experiences and memories that are sure to
last a lifetime.</p>
<container style={container}>

   <StaticImage src="../images/DroneImg.jpg" alt="Drone view of the beach" placeholder="tracedSVG" width= "600px" />
   
   
<div style={List}>
     <h3 style={h3Style}>Things to Do</h3>
     <ol>
       <li>Fish all day</li>
       <li>Rest on the beach</li>
       <li>Take in beautiful sunsets</li>
       <li>Spend time with friends and family</li>
       <li>Sleep in</li>
       <li>Sit by the campfire</li>
       <li>Eat, drink and be merry</li>
     </ol>
</div> 
   </container>  
</div>
        
);
    }

export default LandingTwo;
    