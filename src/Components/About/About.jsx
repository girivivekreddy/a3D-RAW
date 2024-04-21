import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT a3D</h3>
            <h2>All 3D Assets One Place</h2>
            <p>a3D - All 3D Assets One Place revolutionizes 3D asset accessibility. Offering a wide
                 range of top-tier assets from 1K to 8K resolution, our platform simplifies
                  the creative process. Our Blender addon streamlines workflow with automatic
                   geometry node setup, enhancing efficiency for artists.</p>
            <p>Affordability is our ethos. By keeping free of cost upto 2k resolution, we empower every artist to access
                 premium assets. Additionally, we offer a unique opportunity for creators to monetize
                  their models by submitting them to our platform. Collaboration
                   thrives as artists contribute and earn.</p>
            <p>At a3D, quality and inclusivity converge. Our commitment to excellence extends
                 to both our products and our community. With seamless integration
                  and unparalleled support, we&apos;re the cornerstone of 3D creativity, ensuring
                   every artist finds success in their endeavors.</p>
        </div>
    </div>
  )
}

export default About