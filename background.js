//
// Page Action - this will put the litmus icon in the url bar if we detect an ea image.
//
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        // When a page contains a ea tag...
        new chrome.declarativeContent.PageStateMatcher({
        	pageUrl: {hostEquals: 'mail.google.com'},
          css: ["img[src*='emltrk.com']"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});
