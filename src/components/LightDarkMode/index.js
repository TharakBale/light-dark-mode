import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeTheme = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modifyClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const displayText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modifyClass}`}>
          <h1 className="heading">Click To change Mode.</h1>
          <button type="button" onClick={this.changeTheme}>
            {displayText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
