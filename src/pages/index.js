import * as React from "react";
import NavHeader from "../components/navbar";
import StyledBackgroundSection from "../components/landing";
import LandingTwo from "../components/landingtwo";
import StyledLandingThree from "../components/landingthree";
import 'bootstrap/dist/css/bootstrap.min.css';



 
// markup
const IndexPage = ({data}) => {
  
  return (
    <main>
      <title>Home Page</title>
      <NavHeader />
      <StyledBackgroundSection />  
      <LandingTwo />  
      <StyledLandingThree />
    </main>
  )
}

  
export default IndexPage
