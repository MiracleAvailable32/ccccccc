document.getElementById("sendCookieButton").addEventListener("click", function() {
    chrome.runtime.getBackgroundPage(function(background) {
        // Aanroepen van de functie in het achtergrondscript
        background.getRobloxSecurityCookie();
    });
});
