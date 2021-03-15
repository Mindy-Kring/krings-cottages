import * as React from "react";
import NavHeader from "../components/navbar";
import StyledBackgroundSection from "../components/landing";
import LandingTwo from "../components/landingTwo";
import 'bootstrap/dist/css/bootstrap.min.css';


 
// markup
const IndexPage = ({data}) => {
  
  return (
    <main>
      <title>Home Page</title>
      <NavHeader />
      <StyledBackgroundSection />  
      <LandingTwo />  
    </main>
  )
}

  
export default IndexPage
