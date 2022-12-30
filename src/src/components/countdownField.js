import Countdown from 'react-countdown'

const LIMIT_TIME = 180000

const CountdownField = () =>{
    return (
        <div className="Countdown-field App-contents">
            <div>
            カウントダウン: <Countdown date={Date.now() + LIMIT_TIME} />
            </div>
        </div>
    )
}
  
  export default CountdownField;
  