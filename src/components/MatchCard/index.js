// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {details} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = details
    return (
      <li className="each-card-container">
        <img
          src={competingTeamLogo}
          className="logo-logo"
          alt="opposite team"
        />
        <h1 className="color-color">{competingTeam}</h1>
        <p className="color-color">{result}</p>
        <p className="color-color">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
