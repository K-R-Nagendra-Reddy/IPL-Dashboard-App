// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="ipl-cards-container1">
        <img src={teamImageUrl} alt={name} className="teamImageUrl" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
