import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="left-navbar-container">
      <h1 className="content-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-menu">
        <li className="left-navbar-item">Item 1</li>
        <li className="left-navbar-item">Item 2</li>
        <li className="left-navbar-item">Item 3</li>
        <li className="left-navbar-item">Item 4</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h1 className="content-heading">Content</h1>
      <p className="content">
        Lorem ipsum dolor sitamet, consectetur adipscing elit, seed do eiusmod
        tempor incididunt ut labore etdolore mafna aliqua. Utenim ad minim
        veniam.
      </p>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="right-navbar-container">
      <h1 className="content-heading">Right Navbar</h1>
      <div className="right-nav-items-container">
        <h1 className="right-nav-item">Ad 1</h1>
        <h1 className="right-nav-item">Ad 2</h1>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && renderLeftNavbar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
