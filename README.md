Email Analytics Radar
-----

Email Analytics Radar (EA Radar) is a chrome extension that will detect if the email you are viewing in Gmail contains a Litmus Email Analytics tracking code. 

![alt text](https://raw.githubusercontent.com/brendanc/earadar/master/radar_example.png "EA Radar in action")

#### How it works

The extension uses [Gmail.js](https://github.com/KartikTalwar/gmail.js) in combination with [Page Actions](https://developer.chrome.com/extensions/pageAction) and [Content Scripts](https://developer.chrome.com/extensions/content_scripts).

The script looks for the existance of an image following the pattern of Litmus Email Analytics tracking codes 

```
function foundEaCode(){
  return window.document.querySelectorAll("img[src*='emltrk.com']").length > 0
}
```

#### Installation

To install the extension:
 - Go to the releases directory and grab the newest release.  Save the .crx file locally
 - Open chrome and go to chrome://extensions/
 - Drag the .crx file into your chrome window and it will install
