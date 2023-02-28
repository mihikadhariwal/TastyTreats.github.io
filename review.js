//selecting the open button, the review button and the popup itself
function openButton() { 
  document.getElementById("modal").showModal(); 
}

function closeButton(){
  document.getElementById("modal").close();
}

function validate(){
   //name field validation
  if(document.getElementById('fname').value=="" || document.getElementById('fname').value==null){
  alert("Please Enter Name");
  return false;}
   //email validation
  else if(document.getElementById('email').value=="" ||document.getElementById('email').value==null){
      alert("Please Enter Email");
  return false;
  }

//radio button validation
  if (checkRadio("q1") && checkRadio("q2") && checkRadio("q3")){
      alert("Review Submitted Successfully!");
      return true;
     }
     else{
     alert("Please answer all choice questions!");
      return false;
     }

     function checkRadio(name){
      var radio = document.forms.myform[name];
     for (var option in radio){
     if(radio[option].checked){
      return true;
     }
     }
     return false;
     }
}






 