import React from 'react';
import PageHeader from '/imports/ui/components/utils/PageHeader';
import LoginForm from '/imports/ui/components/accounts/LoginForm'

export default Login = props => {
  DocHead.setTitle("Login - Pynook");
  return(
    <div>
      <PageHeader src="/login3.jpg" title="Login" />

      <div className="row">
        <h2 className="center hide-on-large-only">Login</h2>
        <LoginForm />
      </div>

    </div>
  )
}
