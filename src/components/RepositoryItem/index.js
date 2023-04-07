// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = eachItem

  return (
    <li className="repos-item-cont">
      <img src={avatarUrl} alt={name} className="repos-img" />
      <h1 className="name">{name} </h1>
      <div className="counts-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="mini-img"
        />
        <p className="count-num">{starsCount}</p>
        <p className="count-name">stars</p>
      </div>
      <div className="counts-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="mini-img"
        />
        <p className="count-num">{forksCount}</p>
        <p className="count-name">forks</p>
      </div>
      <div className="counts-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="mini-img"
        />
        <p className="count-num">{issuesCount}</p>
        <p className="count-name">open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
