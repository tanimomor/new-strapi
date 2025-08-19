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

export interface ClientHotelDetailClientFormLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_form_localized_s';
  info: {
    displayName: 'Client Form (Localized)';
  };
  attributes: {
    back_button_link: Schema.Attribute.String;
    back_button_text: Schema.Attribute.String;
    business_email_label: Schema.Attribute.String;
    business_email_placeholder: Schema.Attribute.String;
    contact_number_label: Schema.Attribute.String;
    contact_number_placeholder: Schema.Attribute.String;
    country_label: Schema.Attribute.String;
    country_placeholder: Schema.Attribute.String;
    first_name_label: Schema.Attribute.String;
    first_name_placeholder: Schema.Attribute.String;
    form_title: Schema.Attribute.String;
    job_role_label: Schema.Attribute.String;
    job_role_placeholder: Schema.Attribute.String;
    last_name_label: Schema.Attribute.String;
    last_name_placeholder: Schema.Attribute.String;
    next_button_link: Schema.Attribute.String;
    next_button_text: Schema.Attribute.String;
  };
}

export interface ClientHotelDetailClientFormUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_form_unlocalized_s';
  info: {
    displayName: 'Client Form (Unlocalized)';
  };
  attributes: {
    form_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface ClientHotelDetailClientHotelDetailHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_hotel_detail_hero_localized_s';
  info: {
    displayName: 'Client Hotel Detail Hero (Localized)';
  };
  attributes: {
    back_button_text: Schema.Attribute.String;
    page_title: Schema.Attribute.String;
  };
}

export interface ClientHotelDetailClientHotelDetailHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_hotel_detail_hero_unlocalized_s';
  info: {
    displayName: 'Client Hotel Detail Hero (Unlocalized)';
  };
  attributes: {
    back_button_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface ClientHotelDetailClientHotelDetailSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_hotel_detail_section_localized_s';
  info: {
    displayName: 'Client Hotel Detail Section (Localized)';
  };
  attributes: {
    client_form_localized: Schema.Attribute.Component<
      'client-hotel-detail.client-form-localized',
      false
    >;
    hero_localized: Schema.Attribute.Component<
      'client-hotel-detail.client-hotel-detail-hero-localized',
      false
    >;
    progress_steps_localized: Schema.Attribute.Component<
      'client-hotel-detail.progress-steps-localized',
      false
    >;
  };
}

export interface ClientHotelDetailClientHotelDetailSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_client_hotel_detail_section_unlocalized_s';
  info: {
    displayName: 'Client Hotel Detail Section (Unlocalized)';
  };
  attributes: {
    client_form_unlocalized: Schema.Attribute.Component<
      'client-hotel-detail.client-form-unlocalized',
      false
    >;
    hero_unlocalized: Schema.Attribute.Component<
      'client-hotel-detail.client-hotel-detail-hero-unlocalized',
      false
    >;
  };
}

export interface ClientHotelDetailProgressStep extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_progress_steps';
  info: {
    displayName: 'Progress Step';
  };
  attributes: {
    is_active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    is_completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    progress_value: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    step_text: Schema.Attribute.String;
  };
}

export interface ClientHotelDetailProgressStepsLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_client_hotel_detail_progress_steps_localized_s';
  info: {
    displayName: 'Progress Steps (Localized)';
  };
  attributes: {
    steps: Schema.Attribute.Component<
      'client-hotel-detail.progress-step',
      true
    >;
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

export interface CommonFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_common_feature_items';
  info: {
    displayName: 'Text Item';
  };
  attributes: {
    title: Schema.Attribute.JSON;
  };
}

export interface ContactContactFormLocalized extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_form_localized_s';
  info: {
    displayName: 'Contact Form (Localized)';
  };
  attributes: {
    back_button: Schema.Attribute.Component<'common.button', false>;
    form_section: Schema.Attribute.Component<'contact.form-section', false>;
    form_title: Schema.Attribute.String;
    submit_button: Schema.Attribute.Component<'common.button', false>;
  };
}

export interface ContactContactFormUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_form_unlocalized_s';
  info: {
    displayName: 'Contact Form (Unlocalized)';
  };
  attributes: {
    back_button_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface ContactContactSliderLocalized extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_slider_localized_s';
  info: {
    displayName: 'Contact Slider (Localized)';
  };
  attributes: {};
}

export interface ContactContactSliderUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_slider_unlocalized_s';
  info: {
    displayName: 'Contact Slider (Unlocalized)';
  };
  attributes: {
    slider_images: Schema.Attribute.Component<'assets.image', true>;
  };
}

export interface ContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_sections';
  info: {
    displayName: 'Form Section';
  };
  attributes: {
    business_email_label: Schema.Attribute.String;
    business_email_placeholder: Schema.Attribute.String;
    contact_number_label: Schema.Attribute.String;
    contact_number_placeholder: Schema.Attribute.String;
    first_name_label: Schema.Attribute.String;
    first_name_placeholder: Schema.Attribute.String;
    last_name_label: Schema.Attribute.String;
    last_name_placeholder: Schema.Attribute.String;
    message_label: Schema.Attribute.String;
    message_placeholder: Schema.Attribute.String;
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

export interface LandingPageNtouchFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_ntouch_feature_card_s';
  info: {
    displayName: 'nTouch Feature Card';
  };
  attributes: {
    title: Schema.Attribute.Text;
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

export interface PlanPagePlanCardLocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_card_localized_s';
  info: {
    displayName: 'Plan Card (Localized)';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    features: Schema.Attribute.Text;
    price_amount: Schema.Attribute.String;
    price_period: Schema.Attribute.String;
  };
}

export interface PlanPagePlanCardUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_card_unlocalized_s';
  info: {
    displayName: 'Plan Card (Unlocalized)';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    features: Schema.Attribute.Text;
    price_amount: Schema.Attribute.String;
    price_period: Schema.Attribute.String;
  };
}

