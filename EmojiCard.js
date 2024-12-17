// Write your code here.
import './css'

const EmojiCard = props => {
  const {EmojiDetails, key, EmojiClickFunction} = props
  const {id, emojiName, emojiUrl} = this.state
  onChangeEmoji = () => {
    EmojiClickFunction(id)
  }
  return (
    <li claaName="each-card-cont">
      <button claaName="emoji-btn" type="submit" onClick={onChangeEmoji}>
        <img src={emojiUrl} alt={emojiName} claaName="emoji-img" />
      </button>
    </li>
  )
}
export default EmojiCard
