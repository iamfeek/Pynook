import {FlowRouterSEO} from 'meteor/tomwasd:flow-router-seo'

SEO = new FlowRouterSEO();


SEO.setDefaults({
  meta: {
    'property="og:type"': 'website',
    'property="og:site_name"': 'Pynook',
    'name="twitter:card"': 'summary',
    'name="twitter:site"': '@TwitterUsername'
  }
});
