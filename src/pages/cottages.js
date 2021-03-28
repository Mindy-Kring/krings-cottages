import React from "react"
import NavHeader from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer";
import styled from 'styled-components'


const Cottages = () => {
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
  boxShadow: "2px 2px white",
  margin: "2rem 0 2rem 0",
 } 
 const buttonDivStyle = {
     display: "flex",
     justifyContent: "center",
 }
 
return (

<div>
<NavHeader />
  <div>
        <TITLE>Cottages</TITLE>
        <P>Click a cottage to see pics and details</P>
        
   </div>
   <section class="cottageGrid">
       <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>
       

<div class="cottageImgContainer" style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
<h2 style={h2Style}>The Maples</h2>
<StaticImage src="../images/TheMaples.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
</div>
 
 <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
     <h2 style={h2Style}>The Birches</h2>
<StaticImage src="../images/TheBirches.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
 </div>

    <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>

          <div style={cottageImgContainer} class="cottageImgContainer1" data-sal="zoom-in" data-sal-easing="ease" data-sal-duration="800">
           <h2 style={h2Style}>The Elms</h2>
<StaticImage src="../images/TheElms.jpg" alt="the firepit" placeholder="tracedSVG" style= {radiusedImg} width={350}/>
       </div>
 

   </section>

   <div style={buttonDivStyle}>
       <button type="button" class="btn" style={buttonStyle}>View Rates</button>
   </div>
<Footer />
</div>


)


}

export default Cottages;