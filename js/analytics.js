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

    // Track Google Calendar Appointment Booking clicks
    document.querySelectorAll('a[href*="calendar.app.google"]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-18188409181',
                    'event_category': 'appointment',
                    'event_label': 'calendar_booking_click'
                });
                gtag('event', 'schedule_appointment', {
                    'method': 'google_calendar',
                    'page': window.location.pathname
                });
            }
        });
    });

    // Track Google Reviews clicks
    document.querySelectorAll('a[href*="maps.app.goo.gl"]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (typeof gtag === 'function') {
                gtag('event', 'view_reviews', {
                    'platform': 'google_maps',
                    'page': window.location.pathname
                });
            }
        });
    });
});

