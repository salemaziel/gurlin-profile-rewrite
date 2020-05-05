import React from 'react'
import { Link } from 'gatsby'

import flowerStyle from './flower.module.css'
import FlowerSinglePetal from './flowerSinglepetal'

const FlowerPetals = () => (
<>
    <div className={flowerStyle.petalWrapper}>
      {/*<div className={flowerStyle.petal} ></div>
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
      <div className={flowerStyle.petal} />
<div className={flowerStyle.petal} />*/}
      <FlowerSinglePetal >
            <Link to="/" className={flowerStyle.petalLink}>Home</Link>
      </FlowerSinglePetal>

      <FlowerSinglePetal>
      <Link to="/about" className={flowerStyle.petalLink}>About</Link>
      </FlowerSinglePetal>

      <FlowerSinglePetal >
      <Link to="/gallery/photogallery" className={flowerStyle.petalLink}>Photos</Link>
      </FlowerSinglePetal>

      <FlowerSinglePetal >
      <Link to="/gallery/artgallery" className={flowerStyle.petalLink}>Art</Link>
      </FlowerSinglePetal>

      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      <FlowerSinglePetal />
      {/*<div className={flowerStyle.petal} />*/}
    </div>
</>
)

export default FlowerPetals