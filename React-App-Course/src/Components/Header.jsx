import React,{useState} from "react";



const Header = () => {

    let noCopy = () =>{
        alert( " Copié avec succès " )
    }

    let addStyle = (e) => {
       e.target.classList.toggle("styled")
    }

    const [message,setMessage] = useState("Mouse hover to find our adress")
    const toggleMessage = () => {
        if(message === "Mouse hover to find our adress"){
            setMessage("10 avenue de Patay 35000 Rennes")
        } else {
            setMessage("Mouse hover to find our adress")
        }
    }

    const  [title, setTitle] = useState("Mon catalogue voiture")

    const toggleTitle = () => {
        if(title === "Mon catalogue voiture"){
            setTitle("Mon nouveau titre")
        }else(
            setTitle("Mon catalogue voiture")
        )
     }
        

     const onMouseOver = (e) => {
        addStyle(e)
        toggleMessage();
     
    } 

    const [input, setInput] = useState()
    const changeViaInput = (e) => {
        setInput(e.target.value)
        setTitle(input)
    }

    return(
    <>
        <div className="header">
            <h1 className="focus-in-contract-bck animate-character">AUTO AGORA</h1>
            <nav className="nav-bar">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Nos Voitures</a></li>
                <li><a href="#">Contact</a></li>
            </nav>
        </div>
        <div className="title-container">
            <h1 className="container-title">
                    {title}
            </h1>
            <p onCopy={noCopy} onMouseOver={onMouseOver}>{message}</p>
            <button className="submit-btn" type="submit" onClick={toggleTitle}>Click me to change the title</button>
            <input className="input" type="text" onChange={changeViaInput} value={title} />
        </div>
    </>
    )
}

export default Header