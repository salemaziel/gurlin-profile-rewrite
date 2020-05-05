import React from 'react'

import flowerStyle from './flower.module.css'

//import FlowerPetals from './flowerpetals'

const FlowerCore = ({ children }) => (
<>
<div className={flowerStyle.container}>
  <div className={flowerStyle.wrapper}>
        {children}
    <div className={flowerStyle.core} />
  </div>
</div>


</>
)

export default FlowerCore