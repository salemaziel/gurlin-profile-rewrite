import React from 'react'
import { Planet } from 'react-planet';
import Flower from './flower'
import Button from 'react-bootstrap/Button'
import FlowerPetals from './flowerpetals'

import { Link, navigateTo } from 'gatsby'
import navplanetStyles from './navplanet.module.css'

export function NavPlanet() {
	return (

<Planet
	centerContent={<Flower />}
	hideOrbit
	autoClose
	orbitRadius={100}
	bounceOnClose
	rotation={105}
	// the bounce direction is minimal visible
	// but on close it seems the button wobbling a bit to the bottom
    bounceDirection="BOTTOM"
    satelliteOrientation="OUTSIDE"
>
    
	<Button className={navplanetStyles.petalButton}><Link className={navplanetStyles.Link} to="/">Home</Link></Button>
	<Button className={navplanetStyles.petalButton}/>
	<Button className={navplanetStyles.petalButton}/>
    <Button className={navplanetStyles.petalButton}/>
	<Button className={navplanetStyles.petalButton}/>
	<Button className={navplanetStyles.petalButton}/>

</Planet>

);
}

