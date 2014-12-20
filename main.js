//
// This will add the litmus icon to the left of a subject line if we detect an ea image
//

var gmail;


function refresh(f) {
  if(/in/.test(document.readyState)) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){

gmail = new Gmail();

	gmail.observe.on("open_email", function(id, url, body, xhr) {
  		radar();
	});

	gmail.observe.on("refresh", function(url, body, data, xhr) {
  		radar();
	});

}

function foundEaCode(){
  return window.document.querySelectorAll("img[src*='emltrk.com']").length > 0
}

function radar(){
	if(foundEaCode()){
      		var subject = document.querySelectorAll("table[role='presentation']:not([style*='display: none'])")[0].getElementsByTagName("h2")[0];
      		if(!subject.innerHTML.match(/litmus-icon-19/)) {
      			var texts = " title='There&#39;s an ea tracking code in this email!' alt='There is an ea tracking code in this email!' ";
      			var styles = " style='vertical-align:middle; padding-right:7px;' ";
      			var img = "<img src='" + litmus_icon_19 + "'" + texts + styles + " />";
      			subject.innerHTML = img  + "<span>" + subject.innerHTML + "</span>";
      		}
  		}
}

refresh(main);