import React, { useContext, useEffect } from 'react'
import { documentationContext } from '../../context/DocumentationContext'
import TopicCard from '../TopicCard/TopicCard'
import './TopicList.css'

const TopicList = () => {
  const { topicsList, getTopics } = useContext(documentationContext)

  useEffect(() => {
    getTopics()
  }, [])

  return (
    <div>
      <div className="add-topic">
        <button>+ Добавить тему</button>
      </div>
      <div className="list">
        {topicsList.map((item) => (
          <TopicCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default TopicList
