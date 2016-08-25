import React from 'react';
import PageHeader from '/imports/ui/components/utils/PageHeader';
import RegisterForm from '/imports/ui/components/accounts/RegisterForm';

export default Register = props => {
  DocHead.setTitle("Register - Pynook")
    return(
      <div>
        <PageHeader src="/register.jpg" title="Register" />
          <div className="content" style={{paddingTop: "45px"}}>
            <RegisterForm />
          </div>
      </div>


    )
  }
