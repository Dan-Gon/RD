import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BlogPost from "../../components/BlogPost/BlogPost";
import './Blog.css';

const Dan: string = require('./../../components/Images/Dan.jpeg')

const Blog = () => {
  return(
      <div>
          <Header/>
          <body className={'blog-body'}>
            <BlogPost title={"Greets"} blogImage={Dan} bodyText={"Hi"}/>
          </body>
          <Footer/>
      </div>
  )
}
export default Blog;