



const Form = () => {
    return(
<div className="form-container">
    <form className="form">
        <div className="flex">
            <label>
                <input required placeholder="" type="text" className="input"/>
                <span>first name</span>
            </label>
    
            <label>
                <input required placeholder="" type="text" className="input"/>
                <span>last name</span>
            </label>
        </div>  
                
        <label>
            <input required placeholder="" type="email" className="input"/>
            <span>email</span>
        </label> 
            
        <label>
            <input required type="tel" placeholder="" className="input"/>
            <span>contact number</span>
        </label>
        <label>
            <textarea required rows="3" placeholder="" className="input01"></textarea>
            <span>message</span>
        </label>
        
        <button className="fancy" href="#">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
    </form>
</div>
)
    
}

export default Form