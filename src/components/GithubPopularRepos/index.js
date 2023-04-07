import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeOptionId: languageFiltersData[0].id,
    isLoader: false,
    languesList: [],
  }

  componentDidMount() {
    this.getLanguages()
  }

  renderFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
    </div>
  )

  getLanguages = async () => {
    const {activeOptionId} = this.state
    this.setState({isLoader: true})

    const url = `https://apis.ccbp.in/popular-repos?language=${activeOptionId}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.popular_repos.map(eachData => ({
        avatarUrl: eachData.avatar_url,
        name: eachData.name,
        id: eachData.id,
        forksCount: eachData.forks_count,
        issuesCount: eachData.issues_count,
        starsCount: eachData.stars_count,
      }))
      console.log(updatedData)
      this.setState({languesList: updatedData, isLoader: false})
    }
    return this.renderFailure()
  }

  onLanguageSelect = activeOptionId => {
    this.setState({activeOptionId}, this.getLanguages)
  }

  renderLanguagesList = () => {
    const {languesList} = this.state
    return (
      <ul className="list-cont">
        {languesList.map(eachItem => (
          <RepositoryItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {activeOptionId, isLoader} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-cont">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguage={eachLanguage}
              key={eachLanguage.id}
              isActiveOption={eachLanguage.id === activeOptionId}
              onLanguageSelect={this.onLanguageSelect}
              getSortedLanguages={this.getSortedLanguages}
            />
          ))}
        </ul>
        <div className="bottom-container">
          {isLoader ? this.renderLoader() : this.renderLanguagesList()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
