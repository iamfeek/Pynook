import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PageHeader from '/imports/ui/components/utils/PageHeader';

import DosDonts from '/imports/ui/components/misc/DosDonts';
import UserAgreement from '/imports/ui/components/misc/UserAgreement';

const TermsOfUse = props => {
  return(
    <div id="convert">
      <PageHeader src="/termsofuse-header.jpg" title="Terms Of Use" />

      <div className="container">
        <div className="row">
          <h5>These Do’s and Don’ts are an integral part of the Terms of Use.</h5>
          <h5>As a condition to access and use of Pynook´s Services, you agree to strictly observe the following:</h5>
        </div>

        <UserAgreement />

        <DosDonts />
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Terms Of Use - Pynook");

  return {};
}, TermsOfUse)
