import React from 'react';
import Logo1 from '../../../assets/backup_logo/logo_1.png'
import Logo2 from '../../../assets/backup_logo/logo_2.png'
import Logo3 from '../../../assets/backup_logo/logo_3.png'

const BackedBy = () => {
  return (
    <section className='sectionBackedBy'>
        <div className='content'>
            <p className='wgtReg clrLightGray' style={{textAlign:"center"}}>Recognised and BackedBy</p>
            <div className='logoDiv'>
                <img src={Logo1} alt="logo 1"/>
                <img src={Logo2} alt="logo 2"/>
                <img src={Logo3} alt="logo 3"/>
            </div>
        </div>
    </section>
  ) 
}

export default BackedBy