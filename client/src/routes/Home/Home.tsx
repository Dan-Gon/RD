import Header from "../../components/Header/Header";
import './Home.css'
import {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        fetch("/api")
            .then((res)=>res.json())
            .then((data)=> setData(data.message))
    },[])
  return(
      <div>
        <Header/>
      <section className={'home-body'}>
      </section>
      <section className={'section2'}>
        <h1>{data}</h1>
      </section>
      </div>
  )
}
export default Home;