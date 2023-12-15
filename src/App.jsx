import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './component/navbar'
import Header from './component/header'
import Content from './component/context'
import Sucee from './component/success'
import Portfolio from './component/portfolio'
import Contentplio from './component/contentplio'
import Contact from './component/contact'
import PicContect from './component/piccontect'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>
     
    </Navbar>
    <Header />
    <Content />
    <Sucee />
    <Portfolio />
    <Contentplio />
    <PicContect />
    <Contact />
    <Footer />
    </>
  )
}

export default App
