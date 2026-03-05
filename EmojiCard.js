import './css'

const EmojiCard = props => {
  const {EmojiDetails, EmojiClickFunction} = props
  const {id, emojiName, emojiUrl} = EmojiDetails

  const onChangeEmoji = () => {
    EmojiClickFunction(id)
  }

  return (
    <li className="each-card-cont">
      <button className="emoji-btn" type="button" onClick={onChangeEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
