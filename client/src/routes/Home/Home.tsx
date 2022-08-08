import Header from "../../components/Header/Header";
import './Home.css'
import Typewriter from "../../components/Typewriter/Typewriter";
import Footer from "../../components/Footer/Footer";
import EmailSignup from "../../components/EmailSignup/EmailSignup";

const Home = () => {
  return(
      <div>
      <Header/>
      <body className={'home-body'}>
        <Typewriter/>
        <EmailSignup/>
      </body>
          <Footer/>
      </div>
  )
}
export default Home;