// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {hasWon, isGameOver, totalEmojis, score, topScore} = props
  return (
    <div className="game-over-card">
      <div className="game-status">
        <h1 className="status-heading">{hasWon ? 'You Won' : 'You Lost'}</h1>
        <p className="score-display">
          Score: {score}/{totalEmojis}
        </p>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.resetGame}
        >
          Play Again
        </button>
      </div>
      <img
        src={
          hasWon
            ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        }
        alt={hasWon ? 'won' : 'lost'}
        className="status-img"
      />
    </div>
  )
}
