import Link from 'next/link'
import React from 'react'

function Navbar() {
    
  return (
    <div>

<br/>
<ul style={{ ["background-color" as any]: "#ffc107" }}>

<li>

   
<Link href="">I m Navigation Bar</Link> </li>


    <li>

   
  <Link href="/" style={{ ["background-color" as any]: "#ffc107" }}>Home...clickme link for Home page..</Link> </li>

<br/>
<li>
 <Link href="/about">About...clickme link for about page..</Link> </li>

<br/>
<li>
   <Link href="/contact">Contact...clickme link for contact page..</Link></li>
 <br/> 
 </ul>

    </div>
  )
}

export default Navbar