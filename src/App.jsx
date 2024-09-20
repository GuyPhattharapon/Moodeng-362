import { useState } from "react";
import pigImage from './image/หมูเด้ง.jpg';  
import selfImage from './image/รูปตัวเอง.jpg';  
import watermelonImage from './image/แตงโม.jpg';  
import pumpkinImage from './image/ฟักทอง.jpg'; 
import grassImage from './image/หญ้า.jpg';  
import './App.css'; 

export default function App() {
  const [level, setLevel] = useState(0); 
  const [image, setImage] = useState(pigImage); 
  const [size, setSize] = useState(150); 


  const feedPig = (foodValue) => {
    const newLevel = level + foodValue;
    setLevel(newLevel);

    if (newLevel >= 100) {
      setSize(400);  
      setImage(selfImage); 
    } else {
      setSize(size + foodValue * 2);
    }
  };

  const resetGame = () => {
    setLevel(0);  
    setImage(pigImage);  
    setSize(150); 
  };

  return (
    <div className="app-container">
      <h1>Level: {level}</h1>
      <div className="image-container">
        <img
          src={image}
          alt="หมูเด้ง"
          className={`pig-image ${level >= 100 ? 'level-max' : ''}`}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      </div>

      <div className="food-buttons">
        <img
          src={watermelonImage}
          alt="แตงโม"
          onClick={() => feedPig(5)} 
          className="food-button"
        />
        <img
          src={pumpkinImage}
          alt="ฟักทอง"
          onClick={() => feedPig(10)}
          className="food-button"
        />
        <img
          src={grassImage}
          alt="หญ้า"
          onClick={() => feedPig(20)} 
          className="food-button"
        />
      </div>

      <button onClick={resetGame} className="reset-button">
        รีเซ็ต
      </button>

      <p>เกมส์เลี้ยงหมูเด้ง<br />
        - กดปุ่มป้อนอาหาร แล้วค่า Level จะเพิ่ม และขนาดของรูปภาพจะใหญ่ขึ้น<br />
        - แตงโม = 5, ฟักทอง = 10, หญ้า = 20<br />
        - เมื่อ Level เกิน 100 จะเปลี่ยนเป็นรูปภาพตัวเอง !!!
      </p>
    </div>
  );
}