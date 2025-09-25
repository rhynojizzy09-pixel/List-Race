import React from 'react'
import NavBar from '../component/NavBar'
import Middle from '../component/Middle'
import Card from '../component/Card'
import Animate from '../component/Animate'
import Container from '../component/Container'
import Explore from '../component/Explore'
import Reviews from '../component/Reviews'
import Visitots from '../component/Visitots'
import Articles from '../component/Articles'
import Account from '../component/Account'
import Footer from '../component/Footer'



export default function LandingPage() {
  return (
    <div>
      <NavBar/>
      <Middle/>
      <Card/>
      <Animate/>
      <Container/>
      <Explore/>
      <Reviews/>
      <Visitots/>
      <Articles/>
      <Account/>
      <Footer/>
      
    </div>
  )
}
