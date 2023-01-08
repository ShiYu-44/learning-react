import './App.css';
import Place from'./components/place';
import CountdownField from './components/countdownField';
import CountButton from './components/countButton';

function App() {
  return (
    <div className="App">
      <headers className="App-header">
        <div>3分捨て活チャレンジ</div>
        <Place/>
        <CountdownField />
        <CountButton/>
      </headers>
    </div>

  );
}

export default App;
