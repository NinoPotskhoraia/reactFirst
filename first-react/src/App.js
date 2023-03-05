import Introduction from "./intro";
import Rating from "./rating";
import Result from "./result";
import { useState } from "react";

export default function App(){
  const [submited, setSubmited] = useState(false);
  const [score, setScore] = useState(0);
  return <section>
    <div>
      <Introduction
      />
    </div>
    if(submited){
     <div>
     <Result
     submited={submited}
     score={score}
     setScore={setScore}
     setSubmited={setSubmited}/>
   </div>
    }else{
    <div>
      <Rating
      submited={submited}
      setSubmited={setSubmited}
      score={score}
      setScore={setScore}/>
    </div>
}
    
  </section>
}