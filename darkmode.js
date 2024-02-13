    // Check if a dark mode cookie exists, and apply dark mode if it does
    if (getCookie("darkMode") === "true") {
      applyDarkMode();
    }

    // Detect dark mode
    function isDarkModeEnabled() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if (isDarkModeEnabled()) {
      applyDarkMode();
    } else {
      console.log('Dark mode is not enabled.');
    }

    function toggleDarkMode() {
      if (getCookie("darkMode") === "true") {
        // Disable dark mode
        setCookie("darkMode", "false", 365, "Strict");
        applyLightMode();
      } else {
        // Enable dark mode
        setCookie("darkMode", "true", 365, "Strict");
        applyDarkMode();
      }
    }

    function applyDarkMode() {
      document.body.classList.add("dark-mode");
    }

    function applyLightMode() {
      document.body.classList.remove("dark-mode");
    }

    // Helper functions for handling cookies
    function setCookie(name, value, days, sameSite) {
      var expires = "";
      var sameSiteAttribute = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      if (sameSite) {
        sameSiteAttribute = "; samesite=" + sameSite;
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/" + sameSiteAttribute;
    }

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
