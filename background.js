chrome.tabs.onCreated.addListener(function(tab) {
    var appID = 'gkcknpgdmiigoagkcoglklgaagnpojed';

    if (/:\/\/trello.com\/(b|c)\//.test(tab.url)) {
        // close current tab
        chrome.tabs.remove(tab.id);

        // send tab url to app
        chrome.management.launchApp(appID, function() {
            chrome.runtime.sendMessage(appID, tab.url);
        });
    }
});
