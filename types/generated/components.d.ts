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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'assets.image': AssetsImage;
      'assets.video': AssetsVideo;
      'common.button': CommonButton;
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
    }
  }
}
