import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PageHeader from '/imports/ui/components/utils/PageHeader';

const Privacy = props => {
  return(
    <div id="convert">
      <PageHeader src="/privacy-header.jpg" title="Privacy" />

      <div className="container">
        <div className="row center">
          <p>This Privacy Policy is an integral part of the Terms of Service. </p>
          <p>This Privacy Policy covers Pynook's process of personally identifiable and other information that Pynook collects and receives, including information related to your past use of Pynook products and services. The Privacy Policy also gives information about cookies, Pynook's and third parties use of cookies. This Privacy Policy does not apply to the practices of companies that Pynook does not own or control, or to people that Pynook does not employ or manage. </p>
          <p>We reserve the right to modify this Privacy Policy, so please review it frequently. If you object to any changes, you may cancel your account and stop using Pynook´s products and services. By continuing to use the Pynook Services after notice of changes has been sent to you or published on the Pynook´s website, you are consenting to the changes.</p>

          <div className="col s12">
            <h5>INFORMATION COLLECTION</h5>
            <p>Pynook collects personally identifiable information when you register for an account (i.e. register form), when you provide or share information about yourself or other persons (i.e. profile information, contact information, etc.), when you interact with us or other Users (i.e. customer services, complaint forms, forums, etc.), when you use the Service (i.e. clicking ads, uploading contents, etc.) and when you use your account to log in or authenticate to a third-party website or application. Pynook may combine information (including personally identifiable information) about you that we have with information we obtain from business partners or other companies. </p>
            <p>When you register with Pynook, we ask for information such as your name, email address, birth date, as well as your personal interests and preferences. Additionally, when you use the Service, we will collect information about your use of the Services, including, but not limited to, your device, your physical location and the searches carried out within the Services.</p>
            <p>Pynook also automatically receives and records, on our server logs, information about yourself that you share, as well as information from your device including your IP address, cookie information and the pages requested. Once you register with Pynook and sign into our Services, you are no longer anonymous to us and your usage data will be connected to your account.</p>
            <p>When you provide or share information about yourself or other persons, please note that certain information, statements, data and content (such as photographs) are likely to reveal gender, ethnic origin, nationality, age, and/or other personal information about you or other persons. Do not forget that you have control and the sole responsibility over the information what you upload or make available in the Service. </p>
          </div>

          <div className="col s12">
            <h5>USE OF THE INFORMATION </h5>

            <p>Pynook uses information (including anonymous and pseudonymous information, as well as personally identifiable information) for the following general purposes: </p>

            <ul className="collection">
              <li className="collection-item">Managing the registration process.</li>
              <li className="collection-item">Providing information about the Services.</li>
              <li className="collection-item">Customizing your experience in the Services.</li>
              <li className="collection-item">Fulfilling your requests for products and services.</li>
              <li className="collection-item">Improving our Services.</li>
              <li className="collection-item">Providing you with adverts and alerts based on your location, interest and/or preferences. </li>
              <li className="collection-item">Providing you with suggestions linked to you interests and/or preferences, and based on your location.</li>
              <li className="collection-item">Providing you with commercial communications sent by electronic means, with regards to products and services which may be of your interest.</li>
              <li className="collection-item">Conducting polls, surveys and research and providing anonymous reporting for internal and external clients.</li>
              <li className="collection-item">Managing requests for information, complaints and claims from Users.</li>

            </ul>
          </div>

          <div className="col s12">
            <h5>INFORMATION DISCLOSURE</h5>

            <p>Pynook does not rent, sell, or share information about you (including personally identifiable information) with other people or non-affiliated companies except to provide products or services you've requested, when we have your permission, or for the following purposes:</p>

            <ul className="collection">
              <li className="collection-item">To provide the information to trusted partners who work on behalf of or with Pynook under confidentiality agreements. These companies may use such information to help Pynook communicate with you (to the extent consented by you) about offers from Pynook and our marketing partners. However, these companies do not have any independent right to share this information.</li>
              <li className="collection-item">To respond to subpoenas, court orders, legal process, or to any legitimate request by authorities with which compliance is required, or to establish or exercise legal rights or defend against legal claims.</li>
              <li className="collection-item">To believe it is necessary to share such information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Pynook's Terms of Service, or as otherwise required by law. </li>
              <li className="collection-item">To transfer such information about you if Pynook acquires, or is acquired by or merged with, another company. In this event, Pynook will notify you before information about you is transferred and becomes subject to a different privacy policy. </li>
            </ul>

            <p>Pynook sends alerts and displays targeted ads based on anonymised or pseudonymised data and information, and Pynook may also send alerts and display targeted ads based on personally identifiable information. Advertisers (including ad serving companies) may assume that people who interact with, view, or click targeted ads meet the targeting criteria. Pynook does not provide any personally identifiable information to the advertiser when you interact with or view an alert and/or a targeted ad. However, by interacting with or viewing an ad you are consenting to the possibility that the advertiser will make the assumption that you meet the targeting criteria used to send the alert and/or display the ad. </p>
            <p>Pynook may transfer your personal information for the general purposes set out above to any Pynook group company worldwide, and they may use your personal information as set forth below. </p>
          </div>

          <div className="col s12">
            <h5>INTERACTING AND SHARING INFORMATION</h5>

            <p>By default, User’s profile is private and the information which is shared with others is the User ID, his/her images, “likes”, “Pyns” (to create a geotag location of an image, place or location), comments, messages, posts or similar user generated or contributed information. Any other information linked to the profile is private and Users have the exclusive control over their profiles and the information they share with others. Users may freely decide what to share and what to keep private and confidential.</p>
            <p>Any User may comment on other’s Pyns, as well as upload photos. Only registered Users may connect with each other via posts on either User’s profile page blog, or by 1using the “Follow” functionality. For being part of the Network of a User, the connection approval from such User will be required.</p>
            <p>Pynook offers you the opportunity to post, submit, Pyn and comment upon content and information within the Services, being such activity publicly accessible by other registered Pynook Users. Such activity may be indexed by search engines or may result in displaying some of your information outside of Pynook.</p>
          </div>

          <div className="col s12">
            <h5>COOKIES</h5>

            <p>Pynook´s Services use cookies. A cookie is a small amount of data that is sent to your device with the purpose of registering the User´s activity while navigating within the Service. </p>
            <p>Pynook uses cookies with regards to the Users that navigate within the Service, for statistics and analytics purposes. In detail, by means of using cookies, Pynook may recognize the connexion IP address, the time of use and the content visited, as well as the User´s preferences. Cookies are also used for collecting information about the User´s preferences and interests, based on the User´s activity and navigation within the Web Site, in order to provide Users with alerts and adverts relevant to the User´s interest and preferences.</p>
            <p>Pynook allows selected companies that are presenting advertisements on some of our pages to set and access their own cookies on your device. Other companies use of their cookies is subject to their own privacy policies, not this one. Advertisers or other companies do not have access to Pynook's cookies. </p>
            <p>Pynook uses web beacons to access our cookies inside and outside our network of web sites and in connection with Pynook products and services.</p>
            <p>You can configure your device in order to accept all cookies, reject all cookies, or notify you when a cookie is sent. Please, check the "Cookies" menu of your device to learn how to change the cookie preferences. If you opt-out you may lose certain functionality of the Services, as well as the potential benefit of receiving ads that are targeted to your interests which, in turn, may limit your ability to fully realize the benefits of the Services.</p>
          </div>

          <div className="col s12">
            <h5>YOUR ABILITY TO EDIT AND DELETE YOUR ACCOUNT INFORMATION AND PREFERENCES</h5>

            <p>You can edit your account Settings, including your alerts and ads preferences, at any time and opt-out from reception of alerts and other commercial communications. If you opt-out you may lose certain functionality of the Services, as well as the potential benefit of receiving alerts and ads that are targeted to your locations, preferences and/or interests. This, in turn, may limit your ability to fully realize the benefits of the Services.</p>
            <p>We reserve the right to send you certain communications, such as service announcements and administrative messages and other communications relating to the Services, without offering you the opportunity to opt out of receiving them. </p>
            <p>You may close your Pynook account at any time, confirming your choice to terminate the account. Some information may possibly temporarily remain in our archived records after your account has been deleted to comply with our legal obligations, resolve disputes, and enforce the Terms of Service. </p>

          </div>

          <div className="col s12">
            <h5>CONFIDENTIALITY AND SECURITY</h5>

            <p>The processing of personal data is carried out in compliance with requirements laid down by the applicable regulations and, in particular, with the obligation of keeping the data confidential and secret. </p>
            <p>We limit access to information about you to employees who we reasonably believe need to come into contact with that information in order to provide products or services to you or in order to carry out their jobs. We also ensure that the appropriate security measures have been adopted so that any change, loss, non-authorised access, or harm to personal data and registered information is avoided.</p>
            <p>We have physical, electronic, and procedural safeguards that comply with our legal obligations to protect information about you, in accordance with industry standard protocols and technology. However, since the Internet is not a 100% secure environment, we cannot ensure or warrant the security of any information you transmit to Pynook. Please note that emails, instant messaging, and similar means of communication with other Users are not encrypted, and we strongly advise you not to communicate any confidential information through these means.</p>
            <p>Please do not forget that it is your responsibility to protect the security of your login information.</p>
          </div>

          <div className="col s12">
            <h5>DEVELOPERS USING PYNOOK PLATFORM SERVICES</h5>

            <p>We collaborate with and allow third parties to use Pynook’s developer platform to offer services and functionality in conjunction with and outside of Pynook. These third parties are either partners (“Pynook Partners”) who provide services (“Combined Services”), for example, InApps, or developers (“Platform Developers”) who have agreed to our developer terms in order to build applications (“Platform Applications”). Both Pynook Partners and Platform Developers are restrained from access, storage and use of your information unless or until you use such Combined Service or Platform Application. </p>
            <p>If you choose to use Combined Services or a Platform Application, you may be asked to confirm acceptance of the privacy policy and/or user agreement of the Pynook Partner or Platform Developer, which have not necessarily been reviewed or approved by Pynook. It is your choice whether or not to make use of Combined Services or Platform Applications and whether to proceed under any third party terms, and once you do, the third party's terms, and not this policy, will govern how they process information you provide to them directly or through your Pynook account. </p>
            <p>Also, despite our agreements and the technical steps taken to restrict access to, and avoid possible misuse of, information, we do not screen or audit all Combined Services or Platform Applications. We also cannot guarantee that any Pynook Partner or Platform Developer will abide by our agreement. You agree that your use of Combined Services or Platform Applications is on an “as is” basis and without any warranty.</p>
            <p>If you use any Combined Service or Platform Application, the Pynook Partner or Platform Developer may access and share certain information about you, such as non-public profile information and information visible only to your connections. This includes information about your connections by virtue of you being connected to others. However, unless you have used a Combined Service or Platform Application, Pynook Partners and Platform Developers can only access the information about you that is otherwise visible to other Pynook Users. </p>
            <p>To revoke permission granted to a Combined Service or Platform Application at any time, please visit the settings page. If the relevant Platform Developer, Application, or Pynook Partner is not listed under Authorized Applications, go directly to the Application Details page for the Platform Application you wish to uninstall. Note, however, that even if you revoke the permission granted a third party, your connections, other members of your network, or other Users of Pynook may still be using the Platform Application, so the Platform Application or Combined Service may still have access to certain information about you, just as those Users do. You may opt-out of providing information to third parties through others connected to you by accessing the “Turn on/off data sharing with third-party applications” control under settings, as and when it becomes applicable. To report any suspected misuse of information, contact Pynook’s customer service. Pynook is not responsible for your use of, or inability to use, any Combined Service or Platform Application, including the content, accuracy, or reliability of applications and the privacy practices or other policies of Pynook Partners or Platform Developers.</p>
          </div>

          <div className="col s12">
            <h5>RIGHTS TO ACCESS, CORRECT AND ELIMINATE INFORMATION ABOUT YOU</h5>

            <p>We have established what we believe to be reasonable default settings. Because Users may use and interact with Pynook in a variety of ways, and because those uses may change over time, we designed our settings to provide our Users with granular control over the information they share. We encourage you to review your account settings and adjust them in accordance with your preferences.</p>
            <p>You can review the personal information you provide to us and make any desired changes to the information you publish, or to the settings for your account including your identification and contact data, as well as your interests and preferences, even to opt-out from the alerts system, at any time, by logging in to your account. Please be aware that even after your request for a change is processed, Pynook may, for a time, retain residual information about you in its backup and/or archival copies of its database.</p>
            <p>You have a right to access, modify, correct and withdraw your consent to Pynook’s collection and processing of your information at any time, in accordance with the terms of this Privacy Policy and the Terms of Service, by changing your Settings, or by closing your account, but please note that your withdrawal of consent will not be retroactive. </p>
            <p>If you close your account, we will remove your name and other personally identifiable information from our publicly viewable database. If you cancel your account, we have no obligation to retain your information, and may delete any or all of your account information without liability. However, we may retain certain data contributed by you if Pynook believes it may be necessary to prevent fraud or future abuse, or for legitimate business purposes, such as analysis of aggregated, non-personally identifiable data, or for account recovery, or if required by law. Pynook may also retain and use your information if necessary to provide the Services to other Users. Similarly, other information you have shared with others, or that other Users have copied, may also remain visible. Pynook disclaims any liability in relation to the deletion or retention (subject to the terms herein) of information or any obligation not to delete the information. Pynook does not control the frequency with which search engines update their cache which may contain certain public profile information that has since been removed from Pynook’s publicly viewable database. Please note, however that information you have shared with others, or that other Users have copied, may also remain visible even if you request its deletion.</p>
            <p>If we learn that a User is deceased, we may memorialize the User’s account. In these cases we may restrict profile access, remove messaging functionality, and cancel an account if we receive a formal request from the User’s next of kin or other valid legal request to do so. </p>

          </div>

          <div className="col s12">
            <h5>DATA TRANSFER</h5>

            <p>When you register with Pynook, you acknowledge that in using the Services, you will be causing communications to be sent through Pynook's network, portions of which are located abroad. As a result, and also as a result of Pynook's network architecture, business practices and the nature of electronic communications, even communications that seem to be intrastate in nature can result in the transmission of interstate communications regardless of where you are physically located at the time of transmission. </p>
          </div>

          <div className="col s12">
            <h5>CHANGES TO THIS PRIVACY POLICY</h5>

            <p>Pynook may amend this policy from time to time. If we make any substantial changes in the way we use your information we will notify you by sending a notice to the primary email address specified in your Pynook account or by posting a prominent notice on our pages, so that you may review the changed terms prior to continuing to use the site. As always, if you object to any of the changes to our terms, and you no longer wish to use Pynook, you may close your account.  Using the Pynook Services after a notice of changes has been sent to you or published on our site shall constitute consent to the changed terms or practices. </p>
          </div>

          <div className="col s12">
            <h5>QUESTIONS OR COMMENTS</h5>

            <p>If you have questions or comments about this Privacy Policy, please contact us.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Privacy Policy - Pynook");

  return {};
}, Privacy)
