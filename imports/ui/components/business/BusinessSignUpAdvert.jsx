import React from 'react';
import "/imports/ui/components/utils/PageHeader";

export default BusinessSignUpAdvert = props => {
  return(
    <div id="BusinessSignUpAdvert">
      <PageHeader src="/business-advert.jpg" title="Why Us?" />

      <div className="wider-content center" style={{justifyContent: "center"}}>
        <h1>Widen your network</h1>
        <h4>
          What more can you ask for if not a widened network?
        </h4>

        <p>With a total of around 12,000 users on our platform at this very moment, we are sure that your
        outreach to the masses will be expanded.</p>
      </div>

      <div className="wider-content">

      </div>
    </div>
  )
}
