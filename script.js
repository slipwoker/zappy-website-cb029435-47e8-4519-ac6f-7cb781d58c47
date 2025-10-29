// Prevent duplicate Zappy injection
if (window.zappyContactFormLoaded) {
  console.log('⚠️ Zappy: Contact form handler already loaded, skipping duplicate injection');
} else {
  window.zappyContactFormLoaded = true;
}

document.addEventListener('DOMContentLoaded',function(){const mobileToggle=document.getElementById('mobileToggle');const navMenu=document.getElementById('navMenu');if(mobileToggle){mobileToggle.addEventListener('click',function(){const hamburgerIcon=this.querySelector('.hamburger-icon');const closeIcon=this.querySelector('.close-icon');const isActive=this.classList.contains('active');if(isActive){hamburgerIcon.style.display='block';closeIcon.style.display='none';this.classList.remove('active');navMenu.classList.remove('active');document.body.style.overflow='';}else{hamburgerIcon.style.display='none';closeIcon.style.display='block';this.classList.add('active');navMenu.classList.add('active');document.body.style.overflow='hidden';}});const navLinks=navMenu.querySelectorAll('a');navLinks.forEach(link=>{link.addEventListener('click',function(){const hamburgerIcon=mobileToggle.querySelector('.hamburger-icon');const closeIcon=mobileToggle.querySelector('.close-icon');hamburgerIcon.style.display='block';closeIcon.style.display='none';mobileToggle.classList.remove('active');navMenu.classList.remove('active');document.body.style.overflow='';});});}const phoneHeaderBtn=document.querySelector('.phone-header-btn');if(phoneHeaderBtn){phoneHeaderBtn.addEventListener('click',function(){const phoneNumber='+972500000000';window.location.href='tel:'+phoneNumber;});}const contactForm=document.getElementById('contactForm');if(contactForm){contactForm.addEventListener('submit',async function(e){e.preventDefault();const formData=new FormData(this);const formDataObj=Object.fromEntries(formData);console.log('Form submitted:',formDataObj);

// Zappy API Integration - Send to backend
if (!window.zappyContactFormLoaded) {
  console.log('⚠️ Zappy: Skipping API call - handler not properly initialized');
} else {
  try {
    console.log('📧 Zappy: Sending contact form to backend...');
    const zappyResponse = await fetch('https://api.zappy5.com/api/email/contact-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        websiteId: 'cb029435-47e8-4519-ac6f-7cb781d58c47',
        name: formDataObj.name || '',
        email: formDataObj.email || '',
        subject: formDataObj.subject || 'Contact Form Submission',
        message: formDataObj.message || '',
        phone: formDataObj.phone || null
      })
    });
    
    if (zappyResponse.ok) {
      const result = await zappyResponse.json();
      console.log('✅ Zappy: Email sent successfully', result);
    } else {
      console.log('⚠️ Zappy: API returned non-OK status', zappyResponse.status);
    }
  } catch (error) {
    console.error('❌ Zappy: Failed to send email', error);
    // Don't break existing functionality - continue with normal flow
  }
}

// Keep existing behavior
alert('תודה על פנייתך! נחזור אליך בהקדם.');this.reset();});}});

/* Cookie Consent */

// Helper function to check cookie consent
function hasConsentFor(category) {
  if (typeof window.CookieConsent === 'undefined') {
    return false; // Default to no consent if cookie consent not loaded
  }
  
  return window.CookieConsent.validConsent(category);
}

// Helper function to execute code only with consent
function withConsent(category, callback) {
  if (hasConsentFor(category)) {
    callback();
  } else {
    console.log(`[WARNING] Skipping ${category} code - no user consent`);
  }
}

// Cookie Consent Initialization

