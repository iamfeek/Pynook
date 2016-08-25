import React from 'react';
import PageHeader from '/imports/ui/components/utils/PageHeader';
import LoginForm from '/imports/ui/components/accounts/LoginForm'

export default Login = props => {
  DocHead.setTitle("Login - Pynook");
  return(
    <div>
      <PageHeader src="/login3.jpg" title="Login" />

      <div className="content" style={{paddingTop: "45px"}}>
        <LoginForm />
      </div>

    </div>
  )
}
