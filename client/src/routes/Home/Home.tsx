import Header from "../../components/Header/Header";
import './Home.css'
import Typewriter from "../../components/Typewriter/Typewriter";
import {useEffect, useState} from "react";

const Home = () => {
  return(
      <div>
      <Header/>
      <section className={'home-body'}>
          <Typewriter/>
      </section>
      </div>
  )
}
export default Home;