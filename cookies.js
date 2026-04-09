const maincontent = document.getElementById("main-content");
const cookiesdiv = document.getElementById("cookies");
const cookiesaccept = document.getElementById("cookies-accept");
const cookiesrefuse = document.getElementById("cookies-refuse");



cookiesaccept.addEventListener("click",acceptcookies);
cookiesrefuse.addEventListener("click",refusecookies);

const cookies = getCookie("cookies");
console.log("Cookies",cookies);
function undisplayCookie(){
    maincontent.classList.remove("blured");
    cookiesdiv.classList.remove("diplay-cookies");
}

if(cookies){
    console.log("cookies");
    
}
if(cookies == ""){
    maincontent.classList.add("blured");
    cookiesdiv.classList.add("diplay-cookies")
    console.log("blured content");
}
if(cookies == "accepted"){
    undisplayCookie();
    console.log("Hey Accepted");
}
if(cookies == "refused"){
    undisplayCookie();
    console.log("Hey Refused");
}



function acceptcookies(){
    managecookies("cookies","accepted",100);
    console.log("Button clicked",document.cookie);
}
function refusecookies(){
    managecookies("cookies","refused",100);
    console.log("Button clicked",document.cookie);
}

function managecookies(cname,cvalue,exdays){

    setCookie(cname, cvalue, exdays);
    undisplayCookie();
    console.log("cookies managed");
}









function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}