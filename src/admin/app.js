export default {
  config: {
    head: {
      favicon: '/logo/ntouch-icon.ico',
    },
    menu: {
      sections: [
        {
          id: 'pages',
          title: '📄 Pages',
          links: [
            {
              title: 'Landing Page',
              to: '/content-manager/singleType/api::landing-page.landing-page',
              name: 'landing-page',
            },
            {
              title: 'Contact Page',
              to: '/content-manager/singleType/api::contact.contact',
              name: 'contact',
            },
            {
              title: 'Our Story Page',
              to: '/content-manager/singleType/api::our-story.our-story',
              name: 'our-story',
            },
            {
              title: 'Guest Experience',
              to: '/content-manager/singleType/api::guest-experience.guest-experience',
              name: 'guest-experience',
            },
            {
              title: 'Pricing Page',
              to: '/content-manager/singleType/api::pricing.pricing',
              name: 'pricing',
            },
            {
              title: 'Pms Page',
              to: '/content-manager/singleType/api::pms.pms',
              name: 'pms',
            },
            {
              title: 'Solutions Pages',
              to: '/content-manager/singleType/api::solutions-by-property-size.solutions-by-property-size',
              name: 'solutions-by-property-size',
            },
          ],
        },
        {
          id: 'plans-flow',
          title: '🛎 Plans Flow',
          links: [
            {
              title: 'Plan Page',
              to: '/content-manager/singleType/api::plan-page.plan-page',
              name: 'plan-page',
            },
            {
              title: 'Plans - Client Hotel Detail',
              to: '/content-manager/singleType/api::client-hotel-detail.client-hotel-detail',
              name: 'client-hotel-detail',
            },
            {
              title: 'Plans - Package Detail',
              to: '/content-manager/singleType/api::plans-package-detail.plans-package-detail',
              name: 'plans-package-detail',
            },
            {
              title: 'Plans - Summary & Payment',
              to: '/content-manager/singleType/api::summary-and-payment.summary-and-payment',
              name: 'summary-and-payment',
            },
          ],
        },
        {
          id: 'global-settings',
          title: '🌍 Global Settings',
          links: [
            {
              title: 'Shared - Navbar',
              to: '/content-manager/singleType/api::shared-navbar.shared-navbar',
              name: 'shared-navbar',
            },
            {
              title: 'Shared - Footer',
              to: '/content-manager/singleType/api::shared-footer.shared-footer',
              name: 'shared-footer',
            },
            {
              title: 'Shared - FAQ',
              to: '/content-manager/singleType/api::shared-faq.shared-faq',
              name: 'shared-faq',
            },
            {
              title: 'Shared - Product Suite',
              to: '/content-manager/singleType/api::shared-product-suite.shared-product-suite',
              name: 'shared-product-suite',
            },
            {
              title: 'Shared - Ntouch Edge',
              to: '/content-manager/singleType/api::shared-ntouch-edge.shared-ntouch-edge',
              name: 'shared-ntouch-edge',
            },
          ],
        },
      ],
    },
  },
  bootstrap(app) {},
}; 