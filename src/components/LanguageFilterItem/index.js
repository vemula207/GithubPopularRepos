// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguage, isActiveOption, onLanguageSelect} = props
  const {id, language} = eachLanguage
  const activeCls = isActiveOption ? 'item-cont active' : 'item-cont'

  const onChangeLang = () => {
    onLanguageSelect(id)
  }

  return (
    <li>
      <button type="button" className={activeCls} onClick={onChangeLang}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
