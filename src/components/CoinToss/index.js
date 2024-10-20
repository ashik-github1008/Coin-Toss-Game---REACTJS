// Write your code here

import {Component} from 'react'
import './index.css'

class CoinToss extends Component {

  state = {head:0, tail:0, isHead:true}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2);

    if (tossResult === 0){
      this.setState((prevState) => ({head: prevState.head+1, isHead:true}))
    }

    else{
      this.setState((prevState) => ({tail: prevState.tail+1, isHead:false}))
    }

  }

  render() {
    const {head,tail,isHead} = this.state;

    const src = isHead? 'https://assets.ccbp.in/frontend/react-js/heads-img.png' : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="choose">Heads (or) Tails</p>
          <img
            src={src}
            className="toss-img"
            alt="toss result"
          />
          <button className="toss-btn" onClick = {this.onClickToss}>Toss Coin</button>
          <div className="toss-details-container">
            <p className="count">Total: {head + tail}</p>
            <p className="count">Heads: {head}</p>
            <p className="count">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
