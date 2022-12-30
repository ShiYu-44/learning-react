import './App.css';
import Place from'./components/place'
import CountdownField from './components/countdownField';

function App() {
  return (
    <div className="App">
      <headers className="App-header">
        
        <div>捨て活チャレンジ</div>
        <Place/>
        <CountdownField />
      </headers>
    </div>

  );
}

export default App;
