import React from 'react';

export default DashboardAction = props => {
  return(
    <div className="dashboard_action-wrapper col s12 marginBottom20">
      <a className="dashboard_action" href={FlowRouter.path(props.pathName)}>
        {props.title}
      </a>
    </div>
  )
}
