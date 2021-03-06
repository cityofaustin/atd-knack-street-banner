function bigButton(div_id, view_id, url, fa_icon, button_label, callback) {
  // create a large button
  
    $("<div/>", {
      id: div_id,
    }).appendTo("#" + view_id);
    
  $("#" + div_id).append("<a class='big-button' href='" + url + "'><div class='big-button-container'><span><i class='fa fa-" + fa_icon + "'></i></span><span> " + button_label + "</span></div></a>");

  if(callback) callback();
}
	//>>>HOME TAB BUTTONS
$(document).on('knack-view-render.view_2390', function(event, page) {
  // create large button on the home page
    bigButton('contact-directory', 'view_2390', "https://atd.knack.com/street-banners#banners-contacts-organization-directory/", "phone", "Contacts & Organizations");
});
$(document).on('knack-view-render.view_2660', function(event, page) {
    // create large button on the home page
    bigButton('reservations', 'view_2660', "https://atd.knack.com/street-banners#reservations/", "pencil-square-o", "Reservations");
});

$(document).on('knack-view-render.view_2661', function(event, page) {
    // create large button on the home page
    bigButton('availability', 'view_2661', "https://atd.knack.com/street-banners#availability-search/", "calendar", "Availability Search");
});

  // $(document).on('knack-view-render.view_2662', function(event, page) {
  // create large button on the home page
  //  bigButton('work-orders', 'view_2662', "https://atd.knack.com/street-banners#work-orders/", "folder-open", "Work Orders");
// });

  // $(document).on('knack-view-render.view_2750', function(event, page) {
  // create large button on the home page
  // bigButton('schedule', 'view_2750', "https://atd.knack.com/street-banners#schedule/", "clipboard", "Schedule");
// });

  // $(document).on('knack-view-render.view_3009', function(event, page) {
  // create large button on the home page
  //  bigButton('calendar', 'view_3009', "https://atd.knack.com/street-banners#calendar/", "calendar", "Calendar");
// });

$(document).on('knack-view-render.view_3006', function(event, page) {
  // create large button on the home page
    bigButton('reports', 'view_3006', "https://atd.knack.com/street-banners#reports/", "bar-chart", "Reports");
});

$(document).on('knack-view-render.view_2663', function(event, page) {
  // create large button on the home page
    bigButton('resources', 'view_2663', "https://atd.knack.com/street-banners#resources/", "link", "Resources");
});  
	//LAMPPOST TAB BUTTONS
$(document).on('knack-view-render.view_2814', function(event, page) {
  // create large button on the home page
    bigButton('lpb-reservations', 'view_2814', "https://atd.knack.com/street-banners#lamppost-banner-reservations/", "pencil-square-o", "Lamppost | Reservations");
});
	
$(document).on('knack-view-render.view_2815', function(event, page) {
  // create large button on the home page
    bigButton('lpb-availability', 'view_2815', "https://atd.knack.com/street-banners#lpb-availability/", "calendar", "Lamppost | Availability");
});

$(document).on('knack-view-render.view_2816', function(event, page) {
  // create large button on the home page
    bigButton('lpb-work-orders', 'view_2816', "https://atd.knack.com/street-banners#lamppost-work-orders", "folder-open", "Lamppost | Work Orders");
});

$(document).on('knack-view-render.view_2817', function(event, page) {
  // create large button on the home page
    bigButton('lpb-schedule', 'view_2817', "https://atd.knack.com/street-banners#lamppost-schedule/", "clipboard", "Lamppost | Schedule");
});
	//>>>OVER-THE-STREET TAB BUTTONS
$(document).on('knack-view-render.view_2818', function(event, page) {
  // create large button on the home page
    bigButton('ots-reservations', 'view_2818', "https://atd.knack.com/street-banners#over-the-street-banner-reservations/", "pencil-square-o", "Over-the-Street | Reservations");
});

$(document).on('knack-view-render.view_2819', function(event, page) {
  // create large button on the home page
    bigButton('ots-availability', 'view_2819', "https://atd.knack.com/street-banners#ots-availability/", "calendar", "Over-the-Street | Availability");
});
$(document).on('knack-view-render.view_2820', function(event, page) {
  // create large button on the home page
    bigButton('ots-work-orders', 'view_2820', "https://atd.knack.com/street-banners#over-the-street-banner-work-orders", "folder-open", "Over-the-Street | Work Orders");
});

$(document).on('knack-view-render.view_2821', function(event, page) {
  // create large button on the home page
    bigButton('ots-schedule', 'view_2821', "https://atd.knack.com/street-banners#over-the-street-schedule/", "clipboard", "Over-the-Street | Schedule");
});

$(document).on('knack-view-render.view_2907', function(event, page) {
  // create large button on the home page
    bigButton('ots-schedule', 'view_2907', "https://atd.knack.com/street-banners#over-the-street-schedule/", "flag-checkered", "Over-the-Street | Schedule");
});
	//>>>TECHNICIAN TAB BUTTONS
$(document).on('knack-view-render.view_3046', function(event, page) {
  // create large button on the home page
    bigButton('work-orders-tech', 'view_3046', "https://atd.knack.com/street-banners#work-orders//", "folder-open", "Work Orders");
});

$(document).on('knack-view-render.view_3047', function(event, page) {
  // create large button on the home page
    bigButton('schedule', 'view_3047', "https://atd.knack.com/street-banners#schedule/", "clipboard", "Schedule");
});

