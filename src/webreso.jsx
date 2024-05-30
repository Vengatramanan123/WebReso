import React from 'react';
import Navbar from  './components/navbar';
import Content from './components/content';
import AI from './components/data';
import Footers from './components/footer' 

function webreso() {
  return (
    <>
    <header>
    <Navbar/>
    </header>
   
    <main style={{marginTop:'100px'}}>
    <Content />
    <AI/>
    </main>
    <Footers/>

    
   </>
  )
}

export default webreso