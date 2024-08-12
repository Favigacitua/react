import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar} from './component/navbar/NavBar'
import {Home} from './component/home/home'
import {Footer} from './component/footer/Footer'

   

export function App() {

        return (                       
        <div>
          <NavBar/>
          <Home/>
          <Footer/>

        </div>
        );
}

