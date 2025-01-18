import React from 'react';
import NavImage from "../../../assets/nav_emoji.png";
import NavLogo from "../../../assets/nav_logo.png";
import DashBoard from "../../../assets/dashboard.png";

const Hero = () => {
  return (
    <section className='sectionHero'>
        <div className='content'>
            <nav>
                <div className='tagDiv'>
                    <img className='logo' src={NavImage} alt='Nav Emoji' />
                    <p>For Freelancers, by Freelancers!</p>
                </div>
                <img src={NavLogo} alt="Nav Logo" className='navLogo' style={{cursor:"pointer"}} />
                <button className='btn btnPrimary clrWhite wgtSemiBold'>Get Started for Free</button>
            </nav>
            <div className='heroBody'>
                <div>
                    <h1 className='textTitle wgtReg' >Create, Sign, and Share<br/>Documents Seamlessly</h1>
                    <p className='textSubPara clrGray' style={{lineHeight:0,marginBottom:"1rem"}} >Smarter paperwork for freelancers!</p>
                    <button className='btn btnPrimary clrWhite textSubTitle' style={{marginTop:"auto"}} >Get Started for Free</button>
                    <p className='textSubPara clrLightGray' style={{cursor:"pointer"}} ><u>Watch a Demo</u></p>
                </div>
                <img src={DashBoard} alt='Dashboard' />
            </div>
        </div>
        <div className='arcDiv'></div>
    </section>
  )
}

export default Hero