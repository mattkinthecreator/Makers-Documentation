import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { documentationContext } from '../../context/DocumentationContext'
import './EditTopics.css'

const EditTopics = (props) => {
  const { getTopicDetails, topicDetails, editTopicDetails } =
    useContext(documentationContext)
  const [editTopic, setEditTopic] = useState({})

  function handleValue(e, index) {
    let newSubTopic = editTopic.subTopics[index]
    newSubTopic[e.target.name] = e.target.value
    let newTopic = {
      ...editTopic,
    }
    newTopic.subTopics.splice(index, 1, newSubTopic)
    console.log(newTopic)
    setEditTopic(newTopic)
  }

  useEffect(() => {
    getTopicDetails(props.match.params.id)
  }, [])

  useEffect(() => {
    setEditTopic(topicDetails)
  }, [topicDetails])

  return (
    <div>
      {editTopic.topicTitle ? (
        editTopic.subTopics.map((item, index) => (
          <div key={index}>
            <textarea
              name="subTopicTitle"
              type="text"
              placeholder="Заголовок"
              onChange={(e) => handleValue(e, index)}
            >
              {item.subTopicTitle}
            </textarea>
            <textarea
              name="firstDescription"
              type="text"
              placeholder="Описание"
              onChange={(e) => handleValue(e, index)}
            >
              {item.firstDescription}
            </textarea>
            <textarea
              name="img"
              type="text"
              placeholder="Изображение"
              onChange={(e) => handleValue(e, index)}
            >
              {item.img}
            </textarea>
            <textarea
              name="secondDescription"
              type="text"
              placeholder="Описание"
              onChange={(e) => handleValue(e, index)}
            >
              {item.secondDescription}
            </textarea>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
      <Link to={`/details/${editTopic.id}`}>
        <button onClick={() => editTopicDetails(editTopic)}>Сохранить</button>
      </Link>
    </div>
  )
}

export default EditTopics
