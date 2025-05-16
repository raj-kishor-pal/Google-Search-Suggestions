// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  moveArrowClickItemToSearchBar = id => {
    const {suggestionsList} = this.props
    const suggItem = suggestionsList.find(eachSugg => eachSugg.id === id)

    this.setState({searchInput: suggItem.suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSugg => {
      const lowerCaseSugg = eachSugg.suggestion.toLowerCase()
      return lowerCaseSugg.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <ul className="search-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input-bar"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          {searchResults.map(eachSugg => (
            <SuggestionItem
              suggestionItem={eachSugg}
              key={eachSugg.id}
              arrowClick={this.moveArrowClickItemToSearchBar}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
