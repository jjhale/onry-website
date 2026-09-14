// Fallback page for invite links (https://onry.jjhale.com/i#<code>). The code is only read
// here to build the "Open in Onry" link; it is never sent anywhere.
(function () {
  const code = safeDecode(location.hash.slice(1));
  // Must match the check in the app (src/features/people/invite-link.ts).
  const valid = /^[A-Za-z0-9_-]{20,64}$/.test(code);

  document.getElementById(valid ? "invite" : "invalid").hidden = false;

  if (valid) {
    // A universal link tapped on its own domain stays in the browser, so this button uses
    // the app's custom URL scheme instead.
    document.getElementById("open-app").href = "onry://invite?code=" + encodeURIComponent(code);
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return "";
    }
  }
})();
