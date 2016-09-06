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
    DocHead.addMeta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    });
  }

  render(){
    return(
      <div id="pynaplace">
        <PageHeader src="/pynaplace2.jpg" title="Pyn A Place"/>
        <h1 className="center hide-on-med-and-up">Pyn A Place</h1>

        <div id="accountdetails" className="centerByMargin hide-on-small-only">
          <IsLoggedInChecker />
        </div>

        <div className="row">
          <PynAPlaceForm />
        </div>

      </div>
    )
  }
}
