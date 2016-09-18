import React from 'react';

export default BusinessPlan = props => {
  let plan = props.plan;
  return(
    <div className="col s4 businessPlan card sticky-action">
      <div className="card-content">
        <span className="card-title">{plan.title}</span>

        <h5 className="center header">${plan.price}</h5>

        <p style={{height: "200px"}} dangerouslySetInnerHTML={setDescription(plan.description)}/>

        <div className="card-action">
          <a href="#">Pick this plan</a>
        </div>
      </div>

    </div>
  )
}

const setDescription = desc => {return {__html: desc}}
