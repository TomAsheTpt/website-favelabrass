/* GA4 conversion click tracking (key events for the Google Ad Grant).
   The gtag bootstrap lives in each page's <head>; this file only names
   the clicks that matter so they can be marked as key events in GA4. */
document.addEventListener('click', function (e) {
  if (typeof gtag !== 'function') return;
  var el = e.target.closest('a, button.pix-copy');
  if (!el) return;
  if (el.classList.contains('pix-copy')) {
    gtag('event', 'donate_pix_copy', { transport_type: 'beacon' });
    return;
  }
  var href = el.getAttribute('href') || '';
  if (href.indexOf('benfeitoria.com') !== -1) {
    gtag('event', 'donate_click', { donation_channel: 'benfeitoria', transport_type: 'beacon' });
  } else if (href.indexOf('paypal.com') !== -1) {
    gtag('event', 'donate_click', { donation_channel: 'paypal', transport_type: 'beacon' });
  } else if (href.indexOf('wa.me/') !== -1) {
    gtag('event', 'whatsapp_click', { transport_type: 'beacon' });
  } else if (href.indexOf('mailto:') === 0) {
    gtag('event', 'email_click', { transport_type: 'beacon' });
  }
});
