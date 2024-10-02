import React from 'react'
import backlog from '../../Assets/Images/Backlog.svg'
import todo from '../../Assets/Images/To-do.svg'
import progress from '../../Assets/Images/in-progress.svg'
import done from '../../Assets/Images/Done.svg'
import cancelled from '../../Assets/Images/Cancelled.svg'
import urgent from '../../Assets/Images/SVG - Urgent Priority colour.svg'
import highP from '../../Assets/Images/Img - High Priority.svg'
import medP from '../../Assets/Images/Img - Medium Priority.svg'
import lowP from '../../Assets/Images/Img - Low Priority.svg'
import noP from '../../Assets/Images/No-priority.svg'

import './List.css'
import Card from '../Card/Card'

export default function List(props) {
  let cardCount = 0;

  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                'status': (
                  <>
                    {{
                      'Backlog': (
                        <div className="list-icon">
                          <img src={backlog} alt="Backlog" width="22" height="22" />
                        </div>
                      ),
                      'Todo': (
                        <div className="list-icon">
                          <img src={todo} alt="Todo" width="22" height="22" />
                        </div>
                      ),
                      'In progress': (
                        <div className="list-icon">
                          <img src={progress} alt="In Progress" width="22" height="22" />
                        </div>
                      ),
                      'Done': (
                        <div className="list-icon">
                          <img src={done} alt="Done" width="22" height="22" />
                        </div>
                      ),
                      'Cancelled': (
                        <div className="list-icon">
                          <img src={cancelled} alt="Cancelled" width="22" height="22" />
                        </div>
                      ),
                    }[props.listTitle]}
                  </>
                ),
                'user': <></>,
                'priority': (
                  <>
                    {{
                      0: (
                        <div className="card-tag-icon">
                          <img src={noP} alt="No Priority" width="22" height="22" />
                        </div>
                      ),
                      1: (
                        <div className="card-tag-icon">
                          <img src={lowP} alt="Low Priority" width="22" height="22" />
                        </div>
                      ),
                      2: (
                        <div className="card-tag-icon">
                          <img src={medP} alt="Medium Priority" width="22" height="22" />
                        </div>
                      ),
                      3: (
                        <div className="card-tag-icon">
                          <img src={highP} alt="High Priority" width="22" height="22" />
                        </div>
                      ),
                      4: (
                        <div className="card-tag-icon">
                          <img src={urgent} alt="Urgent Priority" width="22" height="22" />
                        </div>
                      ),
                    }[props.listTitle]}
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  'priority': (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? <>{priorityProperty.name}</> : null
                          )
                        : null}
                    </>
                  ),
                  'status': <>{props.listTitle}</>,
                  'user': <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <div className="list-option-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                <path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (
              ticket.status === props.listTitle ||
              ticket.priority === props.listTitle ||
              ticket.userObj.name === props.listTitle
            ) {
              cardCount++;
              return <Card key={ticket.id} cardDetails={ticket} />;
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}