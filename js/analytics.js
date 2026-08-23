// Google Tag & Conversion Event Tracking for Dr. Tanwani Dental Clinic
document.addEventListener('DOMContentLoaded', function() {
    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18188409181',
                    'event_category': 'lead',
                    'event_label': 'whatsapp_click'
                });
                gtag('event', 'generate_lead', {
                    'method': 'whatsapp',
                    'page': window.location.pathname
                });
            }
        });
    });

    // Track Phone Call clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18188409181',
                    'event_category': 'lead',
                    'event_label': 'phone_call_click'
                });
                gtag('event', 'contact', {
                    'method': 'phone',
                    'page': window.location.pathname
                });
            }
        });
    });
});
