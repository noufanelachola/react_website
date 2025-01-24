import React from 'react';
import NavImage from "../../../assets/nav_emoji.png";
import NavIcon from "../../../assets/nav_icon.png";
import NavLogo from "../../../assets/nav_logo.svg";
import DashBoard from "../../../assets/dashboard.png";
import DashBoardMobile from "../../../assets/dashboard_mobile_big.svg";
// import Arc from "../../../assets/arc.png";

const Hero = () => {
  return (
    <section className='sectionHero'>
        <div className='content'>
            <nav>
                <div className='tagDiv hideMob hideTab'>
                    <img className='logo' src={NavImage} alt='Nav Emoji' />
                    <p>For Freelancers, by Freelancers!</p>
                </div>
                <img src={NavLogo} alt="Nav Logo" className='navLogo' style={{cursor:"pointer"}} />
                <button className='btn hideDesk' style={{backgroundColor:"transparent",padding:"0.25rem 0"}} ><img src={NavIcon} alt="Nav Icon" style={{cursor:"pointer"}} /></button>
                <button className='btn btnPrimary clrWhite wgtReg hideMob' >Get Started for Free</button>
            </nav>
            <div className='heroBody'>
                <div>
                    <div className='tagDiv hideDesk showTab' style={{backgroundColor:"transparent",border:"0.01rem solid black"}}>
                        <img className='logo' src={NavImage} alt='Nav Emoji' />
                        <p className='textSubPara' >For Freelancers, by Freelancers!</p>
                    </div>
                    <h1 className='textTitle wgtReg'  style={{textAlign:"center"}} >Create, Sign, and Share<br/>Documents Seamlessly</h1>
                    <p className='textSubPara clrGray' style={{marginBottom:"0.8rem"}} >Smarter paperwork for freelancers!</p>
                    <button className='btn btnPrimary clrWhite textSubPara' >Get Started for Free</button>
                    <p className='textSubPara clrLightGray' style={{cursor:"pointer"}} ><u>Watch a Demo</u></p>
                </div>
                <img src={DashBoard} alt='Dashboard' className='dashboardImg hideMob' />
                <img src={DashBoardMobile} alt='Dashboard Mobile' className='dashboardImg hideDesk hideTab' />
            </div>
        </div>
        {/* <img src={Arc} alt='Arc' /> */}
    </section>
  )
}

export default Hero