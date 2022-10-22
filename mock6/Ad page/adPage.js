const addPostForm = document.querySelector('.add-post-form');
const yearValue = document.getElementById('year-value');
const bodyValue = document.getElementById('body-value');
const priceValue = document.getElementById('price-value');
const typeValue = document.getElementById('type-value');


// otp: 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var otp = false;
var otpValue = document.getElementById('otp-btn');


if(otp === false){
    modal.style.display = "none";
}

btn.onclick = function() {
    modal.style.display = "block";
  }
span.onclick = function() {
    modal.style.display = "none";
  }
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//   }
// }

const otpContainer = document.getElementsByClassName('otp-container');

let url = "http://localhost:3000/furniture";

console.log("On Ad Page");

fetch(url).then(res => res.json())
          .then(data => console.log(data));

//* insert : NEW POST METHOD POST
otpValue.addEventListener('click' , (e) =>{
    let first = document.getElementById('ist').value;
    let second = document.getElementById('sec').value;
    let third = document.getElementById('third').value;
    let fourth = document.getElementById('fourth').value;

    let optarr = [first,second,third,fourth].join("");
    console.log(optarr);

    if(optarr == "1234"){
        console.log("Yes");
       fetch( url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            year:yearValue.value,
            Description:bodyValue.value,
            Price : priceValue.value,
            type : typeValue.value
        })
    });
    alert("Ad posted successfully")
    }
    else{
        console.log("No");
        alert("wrong OTP")
    }
    
})
addPostForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    otp = true;
    console.log(yearValue.value);
    console.log(yearValue.value);

    
})


// ! OPT COMPONENT
function clickEvent(first,last){
    if(first.value.length){
      document.getElementById(last).focus();
    }
    
  }

  console.log(otp)