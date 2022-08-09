import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './About.css';

const About = () => {
  return(
      <div>
        <Header/>
        <body className={'about-body'}>
            <section className={'about-text-container'}>
            <h1>Why Recovery Discovery?</h1>
            <p>Recovery discovery was built out of a need to show the world what recovery is. We are familiar with the stigma "Once a junkie, always a junkie.", While I agree we will never be "Cured" from addiction,we can heal and abstain. We can live productive, selfless lives.</p>
            </section>
        </body>
        <Footer/>
      </div>
  )
}
export default About;