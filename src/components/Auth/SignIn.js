import React from 'react'
import NavImage from "../../assets/nav_emoji.png";
import ArrowLeft from "../../assets/arrow-left.svg";

// let a = true;

// const SignInA = () => {
//     return(
//         <div> AM A</div>
//     )
// }

const SignIn = () => {
  return (
    <section className='signInSection'>
        <div className='content'>
            <div>
                <div style={{border:"0.01rem grey solid",borderRadius:"5rem",padding:"0.5rem"}} >
                    <img src={ArrowLeft} alt="Left Arrow" />
                </div>
                <div className='tagDiv'>
                    <img className='logo' src={NavImage} alt='Nav Emoji' />
                    <p>For Freelancers, by Freelancers!</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default SignIn