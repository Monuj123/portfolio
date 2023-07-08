import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <button className='insta'><InstagramIcon /></button>
                <button className='twitter'><TwitterIcon /></button>
                <button className='fb'><FacebookIcon /></button>
                <button className='link'><LinkedInIcon /></button>

            </div>



            <p>&copy;2023 gotech.com</p>
        </div>
    )
}

export default Footer

