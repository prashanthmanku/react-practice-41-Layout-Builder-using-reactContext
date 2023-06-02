import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickToggleContent = () => {
        onToggleShowContent()
      }

      const onClickToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="layout-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              className="checkbox"
              checked={showContent}
              onChange={onClickToggleContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="leftNavBar"
              className="checkbox"
              checked={showLeftNavbar}
              onChange={onClickToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavBar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="RightNavBar"
              className="checkbox"
              checked={showRightNavbar}
              onChange={onClickToggleShowRightNavbar}
            />
            <label htmlFor="RightNavBar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
