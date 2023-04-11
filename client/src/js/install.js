const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // console.log("beforeinstallprompt"); //used for debugging
  // console.log("event" + event); //used for debugging

  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // console.log("butInstall"); //used for debugging

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // console.log("appinstalled"); //used for debugging

  // Clear prompt
  window.deferredPrompt = null;
});
