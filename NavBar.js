// Write your code here.
import './index.css'

const NavBar = () => {
  ;<nav className="navbar-cont">
    <div className="navbar-cont-2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo-img"
      />
      <div className="e-game-head-cont">
        <h1 className="e-game-head">Emoji Game</h1>
      </div>
    </div>
    {isGameOver && (
      <div className="sub-navbar-cont">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    )}
  </nav>
}
export default NavBar
