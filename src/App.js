import logo from './logo.svg';
import './App.css';
import MySlider from './MySlider';
import MyRGBPanel from './MyRGBPanel';
import A1 from './A1';
import MyCalculator from './MyCalculator';

import TictacToe from './TicTacToe';


function App() {
  return (
    <div className="App">
      
      <h2>第一個元件</h2>
      <MyRGBPanel/>
      <h2>第二個元件</h2>
      <A1/>
      <h2>MyCalculator</h2>
      <MyCalculator/>
      <h2>tic-tac-toe</h2>
      <TictacToe/>
    </div>
    
    
    );
}

export default App;
