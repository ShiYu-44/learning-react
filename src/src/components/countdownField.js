import Countdown from 'react-countdown'

const LIMIT_TIME = 180000

const CountdownField = () =>{
    return (
        <div className="Countdown-field App-contents">
            <div>
            制限時間: <Countdown date={Date.now() + LIMIT_TIME} />
            </div>
        </div>
    )
}
  
  export default CountdownField;
  