// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, arrowClick} = props
  const {suggestion, id} = suggestionItem
  const onArrowClick = () => {
    arrowClick(id)
  }

  return (
    <li className="sugg-arrow-container">
      <p className="sugg-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
