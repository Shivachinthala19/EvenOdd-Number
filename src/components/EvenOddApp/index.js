// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getNumber = () => Math.ceil(Math.random() * 100)

  Increase = () => {
    const randomnum = this.getNumber()
    this.setState(prevnum => ({count: prevnum.count + randomnum}))
  }

  render() {
    const {count} = this.state
    const number = count % 2 == 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {number}</p>
          <button type="button" onClick={this.Increase} className="button">
            Increment
          </button>
          <p className="description">*Increase Randam number 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