export interface PlanPagePlanHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_hero_localized_s';
  info: {
    displayName: 'Plan Hero (Localized)';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PlanPagePlanHeroUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_hero_unlocalized_s';
  info: {
    displayName: 'Plan Hero (Unlocalized)';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PlanPagePlanPageLocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_page_localized_s';
  info: {
    displayName: 'Plan Page (Localized)';
  };
  attributes: {
    enterprise: Schema.Attribute.Component<
      'plan-page.plan-card-localized',
      false
    >;
    hero: Schema.Attribute.Component<'plan-page.plan-hero-localized', false>;
    starting_package: Schema.Attribute.Component<
      'plan-page.plan-card-localized',
      false
    >;
  };
}

export interface PlanPagePlanPageUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_plan_page_plan_page_unlocalized_s';
  info: {
    displayName: 'Plan Page (Unlocalized)';
  };
  attributes: {
    background_image: Schema.Attribute.Component<'assets.image', false>;
    logo: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PlansPackageDetailAddonItem extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_addon_items';
  info: {
    displayName: 'Addon Item';
  };
  attributes: {
    addon_description: Schema.Attribute.Text;
    addon_price: Schema.Attribute.String;
    addon_title: Schema.Attribute.String;
    is_checked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PlansPackageDetailAddonsSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_addons_section_localized_s';
  info: {
    displayName: 'Add-ons Section (Localized)';
  };
  attributes: {
    addons: Schema.Attribute.Component<'plans-package-detail.addon-item', true>;
    addons_title: Schema.Attribute.String;
    integrations: Schema.Attribute.Component<
      'plans-package-detail.addon-item',
      true
    >;
    integrations_title: Schema.Attribute.String;
    next_button_link: Schema.Attribute.String;
    next_button_text: Schema.Attribute.String;
    section_description: Schema.Attribute.Text;
    section_title: Schema.Attribute.String;
  };
}

export interface PlansPackageDetailFeatureAccordionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_feature_accordion_localized_s';
  info: {
    displayName: 'Feature Accordion (Localized)';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'plans-package-detail.feature-item',
      true
    >;
  };
}

export interface PlansPackageDetailFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    feature_icon: Schema.Attribute.Component<'assets.image', false>;
    feature_list: Schema.Attribute.Text;
    feature_title: Schema.Attribute.String;
    is_expanded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PlansPackageDetailPackageDetailsHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_package_details_hero_localized_s';
  info: {
    displayName: 'Package Details Hero (Localized)';
  };
  attributes: {
    back_button_text: Schema.Attribute.String;
    page_title: Schema.Attribute.String;
  };
}

export interface PlansPackageDetailPackageDetailsHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_package_details_hero_unlocalized_s';
  info: {
    displayName: 'Package Details Hero (Unlocalized)';
  };
  attributes: {
    back_button_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PlansPackageDetailPackageDetailsSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_package_details_section_localized_s';
  info: {
    displayName: 'Package Details Section (Localized)';
  };
  attributes: {
    addons_section_localized: Schema.Attribute.Component<
      'plans-package-detail.addons-section-localized',
      false
    >;
    feature_accordion_localized: Schema.Attribute.Component<
      'plans-package-detail.feature-accordion-localized',
      false
    >;
    hero_localized: Schema.Attribute.Component<
      'plans-package-detail.package-details-hero-localized',
      false
    >;
    pricing_section_localized: Schema.Attribute.Component<
      'plans-package-detail.pricing-section-localized',
      false
    >;
    progress_steps_localized: Schema.Attribute.Component<
      'plans-package-detail.progress-steps-localized',
      false
    >;
  };
}

export interface PlansPackageDetailPackageDetailsSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_package_details_section_unlocalized_s';
  info: {
    displayName: 'Package Details Section (Unlocalized)';
  };
  attributes: {
    hero_unlocalized: Schema.Attribute.Component<
      'plans-package-detail.package-details-hero-unlocalized',
      false
    >;
  };
}

export interface PlansPackageDetailPricingSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_pricing_section_localized_s';
  info: {
    displayName: 'Pricing Section (Localized)';
  };
  attributes: {
    annually_label: Schema.Attribute.String;
    channels_label: Schema.Attribute.String;
    features_title: Schema.Attribute.String;
    monthly_label: Schema.Attribute.String;
    plan_includes_title: Schema.Attribute.String;
    price_amount: Schema.Attribute.String;
    price_period: Schema.Attribute.String;
    rooms_label: Schema.Attribute.String;
    total_price_title: Schema.Attribute.String;
  };
}

export interface PlansPackageDetailProgressStep extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_progress_steps';
  info: {
    displayName: 'Progress Step';
  };
  attributes: {
    is_active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    progress_value: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    step_text: Schema.Attribute.String;
  };
}

export interface PlansPackageDetailProgressStepsLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_plans_package_detail_progress_steps_localized_s';
  info: {
    displayName: 'Progress Steps (Localized)';
  };
  attributes: {
    steps: Schema.Attribute.Component<
      'plans-package-detail.progress-step',
      true
    >;
  };
}