$(document).on('knack-view-render.view_3048', function(event, page) {
  // create large button on the home page
    bigButton('calendar', 'view_3048', "https://atd.knack.com/street-banners#calendar/", "calendar", "Calendar");
});
	//>>>ADMIN TAB BUTTONS
$(document).on('knack-view-render.view_3012', function(event, page) {
  // create large button on the home page
    bigButton('specifications', 'view_3012', "https://atd.knack.com/street-banners#specifications//", "th-list", "Specifications");
});

$(document).on('knack-view-render.view_3013', function(event, page) {
  // create large button on the home page
    bigButton('materials', 'view_3013', "https://atd.knack.com/street-banners#materials/", "shopping-cart", "Materials");
});

$(document).on('knack-view-render.view_3032', function(event, page) {
  // create large button on the home page
    bigButton('account-management', 'view_3032', "https://atd.knack.com/street-banners#account-management/", "users", "Account Management");
});
	//***MENU - RESERVATION PAGE***
$(document).on('knack-view-render.view_2794', function(event, page) {
  // create large button on the home page
    bigButton('lpb-rsvp', 'view_2794', "https://atd.knack.com/street-banners#lamppost-banner-reservations/", "flag-o", "Lamppost | Reservations");
});

$(document).on('knack-view-render.view_2795', function(event, page) {
  // create large button on the home page
    bigButton('ots-rsvp', 'view_2795', "https://atd.knack.com/street-banners#over-the-street-banner-reservations", "flag-checkered", "Over-the-Street | Reservations");
});
	//***MENU - AVAILABILITY PAGE***
$(document).on('knack-view-render.view_2803', function(event, page) {
  // create large button on the home page
    bigButton('lpb-avail', 'view_2803', "https://atd.knack.com/street-banners#lpb-availability/", "flag", "Lamppost | Availability");
});

$(document).on('knack-view-render.view_2804', function(event, page) {
   // create large button on the home page
    bigButton('ots-avail', 'view_2804', "https://atd.knack.com/street-banners#ots-availability/", "flag-checkered", "Over-the-Street | Availability");
});	
	//***MENU - WORK ORDER PAGE***
$(document).on('knack-view-render.view_2904', function(event, page) {
  // create large button on the home page
    bigButton('lpb-work-orders', 'view_2904', "https://atd.knack.com/street-banners#lamppost-work-orders/", "flag", "Lamppost | Work Orders");
});

$(document).on('knack-view-render.view_2905', function(event, page) {
  // create large button on the home page
    bigButton('ots-work-orders', 'view_2905', "https://atd.knack.com/street-banners#over-the-street-banner-work-orders/", "flag-checkered", "Over-the-Street | Work Orders");
});

$(document).on('knack-view-render.view_2960', function(event, page) {
  // create large button on the home page
    bigButton('maint-work-orders', 'view_2960', "https://atd.knack.com/street-banners#maintenance-work-orders/", "briefcase", "Maintenance | Work Orders");
});

$(document).on('knack-view-render.view_3097', function(event, page) {
  // create large button on the home page
    bigButton('signs-work-orders', 'view_3097', "https://atd.knack.com/signs-markings#my-work-orders/", "wrench", "Signs | Work Orders");
});
	//***MENU - SCHEDULE PAGE***
$(document).on('knack-view-render.view_2906', function(event, page) {
  // create large button on the home page
    bigButton('ots-work-orders', 'view_2906', "https://atd.knack.com/street-banners#lamppost-schedule/", "flag", "Lamppost | Schedule");
});
	//***MENU - RESOURCES PAGE***
$(document).on('knack-view-render.view_2713', function(event, page) {
  // create large button on the home page
    bigButton('street-banners-external-site', 'view_2713', "http://austintexas.gov/page/street-banners", "external-link-square", "Street Banners (External Site)");
});

$(document).on('knack-view-render.view_2796', function(event, page) {
  // create large button on the home page
    bigButton('AMANDA-Users-SP', 'view_2796', "http://cityspace.ci.austin.tx.us/services/amanda/welcome-to-the-amanda-users-site/?searchterm=amanda", "database", "AMANDA links (SP: On-Prem)");
});

$(document).on('knack-view-render.view_3085', function(event, page) {
  // create large button on the home page
    bigButton('help-guide-applications', 'view_3085', "https://github.com/cityofaustin/atd-street-banner/wiki/Street-Banner-Program-Portal:-How-to-Enter-Applications", "external-link-square", "Guide: Entering Applications");
});

$(document).on('knack-view-render.view_3086', function(event, page) {
  // create large button on the home page
    bigButton('help-guide-payment', 'view_3086', "https://github.com/cityofaustin/atd-street-banner/wiki/Street-Banner-Program-Portal:-Payment-Help-Guide", "external-link-square", "Guide: Entering Payment");
});

$(document).on('knack-view-render.view_3087', function(event, page) {
  // create large button on the home page
    bigButton('help-guide-actuals', 'view_3087', "https://github.com/cityofaustin/atd-street-banner/wiki/Street-Banner-Program-Portal:-Entering-Actuals", "external-link-square", "Guide: Entering Actuals");
});

$(document).on('knack-view-render.view_3088', function(event, page) {
  // create large button on the home page
    bigButton('help-guide-schedule', 'view_3088', "https://github.com/cityofaustin/atd-street-banner/wiki/Street-Banner-Program-Portal:-Creating-Schedules", "external-link-square", "Guide: Creating Schedules");
});
