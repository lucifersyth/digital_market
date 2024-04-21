import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Stream from './components/Stream'
import Footer from './components/Footer'
import Path from './components/Path'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero></Hero>
    <Stream></Stream>
    <Path></Path>
    <Footer></Footer>
    </>
  )
}

export default App