export interface PmsClientCard extends Struct.ComponentSchema {
  collectionName: 'components_pms_client_cards';
  info: {
    displayName: 'Client Card';
  };
  attributes: {
    client_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PmsClientText extends Struct.ComponentSchema {
  collectionName: 'components_pms_client_texts';
  info: {
    displayName: 'Client Text';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PmsFeatureListItem extends Struct.ComponentSchema {
  collectionName: 'components_pms_feature_list_items';
  info: {
    displayName: 'Feature List Item';
  };
  attributes: {
    text: Schema.Attribute.String;
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
    client_texts: Schema.Attribute.Component<'pms.client-text', true>;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface PmsPmsClientUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_client_unlocalized_s';
  info: {
    displayName: 'PMS Client (Unlocalized)';
  };
  attributes: {
    client_cards: Schema.Attribute.Component<'pms.client-card', true>;
  };
}

export interface PmsPmsFeatureSectionLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pms_pms_feature_section_localized_s';
  info: {
    displayName: 'PMS Feature Section (Localized)';
  };
  attributes: {
    feature_description: Schema.Attribute.Text;
    feature_list_items: Schema.Attribute.Component<
      'pms.feature-list-item',
      true
    >;
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
    feature_list_items: Schema.Attribute.JSON;
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
    feature_image: Schema.Attribute.Component<'assets.image', true>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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

export interface PricingDiscoverLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_discover_localized_s';
  info: {
    displayName: 'Discover (Localized)';
  };
  attributes: {
    discover_button_text: Schema.Attribute.String;
    discover_description: Schema.Attribute.Text;
    discover_title: Schema.Attribute.RichText;
  };
}

export interface PricingDiscoverSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pricing_discover_section_localized_s';
  info: {
    displayName: 'Discover Section (Localized)';
  };
  attributes: {
    discover_button_text: Schema.Attribute.String;
    discover_description: Schema.Attribute.Text;
    discover_title: Schema.Attribute.RichText;
  };
}

export interface PricingDiscoverSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pricing_discover_section_unlocalized_s';
  info: {
    displayName: 'Discover Section (Unlocalized)';
  };
  attributes: {
    discover_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PricingDiscoverUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_discover_unlocalized_s';
  info: {
    displayName: 'Discover (Unlocalized)';
  };
  attributes: {
    discover_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface PricingPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    feature_list: Schema.Attribute.Component<'common.feature-item', false>;
  };
}

export interface PricingPricingHeroLocalized extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_hero_localized_s';
  info: {
    displayName: 'Pricing Hero (Localized)';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
    left_card: Schema.Attribute.Component<'pricing.pricing-card', false>;
    right_card: Schema.Attribute.Component<'pricing.pricing-card', false>;
  };
}

export interface PricingPricingSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_pricing_pricing_section_unlocalized_s';
  info: {
    displayName: 'Pricing Section (Unlocalized)';
  };
  attributes: {
    left_card_logo: Schema.Attribute.Component<'assets.image', false>;
    right_card_logo: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SharedFooterFooterBottomLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_bottom_localized_s';
  info: {
    displayName: 'Footer Bottom (Localized)';
  };
  attributes: {
    legal_links: Schema.Attribute.Component<
      'shared-footer.legal-links-localized',
      false
    >;
    social_links: Schema.Attribute.Component<
      'shared-footer.social-links-localized',
      false
    >;
  };
}

export interface SharedFooterFooterContentLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_content_localized_s';
  info: {
    displayName: 'Footer Content (Localized)';
  };
  attributes: {
    bio_description: Schema.Attribute.Text;
    bio_title: Schema.Attribute.String;
    footer_section_1: Schema.Attribute.Component<
      'shared-footer.footer-links-section-localized',
      false
    >;
    footer_section_2: Schema.Attribute.Component<
      'shared-footer.footer-links-section-localized',
      false
    >;
    footer_section_3: Schema.Attribute.Component<
      'shared-footer.footer-links-section-localized',
      false
    >;
  };
}

export interface SharedFooterFooterHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_hero_localized_s';
  info: {
    displayName: 'Footer Hero (Localized)';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterFooterLinkItemLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_link_item_localized_s';
  info: {
    displayName: 'Footer Link Item (Localized)';
  };
  attributes: {
    link_title: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
  };
}

export interface SharedFooterFooterLinksSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_links_section_localized_s';
  info: {
    displayName: 'Footer Links Section (Localized)';
  };
  attributes: {
    links: Schema.Attribute.Component<
      'shared-footer.footer-link-item-localized',
      true
    >;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedFooterFooterLocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_localized_s';
  info: {
    displayName: 'Footer (Localized)';
  };
  attributes: {
    footer_bottom: Schema.Attribute.Component<
      'shared-footer.footer-bottom-localized',
      false
    >;
    footer_content: Schema.Attribute.Component<
      'shared-footer.footer-content-localized',
      false
    >;
    footer_top: Schema.Attribute.Component<
      'shared-footer.footer-hero-localized',
      false
    >;
  };
}

export interface SharedFooterFooterUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_footer_unlocalized_s';
  info: {
    displayName: 'Footer (Unlocalized)';
  };
  attributes: {
    footer_logo: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SharedFooterLegalLinksLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_legal_links_localized_s';
  info: {
    displayName: 'Legal Links (Localized)';
  };
  attributes: {
    privacy_policy_link: Schema.Attribute.String;
    terms_of_use_link: Schema.Attribute.String;
  };
}

export interface SharedFooterSocialLinksLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_social_links_localized_s';
  info: {
    displayName: 'Social Links (Localized)';
  };
  attributes: {
    facebook_link: Schema.Attribute.String;
    instagram_link: Schema.Attribute.String;
    twitter_link: Schema.Attribute.String;
    youtube_link: Schema.Attribute.String;
  };
}

export interface SharedNavbarGuestExperienceSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_guest_experience_section_localized_s';
  info: {
    displayName: 'Guest Experience Section (Localized)';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<
      'shared-navbar.menu-item-localized',
      true
    >;
    section_link: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarMenuItemLocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_menu_item_localized_s';
  info: {
    displayName: 'Menu Item (Localized)';
  };
  attributes: {
    item_link: Schema.Attribute.String;
    item_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarNavLinkLocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_nav_link_localized_s';
  info: {
    displayName: 'Nav Link (Localized)';
  };
  attributes: {
    link_title: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
  };
}

export interface SharedNavbarNavbarLocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_navbar_localized_s';
  info: {
    displayName: 'Navbar (Localized)';
  };
  attributes: {
    dropdown_menu_1: Schema.Attribute.Component<
      'shared-navbar.products-menu-localized',
      false
    >;
    dropdown_menu_2: Schema.Attribute.Component<
      'shared-navbar.solutions-menu-localized',
      false
    >;
    nav_link_1: Schema.Attribute.Component<
      'shared-navbar.nav-link-localized',
      false
    >;
    nav_link_2: Schema.Attribute.Component<
      'shared-navbar.nav-link-localized',
      false
    >;
  };
}

export interface SharedNavbarNavbarUnlocalized extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_navbar_unlocalized_s';
  info: {
    displayName: 'Navbar (Unlocalized)';
  };
  attributes: {
    guest_experience_icon: Schema.Attribute.Component<'assets.image', false>;
    logo: Schema.Attribute.Component<'assets.image', false>;
    logo_black: Schema.Attribute.Component<'assets.image', false>;
    pms_icon: Schema.Attribute.Component<'assets.image', false>;
    products_mega_menu_image: Schema.Attribute.Component<'assets.image', false>;
    property_size_icon: Schema.Attribute.Component<'assets.image', false>;
    property_type_icon: Schema.Attribute.Component<'assets.image', false>;
    solutions_mega_menu_image: Schema.Attribute.Component<
      'assets.image',
      false
    >;
  };
}

