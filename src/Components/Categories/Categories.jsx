import React from 'react'
import './Categories.css'
import category_1 from '../../assets/program-1.png'
import category_2 from '../../assets/program-2.png'
import category_3 from '../../assets/program-3.png'
const Categories = () => {
  return (
    <div className='categories'>
        <div className='category'>
            <img src={category_1} alt="" />
            <div className="caption">
              <p>Environment</p> 
            </div>
        </div>
        <div className='category'>
            <img src={category_2} alt="" />
            <div className="caption">
              <p>Buildings</p> 
            </div>
        </div>
        <div className='category'>
            <img src={category_3} alt="" />
            <div className="caption">
              <p>WildLife</p> 
            </div>
        </div>

    </div>
  )
}

export default Categories