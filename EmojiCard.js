// ⚠️ [RYFT REVIEW - WARNING] Missing import statement for React, assuming it's used elsewhere in the project
import './css'

// 💡 [RYFT REVIEW - SUGGESTION] Consider using a more descriptive name for the component function
const EmojiCard = props => {
// 💡 [RYFT REVIEW - SUGGESTION] Consider destructuring props directly in the function signature
  const {EmojiDetails, EmojiClickFunction} = props
  const {id, emojiName, emojiUrl} = EmojiDetails

// 💡 [RYFT REVIEW - SUGGESTION] Consider adding a description or docstring for the onChangeEmoji function
  const onChangeEmoji = () => {
// ⚠️ [RYFT REVIEW - WARNING] Missing error handling for potential null or undefined values in EmojiClickFunction
    EmojiClickFunction(id)
  }

  return (
    <li className="each-card-cont">
// 💡 [RYFT REVIEW - SUGGESTION] Consider adding a type attribute to the button element to specify its purpose
      <button className="emoji-btn" type="button" onClick={onChangeEmoji}>
// ⚠️ [RYFT REVIEW - WARNING] Missing alt text for the img element when emojiUrl is empty or null
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

// 💡 [RYFT REVIEW - SUGGESTION] Consider adding a JSDoc comment to describe the exported component
export default EmojiCard
