// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {details, bannerUrl} = this.props
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
      <div className="latest-match-container">
        <div className="align-row-compe-team">
          <div>
            <p className="color-style">{competingTeam}</p>
            <p className="color-style">{date}</p>
            <p className="color-style">{venue}</p>
            <p className="color-style">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="comp-team-logo"
            alt="latest match"
          />
        </div>
        <hr />
        <p className="color-style">First Innings</p>
        <p className="color-style">{firstInnings}</p>
        <p className="color-style">Second Innings</p>
        <p className="color-style">{secondInnings}</p>
        <p className="color-style">Man of The Match</p>
        <p className="color-style">{manOfTheMatch}</p>
        <p className="color-style">Umpires</p>
        <p className="color-style">{umpires}</p>
      </div>
    )
  }
}

export default LatestMatch
