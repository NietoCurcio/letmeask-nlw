import { useState } from 'react'
import '../styles/toggle.scss'

export const Toggle = (props: any) => {
  const [toggle, setToggle] = useState(() => {
    const { theme } = props
    if (theme === 'light') return false
    else return true
  })

  const triggerToggle = () => {
    props.toggleTheme(props.theme === 'light' ? 'dark' : 'light')
    setToggle(!toggle)
  }

  return (
    <div
      onClick={triggerToggle}
      className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>🌜</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>🌞</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        className="wrg-toggle-input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  )
}
