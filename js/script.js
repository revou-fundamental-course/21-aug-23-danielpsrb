// script menu hamburger
$(function(){
    $(".toggle").on("click", function(){
        if($(".menu-navbar").hasClass("active")){
            $(".menu-navbar").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else{
            $(".menu-navbar").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    });
})

// Mengambil nama dari pengguna
const name = prompt("Hi, What is your name?");

// Memeriksa Validasi Nama dari Pengguna dan tidak boleh kosong
if (name && name.trim() !== "") {
    const nameElement = document.getElementById("name");
    nameElement.textContent = name;
} else {
    alert("Name cannot be empty. Please re-enter your name.");
    window.location.reload(); // Muat Ulang Halaman, Jika nama pengguna kosong
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if(n >  imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideIndex-1].style.display = "block";

}

setInterval(() =>{
    plusDivs(1);
}, 5000 )


function validateForm() {
    var name = document.forms["message-form"]["name"].value;
    var birthdate = document.forms["message-form"]["birthdate"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var message = document.forms["message-form"]["message"].value;
    var formWarning = document.getElementById("formWarning");
    
    if (name === "" || birthdate === "" || gender === "" || message === "") {
      formWarning.textContent = "All fields are required, cannot be empty";
      return false;
    }
    
    formWarning.textContent = "";
    return true;
  }
  
  function submitForm() {
    if (validateForm()) {
      var name = document.forms["message-form"]["name"].value;
      var birthdate = document.forms["message-form"]["birthdate"].value;
      var gender = document.forms["message-form"]["gender"].value;
      var message = document.forms["message-form"]["message"].value;
      
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
    }
  }