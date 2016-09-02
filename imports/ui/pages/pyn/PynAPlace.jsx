import React from 'react';
import PageHeader from '/imports/ui/components/utils/PageHeader.jsx';
import IsLoggedInChecker from '/imports/ui/components/accounts/IsLoggedInChecker.jsx';
import PynAPlaceForm from '/imports/ui/components/PynAPlace/PynAPlaceForm.jsx';

export default class PynAPlace extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    DocHead.setTitle("Pyn A Place - Pynook")
  }

  render(){
    return(
      <div id="pynaplace">
        <PageHeader src="/pynaplace2.jpg" title="Pyn A Place"/>

        <div id="accountdetails" className="centerByMargin">
          <IsLoggedInChecker />
        </div>

        <PynAPlaceForm />
      </div>
    )
  }
}
