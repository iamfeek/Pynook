import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PageHeader from '/imports/ui/components/utils/PageHeader';

import TableOfContents from '/imports/ui/components/misc/TableOfContents';

const FAQ = props => {
  return(
    <div id="faq">
      <PageHeader src="/faq-header.jpg" title="FAQ" />

      <div className="container">
        <div className="row center">
          <h2>Table of Contents</h2>
          <TableOfContents />
        </div>

        <div className="row center">
          <div className="col s12 card-panel">
            <h2>Getting Help With Pynook</h2>
            <h4>Welcome to Pynook!</h4>
            <p>To maximise your experiences on using our services, you may wish to browse the Newbie section to get started with the basics.</p>
            <p>For most general questions, you may wish to browse the Frequently Asked Questions for assistance. If you cannot find the answers you need to a specific question, you can contact us with your query or speak to us on our very own Pynook page or at our Facebook fan page.</p>
          </div>

          <div id="gettingStarted" className="col s12">
            <div id="1" className="card-panel">
              <h4>What is Pynook?</h4>
              <p>Pynook is a social community connecting users to home-based businesses. Specifically, Pynook aims to make it easier for stay-at-home women and home-based entrepreneurs all over the world to overcome limitations and create an income for themselves. By harnessing the power of the community, Pynook hopes to reach and empower even those without access to mobile technology or the internet. Whether you’d like to buy home-made, learn something new or socialize to make new friends, Pynook offers new experiences wherever you go.</p>
            </div>
          </div>

          <div id="using" className="col s12">
            <div id="2" className="card-panel">
              <h4>Do I need to register?</h4>

              <ul className="collection">
                <li className="collection-item">You may browse through our website as a Guest, but to start using our services, you’ll need to create an account.</li>
                <li className="collection-item">By registering an account, you will be able to set up a user page and share your experiences with our community and help these home-based businesses.</li>
                <li className="collection-item">Before you begin, please take a moment to read through our Terms of Use.</li>
              </ul>
            </div>

            <div id="3" className="card-panel">
              <h4>Do I need to create an account?</h4>

              <ul className="collection">
                <li className="collection-item">In order to start using Pynook, you must first create a User account with login details and a password.  You may choose to use your existing login details from your Facebook, Google account or create a new identity.</li>
                <li className="collection-item">Pynook offers 2 types of accounts: a standard User account for all users, or a Business account for home-based business owners. All users can start with a User account and convert to a Business account at any time via links on your User Page. </li>
                <li className="collection-item">To create a Business account, you will need to provide more details of your business, have a valid Paypal account and Pyn a location of your home-based business.</li>
              </ul>
            </div>

            <p>Click <a href={FlowRouter.path("pyn.a.place")}>here</a> for a guide on how to Pyn a location.</p>

            <div id="4" className="card-panel">
              <h4>How do I perform a general Search?</h4>

              <p>The Search function in Pynook draws its results from indexed tagged information contributed by Pynook users.  Here are some tips on utilising this function.</p>
            </div>

            <div id="5" className="card-panel">
              <h4>How do I perform a Search by Specifics?</h4>

              <p>For a more specific search, you may conduct a search based on a Keyword, Country or Category.  Search results are based on the vicinity of your current location by default unless you specify a location in the search box. </p>
            </div>

            <div id="6" className="card-panel">
              <h4>How do I perform a Search by Experience?</h4>

              <p>Home-based business provide a bewildering range of services all over the world. Depending on your search, Pynook provides for 3 different types of experiences to choose from.</p>
              <p>The “Learn” experience will show you results of home-based coaching in all categories, or narrow your search results with a keyword, category or country.</p>
              <p>The “Socialize” experience allows you to search for home-based businesses providing group-type activities, where you may meet and make new friends.</p>
              <p>The “Buy” experience will categorically list all home-based businesses in the area of your search, according on your specifics. </p>
            </div>

            <div id="7" className="card-panel">
              <h4>How do I perform a nearby Search at my current location?</h4>

              <p>When you click the Location icon next to “Enter Location” in the Search Bar without entering any keywords or specifics, this will conduct a broad-based search at your current location. The search results will display listings of all categories in your immediate vicinity.  It is possible to specify a keyword or choose a specific category or experience when conducting a Nearby search to narrow the results. </p>
            </div>

            <div id="8" className="card-panel">
              <h4>How do I Pyn a location?</h4>

              <p>Users will be able to tag and “Pyn” the location of a home-based business on a map. This will be indexed and shared in your user page so that other users will be able to find the services you recommend. Business users will be able to Pyn the location of their own location making their business easier to find online. </p>
              <p>With the participation of the Pynook community, our objective is to help home-based businesses overcome limitations, even those without access to mobile, internet or know-how.</p>
              <p>To start Pynning a location, you must first be a registered user. The button to add a Pyn is located next to the Experience icons. Complete the popup dialog with your comments, add an image and click submit to share this location with the community. Please note to Pyn a location successfully, you must enable at least Wifi location services on your mobile device and that image geotagging must be enabled on your phone’s camera.</p>
            </div>

            <div id="9" className="card-panel">
              <h4>What are the Terms of Use?</h4>

              <p>In order to fully enjoy our platform, we recommend that you take a few minutes to review our Terms of Use prior to registering an account with us. </p>
            </div>
          </div>

          <div id="accounts" className="col s12">
            <div id="10" className="card-panel">
              <h4>What is the difference between a User and a Business Account?</h4>
            </div>

            <div id="11" className="card-panel">
              <h4>How do I create a user page?</h4>

              <p>All registered users are provided with a User page to share and network with the community. Once you have created an account with us, you will be able to populate your User page with Pyns of your favourite home businesses.</p>
            </div>

            <div id="12" className="card-panel">
              <h4>How do I convert from a User to Business Account?</h4>

              <p>On the User page, Users will be able to upgrade to a Business account from here by clicking the Upgrade button, providing additional business and Paypal details and generating a Pyn of your business location so that your customers may find you easily. The Business account is free and charges only apply when you start to place listings or transact online via our platform. </p>
            </div>

            <div id="13" className="card-panel">
              <h4>How do I create a Listing?</h4>

            </div>

            <div id="14" className="card-panel">
              <h4>What are the charges for using the services?</h4>

            </div>
          </div>

          <div id="support" className="col s12">
            <div id="15" className="card-panel">
              <h4>How do I resolve Technical & Usage Issues?</h4>

              <p>As our website is currently being offered as a Beta service, we welcome comments and feedback that will assist us in improving our services. Should you encounter issues that are not covered by this FAQ, please contact us here.</p>
            </div>

            <div id="16" className="card-panel">
              <h4>How do I resolve Account Issues?</h4>

              <p>In order to maintain your User account in good standing, please take some time and review our Terms of Use policies.  Should you encounter issues that are not covered by this FAQ, please contact us here.</p>
            </div>
          </div>


          <div id="service" className="col s12">
            <div id="17" className="card-panel">
              <h4>How to Contact Us or Report Problems?</h4>
              <p>For most general queries about using our services, please take some time and review our Terms of Use and this FAQ.  Should you wish to feedback to us about your usage experience or to report any usage issue, please contact us here.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Frequently Asked Questions - Pynook");

  return {};
}, FAQ)
