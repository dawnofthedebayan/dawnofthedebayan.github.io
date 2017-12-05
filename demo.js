var view = document.getElementsByClassName('view');
view[0].addEventListener('mouseover',hoverOnScript);
view[0].addEventListener('mouseout',hoverAwayScript);
var submitButton = document.getElementById('contact-submit');
submitButton.addEventListener('click',sendMail);


function hoverOnScript() {
    console.log("Hover");
    view[0].classList.remove("noShadow")
    view[0].classList.add("shadowView")
}
function hoverAwayScript() {
    console.log("Hover away");
    view[0].classList.remove("shadowView");
    view[0].classList.add("noShadow")
}

function sendMail() {
  var textFields = document.getElementsByClassName('input');
  console.log('SEND MAIL CALLED');
  for (var i = 0; i < textFields.length; i++) {

      if (textFields[i].value.length == 0) {
        alert('Please fill all the fields');
        return;
      }

    }
    Email.send(textFields[1].value,"debayanbhattacharyaece@gmail.com",textFields[0].value,textFields[2].value,"smtp.elasticemail.com","debayanbhattacharyaece@gmail.com","d8bf80da-035f-4622-8819-ae310b51cce9");
    alert("SUCCESSFULLY SUBMITTED")
  }




  function toParams(data_js) {
         var form_data = [];
         for ( var key in data_js ) {
             form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
         }

         return form_data.join("&");
  }
