import React, { useContext, useState } from 'react'
import { documentationContext } from '../../context/DocumentationContext'

const AddMainTopic = () => {
  const [title, setTitle] = useState('')

  const { addMainTopic } = useContext(documentationContext)

  function handleAddTopic() {
    const newTopic = {
      topicTitle: title,
      subTopics: [],
    }
    addMainTopic(newTopic)
    setTitle('')
  }

  return (
    <div className="add-main-topics">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Название топика"
        value={title}
      />
      <button onClick={handleAddTopic}>Добавить</button>
    </div>
  )
}

export default AddMainTopic
