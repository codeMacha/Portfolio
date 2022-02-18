import React, {useState} from 'react'
import AboutSection from '../components/AboutSection'
import Experience from '../components/Experience/Experience'
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
        <AboutSection />
        <Experience />
    </>
  )
}

export default Home;