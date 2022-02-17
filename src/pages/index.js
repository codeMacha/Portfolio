import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle =() => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Navbar toggle ={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
    </>
  )
}

export default Home;