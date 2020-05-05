import React from 'react'
//import { Link } from 'gatsby'

import flowerStyle from './flower.module.css'

const FlowerSinglePetal = ({ children }) => (
    <>
    <div className={flowerStyle.petal} >
        {children}
    </div>
    </>
)

export default FlowerSinglePetal