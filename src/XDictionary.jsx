import React,{useState} from "react";
import "./xDictionary.css";

export default function XDictionary(){

    const [dictionary,setDictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },    
        { word: "State", meaning: "An object that stores data for a component." }
    ])

    const [userInput, setUserInput] = useState("");
    const [meaning, setMeaning] =  useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
        setMeaning("");
    }

    const handleClick = () => {
        let found = false;
        for(let ele of dictionary){
            if(ele.word.toLowerCase() === userInput.toLowerCase()){
                console.log("Match found");
                setMeaning(ele.meaning);
                found = true;
                break;
            }
        }
        if(!found){
            setMeaning("Word not found in the dictionary.");
        }
        console.log(`meaning : ${meaning}`);
    }

    return(
        <div className="container">
            <h1>Dictionary App</h1>
            <input 
                type="text" 
                value={userInput} 
                placeholder="Search for a word..."
                onChange={handleChange}>
            </input>
            <button onClick={handleClick}>Search</button>
            <h3 style={{marginTop:"-2px"}}>Definition:</h3>
            {meaning?
            <p>{meaning}</p>
            : null
            }
        </div>
    )

}
