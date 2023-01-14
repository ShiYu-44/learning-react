import React from 'react';

const INCREMENTAL = 1

class CountButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {output: "捨て活スタート：手放した数は0個です！", count:0};
    }
  
    buttonClick() {
      const trashCount = this.state.count + INCREMENTAL
      this.setState({output:"現在「" + trashCount + "」個の物を手放しています！", count:trashCount});
    }
  
    render() {
      return (
        <div className="count-button-field">
          <div>{this.state.output}</div>
          <br/> 
          <div>
            <button className="trash-button" onClick={()=>{this.buttonClick()}}> 物を1つ捨てたら押してみよう！ </button>
          </div>
        </div>
      );
    }
  }

export default CountButton;