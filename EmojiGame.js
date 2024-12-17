import {Component} from 'react'
import EmojiCard from './EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiIds: [],
    isGameOver: false,
    hasWon: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  EmojiClickFunction = id => {
    const {clickedEmojiIds, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojiIds.includes(id)) {
      this.setState({
        isGameOver: true,
        hasWon: false,
        score: clickedEmojiIds.length,
        topScore: Math.max(score, topScore),
      })
    } else {
      const updatedScore = score + 1
      const updatedClickedEmojiIds = [...clickedEmojiIds, id]

      if (updatedScore === emojisList.length) {
        this.setState({
          isGameOver: true,
          hasWon: true,
          score: updatedScore,
          topScore: Math.max(updatedScore, topScore),
        })
      } else {
        this.setState({
          score: updatedScore,
          clickedEmojiIds: updatedClickedEmojiIds,
        })
      }
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojiIds: [],
      isGameOver: false,
      hasWon: false,
    })
  }

  render() {
    const {score, topScore, isGameOver, hasWon} = this.state
    const shuffledList = this.shuffledEmojisList()
    const totalEmojis = this.props.emojisList.length

    return (
      <div className="background">
        <NavBar isGameOver={isGameOver} />

        <div className="e-sub-cont">
          {!isGameOver && (
            <ul className="background-2">
              {shuffledList.map(eachEmoji => (
                <EmojiCard
                  EmojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  EmojiListFunction={this.EmojiClickFunction}
                />
              ))}
            </ul>
          )}
          {isGameOver && (
            <WinOrLoseCard
              hasWon={hasWon}
              isGameOver={isGameOver}
              totalEmojis={totalEmojis}
              score={score}
              topScore={topScore}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
