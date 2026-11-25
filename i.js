// Fallback page for invite links (https://onry.jjhale.com/i#<code>). The code is only read
// here to build the "Open in Onry" link; it is never sent anywhere.
(function () {
  render();
  // Opening another invite link in a tab that already shows this page only changes the
  // fragment, so the browser doesn't reload the page. Without this, the button would keep
  // the previous link's code.
  window.addEventListener("hashchange", render);

  document.getElementById("year").textContent = new Date().getFullYear();

  function render() {
    const code = safeDecode(location.hash.slice(1));
    // Must match the check in the app (src/features/people/invite-link.ts).
    const valid = /^[A-Za-z0-9_-]{20,64}$/.test(code);

    document.getElementById("invite").hidden = !valid;
    document.getElementById("invalid").hidden = valid;

    // A universal link tapped on its own domain stays in the browser, so this button uses
    // the app's custom URL scheme instead.
    document.getElementById("open-app").href = valid
      ? "onry://invite?code=" + encodeURIComponent(code)
      : "/";
  }

  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (e) {
      return "";
    }
  }
})();
