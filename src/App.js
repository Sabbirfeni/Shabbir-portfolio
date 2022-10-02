import React from 'react';
import {About, Contact, Footer, Header, Skills, Testimonials, Works} from './container';
import {Navbar} from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      
      <Navbar />
      <Header />
      <About />
      <Contact/>
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;