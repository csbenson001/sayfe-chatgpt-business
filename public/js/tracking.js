/**
 * ElevaIQ.ai - Unified Tracking Module
 *
 * This module loads and initializes:
 * - Google Analytics 4 (GA4)
 * - Meta Pixel (Facebook)
 * - LinkedIn Insight Tag
 * - Google Ads Conversion Tracking
 * - UTM Parameter Capture
 *
 * Usage:
 * <script src="/js/tracking.js"></script>
 *
 * Then use the global ElevaIQTracking namespace:
 * - window.ElevaIQTracking.trackLead(value)
 * - window.ElevaIQTracking.trackReferralClick()
 * - window.ElevaIQTracking.trackFormStart(formName)
 * - window.ElevaIQTracking.trackBlogRead(slug)
 * - window.ElevaIQTracking.trackMetaEvent(eventName, params)
 * - window.ElevaIQTracking.trackGoogleAdsConversion(conversionLabel, value)
 * - window.ElevaIQTracking.getUTMParams()
 */

(function() {
  'use strict';

  // ============================================================================
  // CONFIGURATION - Update these with your actual IDs
  // ============================================================================

  const CONFIG = {
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Replace with your GA4 Measurement ID
    META_PIXEL_ID: 'XXXXXXXXXXXXXXXXX', // Replace with your Meta Pixel ID
    LINKEDIN_PARTNER_ID: 'XXXXXXX', // Replace with your LinkedIn Partner ID
    GOOGLE_ADS_CONVERSION_ID: 'AW-XXXXXXXXXX', // Replace with your Google Ads Conversion ID
  };

  // ============================================================================
  // UTM PARAMETER CAPTURE
  // ============================================================================

  /**
   * Capture UTM parameters from URL and store in sessionStorage
   */
  function captureUTMParams() {
    const utmParams = {
      utm_source: getURLParam('utm_source'),
      utm_medium: getURLParam('utm_medium'),
      utm_campaign: getURLParam('utm_campaign'),
      utm_content: getURLParam('utm_content'),
      utm_term: getURLParam('utm_term'),
    };

    // Only store non-null values
    const filteredParams = Object.fromEntries(
      Object.entries(utmParams).filter(([_, v]) => v !== null)
    );

    if (Object.keys(filteredParams).length > 0) {
      try {
        sessionStorage.setItem(
          'elevaiq_utm_params',
          JSON.stringify(filteredParams)
        );
      } catch (e) {
        console.warn('ElevaIQ Tracking: Unable to store UTM params in sessionStorage', e);
      }
    }
  }

  /**
   * Extract URL parameter value
   */
  function getURLParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  /**
   * Retrieve stored UTM parameters
   */
  function getStoredUTMParams() {
    try {
      const stored = sessionStorage.getItem('elevaiq_utm_params');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.warn('ElevaIQ Tracking: Unable to retrieve UTM params from sessionStorage', e);
      return {};
    }
  }

  // ============================================================================
  // GOOGLE ANALYTICS 4 (GA4)
  // ============================================================================

  /**
   * Load and initialize Google Analytics 4
   */
  function initGA4() {
    try {
      // Set default consent mode (denied until user accepts cookies)
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });

      // Dynamically load gtag.js
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA4_MEASUREMENT_ID}`;

      script.onerror = function() {
        console.error('ElevaIQ Tracking: Failed to load GA4 script');
      };

      document.head.appendChild(script);

      // Initialize gtag after script loads
      window.dataLayer = window.dataLayer || [];
      function gtag2() {
        window.dataLayer.push(arguments);
      }
      gtag2('js', new Date());
      gtag2('config', CONFIG.GA4_MEASUREMENT_ID, {
        'page_path': window.location.pathname,
        'page_title': document.title,
      });

      // Make gtag globally available
      window.gtag = gtag2;

    } catch (e) {
      console.error('ElevaIQ Tracking: Error initializing GA4', e);
    }
  }

  // ============================================================================
  // META PIXEL (FACEBOOK)
  // ============================================================================

  /**
   * Load and initialize Meta Pixel
   */
  function initMetaPixel() {
    try {
      // Load Meta Pixel base code
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');

      // Initialize Meta Pixel
      if (window.fbq) {
        window.fbq('init', CONFIG.META_PIXEL_ID);
        window.fbq('track', 'PageView');
      }

    } catch (e) {
      console.error('ElevaIQ Tracking: Error initializing Meta Pixel', e);
    }
  }

  // ============================================================================
  // LINKEDIN INSIGHT TAG
  // ============================================================================

  /**
   * Load and initialize LinkedIn Insight Tag
   */
  function initLinkedInTag() {
    try {
      _linkedin_partner_id = CONFIG.LINKEDIN_PARTNER_ID;
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';

      script.onerror = function() {
        console.error('ElevaIQ Tracking: Failed to load LinkedIn Insight Tag');
      };

      document.head.appendChild(script);

    } catch (e) {
      console.error('ElevaIQ Tracking: Error initializing LinkedIn Insight Tag', e);
    }
  }

  // ============================================================================
  // GOOGLE ADS CONVERSION TRACKING
  // ============================================================================

  /**
   * Load and initialize Google Ads conversion tracking
   */
  function initGoogleAdsConversion() {
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.GOOGLE_ADS_CONVERSION_ID}`;

      script.onerror = function() {
        console.error('ElevaIQ Tracking: Failed to load Google Ads conversion script');
      };

      document.head.appendChild(script);

      // Configure Google Ads conversion tracking
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', CONFIG.GOOGLE_ADS_CONVERSION_ID);

    } catch (e) {
      console.error('ElevaIQ Tracking: Error initializing Google Ads conversion tracking', e);
    }
  }

  // ============================================================================
  // PUBLIC API - ElevaIQTracking Namespace
  // ============================================================================

  /**
   * Public tracking API exposed on window.ElevaIQTracking
   */
  const ElevaIQTracking = {

    /**
     * Track a lead conversion on all platforms
     * @param {number} value - Optional monetary value of the lead
     */
    trackLead: function(value) {
      try {
        const eventData = {
          'value': value || 0,
          'currency': 'USD',
        };

        // GA4
        if (window.gtag) {
          window.gtag('event', 'generate_lead', eventData);
        }

        // Meta Pixel
        if (window.fbq) {
          const metaEventData = {
            value: value || 0,
            currency: 'USD',
          };
          window.fbq('track', 'Lead', metaEventData);
        }

        // LinkedIn
        if (window.lintrk) {
          window.lintrk('track', { conversion_id: 'lead_generated' });
        }

        console.log('ElevaIQ Tracking: Lead tracked', eventData);

      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking lead', e);
      }
    },

    /**
     * Track referral link click to OpenAI
     */
    trackReferralClick: function() {
      try {
        const eventData = {
          'event_category': 'engagement',
          'event_label': 'openai_referral_click',
        };

        // GA4
        if (window.gtag) {
          window.gtag('event', 'referral_click', eventData);
        }

        // Meta Pixel
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            'content_name': 'OpenAI Referral Link',
            'content_type': 'referral',
          });
        }

        // LinkedIn
        if (window.lintrk) {
          window.lintrk('track', { conversion_id: 'referral_click' });
        }

        console.log('ElevaIQ Tracking: Referral click tracked');

      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking referral click', e);
      }
    },

    /**
     * Track when user starts filling out a form
     * @param {string} formName - Name/ID of the form
     */
    trackFormStart: function(formName) {
      try {
        const eventData = {
          'form_name': formName || 'unknown_form',
          'event_category': 'engagement',
        };

        // GA4
        if (window.gtag) {
          window.gtag('event', 'form_start', eventData);
        }

        // Meta Pixel
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            'content_name': formName || 'Form Start',
          });
        }

        // LinkedIn
        if (window.lintrk) {
          window.lintrk('track', { conversion_id: 'form_start' });
        }

        console.log('ElevaIQ Tracking: Form start tracked', formName);

      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking form start', e);
      }
    },

    /**
     * Track blog post read
     * @param {string} slug - Blog post slug/URL path
     */
    trackBlogRead: function(slug) {
      try {
        const eventData = {
          'page_location': window.location.href,
          'page_title': document.title,
          'blog_slug': slug || 'unknown_post',
          'event_category': 'blog',
        };

        // GA4
        if (window.gtag) {
          window.gtag('event', 'view_article', {
            'article_title': document.title,
            'article_id': slug,
          });
        }

        // Meta Pixel
        if (window.fbq) {
          window.fbq('track', 'ViewContent', {
            'content_name': document.title,
            'content_type': 'blog_post',
            'content_ids': [slug],
          });
        }

        // LinkedIn
        if (window.lintrk) {
          window.lintrk('track', { conversion_id: 'blog_read' });
        }

        console.log('ElevaIQ Tracking: Blog read tracked', slug);

      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking blog read', e);
      }
    },

    /**
     * Track custom Meta Pixel event
     * @param {string} eventName - Facebook pixel event name
     * @param {object} params - Event parameters
     */
    trackMetaEvent: function(eventName, params) {
      try {
        if (window.fbq) {
          window.fbq('track', eventName, params || {});
          console.log('ElevaIQ Tracking: Meta event tracked', eventName, params);
        } else {
          console.warn('ElevaIQ Tracking: Meta Pixel not loaded, cannot track event', eventName);
        }
      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking Meta event', e);
      }
    },

    /**
     * Track Google Ads conversion
     * @param {string} conversionLabel - Google Ads conversion label
     * @param {number} value - Optional conversion value
     */
    trackGoogleAdsConversion: function(conversionLabel, value) {
      try {
        if (window.gtag) {
          const eventData = {
            'event_callback': undefined,
            'event_timeout': 1500,
          };

          if (conversionLabel) {
            eventData.send_to = `${CONFIG.GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`;
          }

          if (value !== undefined) {
            eventData.value = value;
            eventData.currency = 'USD';
          }

          window.gtag('event', 'conversion', eventData);
          console.log('ElevaIQ Tracking: Google Ads conversion tracked', conversionLabel);
        } else {
          console.warn('ElevaIQ Tracking: gtag not loaded, cannot track Google Ads conversion');
        }
      } catch (e) {
        console.error('ElevaIQ Tracking: Error tracking Google Ads conversion', e);
      }
    },

    /**
     * Get captured UTM parameters from sessionStorage
     * @returns {object} UTM parameters object
     */
    getUTMParams: function() {
      return getStoredUTMParams();
    },

    /**
     * Update consent mode (after user accepts cookies)
     * @param {string} analyticsConsent - 'granted' or 'denied'
     * @param {string} adConsent - 'granted' or 'denied'
     */
    updateConsent: function(analyticsConsent, adConsent) {
      try {
        if (window.gtag) {
          window.gtag('consent', 'update', {
            'analytics_storage': analyticsConsent || 'denied',
            'ad_storage': adConsent || 'denied',
          });
          console.log('ElevaIQ Tracking: Consent updated', {
            analytics: analyticsConsent,
            ads: adConsent,
          });
        }
      } catch (e) {
        console.error('ElevaIQ Tracking: Error updating consent', e);
      }
    },

    /**
     * Get all configuration (useful for debugging)
     * @returns {object} Current tracking configuration
     */
    getConfig: function() {
      return { ...CONFIG };
    },
  };

  // ============================================================================
  // INITIALIZATION ON PAGE LOAD
  // ============================================================================

  /**
   * Initialize all tracking services
   */
  function init() {
    try {
      // Capture UTM parameters first
      captureUTMParams();

      // Initialize all tracking services
      initGA4();
      initMetaPixel();
      initLinkedInTag();
      initGoogleAdsConversion();

      // Expose public API
      window.ElevaIQTracking = ElevaIQTracking;

      console.log('ElevaIQ Tracking: All tracking services initialized');
      console.log('Available methods:', Object.keys(ElevaIQTracking));

    } catch (e) {
      console.error('ElevaIQ Tracking: Fatal error during initialization', e);
    }
  }

  // Initialize when DOM is ready or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();