// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getIplMatchesDetails()
  }

  getIplMatchesDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const totalTeams = data.teams
    console.log(totalTeams)
    const wantedTotalTeams = totalTeams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsList: wantedTotalTeams, isLoading: false})
  }

  showIplMatches = () => {
    const {teamsList} = this.state
    return (
      <div className="full-ipl-lists">
        <div className="logo-dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="ipl-cards-container">
          {teamsList.map(each => (
            <TeamCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="ipl-container">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.showIplMatches()
        )}
      </div>
    )
  }
}
export default Home
