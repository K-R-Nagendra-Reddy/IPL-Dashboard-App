// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {isLoading: true, bannerUrl: '', latestMatch: {}, recentMatches: []}

  componentDidMount() {
    this.getParticularMatchDetails()
  }

  getParticularMatchDetails = async () => {
    const {match} = this.props
    // console.log(match)
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedTeamBannerUrl = data.team_banner_url
    const updatedLatestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const modifiedLatestMatches = {
      competingTeam: updatedLatestMatchDetails.competing_team,
      competingTeamLogo: updatedLatestMatchDetails.competing_team_logo,
      date: updatedLatestMatchDetails.date,
      firstInnings: updatedLatestMatchDetails.first_innings,
      id: updatedLatestMatchDetails.id,
      manOfTheMatch: updatedLatestMatchDetails.man_of_the_match,
      matchStatus: updatedLatestMatchDetails.match_status,
      result: updatedLatestMatchDetails.result,
      secondInnings: updatedLatestMatchDetails.second_innings,
      umpires: updatedLatestMatchDetails.umpires,
      venue: updatedLatestMatchDetails.venue,
    }
    console.log(modifiedLatestMatches)
    const modifiedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    console.log(modifiedRecentMatches)
    this.setState({
      isLoading: false,
      bannerUrl: updatedTeamBannerUrl,
      latestMatch: modifiedLatestMatches,
      recentMatches: modifiedRecentMatches,
    })
  }

  ourPage = () => {
    const {bannerUrl, latestMatch, recentMatches} = this.state
    return (
      <div className="one-ipl-match-details">
        <img src={bannerUrl} className="banner-url" alt="team banner" />
        <p>Latest Matches</p>
        <LatestMatch details={latestMatch} bannerUrl={bannerUrl} />
        <ul className="match-card-container">
          {recentMatches.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, bannerUrl, latestMatch, recentMatches} = this.state
    console.log('TeamMatches component is rendered')
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.ourPage()
        )}
      </div>
    )
  }
}
export default TeamMatches
