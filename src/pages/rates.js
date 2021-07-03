import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

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
const ratesBannerStyle = {
    width: "100%",
   borderRadius: "12px", 
   border: "ridge black 2px", 
  
 } 

 const bannerContainerStyle = {
     margin: "0 auto",
     width: "85%",
 }

 const Para = {
  color: "black",
  fontSize: "calc(12px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
  fontFamily: 'Rubik'
};

const h3Style = {
   color: "#52bc77",
   textAlign: "center",
   marginTop: "20px",
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
  fontSize: "calc(8px + (18 - 6) * ((100vw - 200px) / (1600 - 300)))", 
    fontFamily: 'Rubik',
  textAlign: "center",
  margin: "0 auto",
  padding: "10px"
};

const Rates = ({data}) => {
 const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
    return (

<div>


<div>
    <TITLE>{new Date().getFullYear()} Cottage and Boat Rental {frontmatter.title}</TITLE>
    <div style={bannerContainerStyle}>
<StaticImage src="../../src/images/RatesBanner.jpg" placeholder="blurred" alt="Dawn view of the dock with boats" style={ratesBannerStyle} />

    </div>
  
        <P>Our current pricing for cottages and boat/motor rentals </P>

<section>
    <div>
    <div
    className="ratesGrid"
          dangerouslySetInnerHTML={{ __html: html }}
        />
</div>

</section>

<section className="cottageDetailsContainer">
<div style={Para}>
         <h3 style={h3Style}>Cottage Rental Agreement and Payment Details</h3>
          <p style= {P2}> 
<b>Check In:</b> 12:00 P.M.</p>
<p style= {P2}> 
<b>Check Out:</b> 10:00 A.M.</p>
         <p style= {P3}> 
<b>Deposits:</b> A deposit of $300.00 is required per cottage. We accept cash, e-transfer, money orders and personal cheques. Sorry, we do not accept credit or debit cards. Please make cheques payable to "Kring Lumber". Deposits will be credited to your account balance.</p>
     </div>


<div style={Para}>
         <h3 style={h3Style}>Boat/Motor Rental Agreement Details</h3>
         <p style= {P3}> 
<b>Gas and oil are not included in prices.</b> Weekly rates run from Saturday to Saturday. One boat is provided with each cottage rental. <b>We do NOT supply life jackets.</b> The appropriate number and sizes of personal flotation devices or life jackets must be in the boat for the number of people aboard. They must fit and should be worn. The operator of the personal pleasure craft is subject to ticketing and a fine if personal flotation devices and life jackets are not present.</p>
     </div>




</section>

</div>




</div>


    );




}
export default Rates;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Rates"}}) {
    html
    frontmatter {
      title
    }
  }
}
`
