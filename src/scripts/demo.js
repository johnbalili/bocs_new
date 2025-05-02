// Preload the demo in the background
const config = { title: "Bocs Widget" }
NavatticEmbed.initPopup("https://capture.navattic.com/cm2895j8t000003mfae4999ls", config)
// Add an event handler to your button. For example:
const button = document.getElementById('demo');
button.addEventListener('click', function() {
NavatticEmbed.openPopup("https://capture.navattic.com/cm2895j8t000003mfae4999ls");
});