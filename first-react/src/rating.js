export default function Rating({score, setScore, submited, setSubmited}){
    return <section>
        <div className="score-container"> 
          <div className="circle">
            <span>1</span>
          </div>   <div className="circle">
            <span>2</span>
          </div>   <div className="circle">
            <span>3</span>
          </div>   <div className="circle">
            <span>4</span>
          </div>   <div className="circle">
            <span>5</span>
          </div>
        </div>
        <div className="button-container">  
           <button onClick={setSubmited(true)}>Submit</button>
        </div>
    </section>
}