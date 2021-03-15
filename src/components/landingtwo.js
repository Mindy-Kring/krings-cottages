
import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'



export default function LandingTwo() {
const data = useStaticQuery(
    graphql`
     query {
        file(relativePath: {eq: "DronePic.jpg"}) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 500) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
      }
    `
  )
  const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 2rem;
  font-family: 'Rubik'; 
`
const P1 = styled.p`
  color: black;
  font-size: calc(6px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';  
  width: 90%;
  text-align: center;
  margin: 0 auto;
`
const P2 = styled.p`
  color: black;
  font-size: calc(6px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: 2rem;
  width: 90%;
  text-align: center;
  margin: 0 auto;
`
const P3 = styled.p`
  color: black;
  font-size: calc(6px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: 2rem;
    padding-bottom: 2rem;
  width: 90%;
  text-align: center;
  margin: 0 auto;
`
 const dronePicandList = {
     display: "flex",
     flexDirection: "row", 
     justifyContent: "center",
 }

 const div1 = {
  margin: "0 auto",
  color: "black",
 }

 const div2 = {
  margin: "0 auto",
  padding: "20px",
  color: "black",
  backgroundColor: "yellow",
 }
  
 
    return (

   <section>
<TITLE>What We Offer </TITLE>
        <P1>Kring's Cottages offers fourteen well-maintained housekeeping cottages located on the sandy shores of Sand Lake. The cottages are situated on 100 acres near Plevna, Ontario. Sand Lake is a wonderful place to swim, fish, ski, or just enjoy our natural-sand beach.</P1>

<P2>Each cottage overlooks the water and includes a 14-foot fibreglass boat at your own dock. Motors are also available to rent. Sand Lake is connected to Shawenegog Lake, which gives you two great lakes to fish for bass, walleye and pike.</P2>

<P3>This third-generation business offers families and fishermen experiences and memories that are sure to
last a lifetime. </P3> 

<div style={dronePicandList}>

    <div style={div1}>
      <div>{data.file.childImageSharp.fluid}</div>
  </div>
<div style={div2}>
    <p>Things To Do</p>
</div>

  
</div>
   </section>
        
);
    }

    