export interface SharedNavbarPmsSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_pms_section_localized_s';
  info: {
    displayName: 'PMS Section (Localized)';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<
      'shared-navbar.menu-item-localized',
      true
    >;
    section_link: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarPricingMenuLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_pricing_menu_localized_s';
  info: {
    displayName: 'Pricing Menu (Localized)';
  };
  attributes: {
    isDropdown: Schema.Attribute.Boolean;
    menu_link: Schema.Attribute.String;
    menu_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarProductsMenuLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_products_menu_localized_s';
  info: {
    displayName: 'Products Menu (Localized)';
  };
  attributes: {
    guest_experience_section: Schema.Attribute.Component<
      'shared-navbar.guest-experience-section-localized',
      false
    >;
    isDropdown: Schema.Attribute.Boolean;
    menu_title: Schema.Attribute.String;
    pms_section: Schema.Attribute.Component<
      'shared-navbar.pms-section-localized',
      false
    >;
  };
}

export interface SharedNavbarPropertySizeSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_property_size_section_localized_s';
  info: {
    displayName: 'Property Size Section (Localized)';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<
      'shared-navbar.menu-item-localized',
      true
    >;
    section_link: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarPropertyTypeSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_property_type_section_localized_s';
  info: {
    displayName: 'Property Type Section (Localized)';
  };
  attributes: {
    menu_items: Schema.Attribute.Component<
      'shared-navbar.menu-item-localized',
      true
    >;
    section_link: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SharedNavbarSolutionsMenuLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbar_solutions_menu_localized_s';
  info: {
    displayName: 'Solutions Menu (Localized)';
  };
  attributes: {
    isDropdown: Schema.Attribute.Boolean;
    menu_title: Schema.Attribute.String;
    property_size_section: Schema.Attribute.Component<
      'shared-navbar.property-size-section-localized',
      false
    >;
    property_type_section: Schema.Attribute.Component<
      'shared-navbar.property-type-section-localized',
      false
    >;
  };
}

export interface SolutionsByPropertySizeFeatureItemLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_feature_item_localized_s';
  info: {
    displayName: 'Feature Item (Localized)';
  };
  attributes: {
    feature_description: Schema.Attribute.Text;
    feature_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeGuideStep
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_guide_steps';
  info: {
    displayName: 'Guide Step';
  };
  attributes: {
    step_description: Schema.Attribute.Text;
    step_number: Schema.Attribute.String;
    step_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_hero_localized_s';
  info: {
    displayName: 'Solutions by Property Size Hero (Localized)';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface SolutionsByPropertySizeHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_hero_unlocalized_s';
  info: {
    displayName: 'Solutions by Property Size Hero (Unlocalized)';
  };
  attributes: {
    hero_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertySizeHotelGroupsLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_hotel_groups_localized_s';
  info: {
    displayName: 'Hotel Groups (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature_list: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeHotelGroupsUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_hotel_groups_unlocalized_s';
  info: {
    displayName: 'Hotel Groups (Unlocalized)';
  };
  attributes: {
    section_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertySizeProductCard
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_product_cards';
  info: {
    displayName: 'Product Card';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_background_image: Schema.Attribute.Component<'assets.image', false>;
    card_description: Schema.Attribute.Text;
    card_icon: Schema.Attribute.Component<'assets.image', false>;
    card_title: Schema.Attribute.String;
    feature_tags: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeProductCardLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_product_card_localized_s';
  info: {
    displayName: 'Product Card (Localized)';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    feature_tags: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeProductCardUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_product_card_unlocalized_s';
  info: {
    displayName: 'Product Card (Unlocalized)';
  };
  attributes: {
    card_background_image: Schema.Attribute.Component<'assets.image', false>;
    card_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertySizeProductSuiteLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_product_suite_localized_s';
  info: {
    displayName: 'Product Suite (Localized)';
  };
  attributes: {
    left_card: Schema.Attribute.Component<
      'solutions-by-property-size.product-card-localized',
      false
    >;
    right_card: Schema.Attribute.Component<
      'solutions-by-property-size.product-card-localized',
      false
    >;
    section_description: Schema.Attribute.Text;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertySizeProductSuiteUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_product_suite_unlocalized_s';
  info: {
    displayName: 'Product Suite (Unlocalized)';
  };
  attributes: {
    left_card_images: Schema.Attribute.Component<
      'solutions-by-property-size.product-card-unlocalized',
      false
    >;
    right_card_images: Schema.Attribute.Component<
      'solutions-by-property-size.product-card-unlocalized',
      false
    >;
  };
}

export interface SolutionsByPropertySizePropertySizeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_property_size_sections';
  info: {
    displayName: 'Property Size Section';
  };
  attributes: {
    hero_localized: Schema.Attribute.Component<
      'solutions-by-property-size.hero-localized',
      false
    >;
    hero_unlocalized: Schema.Attribute.Component<
      'solutions-by-property-size.hero-unlocalized',
      false
    >;
    hotel_groups_localized: Schema.Attribute.Component<
      'solutions-by-property-size.hotel-groups-localized',
      false
    >;
    hotel_groups_unlocalized: Schema.Attribute.Component<
      'solutions-by-property-size.hotel-groups-unlocalized',
      true
    >;
  };
}

export interface SolutionsByPropertySizePropertyTypeSection
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_property_type_sections';
  info: {
    displayName: 'Property Type Section';
  };
  attributes: {
    hero_localized: Schema.Attribute.Component<
      'solutions-by-property-type.hero-localized',
      false
    >;
    hero_unlocalized: Schema.Attribute.Component<
      'solutions-by-property-type.hero-unlocalized',
      false
    >;
    hotel_groups_localized: Schema.Attribute.Component<
      'solutions-by-property-type.hotel-groups-localized',
      false
    >;
    hotel_groups_unlocalized: Schema.Attribute.Component<
      'solutions-by-property-type.hotel-groups-unlocalized',
      true
    >;
  };
}

export interface SolutionsByPropertySizeStartGuideLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_start_guide_localized_s';
  info: {
    displayName: 'Start Guide (Localized)';
  };
  attributes: {
    guide_steps: Schema.Attribute.Component<
      'solutions-by-property-size.guide-step',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface SolutionsByPropertySizeStartGuideUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_size_start_guide_unlocalized_s';
  info: {
    displayName: 'Start Guide (Unlocalized)';
  };
  attributes: {
    guide_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertyTypeGuideStep
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_guide_steps';
  info: {
    displayName: 'Guide Step';
  };
  attributes: {
    step_description: Schema.Attribute.Text;
    step_number: Schema.Attribute.String;
    step_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_hero_localized_s';
  info: {
    displayName: 'Solutions by Property Type Hero (Localized)';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Blocks;
  };
}

export interface SolutionsByPropertyTypeHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_hero_unlocalized_s';
  info: {
    displayName: 'Solutions by Property Type Hero (Unlocalized)';
  };
  attributes: {
    hero_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertyTypeHotelGroupsLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_hotel_groups_localized_s';
  info: {
    displayName: 'Hotel Groups (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature_list: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeHotelGroupsUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_hotel_groups_unlocalized_s';
  info: {
    displayName: 'Hotel Groups (Unlocalized)';
  };
  attributes: {
    section_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertyTypeProductCard
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_product_cards';
  info: {
    displayName: 'Product Card';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    card_background_image: Schema.Attribute.Component<'assets.image', false>;
    card_description: Schema.Attribute.Text;
    card_icon: Schema.Attribute.Component<'assets.image', false>;
    card_title: Schema.Attribute.String;
    feature_tags: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeProductCardLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_product_card_localized_s';
  info: {
    displayName: 'Product Card (Localized)';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
    feature_tags: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeProductCardUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_product_card_unlocalized_s';
  info: {
    displayName: 'Product Card (Unlocalized)';
  };
  attributes: {
    card_background_image: Schema.Attribute.Component<'assets.image', false>;
    card_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertyTypeProductSuiteLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_product_suite_localized_s';
  info: {
    displayName: 'Product Suite (Localized)';
  };
  attributes: {
    left_card: Schema.Attribute.Component<
      'solutions-by-property-type.product-card-localized',
      false
    >;
    right_card: Schema.Attribute.Component<
      'solutions-by-property-type.product-card-localized',
      false
    >;
    section_description: Schema.Attribute.Text;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeProductSuiteUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_product_suite_unlocalized_s';
  info: {
    displayName: 'Product Suite (Unlocalized)';
  };
  attributes: {
    left_card_images: Schema.Attribute.Component<
      'solutions-by-property-type.product-card-unlocalized',
      false
    >;
    right_card_images: Schema.Attribute.Component<
      'solutions-by-property-type.product-card-unlocalized',
      false
    >;
  };
}

export interface SolutionsByPropertyTypeStackedImagesLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_stacked_images_localized_s';
  info: {
    displayName: 'Stacked Images (Localized)';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature_list: Schema.Attribute.JSON;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeStackedImagesUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_stacked_images_unlocalized_s';
  info: {
    displayName: 'Stacked Images (Unlocalized)';
  };
  attributes: {
    main_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SolutionsByPropertyTypeStartGuideLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_start_guide_localized_s';
  info: {
    displayName: 'Start Guide (Localized)';
  };
  attributes: {
    guide_steps: Schema.Attribute.Component<
      'solutions-by-property-type.guide-step',
      true
    >;
    section_subtitle: Schema.Attribute.String;
    section_title: Schema.Attribute.String;
  };
}

export interface SolutionsByPropertyTypeStartGuideUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_solutions_by_property_type_start_guide_unlocalized_s';
  info: {
    displayName: 'Start Guide (Unlocalized)';
  };
  attributes: {
    guide_image: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SummaryAndPaymentFeatureAccordionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_feature_accordion_localized_s';
  info: {
    displayName: 'Feature Accordion (Localized)';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'summary-and-payment.feature-item',
      true
    >;
  };
}

export interface SummaryAndPaymentFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    feature_icon: Schema.Attribute.Component<'assets.image', false>;
    feature_list: Schema.Attribute.Text;
    feature_title: Schema.Attribute.String;
    is_expanded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SummaryAndPaymentPaymentSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_payment_section_localized_s';
  info: {
    displayName: 'Payment Section (Localized)';
  };
  attributes: {
    apply_button_text: Schema.Attribute.String;
    back_button_link: Schema.Attribute.String;
    back_button_text: Schema.Attribute.String;
    bank_transfer_button_text: Schema.Attribute.String;
    card_button_text: Schema.Attribute.String;
    card_save_text: Schema.Attribute.Text;
    monthly_button_text: Schema.Attribute.String;
    next_button_link: Schema.Attribute.String;
    next_button_text: Schema.Attribute.String;
    payment_details_title: Schema.Attribute.String;
    promo_code_placeholder: Schema.Attribute.String;
    promo_code_title: Schema.Attribute.String;
    selected_text: Schema.Attribute.Text;
    sub_total_label: Schema.Attribute.String;
    subscription_fee_label: Schema.Attribute.String;
    terms_description: Schema.Attribute.Text;
    terms_title: Schema.Attribute.String;
    total_amount_title: Schema.Attribute.String;
    vat_label: Schema.Attribute.String;
    yearly_button_text: Schema.Attribute.String;
  };
}

export interface SummaryAndPaymentPricingSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_pricing_section_localized_s';
  info: {
    displayName: 'Pricing Section (Localized)';
  };
  attributes: {
    annually_label: Schema.Attribute.String;
    channels_label: Schema.Attribute.String;
    features_title: Schema.Attribute.String;
    monthly_label: Schema.Attribute.String;
    plan_includes_title: Schema.Attribute.String;
    price_amount: Schema.Attribute.String;
    price_period: Schema.Attribute.String;
    rooms_label: Schema.Attribute.String;
    total_price_title: Schema.Attribute.String;
  };
}

export interface SummaryAndPaymentProgressStep extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_progress_steps';
  info: {
    displayName: 'Progress Step';
  };
  attributes: {
    is_active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    is_completed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    progress_value: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    step_text: Schema.Attribute.String;
  };
}

export interface SummaryAndPaymentProgressStepsLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_progress_steps_localized_s';
  info: {
    displayName: 'Progress Steps (Localized)';
  };
  attributes: {
    steps: Schema.Attribute.Component<
      'summary-and-payment.progress-step',
      true
    >;
  };
}

export interface SummaryAndPaymentSummaryPaymentHeroLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_summary_payment_hero_localized_s';
  info: {
    displayName: 'Summary Payment Hero (Localized)';
  };
  attributes: {
    back_button_text: Schema.Attribute.String;
    page_title: Schema.Attribute.String;
  };
}

export interface SummaryAndPaymentSummaryPaymentHeroUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_summary_payment_hero_unlocalized_s';
  info: {
    displayName: 'Summary Payment Hero (Unlocalized)';
  };
  attributes: {
    back_button_icon: Schema.Attribute.Component<'assets.image', false>;
  };
}

export interface SummaryAndPaymentSummaryPaymentSectionLocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_summary_payment_section_localized_s';
  info: {
    displayName: 'Summary Payment Section (Localized)';
  };
  attributes: {
    feature_accordion_localized: Schema.Attribute.Component<
      'summary-and-payment.feature-accordion-localized',
      false
    >;
    hero_localized: Schema.Attribute.Component<
      'summary-and-payment.summary-payment-hero-localized',
      false
    >;
    payment_section_localized: Schema.Attribute.Component<
      'summary-and-payment.payment-section-localized',
      false
    >;
    pricing_section_localized: Schema.Attribute.Component<
      'summary-and-payment.pricing-section-localized',
      false
    >;
    progress_steps_localized: Schema.Attribute.Component<
      'summary-and-payment.progress-steps-localized',
      false
    >;
  };
}

export interface SummaryAndPaymentSummaryPaymentSectionUnlocalized
  extends Struct.ComponentSchema {
  collectionName: 'components_summary_and_payment_summary_payment_section_unlocalized_s';
  info: {
    displayName: 'Summary Payment Section (Unlocalized)';
  };
  attributes: {
    hero_unlocalized: Schema.Attribute.Component<
      'summary-and-payment.summary-payment-hero-unlocalized',
      false
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assets.image': AssetsImage;
      'assets.video': AssetsVideo;
      'client-hotel-detail.client-form-localized': ClientHotelDetailClientFormLocalized;
      'client-hotel-detail.client-form-unlocalized': ClientHotelDetailClientFormUnlocalized;
      'client-hotel-detail.client-hotel-detail-hero-localized': ClientHotelDetailClientHotelDetailHeroLocalized;
      'client-hotel-detail.client-hotel-detail-hero-unlocalized': ClientHotelDetailClientHotelDetailHeroUnlocalized;
      'client-hotel-detail.client-hotel-detail-section-localized': ClientHotelDetailClientHotelDetailSectionLocalized;
      'client-hotel-detail.client-hotel-detail-section-unlocalized': ClientHotelDetailClientHotelDetailSectionUnlocalized;
      'client-hotel-detail.progress-step': ClientHotelDetailProgressStep;
      'client-hotel-detail.progress-steps-localized': ClientHotelDetailProgressStepsLocalized;
      'common.button': CommonButton;
      'common.feature-item': CommonFeatureItem;
      'contact.contact-form-localized': ContactContactFormLocalized;
      'contact.contact-form-unlocalized': ContactContactFormUnlocalized;
      'contact.contact-slider-localized': ContactContactSliderLocalized;
      'contact.contact-slider-unlocalized': ContactContactSliderUnlocalized;
      'contact.form-section': ContactFormSection;
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
      'landing-page.ntouch-feature-card': LandingPageNtouchFeatureCard;
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
      'plan-page.plan-card-localized': PlanPagePlanCardLocalized;
      'plan-page.plan-card-unlocalized': PlanPagePlanCardUnlocalized;
      'plan-page.plan-hero-localized': PlanPagePlanHeroLocalized;
      'plan-page.plan-hero-unlocalized': PlanPagePlanHeroUnlocalized;
      'plan-page.plan-page-localized': PlanPagePlanPageLocalized;
      'plan-page.plan-page-unlocalized': PlanPagePlanPageUnlocalized;
      'plans-package-detail.addon-item': PlansPackageDetailAddonItem;
      'plans-package-detail.addons-section-localized': PlansPackageDetailAddonsSectionLocalized;
      'plans-package-detail.feature-accordion-localized': PlansPackageDetailFeatureAccordionLocalized;
      'plans-package-detail.feature-item': PlansPackageDetailFeatureItem;
      'plans-package-detail.package-details-hero-localized': PlansPackageDetailPackageDetailsHeroLocalized;
      'plans-package-detail.package-details-hero-unlocalized': PlansPackageDetailPackageDetailsHeroUnlocalized;
      'plans-package-detail.package-details-section-localized': PlansPackageDetailPackageDetailsSectionLocalized;
      'plans-package-detail.package-details-section-unlocalized': PlansPackageDetailPackageDetailsSectionUnlocalized;
      'plans-package-detail.pricing-section-localized': PlansPackageDetailPricingSectionLocalized;
      'plans-package-detail.progress-step': PlansPackageDetailProgressStep;
      'plans-package-detail.progress-steps-localized': PlansPackageDetailProgressStepsLocalized;
      'pms.client-card': PmsClientCard;
      'pms.client-text': PmsClientText;
      'pms.feature-list-item': PmsFeatureListItem;
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
      'pricing.discover-localized': PricingDiscoverLocalized;
      'pricing.discover-section-localized': PricingDiscoverSectionLocalized;
      'pricing.discover-section-unlocalized': PricingDiscoverSectionUnlocalized;
      'pricing.discover-unlocalized': PricingDiscoverUnlocalized;
      'pricing.pricing-card': PricingPricingCard;
      'pricing.pricing-hero-localized': PricingPricingHeroLocalized;
      'pricing.pricing-hero-unlocalized': PricingPricingHeroUnlocalized;
      'pricing.pricing-section-localized': PricingPricingSectionLocalized;
      'pricing.pricing-section-unlocalized': PricingPricingSectionUnlocalized;
      'shared-footer.footer-bottom-localized': SharedFooterFooterBottomLocalized;
      'shared-footer.footer-content-localized': SharedFooterFooterContentLocalized;
      'shared-footer.footer-hero-localized': SharedFooterFooterHeroLocalized;
      'shared-footer.footer-link-item-localized': SharedFooterFooterLinkItemLocalized;
      'shared-footer.footer-links-section-localized': SharedFooterFooterLinksSectionLocalized;
      'shared-footer.footer-localized': SharedFooterFooterLocalized;
      'shared-footer.footer-unlocalized': SharedFooterFooterUnlocalized;
      'shared-footer.legal-links-localized': SharedFooterLegalLinksLocalized;
      'shared-footer.social-links-localized': SharedFooterSocialLinksLocalized;
      'shared-navbar.guest-experience-section-localized': SharedNavbarGuestExperienceSectionLocalized;
      'shared-navbar.menu-item-localized': SharedNavbarMenuItemLocalized;
      'shared-navbar.nav-link-localized': SharedNavbarNavLinkLocalized;
      'shared-navbar.navbar-localized': SharedNavbarNavbarLocalized;
      'shared-navbar.navbar-unlocalized': SharedNavbarNavbarUnlocalized;
      'shared-navbar.pms-section-localized': SharedNavbarPmsSectionLocalized;
      'shared-navbar.pricing-menu-localized': SharedNavbarPricingMenuLocalized;
      'shared-navbar.products-menu-localized': SharedNavbarProductsMenuLocalized;
      'shared-navbar.property-size-section-localized': SharedNavbarPropertySizeSectionLocalized;
      'shared-navbar.property-type-section-localized': SharedNavbarPropertyTypeSectionLocalized;
      'shared-navbar.solutions-menu-localized': SharedNavbarSolutionsMenuLocalized;
      'solutions-by-property-size.feature-item-localized': SolutionsByPropertySizeFeatureItemLocalized;
      'solutions-by-property-size.guide-step': SolutionsByPropertySizeGuideStep;
      'solutions-by-property-size.hero-localized': SolutionsByPropertySizeHeroLocalized;
      'solutions-by-property-size.hero-unlocalized': SolutionsByPropertySizeHeroUnlocalized;
      'solutions-by-property-size.hotel-groups-localized': SolutionsByPropertySizeHotelGroupsLocalized;
      'solutions-by-property-size.hotel-groups-unlocalized': SolutionsByPropertySizeHotelGroupsUnlocalized;
      'solutions-by-property-size.product-card': SolutionsByPropertySizeProductCard;
      'solutions-by-property-size.product-card-localized': SolutionsByPropertySizeProductCardLocalized;
      'solutions-by-property-size.product-card-unlocalized': SolutionsByPropertySizeProductCardUnlocalized;
      'solutions-by-property-size.product-suite-localized': SolutionsByPropertySizeProductSuiteLocalized;
      'solutions-by-property-size.product-suite-unlocalized': SolutionsByPropertySizeProductSuiteUnlocalized;
      'solutions-by-property-size.property-size-section': SolutionsByPropertySizePropertySizeSection;
      'solutions-by-property-size.property-type-section': SolutionsByPropertySizePropertyTypeSection;
      'solutions-by-property-size.start-guide-localized': SolutionsByPropertySizeStartGuideLocalized;
      'solutions-by-property-size.start-guide-unlocalized': SolutionsByPropertySizeStartGuideUnlocalized;
      'solutions-by-property-type.guide-step': SolutionsByPropertyTypeGuideStep;
      'solutions-by-property-type.hero-localized': SolutionsByPropertyTypeHeroLocalized;
      'solutions-by-property-type.hero-unlocalized': SolutionsByPropertyTypeHeroUnlocalized;
      'solutions-by-property-type.hotel-groups-localized': SolutionsByPropertyTypeHotelGroupsLocalized;
      'solutions-by-property-type.hotel-groups-unlocalized': SolutionsByPropertyTypeHotelGroupsUnlocalized;
      'solutions-by-property-type.product-card': SolutionsByPropertyTypeProductCard;
      'solutions-by-property-type.product-card-localized': SolutionsByPropertyTypeProductCardLocalized;
      'solutions-by-property-type.product-card-unlocalized': SolutionsByPropertyTypeProductCardUnlocalized;
      'solutions-by-property-type.product-suite-localized': SolutionsByPropertyTypeProductSuiteLocalized;
      'solutions-by-property-type.product-suite-unlocalized': SolutionsByPropertyTypeProductSuiteUnlocalized;
      'solutions-by-property-type.stacked-images-localized': SolutionsByPropertyTypeStackedImagesLocalized;
      'solutions-by-property-type.stacked-images-unlocalized': SolutionsByPropertyTypeStackedImagesUnlocalized;
      'solutions-by-property-type.start-guide-localized': SolutionsByPropertyTypeStartGuideLocalized;
      'solutions-by-property-type.start-guide-unlocalized': SolutionsByPropertyTypeStartGuideUnlocalized;
      'summary-and-payment.feature-accordion-localized': SummaryAndPaymentFeatureAccordionLocalized;
      'summary-and-payment.feature-item': SummaryAndPaymentFeatureItem;
      'summary-and-payment.payment-section-localized': SummaryAndPaymentPaymentSectionLocalized;
      'summary-and-payment.pricing-section-localized': SummaryAndPaymentPricingSectionLocalized;
      'summary-and-payment.progress-step': SummaryAndPaymentProgressStep;
      'summary-and-payment.progress-steps-localized': SummaryAndPaymentProgressStepsLocalized;
      'summary-and-payment.summary-payment-hero-localized': SummaryAndPaymentSummaryPaymentHeroLocalized;
      'summary-and-payment.summary-payment-hero-unlocalized': SummaryAndPaymentSummaryPaymentHeroUnlocalized;
      'summary-and-payment.summary-payment-section-localized': SummaryAndPaymentSummaryPaymentSectionLocalized;
      'summary-and-payment.summary-payment-section-unlocalized': SummaryAndPaymentSummaryPaymentSectionUnlocalized;
    }
  }
}
