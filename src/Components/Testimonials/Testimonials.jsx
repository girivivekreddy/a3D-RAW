import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {


    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                        <h3>Alexei</h3>
                        <span>Character Animator, SPAIN</span>
                        </div>
                    </div>
                    <p>
                        a3D made my work effortless. Definetely would recommend to all.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>William Jackson</h3>
                        <span>VFX Artist, USA</span>
                        </div>
                    </div>
                    <p>Choosing 3D models from a3D made my task of complex animation very easy. 
                        I was amused by the quality of models they provide and will definetely suggest all 
                        my co-artists to use their assests and make their life a lot better.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>Giovanni</h3>
                        <span>Texture Designer, ITALY</span>
                        </div>
                    </div>
                    <p>
                        As a Texture Designer I explored many websites that provide 4k or above textures at
                        resonable price but found very less sites. Whereas, a3D is providing textures upto 2k for free
                        of cost and upto 8k at resonable prices. The vast number of textures available here made me choose a3d
                        as my goto website.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>Roberto</h3>
                        <span>Mechanics Developer, USA</span>
                        </div>
                    </div>
                    <p>
                        I was amused by the quality of models they provide and will definetely suggest all 
                        my co-artists to use their assests as it is mostly free for almost all uses but you can get paid
                        for low cost only if you want 4k or 8k models
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials

//TODO change users