import React from 'react';  
import Countdown from 'react-countdown'

const LIMIT_TIME = 180000

class CountdownField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {output: "捨て活スタート：手放した数は0個です！", count:0, timeUpMessage:""};
  }

  timeUp() {
    this.setState({timeUpMessage:"お疲れさま！"});
  }

  render() {
    let timeDisplay;
    if (!this.state.timeUpMessage) {
      timeDisplay = <div>制限時間:<Countdown className="limit-time-value" 
                        date={Date.now() + LIMIT_TIME} 
                        onComplete={() => this.timeUp()} />
            </div>
    } else {
      timeDisplay = <div className='limit-over-field'>{this.state.timeUpMessage}</div>
    }      

    return (
      <div className="Countdown-field App-contents">
        
        <div className="limit-time-field">
        {timeDisplay}
        </div>
      </div>
    )
  }
}
  
export default CountdownField;
  