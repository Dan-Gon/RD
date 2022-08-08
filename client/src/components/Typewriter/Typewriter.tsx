import {useState, useEffect} from "react";
import './Typewriter.css'

const love: String[] = ["Love", "Amor", "Liefde","Dashuria", "Cinta", "Amore", "愛する", "애정", "Amare", "Love is love." ]
const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(()=>{
    if(index === love.length - 1 && subIndex === love[index].length){
      return;
    }
    if(subIndex === love[index].length + 1 && index !== love.length -1 && !reverse){
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse){
      setReverse(false);
      setIndex((prev)=>prev+1);
      return;
    }
    const timeout = setTimeout(()=>{
      setSubIndex((prev)=>prev+(reverse?-1:1));
    }, Math.max(reverse?75:subIndex===love[index].length?1000:150,parseInt(String(Math.random() * 350))));
    return () => clearTimeout(timeout);
  }, [subIndex,index,reverse])

  useEffect(()=>{
    const timeout2 = setTimeout(()=>{
      setBlink((prev)=>!prev);
    },500);
    return()=>clearTimeout(timeout2);
  },[blink]);


  return(

    <h1 className={'typewriter-font'}>
      {`${love[index].substring(0, subIndex)}${blink?"|":""}`}
    </h1>

  )
}
export default Typewriter;