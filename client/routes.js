import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter';

import Layout from '/imports/ui/layouts/Layout.jsx';

import Login from '/imports/ui/pages/accounts/Login';
import Register from '/imports/ui/pages/accounts/Register';
import NotFound from '/imports/ui/components/utils/NotFound';

import Home from '/imports/ui/pages/Home.jsx';
import Dashboard from '/imports/ui/pages/Dashboard';
import Convert from '/imports/ui/pages/Convert';

import Pyns from '/imports/ui/pages/pyn/Pyns.jsx';
import Pyn from '/imports/ui/pages/pyn/Pyn.jsx';
import PynAPlace from '/imports/ui/pages/pyn/PynAPlace.jsx';
import EditPyn from '/imports/ui/pages/pyn/EditPyn';

import MyPyns from '/imports/ui/pages/profile/MyPyns';

import AdminDashboard from '/imports/ui/pages/admin/AdminDashboard';
import PynsManagement from '/imports/ui/pages/admin/pyns/PynsManagement';
import BusinessPlansManagement from '/imports/ui/pages/admin/plans/BusinessPlansManagement';
import OrdersManagement from '/imports/ui/pages/admin/orders/OrdersManagement';
import NewBusinessPlan from '/imports/ui/pages/admin/plans/NewBusinessPlan';

import MyListings from '/imports/ui/pages/business/MyListings';
import MyBusinessProfile from '/imports/ui/pages/business/MyBusinessProfile';
import MyBusinessOrders from '/imports/ui/pages/business/MyBusinessOrders';

import Pay from '/imports/ui/pages/pay/Pay';

import MyOrders from '/imports/ui/pages/orders/MyOrders';
import PurchaseHistory from '/imports/ui/pages/orders/PurchaseHistory';

import CreateAListing from '/imports/ui/pages/listing/CreateAListing';

function becauseAuthenticated(context, redirect){
  if(Meteor.userId()){
    redirect("/");
  }
}

var ordersRoutes = FlowRouter.group({
  prefix: '/orders',
  name: 'order',
});

ordersRoutes.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <MyOrders />
    })
  },
  name: "orders.my-orders"
});

ordersRoutes.route("/history", {
  action: () => {
    mount(Layout, {
      content: () => <PurchaseHistory />
    })
  },
  name: "orders.purchase-history"
});



var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
});

adminRoutes.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <AdminDashboard />
    })
  },
  name: "admin.dashboard"
});

adminRoutes.route("/pyns", {
  action: () => {
    mount(Layout, {
      content: () => <PynsManagement />
    })
  },
  name: "admin.pyns"
});

adminRoutes.route("/plans", {
  action: () => {
    mount(Layout, {
      content: () => <BusinessPlansManagement />
    })
  },
  name: "admin.plans"
});

adminRoutes.route("/plans/new", {
  action: () => {
    mount(Layout, {
      content: () => <NewBusinessPlan />
    })
  },
  name: "admin.plans.new"
});

adminRoutes.route("/orders", {
  action: () => {
    mount(Layout, {
      content: () => <OrdersManagement />
    })
  },
  name: "admin.orders"
});


var profileRoutes = FlowRouter.group({
  prefix: "/dashboard",
  name: "dashboard"
});

profileRoutes.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <Dashboard />
    })
  },
  name: "dashboard"
});

profileRoutes.route("/my-pyns", {
  action: () => {
    mount(Layout, {
      content: () => <MyPyns />
    })
  },
  name: "profile.my-pyns"
});



var businessRoutes = FlowRouter.group({
  prefix: "/business",
  name: "business"
});

businessRoutes.route("/listings", {
  action: () => {
    mount(Layout, {
      content: () => <MyListings />
    })
  },
  name: "business.my-listings"
});

businessRoutes.route("/profile", {
  action: () => {
    mount(Layout, {
      content: () => <MyBusinessProfile />
    })
  },
  name: "business.my-profile"
});

businessRoutes.route("/orders", {
  action: () => {
    mount(Layout, {
      content: () => <MyBusinessOrders />
    })
  },
  name: "business.my-orders"
});


// Listings
var listingsRoutes = FlowRouter.group({
  prefix: "/listings",
  name: "listings"
});

listingsRoutes.route("/create", {
  name: "listings.create",
  action: () => {
    mount(Layout, {
      content: () => <CreateAListing />
    })
  }
});
// End Listing


// Pay
var listingsRoutes = FlowRouter.group({
  prefix: "/pay",
  name: "pay"
});

listingsRoutes.route("/:id", {
  name: "pay",
  action: params => {
    mount(Layout, {
      content: () => <Pay orderId={params.id} />
    })
  }
});
// End Pay



FlowRouter.triggers.enter([becauseAuthenticated], {only: ["login", "register"]})

FlowRouter.route('/', {
  name: "home",
  action: () => {
    mount(Layout, {
      content: () => <Home />
    });
  }
});


FlowRouter.route("/pyn/edit/:id", {
  name: "pyn.edit",
  action: params => {
    mount(Layout, {
      content: () => <EditPyn id={params.id} />
    })
  }
})

FlowRouter.route('/pyn/:id', {
  name: "pyn",
  action: params => {
    mount(Layout, {
      content: () => <Pyn id={params.id}/>
    });
  }
});

FlowRouter.route('/pyns', {
  name: "pyns",
  action: (params, queryParams) => {
    // console.log(queryParams)
    mount(Layout, {
      content: () => <Pyns query={queryParams}/>
    });
  }
});

FlowRouter.route('/pyn-a-place', {
  name: "pyn.a.place",
  action: () => {
    mount(Layout, {
      content: () => <PynAPlace />
    });
  }
});

FlowRouter.route("/login", {
  name: "login",
  action: () => {
    mount(Layout, {
      content: () => <Login />
    })
  }
})

FlowRouter.route("/register", {
  name: "register",
  action: () => {
    mount(Layout, {
      content: () => <Register />
    })
  }
});

FlowRouter.route("/convert", {
  name: "convert",
  action: () => {
    mount(Layout, {
      content: () => <Convert />
    })
  }
});

FlowRouter.notFound = {
    action: () => {
      mount(Layout, {
        content: () => <NotFound />
      })
    }
};
