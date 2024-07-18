import { useState } from "react";


export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    const handleEditClick = ()=>{
        setIsEditing((prevValue) => !prevValue);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (e)=>{
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = 
        <input 
        type="text" 
        placeholder="Enter name" 
        value={playerName} 
        onChange={handleChange} 
        required/>
    }


    return (
        <li className={isActive ? "active":undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button
                onClick={handleEditClick}
            >{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
