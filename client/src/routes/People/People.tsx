import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './People.css';

const Dan: string = require('./../../components/Images/Dan.jpeg');
const Annie: string = require('./../../components/Images/Annie.jpeg')
const People = () => {
  return(
      <div>
        <Header/>
        <body className={'people-body'}>
        <div className={'person-container'}>
            <img className={'person-image'} src={Dan} alt=""/>
            <div className={'person-text'}>
                <h1>Daniel</h1>
                <p>Daniel is a coder who is passionate about people.</p>
            </div>
        </div>
        <div className={'person-container'}>
            <img className={'person-image'} src={Annie} alt=""/>
            <div className={'person-text'}>
                <h1>Annie</h1>
                <p>Annie is an artist who consults with Daniel from time to time.</p>
            </div>
        </div>
        </body>
          <Footer/>
      </div>
  )
}
export default People;