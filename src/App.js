import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    makeGetRequest();
  }, [])

  async function makeGetRequest(){
    try{
      let responce = await axios.get('http://127.0.0.1:8000/api/music/music/');
      console.log(responce.data);
    } catch (ex) {
      console.log('Error in makeGetRequest API call!');
    }
  }

  return (
    <div>

    </div>
  );



}


export default App;