(function() {
  'use strict';
  
  let initAttempts = 0;
  const maxAttempts = 50; // 5 seconds max wait
  
  // Wait for DOM and vanilla-cookieconsent to be ready
  function initCookieConsent() {
    initAttempts++;
    
    
    if (typeof window.CookieConsent === 'undefined') {
      if (initAttempts < maxAttempts) {
        setTimeout(initCookieConsent, 100);
      } else {
      }
      return;
    }

    const cc = window.CookieConsent;
    
    
    // Initialize cookie consent
    try {
      cc.run({
  "autoShow": true,
  "mode": "opt-in",
  "revision": 0,
  "categories": {
    "necessary": {
      "enabled": true,
      "readOnly": true
    },
    "analytics": {
      "enabled": false,
      "readOnly": false,
      "autoClear": {
        "cookies": [
          {
            "name": "_ga"
          },
          {
            "name": "_ga_*"
          },
          {
            "name": "_gid"
          },
          {
            "name": "_gat"
          }
        ]
      }
    },
    "marketing": {
      "enabled": false,
      "readOnly": false,
      "autoClear": {
        "cookies": [
          {
            "name": "_fbp"
          },
          {
            "name": "_fbc"
          },
          {
            "name": "fr"
          }
        ]
      }
    }
  },
  "language": {
    "default": "he",
    "translations": {
      "he": {
        "consentModal": {
          "title": "אנחנו משתמשים בעוגיות 🍪",
          "description": "מתארגנות על החיים משתמש בעוגיות כדי לשפר את החוויה שלך, לנתח שימוש באתר ולסייע במאמצי השיווק שלנו.",
          "acceptAllBtn": "אשר הכל",
          "acceptNecessaryBtn": "רק הכרחי",
          "showPreferencesBtn": "נהל העדפות",
          "footer": "<a href=\"#privacy-policy\">מדיניות פרטיות</a> | <a href=\"#terms-conditions\">תנאי שימוש</a>"
        },
        "preferencesModal": {
          "title": "העדפות עוגיות",
          "acceptAllBtn": "אשר הכל",
          "acceptNecessaryBtn": "רק הכרחי",
          "savePreferencesBtn": "שמור העדפות",
          "closeIconLabel": "סגור",
          "sections": [
            {
              "title": "עוגיות חיוניות",
              "description": "עוגיות אלה הכרחיות לתפקוד האתר ולא ניתן להשבית אותן.",
              "linkedCategory": "necessary"
            },
            {
              "title": "עוגיות ניתוח",
              "description": "עוגיות אלה עוזרות לנו להבין איך המבקרים מתקשרים עם האתר שלנו.",
              "linkedCategory": "analytics"
            },
            {
              "title": "עוגיות שיווקיות",
              "description": "עוגיות אלה משמשות להצגת פרסומות מותאמות אישית.",
              "linkedCategory": "marketing"
            }
          ]
        }
      }
    }
  },
  "guiOptions": {
    "consentModal": {
      "layout": "box",
      "position": "bottom right",
      "equalWeightButtons": true,
      "flipButtons": false
    },
    "preferencesModal": {
      "layout": "box",
      "equalWeightButtons": true,
      "flipButtons": false
    }
  }
});
      
      // Optional: Handle consent changes (check if onChange is available)
      if (typeof cc.onChange === 'function') {
        cc.onChange(function(cookie, changed_preferences) {
      
      // Enable/disable analytics based on consent
      if (changed_preferences.includes('analytics')) {
        if (cc.validConsent('analytics')) {
          // Enable analytics (e.g., Google Analytics)
          // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
        } else {
          // Example: gtag('consent', 'update', { analytics_storage: 'denied' });
        }
      }
      
      // Enable/disable marketing based on consent
      if (changed_preferences.includes('marketing')) {
        if (cc.validConsent('marketing')) {
          // Example: gtag('consent', 'update', { ad_storage: 'granted' });
        } else {
          // Example: gtag('consent', 'update', { ad_storage: 'denied' });
        }
      }
        });
      } else {
      }

      // Note: Cookie Preferences button removed per marketing guidelines
      // Footer should be clean and minimal - users can manage cookies via banner
    } catch (error) {
    }
  }

  // Initialize when DOM is ready - multiple approaches for reliability
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
    // Backup timeout in case DOMContentLoaded doesn't fire
    setTimeout(initCookieConsent, 1000);
  } else if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initCookieConsent();
  } else {
    // Fallback - try after a short delay
    setTimeout(initCookieConsent, 500);
  }
  
  // Additional fallback - try after page load
  if (typeof window !== 'undefined') {
    if (window.addEventListener) {
      window.addEventListener('load', initCookieConsent, { once: true });
    }
  }
})();

/* Accessibility Features */

/* Mickidum Accessibility Toolbar Initialization - Zappy Style */

window.onload = function() {
    
    try {
        window.micAccessTool = new MicAccessTool({
            buttonPosition: 'left', // Position on left side
            forceLang: 'he-IL', // Force language
            icon: {
                position: {
                    bottom: { size: 50, units: 'px' },
                    left: { size: 20, units: 'px' },
                    type: 'fixed'
                },
                backgroundColor: 'transparent', // Transparent to allow CSS styling
                color: 'transparent', // Let CSS handle coloring
                img: 'accessible',
                circular: false // Square button for consistent styling
            },
            menu: {
                dimensions: {
                    width: { size: 300, units: 'px' },
                    height: { size: 'auto', units: 'px' }
                }
            }
        });
        
    } catch (error) {
    }
};