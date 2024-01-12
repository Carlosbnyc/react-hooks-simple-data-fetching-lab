// create your App component here
import React, {useState, useEffect} from 'react';

function App() {

const [dogImage, setDogImage] = useState ([])
const [loading, setLoading] =useState(true)


useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        setDogImage(data);
        setLoading(false);
    })
}, []);

if (loading){
    return <p>Loading...</p>
}


    return (
      <div>
       <img src={dogImage.message} alt="A Random Dog"/>
      </div>
    );
  }
  
  export default App;

