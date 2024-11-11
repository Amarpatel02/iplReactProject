
import React, { useEffect, useState } from 'react';
import "./addplayers.css"


function AddPlayers() {
  const [showPlayerForm, setShowPlayerForm] = useState(false);

  const [players, setPlayers] = useState([]);

  const [formData, setFormData] = useState([]);

  const [formError, setFormError] = useState('');

  useEffect(() => {
    setShowPlayerForm(true);

  },[]);

  const handleInputChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value });
  

  };

  const handleSubmit = () => {
   
    if (!formData.playerName || !formData.playerImage || formData.wickets === 0 ||formData.runs === 0 ||formData.totalMatches === 0) {

                 setFormError('All fields must be filled');
       return;
    }
   
    setPlayers([...players, formData]);

  };

 
  return (

    <div className='maindivv2'>
    
    <div className="app">
  {showPlayerForm && (
    <div className="player-form-container">
      <div className="player-form">
    <center><h3 style={{marginTop:-20}}>Add Players here</h3></center> <br/> 
      
        <input
          type="text"
          id="playerName"
          value={formData.playerName}
          onChange={handleInputChange}
          placeholder='Player Name'
          required
        /><br/><br/>

       
        <input
          type="text"
          id="playerImage"
          value={formData.playerImage}
          onChange={handleInputChange}
          placeholder ='Player Image URL'
          required
        /><br/><br/>
       
        <input
          type="number"
          id="wickets"
          value={formData.wickets}
          onChange={handleInputChange}
          placeholder='Wickets'
          required
        /><br/><br/>


        <input
          type="number"
          id="runs"
          placeholder='runs'
          value={formData.runs}
          onChange={handleInputChange}
          
          required
        /><br/><br/>

     
        <input
          type="number"
          id="totalMatches"
          value={formData.totalMatches}
          placeholder='Total Matches'
          onChange={handleInputChange}
          required
        /> <br/> <br/>
        <p style={{color:"red"}}>{formError}</p>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )}</div>

  <ul className="players-list">
    {players.map((player, index) => (
       <li key={index} className="player-item" >
        <img src={player.playerImage} alt={player.playerName} width="250"  height="180"/>
        <h3>{player.playerName}</h3>
        <p>Wickets: {player.wickets}</p>
        <p>Runs: {player.runs}</p>
        <p>Total Matches: {player.totalMatches}</p>
      </li>
    ))}
  </ul>
</div>


  );
}

export default AddPlayers;
