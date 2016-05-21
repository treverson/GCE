Cufon.replace('h1,h2,h3,h4,h5,h6, #main-nav li a');
/* =========================================================
Home page slider
============================================================ */

jQuery(function() {
	jQuery('.flexslider').flexslider({
	  animation: "slide",
	  slideshow: true, 
	  controlsContainer: ".flexslider-container"
  });
});


/* =========================================================
Featured news slider
============================================================ */
jQuery(function() {
	jQuery('#feature-news').carouFredSel({
		responsive: true,
		prev: '#prev1',
		next: '#next1',
		width: '100%',
		scroll: 1,
		auto: false,
		items: {
			width: 210,
			visible: {
				min: 1,
				max: 3
			}
		}
	});
/* =========================================================
Video news slider
============================================================ */
	jQuery('#media-news').carouFredSel({
		responsive: true,
		prev: '#prev2',
		next: '#next2',
		width: '100%',
		scroll: 1,
		auto: false,
		items: {
			width: 210,
			visible: {
				min: 1,
				max: 3
			}
		}
	});
});
/* =========================================================
Create mobile menu
============================================================ */
jQuery(document).ready(function(){
    // Create the dropdown base
    jQuery("<select />").appendTo("#main-menu");
    jQuery("#main-menu select").attr("id","responsive-menu");
		
    // Create default option "Go to..."
    jQuery("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Go to..."
    }).appendTo("#main-menu select");
		
    // Populate dropdown with menu items
    jQuery("#main-menu a").each(function() {
        var el = jQuery(this);
        jQuery("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
        }).appendTo("#main-menu select");
    });
    jQuery("#responsive-menu").change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });
	
});
/* =========================================================
Create mobile menu
============================================================ */
jQuery(document).ready(function(){
    // Create the dropdown base
    jQuery("<select />").appendTo("#top-nav");
    jQuery("#top-nav select").attr("id","top-responsive-menu");
		
    // Create default option "Go to..."
    jQuery("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Navigation..."
    }).appendTo("#top-nav select");
		
    // Populate dropdown with menu items
    jQuery("#top-nav a").each(function() {
        var el = jQuery(this);
        jQuery("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
        }).appendTo("#top-nav select");
    });
    jQuery("#top-responsive-menu").change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });
	
});
	
	
/* =========================================================
Social icons hover
============================================================ */
jQuery(document).ready(function(){
    jQuery("#header-top .social-links a").mouseenter(function(){
        jQuery(this).find('img').fadeTo(300, 0);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(300, 1);
    });
    jQuery("#footer-aside .social-links a").mouseenter(function(){
        jQuery(this).find('img').fadeTo(300, 0);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(300, 1);
    });	
});
/* =========================================================
Fix css
============================================================ */
jQuery(document).ready(function(){
    jQuery(".loading-gif").hide();
    if(jQuery("#comments #respond").prev().find("li").length==0){
        jQuery("#comments #respond").css("border-top","none");
    };
    jQuery('.h-post-item').parent().find('.pagination').css({
        "border-top":"solid 1px #cccccc",
        "padding-top":"5px"
    });
    jQuery(".container .kp-divider:last").remove();
    jQuery("#main-nav ul li:first-child a").css("border-top","none");
    jQuery("#main-nav ul ul li:first-child").css("margin-top",0);	
    jQuery("#main-nav ul li:first-child").css("border-top","none");
    jQuery("#footer-aside .footer-widget ul li:last-child").css("border-bottom","none");
    jQuery("#sidebar .widget ul li:last-child").css("border-bottom","none");
    jQuery(".vertical-widget li:first-child").css("margin-top",0);
    jQuery("#top-nav ul li ul li:last-child").css("border-bottom","none");
    jQuery(".h-post-item li:last-child").css({
        "border-bottom":"none",
        "padding-bottom":5
    });	

});
/* =========================================================
Accordion
============================================================ */
jQuery(document).ready(function() {
    (function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
				
            });
            jQuery('.accordion-title').on('click', function(e) {
                if( jQuery(this).next().is(':hidden') ) {
                    jQuery(this).parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
                    jQuery(this).toggleClass('active').next().slideDown(300);
                }
                e.preventDefault();
            });
        }
    })();
});
/* =========================================================
Flickr Feed
============================================================ */
jQuery(document).ready(function(){ 
		jQuery('#flickr-feed-1').jflickrfeed({
			limit: 10,
			qstrings: {
				id: '78715597@N07'
			},
			itemTemplate:
				'<li class="flickr-badge-image">' +
				'<a rel="prettyPhoto[kopa-flickr]" href="{{image}}" title="{{title}}">' +
				'<img src="{{image_s}}" alt="{{title}}" width="55px" heigth="55px" />' +
				'</a>' +
				'</li>'
		}, function(data) {
			jQuery("a[rel^='prettyPhoto']").prettyPhoto({
				show_title: false
			});
		});
	});
/* =========================================================
prettyPhoto
============================================================ */
jQuery(document).ready(function(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto().mouseenter(function(){
        jQuery(this).find('img').fadeTo(500, 0.3);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(400, 0.6);
    });
});
/* =========================================================
Scroll to top
============================================================ */
jQuery(document).ready(function(){	
    // scroll body to 0px on click
    jQuery('#scroll-to-top').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
});		
/* =========================================================
Comment Form
============================================================ */
jQuery(document).ready(function() {
    var validator = jQuery("#comments-form").kendoValidator().data("kendoValidator"),
    status = jQuery("#status-message");
    jQuery("#submit-comment").click(function() {
        if (validator.validate()) {
            status.text("Your message is being sent").addClass("valid");
        } else {
            status.text("Oops! There is invalid data in the form.").addClass("invalid");
        }
    });
});

/* =========================================================
Remove Broken Images
============================================================ */			
jQuery(window).bind('load', function() {
    jQuery('img').each(function() {
        if((typeof this.naturalWidth != "undefined" && this.naturalWidth == 0 ) || this.readyState == 'uninitialized' ) {
            var parent = jQuery(this).parent();
            if(  parent[0].tagName.toLowerCase() == 'a'){
                parent.remove();
            }else{
                jQuery(this).remove();
            }
        }
    });
})
