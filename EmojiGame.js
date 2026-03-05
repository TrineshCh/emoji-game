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
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
    return emojisList.sort(() => Math.random() - 0.5)
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the shuffledEmojisList function is not used anywhere else
  }

  EmojiClickFunction = id => {
    const {clickedEmojiIds, score, topScore} = this.state
    const {emojisList} = this.props

// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to check if id is in clickedEmojiIds
    if (clickedEmojiIds.includes(id)) {
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
      this.setState({
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        isGameOver: true,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        hasWon: false,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        score: clickedEmojiIds.length,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        topScore: Math.max(score, topScore),
      })
    } else {
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to update score and clickedEmojiIds
      const updatedScore = score + 1
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to update score and clickedEmojiIds
      const updatedClickedEmojiIds = [...clickedEmojiIds, id]

// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to check if updatedScore is equal to emojisList.length
      if (updatedScore === emojisList.length) {
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        this.setState({
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          isGameOver: true,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          hasWon: true,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          score: updatedScore,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          topScore: Math.max(updatedScore, topScore),
        })
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
      } else {
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
        this.setState({
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          score: updatedScore,
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the state update is not used anywhere else
          clickedEmojiIds: updatedClickedEmojiIds,
        })
      }
    }
  }

// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
  resetGame = () => {
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
    this.setState({
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
      score: 0,
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
      clickedEmojiIds: [],
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
      isGameOver: false,
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to reset state
      hasWon: false,
    })
  }

  render() {
    const {score, topScore, isGameOver, hasWon} = this.state
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for state to avoid using this.state
    const shuffledList = this.shuffledEmojisList()
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the shuffledList is not used anywhere else
    const totalEmojis = this.props.emojisList.length
// ⚠️ [RYFT REVIEW - WARNING] This line is unnecessary, the totalEmojis is not used anywhere else

    return (
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the background
      <div className="background">
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
        <NavBar isGameOver={isGameOver} />

// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the sub-container
        <div className="e-sub-cont">
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the list
          {!isGameOver && (
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the list
            <ul className="background-2">
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to map over the list
              {shuffledList.map(eachEmoji => (
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the EmojiCard
                <EmojiCard
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to pass props to EmojiCard
                  EmojiDetails={eachEmoji}
                  key={eachEmoji.id}
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to pass props to EmojiCard
                  EmojiListFunction={this.EmojiClickFunction}
                />
              ))}
            </ul>
          )}
          {isGameOver && (
// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more efficient method to render the WinOrLoseCard
            <WinOrLoseCard
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
              hasWon={hasWon}
              isGameOver={isGameOver}
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
              totalEmojis={totalEmojis}
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
              score={score}
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
              topScore={topScore}
// 💡 [RYFT REVIEW - SUGGESTION] Consider using destructuring for props to avoid using this.props
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
