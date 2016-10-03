import React from 'react';

export default TableOfContents = props => {
  return(
    <ul className="collection with-header">
      <li className="collection-header"><h5>Getting Started</h5></li>
      <li className="collection-item"><a href="#1">What is Pynook?</a></li>

      <li className="collection-header"><h5>Using Our Services</h5></li>
      <li className="collection-item"><a href="#2">Do I need to register?</a></li>
      <li className="collection-item"><a href="#3">Do I need to create an account?</a></li>
      <li className="collection-item"><a href="#4">How do I perform a general Search?</a></li>
      <li className="collection-item"><a href="#5">How do I perform a Search by Specifics?</a></li>
      <li className="collection-item"><a href="#6">How do I perform a Search by Experience?</a></li>
      <li className="collection-item"><a href="#7">How do I perform a nearby Search at my current location?</a></li>
      <li className="collection-item"><a href="#8">How do I Pyn a location?</a></li>
      <li className="collection-item"><a href="#9">What are the Terms of Use?</a></li>

      <li className="collection-header"><h5>User & Business Accounts</h5></li>
      <li className="collection-item"><a href="#10">What is the difference between a User and a Business Account?How do I create a user page?</a></li>
      <li className="collection-item"><a href="#11">How do I create a user page?</a></li>
      <li className="collection-item"><a href="#12">How do I convert from a User to Business Account?</a></li>
      <li className="collection-item"><a href="#13">How do I create a Listing?</a></li>
      <li className="collection-item"><a href="#14">What are the charges for using the services?</a></li>

      <li className="collection-header"><h5>Troubleshooting & Support</h5></li>
      <li className="collection-item"><a href="#15">How do I resolve Technical & Usage Issues?</a></li>
      <li className="collection-item"><a href="#16">How do I resolve Account Issues?</a></li>

      <li className="collection-header"><h5>Service Desk</h5></li>
      <li className="collection-item"><a href="#17">How to Contact Us or Report Problems?</a></li>
    </ul>
  )
}
