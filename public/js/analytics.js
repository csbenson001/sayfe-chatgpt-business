/**
 * Sayfe.ai — Behavioral Analytics Module
 * 
 * Tracks user behavior to understand engagement, optimize conversions,
 * and enable follow-up intelligence. Privacy-safe: no PII collected.
 * 
 * Signals tracked:
 * - Scroll depth (25%, 50%, 75%, 100%)
 * - Section visibility & dwell time
 * - CTA/button clicks
 * - Form funnel (step1 → step2 → success)
 * - Session timing & return visits
 * - Device/viewport info
 * - Industry card clicks
 * - Referral source & UTM params
 * - Exit intent detection
 */
(function() {
  'use strict';

  // ========== VISITOR IDENTITY ==========
  function getVisitorId() {
    let id = localStorage.getItem('eiq_vid');
    if (!id) {
      id = 'v_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
      localStorage.setItem('eiq_vid', id);
    }
    return id;
  }

  function getVisitCount() {
    let count = parseInt(localStorage.getItem('eiq_visits') || '0', 10);
    return count;
  }

  function incrementVisit() {
    let count = getVisitCount() + 1;
    localStorage.setItem('eiq_visits', count.toString());
    localStorage.setItem('eiq_last_visit', new Date().toISOString());
    return count;
  }

  // ========== SESSION STATE ==========
  const session = {
    visitor_id: getVisitorId(),
    visit_number: incrementVisit(),
    session_start: Date.now(),
    page: window.location.pathname,
    referrer: document.referrer || 'direct',
    viewport: { w: window.innerWidth, h: window.innerHeight },
    device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    events: [],
    scroll_max: 0,
    scroll_milestones: {},
    section_times: {},
    form_stage: null,
  };

  // ========== EVENT COLLECTION ==========
  function track(event_type, data) {
    const evt = {
      t: event_type,
      ts: Date.now() - session.session_start,
      ...data
    };
    session.events.push(evt);
    
    // Log in dev
    if (window.location.protocol === 'file:' || window.location.hostname === 'localhost') {
      console.log('[EIQ Analytics]', event_type, data);
    }
  }

  // ========== SCROLL TRACKING ==========
  const scrollMilestones = [25, 50, 75, 100];
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPct > session.scroll_max) {
          session.scroll_max = scrollPct;
        }

        scrollMilestones.forEach(function(milestone) {
          if (scrollPct >= milestone && !session.scroll_milestones[milestone]) {
            session.scroll_milestones[milestone] = true;
            track('scroll_depth', { depth: milestone });
          }
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ========== SECTION VISIBILITY TRACKING ==========
  const sectionIds = [
    'transformation-outcomes', 'how-it-works', 'why-not-direct', 'why-us',
    'starter-packs', 'results', 'why-now', 'industries', 'readiness-scorecard',
    'pricing', 'faq', 'referral-partners', 'partners', 'sayfe-ai', 'get-started'
  ];

  const sectionEnterTimes = {};

  function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          sectionEnterTimes[id] = Date.now();
          track('section_enter', { section: id });
        } else if (sectionEnterTimes[id]) {
          const dwell = Math.round((Date.now() - sectionEnterTimes[id]) / 1000);
          if (dwell > 1) {
            track('section_dwell', { section: id, seconds: dwell });
            session.section_times[id] = (session.section_times[id] || 0) + dwell;
          }
          delete sectionEnterTimes[id];
        }
      });
    }, { threshold: 0.3 });

    sectionIds.forEach(function(id) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // ========== CTA CLICK TRACKING ==========
  function initClickTracking() {
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a, button');
      if (!target) return;

      const text = (target.textContent || '').trim().substring(0, 60);
      const href = target.getAttribute('href') || '';
      const classes = target.className || '';

      // Track CTA buttons
      if (classes.includes('btn') || classes.includes('form-submit') || classes.includes('nav-cta')) {
        track('cta_click', { text: text, href: href, location: getClickLocation(target) });
      }

      // Track nav links
      if (target.closest('.nav-links')) {
        track('nav_click', { text: text, href: href });
      }

      // Track referral clicks
      if (href.includes('/api/referral')) {
        track('referral_click', { source: getClickLocation(target) });
      }
    });
  }

  function getClickLocation(el) {
    const section = el.closest('section');
    return section ? (section.id || 'unknown') : 'page';
  }

  // ========== FORM FUNNEL TRACKING ==========
  function trackFormStage(stage, data) {
    session.form_stage = stage;
    track('form_funnel', { stage: stage, ...data });
  }

  // ========== INDUSTRY INTEREST TRACKING ==========
  function initIndustryTracking() {
    document.addEventListener('click', function(e) {
      const card = e.target.closest('.usecase-card');
      if (card) {
        const name = card.querySelector('h3');
        track('industry_click', { industry: name ? name.textContent.trim() : 'unknown' });
      }
    });
  }

  // ========== EXIT INTENT ==========
  function initExitIntent() {
    document.addEventListener('mouseout', function(e) {
      if (e.clientY < 5 && e.relatedTarget === null) {
        track('exit_intent', { scroll_max: session.scroll_max });
      }
    });
  }

  // ========== UTM CAPTURE ==========
  function captureUTMs() {
    const params = new URLSearchParams(window.location.search);
    const utms = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function(key) {
      const val = params.get(key);
      if (val) utms[key] = val;
    });
    if (Object.keys(utms).length > 0) {
      session.utms = utms;
      track('utm_captured', utms);
    }
  }

  // ========== DATA PERSISTENCE ==========
  function saveSession() {
    const payload = {
      visitor_id: session.visitor_id,
      visit_number: session.visit_number,
      page: session.page,
      referrer: session.referrer,
      device: session.device,
      viewport: session.viewport,
      duration: Math.round((Date.now() - session.session_start) / 1000),
      scroll_max: session.scroll_max,
      section_times: session.section_times,
      form_stage: session.form_stage,
      utms: session.utms || {},
      events: session.events.slice(-100), // cap at 100 events
      timestamp: new Date().toISOString()
    };

    // Store locally
    try {
      const sessions = JSON.parse(localStorage.getItem('eiq_sessions') || '[]');
      sessions.push(payload);
      // Keep last 20 sessions
      if (sessions.length > 20) sessions.splice(0, sessions.length - 20);
      localStorage.setItem('eiq_sessions', JSON.stringify(sessions));
    } catch (e) { /* storage full, ignore */ }

    // Send to server
    try {
      const beacon = navigator.sendBeacon;
      if (beacon) {
        beacon.call(navigator, '/api/analytics', JSON.stringify(payload));
      } else {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(function() {});
      }
    } catch (e) { /* server not available, data saved locally */ }
  }

  // Save on page exit
  window.addEventListener('beforeunload', saveSession);
  // Also save periodically (every 60s)
  setInterval(saveSession, 60000);

  // ========== PUBLIC API ==========
  window.SayfeAnalytics = {
    track: track,
    trackFormStage: trackFormStage,
    getSession: function() { return { ...session }; },
    getSessions: function() {
      try { return JSON.parse(localStorage.getItem('eiq_sessions') || '[]'); }
      catch(e) { return []; }
    },
    getVisitorProfile: function() {
      return {
        visitor_id: session.visitor_id,
        visit_count: session.visit_number,
        first_seen: localStorage.getItem('eiq_vid') ? 'returning' : 'new',
        last_visit: localStorage.getItem('eiq_last_visit'),
        device: session.device
      };
    }
  };

  // ========== INIT ==========
  function init() {
    captureUTMs();
    initIntersectionObserver();
    initClickTracking();
    initIndustryTracking();
    initExitIntent();
    track('page_view', { page: session.page, visit: session.visit_number });
    console.log('[EIQ Analytics] Initialized — visitor:', session.visitor_id, '(visit #' + session.visit_number + ')');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
