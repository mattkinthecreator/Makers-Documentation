import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { documentationContext } from '../../context/DocumentationContext'
import Sidebar from '../Sidebar/Sidebar'
import './TopicDetails.css'

const TopicDetails = (props) => {
  const { getTopicDetails, topicDetails } = useContext(documentationContext)

  useEffect(() => {
    getTopicDetails(props.match.params.id)
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="topic-details">
          {topicDetails.topicTitle ? (
            <>
              <h1>{topicDetails.topicTitle}</h1>
              {topicDetails.subTopics.map((item, index) => (
                <div className="sub-topic">
                  <h2>{item.subTopicTitle}</h2>
                  <p>{item.firstDescription}</p>
                  <div>
                    <img src={item.img} alt="topic img" />
                  </div>
                  <p>{item.secondDescription}</p>
                </div>
              ))}
              <div className="topic-details_btns">
                <Link to={`/edit/${topicDetails.id}`}>
                  <button>
                    <img
                      src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png"
                      alt="pencil"
                    />
                    Редактировать
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default TopicDetails
