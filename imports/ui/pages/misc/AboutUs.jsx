import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PageHeader from '/imports/ui/components/utils/PageHeader';

const AboutUs = props => {
  return(
    <div id="convert">
      <PageHeader src="/newbie-header.jpg" title="About Us" />

      <div className="container">
        <div className="row">
          <h2 className="header center">Who are we?</h2>
          <div className="col s12 about_content center">
            <p>
              Based in Singapore, Pynook was founded in June 2015 as a social community connecting users to home-based businesses. Specifically, Pynook aims to make it easier for stay-at-home women and home-based entrepreneurs all over the world to overcome limitations and create an income for themselves. By harnessing the power of the community, Pynook hopes to reach and empower even those without access to mobile technology or the internet.
            </p>

            <p>
              Whether you’d like to buy home-made, learn something new or socialize to make new friends, Pynook offers new experiences wherever you go.
            </p>

            <p>
              The world is our community. It’s time to see how the other half lives.
            </p>

            <p>
              Choose an experience. Choose a category. Go.
            </p>
          </div>
        </div>

        <div className="row" id="business">
          <h2 className="header center">Pynook For Business</h2>

          <div className="col s12 l8 about_content center">
            <p className="marginTopZero">One of the most daunting obstacles of a home-based business is marketing (or, the ability to reach out and acquire customers). Many home-based businesses are female-owned, single-person operated enterprises that are the embodiment of the owner’s specific skill or passion. However, running a business and a home at the same time is never easy.</p>

            <p>Pynook is a community platform that is focused on making it easier to find, share, service and sell home-based business products and services globally. Whether your home-based business sells products, provides a learning experience or creates social gatherings, Pynook can help to enhance your business presence beyond your neighborhood.</p>

            <p>Here’s how your home-based business can benefit from using the Pynook platform:
              Bring customers to find your location.
              Create an online marketing presence.
              List your products and services, and sell directly to customers online globally.
              Review the feedback you receive and improve your business.</p>

            <p>For initial assistance, please view our <a href={FlowRouter.path("faq")}>FAQ</a>’s.</p>
          </div>

          <div className="col l4 hide-on-med-and-down center">
            <img style={{height: "415px"}} src="/newbie-business.jpg" />
          </div>
        </div>

        <div className="row" id="neighbourhoods">
          <h2 className="header center">Pynook For Neighbourhoods</h2>

          <div className="col l4 hide-on-med-and-down center left" style={{overflow: "hidden"}}>
            <img style={{height: "310px"}} src="/newbie-neighbourhood.jpg" />
          </div>

          <div className="col s12 l8 about_content center right">
            <p className="marginTopZero">Most people have tried or know everything retail where they live.</p>

            <p>How about home-based businesses? These enterprising neighbors might just serve up solutions to your needs - provided you know where to find them. It’s amazing how home-based businesses are more flexible and eager when it comes to customizing a product or service to suit your exact needs. There’s no better alternative to buying retail.</p>

            <p>In the process, we hope you also made a new friend and learnt why some home-based businesses got started the way they did.</p>

            <p>If buying from a home-based business means getting it personalized your way and helping someone out, what’s there not to like?</p>

<p>For initial assistance, please view our <a href={FlowRouter.path("faq")}>FAQ</a>’s.</p>
          </div>
        </div>

        <div className="row" id="travellers">
          <h2 className="header center">Pynook For Travellers</h2>

          <div className="col s12 l8 about_content center">
            <p className="marginTopZero">If you like travelling or making new friends, find time and try out a new experience.</p>

            <p>Pynook presents opportunities for you to step into a local’s life and experience a whole new culture. If you look closely enough, home-based businesses are found in all corners of the world. Most offer a dedicated product and service that may just cater to your very need. </p>
            <p>Why keep it to yourself after that? Share your discoveries and experiences with the Pynook community and show them the way too. </p>
            <p>Next time you’re travelling, try something local.</p>
<p>For initial assistance, please view our <a href={FlowRouter.path("faq")}>FAQ</a>’s.</p>
          </div>

          <div className="col l4 hide-on-med-and-down center">
            <img style={{height: "265px"}} src="/newbie-travel.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("About Us - Pynook");

  return {};
}, AboutUs)
