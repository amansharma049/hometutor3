const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }

let hour = new Date().getHours();
let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  }else if (hour < 16) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
document.getElementById("good").innerHTML = greeting;
