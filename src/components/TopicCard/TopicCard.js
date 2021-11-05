import React from 'react'
import { Link } from 'react-router-dom'
import './TopicCard.css'

const TopicCard = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`} className="card">
      <div>{item.topicTitle}</div>
    </Link>
  )
}

export default TopicCard
