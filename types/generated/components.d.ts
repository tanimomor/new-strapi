import type { Schema, Struct } from '@strapi/strapi';

export interface AssetsImage extends Struct.ComponentSchema {
  collectionName: 'components_assets_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alternative_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AssetsVideo extends Struct.ComponentSchema {
  collectionName: 'components_assets_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    alternative_text: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'light']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface ContactContactFormLocalized extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_form_localized_s';
  info: {
    displayName: 'Contact Form (Localized)';
  };
  attributes: {
    back_button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Back'>;
    business_email_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Business Email'>;
    business_email_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your business email'>;
    contact_number_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Number'>;
    contact_number_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your phone number'>;
    first_name_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'First Name'>;
    first_name_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your first name'>;
    form_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Let's Connect">;
    last_name_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Last Name'>;
    last_name_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your last name'>;
    message_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'How can we help you?'>;
    message_placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Write your message here...'>;
    submit_button_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Send'>;
  };
}

export interface ContactContactSliderUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_slider_unlocalized_s';
  info: {
    displayName: 'Contact Slider (Unlocalized)';
  };
  attributes: {
    slider_images: Schema.Attribute.Component<'assets.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface LandingPageAboutUsLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_us_localized_s';
  info: {
    displayName: 'About Us (Localized)';
  };
  attributes: {
    button_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Discover our Journey'>;
    description_1: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Born in Saudi Arabia and inspired by the timeless grace of Arabian hospitality, nTouch blends years of industry insight with cutting-edge AI to transform how luxury is delivered.'>;
    description_2: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"We don't just automate\u2014we elevate. Every solution is crafted with elegance, precision, and a deep understanding of what today's guests truly value.">;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'A Journey Untold'>;
    mini_title: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'About us'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Inspired by Hospitality, Perfected by Technology'>;
  };
}

export interface LandingPageAboutUsUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_us_unlocalized_s';
  info: {
    displayName: 'About Us (Unlocalized)';
  };
  attributes: {
    about_us_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface LandingPageFaqAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_faq_accordion_item_s';
  info: {
    displayName: 'FAQ Accordion Item';
  };
  attributes: {
    answer: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'nTouch PMS is an AI-driven platform designed to simplify property management across multiple properties, enhancing productivity and guest experiences.'>;
    question: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'What makes nTouch different from other PMS or automation providers?'>;
  };
}

export interface LandingPageFaqTab extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_faq_tab_s';
  info: {
    displayName: 'FAQ Tab';
  };
  attributes: {
    accordion_items: Schema.Attribute.Component<
      'landing-page.faq-accordion-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
        },
        number
      >;
    tab_label: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'General'>;
  };
}

export interface LandingPageHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_localized_s';
  info: {
    displayName: 'Hero (Localized)';
  };
  attributes: {
    first_button: Schema.Attribute.Component<'common.button', false>;
    second_button: Schema.Attribute.Component<'common.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface LandingPageHeroUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_unlocalized_s';
  info: {
    displayName: 'Hero (Unlocalized)';
  };
  attributes: {
    background_video: Schema.Attribute.Component<'assets.video', false>;
    banner_logo: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface LandingPageLandingPmsLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_landing_pms_localized_s';
  info: {
    displayName: 'Landing PMS (Localized)';
  };
  attributes: {
    button_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Explore PMS'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Property Management, Perfected. Seamlessly manage every touchpoint of your property, from reservations to housekeeping, all within one beautifully intuitive system. Designed to simplify operations, empower staff, and deliver a flawless guest experience at every stage.'>;
    feature_list: Schema.Attribute.JSON &
      Schema.Attribute.DefaultTo<
        [
          'Intuitive Front Desk & Reservation Controls',
          'Real-time Room Status & Housekeeping Coordination',
          'Automated Billing & Multi-currency Support',
          'Guest Profile Intelligence',
          'Centralized Command for Multi-property Chains',
        ]
      >;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'nTouch PMS:'>;
    mini_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our premium products'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'The AI-Enhanced Solution for Modern Hospitality'>;
  };
}

export interface LandingPageLandingPmsUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_landing_pms_unlocalized_s';
  info: {
    displayName: 'Landing PMS (Unlocalized)';
  };
  attributes: {
    background_ellipse: Schema.Attribute.Component<'assets.image', false>;
    product_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface LandingPageNtouchEdgeCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_ntouch_edge_card_s';
  info: {
    displayName: 'nTouch Edge Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'No more juggling disconnected systems. Manage bookings, housekeeping, billing, and guest services from one single platform.'>;
    title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'All-in-One Control'>;
  };
}

export interface LandingPageNtouchEdgeLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_ntouch_edge_localized_s';
  info: {
    displayName: 'nTouch Edge (Localized)';
  };
  attributes: {
    cards: Schema.Attribute.Component<'landing-page.ntouch-edge-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    main_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Discover the intelligence, elegance, and efficiency that set nTouch apart from the rest.'>;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'The nTouch Edge'>;
  };
}

export interface LandingPageNtouchEdgeUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_ntouch_edge_unlocalized_s';
  info: {
    displayName: 'nTouch Edge (Unlocalized)';
  };
  attributes: {
    card_images: Schema.Attribute.Component<'assets.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface LandingPagePmsFaqLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_pms_faq_localized_s';
  info: {
    displayName: 'PMS FAQ (Localized)';
  };
  attributes: {
    contact_button_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Contact Us'>;
    faq_tabs: Schema.Attribute.Component<'landing-page.faq-tab', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    main_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Clarity is luxury. Here are the questions we're asked most. And if there's anything more you need, we're just a message away.">;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
    more_question_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Got more questions?'>;
  };
}

export interface LandingPagePmsFaqUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_pms_faq_unlocalized_s';
  info: {
    displayName: 'PMS FAQ (Unlocalized)';
  };
  attributes: {
    faq_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface LandingPageReviewSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_review_section_localized_s';
  info: {
    displayName: 'Review Section (Localized)';
  };
  attributes: {
    statistics: Schema.Attribute.Component<
      'landing-page.statistic-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    testimonials: Schema.Attribute.Component<
      'landing-page.testimonial-card',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface LandingPageReviewSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_review_section_unlocalized_s';
  info: {
    displayName: 'Review Section (Unlocalized)';
  };
  attributes: {
    profile_images: Schema.Attribute.Component<'assets.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    quote_icon: Schema.Attribute.Component<'assets.image', false>;
    video_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface LandingPageStatisticCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_statistic_card_s';
  info: {
    displayName: 'Statistic Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Properties Automated & Modernized'>;
    number: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'50+'>;
  };
}

export interface LandingPageTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonial_card_s';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    button_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Watch Video'>;
    profile_name: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Omar Al-Fahad'>;
    profile_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'General Manager, Zayana Luxury Hotels'>;
    testimonial_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"With ntouch PMS, we finally have a system that understands how a luxury hotel operates\u2014smart, seamless, and surprisingly intuitive. It's become the silent engine behind our elevated guest experience.">;
  };
}

export interface LandingPageWhoWeServeLocalized extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_who_we_serve_localized_s';
  info: {
    displayName: 'Who We Serve (Localized)';
  };
  attributes: {
    button_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Reimagine Your Space'>;
    image_overlay_texts: Schema.Attribute.JSON &
      Schema.Attribute.DefaultTo<
        [
          'Apartments Hotels',
          'Office Spaces',
          'Luxury Hotels',
          'Boutique Hotels',
          'Vacation Rentals',
        ]
      >;
    main_title: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Who We Serve'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Serving Iconic Hospitality in Saudi Arabia'>;
  };
}

export interface LandingPageWhoWeServeUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_who_we_serve_unlocalized_s';
  info: {
    displayName: 'Who We Serve (Unlocalized)';
  };
  attributes: {
    image_1: Schema.Attribute.Component<'assets.image', false>;
    image_2: Schema.Attribute.Component<'assets.image', false>;
    image_3: Schema.Attribute.Component<'assets.image', false>;
    image_4: Schema.Attribute.Component<'assets.image', false>;
    image_5: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface OurStoryOurClientsLocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_clients_localized_s';
  info: {
    displayName: 'Our Clients (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Our clients are more than customers\u2014they're co-creators of a smarter, more soulful hospitality experience. From luxury hotels and boutique properties to modern vacation rentals and serviced apartments, we partner with those who dare to offer something unforgettable. Together, we've transformed operations and elevated guest journeys across 50+ properties and counting\u2014all united by a commitment to excellence and innovation.">;
    main_title: Schema.Attribute.Blocks &
      Schema.Attribute.DefaultTo<
        [
          {
            children: [
              {
                text: 'Built for the';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
          {
            children: [
              {
                bold: true;
                text: 'Visionaries of Hospitality';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
        ]
      >;
    section_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'our clients'>;
  };
}

export interface OurStoryOurClientsUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_clients_unlocalized_s';
  info: {
    displayName: 'Our Clients (Unlocalized)';
  };
  attributes: {
    clients_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface OurStoryOurMissionLocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_mission_localized_s';
  info: {
    displayName: 'Our Mission (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"At ntouch, our mission is simple yet ambitious: to blend comfort with intelligence. We believe operational efficiency and guest delight should go hand in hand. By infusing automation and AI into the fabric of hotel operations, we help properties deliver seamless service, meaningful moments, and elevated experiences\u2014ones that don't just satisfy but stay with people. Because in the end, hospitality isn't about systems. It's about memories.">;
    main_title: Schema.Attribute.Blocks &
      Schema.Attribute.DefaultTo<
        [
          {
            children: [
              {
                text: 'To';
                type: 'text';
              },
              {
                bold: true;
                text: ' Make';
                type: 'text';
              },
              {
                text: ' Smart';
                type: 'text';
              },
              {
                bold: true;
                text: ' Hospitality';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
          {
            children: [
              {
                text: ' Feel';
                type: 'text';
              },
              {
                bold: true;
                text: ' Effortless';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
        ]
      >;
    section_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'our mission'>;
  };
}

export interface OurStoryOurMissionUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_mission_unlocalized_s';
  info: {
    displayName: 'Our Mission (Unlocalized)';
  };
  attributes: {
    mission_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface OurStoryOurRootsLocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_roots_localized_s';
  info: {
    displayName: 'Our Roots (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Our story begins in the heart of Saudi Arabia\u2014a land where generosity, hospitality, and human connection have always been sacred. At ntouch, we took these timeless values and asked a bold question: what if the soul of Arabian hospitality could meet the precision of intelligent technology? The result is a platform that honours tradition while delivering the speed, personalization, and sophistication today's world demands.">;
    main_title: Schema.Attribute.Blocks &
      Schema.Attribute.DefaultTo<
        [
          {
            children: [
              {
                text: 'Rooted in Heritage,\nBuilt for Tomorrow';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
        ]
      >;
    mini_title: Schema.Attribute.Text & Schema.Attribute.DefaultTo<'our roots'>;
  };
}

export interface OurStoryOurRootsUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_roots_unlocalized_s';
  info: {
    displayName: 'Our Roots (Unlocalized)';
  };
  attributes: {
    roots_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface OurStoryOurStoryHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_story_hero_localized_s';
  info: {
    displayName: 'Our Story Hero (Localized)';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Born in Saudi Arabia, inspired by the warmth of Arabian hospitality, and built for the future\u2014ntouch reimagines traditional service through the lens of AI and smart luxury. We don't just automate operations; we craft experiences that stay with guests for life.">;
    hero_title: Schema.Attribute.Blocks &
      Schema.Attribute.DefaultTo<
        [
          {
            children: [
              {
                text: 'From Concept to Creation, ';
                type: 'text';
              },
              {
                bold: true;
                text: 'A Journey Untold!';
                type: 'text';
              },
            ];
            type: 'paragraph';
          },
        ]
      >;
  };
}

export interface OurStoryOurStoryHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_story_hero_unlocalized_s';
  info: {
    displayName: 'Our Story Hero (Unlocalized)';
  };
  attributes: {
    hero_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface OurStoryReviewSectionLocalized extends Struct.ComponentSchema {
  collectionName: 'components_our_story_review_section_localized_s';
  info: {
    displayName: 'Review Section (Localized)';
  };
  attributes: {
    stat_cards: Schema.Attribute.Component<'our-story.statistic-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface OurStoryStatisticCard extends Struct.ComponentSchema {
  collectionName: 'components_our_story_statistic_cards';
  info: {
    displayName: 'Statistic Card';
  };
  attributes: {
    card_style: Schema.Attribute.Enumeration<
      ['stat-card-1', 'stat-card-2', 'stat-card-3']
    > &
      Schema.Attribute.DefaultTo<'stat-card-1'>;
    stat_description: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Properties Automated & Modernized'>;
    stat_number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'50+'>;
  };
}

export interface PmsClientCard extends Struct.ComponentSchema {
  collectionName: 'components_pms_client_cards';
  info: {
    displayName: 'Client Card';
  };
  attributes: {
    client_image: Schema.Attribute.Component<'assets.image', false>;
    image_caption: Schema.Attribute.String;
  };
}

export interface PmsNtouchEdgeCard extends Struct.ComponentSchema {
  collectionName: 'components_pms_ntouch_edge_cards';
  info: {
    displayName: 'nTouch Edge Card';
  };
  attributes: {
    feature_icon: Schema.Attribute.Component<'assets.image', false>;
    feature_text: Schema.Attribute.String;
  };
}

export interface PmsPmsClientLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_client_localized_s';
  info: {
    displayName: 'PMS Client (Localized)';
  };
  attributes: {
    client_cards: Schema.Attribute.Component<'pms.client-card', true>;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface PmsPmsClientUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_client_unlocalized_s';
  info: {
    displayName: 'PMS Client (Unlocalized)';
  };
  attributes: {};
}

export interface PmsPmsFeatureSectionLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_section_localized_s';
  info: {
    displayName: 'PMS Feature Section (Localized)';
  };
  attributes: {
    feature_description: Schema.Attribute.Text;
    feature_list_items: Schema.Attribute.Text;
    feature_subtitle: Schema.Attribute.String;
    feature_title: Schema.Attribute.String;
  };
}

export interface PmsPmsFeatureSectionReverseLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_section_reverse_localized_s';
  info: {
    displayName: 'PMS Feature Section Reverse (Localized)';
  };
  attributes: {
    feature_description: Schema.Attribute.Text;
    feature_list_items: Schema.Attribute.Text;
    feature_subtitle: Schema.Attribute.String;
    feature_title: Schema.Attribute.String;
  };
}

export interface PmsPmsFeatureSectionReverseUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_section_reverse_unlocalized_s';
  info: {
    displayName: 'PMS Feature Section Reverse (Unlocalized)';
  };
  attributes: {
    feature_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PmsPmsFeatureSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_section_unlocalized_s';
  info: {
    displayName: 'PMS Feature Section (Unlocalized)';
  };
  attributes: {
    feature_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PmsPmsFeatureTabsLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_tabs_localized_s';
  info: {
    displayName: 'PMS Feature Tabs (Localized)';
  };
  attributes: {
    feature_tabs: Schema.Attribute.Component<'common.button', true>;
    section_title: Schema.Attribute.String;
  };
}

export interface PmsPmsFeatureTabsUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_tabs_unlocalized_s';
  info: {
    displayName: 'PMS Feature Tabs (Unlocalized)';
  };
  attributes: {};
}

export interface PmsPmsHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_hero_localized_s';
  info: {
    displayName: 'PMS Hero (Localized)';
  };
  attributes: {
    first_button: Schema.Attribute.Component<'common.button', false>;
    second_button: Schema.Attribute.Component<'common.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface PmsPmsHeroUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_hero_unlocalized_s';
  info: {
    displayName: 'PMS Hero (Unlocalized)';
  };
  attributes: {
    hero_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PmsPmsNtouchEdgeLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_ntouch_edge_localized_s';
  info: {
    displayName: 'PMS nTouch Edge (Localized)';
  };
  attributes: {
    feature_boxes: Schema.Attribute.Component<'pms.ntouch-edge-card', true>;
    section_title: Schema.Attribute.String;
  };
}

export interface PmsPmsNtouchEdgeUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_ntouch_edge_unlocalized_s';
  info: {
    displayName: 'PMS nTouch Edge (Unlocalized)';
  };
  attributes: {};
}

export interface PricingPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_description: Schema.Attribute.Text;
    card_icon: Schema.Attribute.Component<'assets.image', false>;
    card_title: Schema.Attribute.String;
    feature_list: Schema.Attribute.Text;
  };
}

export interface PricingPricingHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_hero_localized_s';
  info: {
    displayName: 'Pricing Hero (Localized)';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface PricingPricingHeroUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_hero_unlocalized_s';
  info: {
    displayName: 'Pricing Hero (Unlocalized)';
  };
  attributes: {};
}

export interface PricingPricingSectionLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_section_localized_s';
  info: {
    displayName: 'Pricing Section (Localized)';
  };
  attributes: {
    hero_localized: Schema.Attribute.Component<
      'pricing.pricing-hero-localized',
      false
    >;
    pricing_cards: Schema.Attribute.Component<'pricing.pricing-card', true>;
  };
}

export interface PricingPricingSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_section_unlocalized_s';
  info: {
    displayName: 'Pricing Section (Unlocalized)';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assets.image': AssetsImage;
      'assets.video': AssetsVideo;
      'common.button': CommonButton;
      'contact.contact-form-localized': ContactContactFormLocalized;
      'contact.contact-slider-unlocalized': ContactContactSliderUnlocalized;
      'landing-page.about-us-localized': LandingPageAboutUsLocalized;
      'landing-page.about-us-unlocalized': LandingPageAboutUsUnlocalized;
      'landing-page.faq-accordion-item': LandingPageFaqAccordionItem;
      'landing-page.faq-tab': LandingPageFaqTab;
      'landing-page.hero-localized': LandingPageHeroLocalized;
      'landing-page.hero-unlocalized': LandingPageHeroUnlocalized;
      'landing-page.landing-pms-localized': LandingPageLandingPmsLocalized;
      'landing-page.landing-pms-unlocalized': LandingPageLandingPmsUnlocalized;
      'landing-page.ntouch-edge-card': LandingPageNtouchEdgeCard;
      'landing-page.ntouch-edge-localized': LandingPageNtouchEdgeLocalized;
      'landing-page.ntouch-edge-unlocalized': LandingPageNtouchEdgeUnlocalized;
      'landing-page.pms-faq-localized': LandingPagePmsFaqLocalized;
      'landing-page.pms-faq-unlocalized': LandingPagePmsFaqUnlocalized;
      'landing-page.review-section-localized': LandingPageReviewSectionLocalized;
      'landing-page.review-section-unlocalized': LandingPageReviewSectionUnlocalized;
      'landing-page.statistic-card': LandingPageStatisticCard;
      'landing-page.testimonial-card': LandingPageTestimonialCard;
      'landing-page.who-we-serve-localized': LandingPageWhoWeServeLocalized;
      'landing-page.who-we-serve-unlocalized': LandingPageWhoWeServeUnlocalized;
      'our-story.our-clients-localized': OurStoryOurClientsLocalized;
      'our-story.our-clients-unlocalized': OurStoryOurClientsUnlocalized;
      'our-story.our-mission-localized': OurStoryOurMissionLocalized;
      'our-story.our-mission-unlocalized': OurStoryOurMissionUnlocalized;
      'our-story.our-roots-localized': OurStoryOurRootsLocalized;
      'our-story.our-roots-unlocalized': OurStoryOurRootsUnlocalized;
      'our-story.our-story-hero-localized': OurStoryOurStoryHeroLocalized;
      'our-story.our-story-hero-unlocalized': OurStoryOurStoryHeroUnlocalized;
      'our-story.review-section-localized': OurStoryReviewSectionLocalized;
      'our-story.statistic-card': OurStoryStatisticCard;
      'pms.client-card': PmsClientCard;
      'pms.ntouch-edge-card': PmsNtouchEdgeCard;
      'pms.pms-client-localized': PmsPmsClientLocalized;
      'pms.pms-client-unlocalized': PmsPmsClientUnlocalized;
      'pms.pms-feature-section-localized': PmsPmsFeatureSectionLocalized;
      'pms.pms-feature-section-reverse-localized': PmsPmsFeatureSectionReverseLocalized;
      'pms.pms-feature-section-reverse-unlocalized': PmsPmsFeatureSectionReverseUnlocalized;
      'pms.pms-feature-section-unlocalized': PmsPmsFeatureSectionUnlocalized;
      'pms.pms-feature-tabs-localized': PmsPmsFeatureTabsLocalized;
      'pms.pms-feature-tabs-unlocalized': PmsPmsFeatureTabsUnlocalized;
      'pms.pms-hero-localized': PmsPmsHeroLocalized;
      'pms.pms-hero-unlocalized': PmsPmsHeroUnlocalized;
      'pms.pms-ntouch-edge-localized': PmsPmsNtouchEdgeLocalized;
      'pms.pms-ntouch-edge-unlocalized': PmsPmsNtouchEdgeUnlocalized;
      'pricing.pricing-card': PricingPricingCard;
      'pricing.pricing-hero-localized': PricingPricingHeroLocalized;
      'pricing.pricing-hero-unlocalized': PricingPricingHeroUnlocalized;
      'pricing.pricing-section-localized': PricingPricingSectionLocalized;
      'pricing.pricing-section-unlocalized': PricingPricingSectionUnlocalized;
    }
  }
}
