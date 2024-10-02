import React from 'react'
import urgent from '../../Assets/Images/SVG - Urgent Priority colour.svg'
import highP from '../../Assets/Images/Img - High Priority.svg'
import medP from '../../Assets/Images/Img - Medium Priority.svg'
import lowP from '../../Assets/Images/Img - Low Priority.svg'
import noP from '../../Assets/Images/No-priority.svg'

import './Card.css'

export default function Card(props) {
  const priorityIcons = {
    0: noP,
    1: lowP,
    2: medP,
    3: highP,
    4: urgent
  };

  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
            <div className={props.cardDetails.userObj.available ? "card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
          </div>
        </div>
        <div className="card-title">
          {props.cardDetails.title}
        </div>
        <div className="card-tag">
          <div className="card-tag-icon">
            <img src={priorityIcons[props.cardDetails.priority]} alt="Priority Icon" width="22" height="22" />
          </div>

          {props.cardDetails.tag.map((tag, index) => (
            <div key={index} className="card-tag-box">
              <div className="card-tag-title">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
