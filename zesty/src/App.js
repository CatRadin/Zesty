
import './App.css';
import React, {useState} from "react"
import cabbage from './assects/image1.jpeg'
import mango from './assects/image2.jpeg'
import fig from './assects/image3.jpeg'
import gaze from './assects/image4.jpeg'
import peach from './assects/image5.jpeg'
import avocado from './assects/image1.jpeg'


const images = [cabbage, mango, fig, gaze, peach, avocado]


function App() {
  
  const [currentImage, setCurrentImage] = useState(0);
  const length = images.length -1;

  const handleClick = () => {
    setCurrentImage((currentImage) => {
        if(currentImage < length){
            return currentImage + 1
        } else {
            return 0;
        }
    })
  }

  return (
    <div className="App">
      <div className='Title'>
      <h1>Zesty</h1>
      <h2>A photography project <br /> by Ella Fieldling</h2>
      
      </div>
      <div className='image-container'>
        <h3>{currentImage + 1} / {images.length}</h3>
        <img alt="" src ={images[currentImage]} onClick={handleClick}/></div>
    </div>
  );
}

export default App;
