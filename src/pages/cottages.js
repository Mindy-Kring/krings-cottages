import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from 'styled-components'
 const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding: 1rem 0 0 1rem;
  font-family: 'Rubik'; 
`
const P = styled.p`
  color: black;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: .5rem;
text-Align: center;
`

const Cottages = () => {
 
const cottageImgContainer = {
    borderRadius: "12px",
    padding: "10px",
    boxShadow: "3px 5px 5px 3.5px grey"
}
const h2Style = {
    textAlign: "center"
}
const radiusedImg = {
    borderRadius: "12px",
    marginTop: "12px"
}
 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "3rem"
 }  
 const buttonDivStyle = {
     display: "flex",
     justifyContent: "center",
 }
 
return (

<div>
<div>
        <TITLE>Cottages</TITLE>
        <P>Click a cottage to see pics and details</P>
        
   </div>
   <section className="cottageGrid">
       <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>

<Link to="/TheElms"><StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>

       </div>
       

<div  style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
<h2 style={h2Style}>The Maples</h2>

<Link to="/TheMaples"><StaticImage src="../images/TheMaples.jpg" alt="the Maples" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>

</div>
 
 <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
     <h2 style={h2Style}>The Birches</h2>
<Link to="/TheBirches"><StaticImage src="../images/TheBirches.jpg" alt="the Birches" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
 </div>

    <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Cedarview</h2>
<Link to="/TheCedarview"><StaticImage src="../images/TheCedarview.jpg" alt="the Cedarview" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Brown</h2>
<Link to="/TheBrown"><StaticImage src="../images/TheBrown.jpg" alt="the Brown" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Sandpit</h2>
<Link to="/TheSandpit"><StaticImage src="../images/TheSandpit.jpg" alt="the Sandpit" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Hall</h2>
<Link to="/TheHall"><StaticImage src="../images/TheHall.jpg" alt="the Hall" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Tamarack</h2>
<Link to="/TheTamarack"><StaticImage src="../images/TheTamarack.jpg" alt="the Tamarack" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Fireplace</h2>
<Link to="/TheFireplace"><StaticImage src="../images/TheFireplace.jpg" alt="the Fireplace" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Lakeview</h2>
<Link to="/TheLakeview"><StaticImage src="../images/TheLakeview.jpg" alt="the Lakeview" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Pines</h2>
<Link to="/ThePines"><StaticImage src="../images/ThePines.jpg" alt="the Pines" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Shady Rest</h2>
<Link to="/TheShadyRest"><StaticImage src="../images/TheShadyRest.jpg" alt="the Shady Rest" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Old Rocky Point</h2>
<Link to="/TheOldRockyPoint"><StaticImage src="../images/TheOldRockyPoint.jpg" alt="the Old Rocky Point" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The New Rocky Point</h2>
<Link to="/TheNewRockyPoint"><StaticImage src="../images/TheNewRockyPoint.jpg" alt="the New Rocky Point" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>

          <div style={cottageImgContainer} className="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>Leo's Place</h2>
<Link to="/LeosPlace"><StaticImage src="../images/LeosPlace.jpg" alt="Leo's Place" placeholder="tracedSVG" style= {radiusedImg} width={350}/></Link>
       </div>
 

   </section>

   <div style={buttonDivStyle}>
       <Link to="/rates" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>View Rates</button></Link>
   </div>


</div>

  




)


}

export default Cottages;