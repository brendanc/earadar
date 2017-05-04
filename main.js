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

	gmail.observe.on("view_thread", function(id, url, body, xhr) {
      repeat(radar,3);
	});

  gmail.observe.on("open_email", function(id, url, body, xhr) {
      repeat(radar,3);
  });

	gmail.observe.on("refresh", function(url, body, data, xhr) {
      repeat(radar,3);
  });

}

function repeat(f, times){
    var counter = 0;
    var looper = setInterval(function(){ 
    counter++;

    if (counter >= times)
    {
        clearInterval(looper);
    }
      f();
    }, 500);
}

function foundEaCode(){
  var selector = "img[src*='emltrk.com']";
  var found = false;
  var email = gmail.get.displayed_email_data();
  try{
    var html = email.threads[email.last_email].content_html;
    var emailData = jQuery(html);
    var imgs = jQuery(selector, emailData);
    found = imgs.length > 0;
    console.log("radar::" + found);
  }
  catch(e){
    console.log('radar error: ' +  e);
  }
  return found || window.document.querySelectorAll(selector).length > 0
}

function radar(){
	if(foundEaCode()){

       var thread = new gmail.dom.thread($('div.if'));
       var subject = thread.dom('subject');

      		if(!subject.html().match(/litmus-icon-19/)) {
      			var texts = " title='There&#39;s an ea tracking code in this email!' alt='There is an ea tracking code in this email!' ";
      			var styles = " style='vertical-align:middle; padding-right:7px;' ";
      			var img = "<img src='" + litmus_icon_19 + "'" + texts + styles + " />";
      			subject.html(img  + "<span>" + subject.html() + "</span>");
      		}
  		}
}

refresh(main);