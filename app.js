const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "NAHID HK",
    "Search",
    "With",
    "Google",
    "And",
    "Labs"
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


function googleserch() {
    var googledata = document.getElementById("google").value;
    window.location.href = 'https://www.google.com/search?q=' + googledata;
}
// Get the input field
var input = document.getElementById("google");


input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        googleserch();
    }
});

function myapps() {
    var appdata = document.getElementById('google').value;
    if (appdata == "ip") {
        fetch("https://ipinfo.io/json")
        .then(response => response.json())
        .then(data => {
          var infoString = `<div class='popup'>
          <blockquote>
          <fieldset>
         {"ip":"${data.ip}",<br/>
         "City":"${data.city}", <br/>
         "Region":"${data.region}",<br/>
         "Country":"${data.country}",<br/>
         "Location":${data.loc}", <br/>     
         "Organization":"${data.org}",<br/>
         "Postal Code":"${data.postal},<br/>
         "Timezone":${data.timezone},<br/>
         "data":"nahidhk-labs"
    }  </fieldset>
    </blockquote>
   </div>`;
     document.getElementById('showbox').innerHTML=infoString;
        })
        .catch(error =>document.getElementById("server").value=xn+ 'Error fetching data:', error);

    }else{
        // document.getElementById('showbox').innerHTML=""; 
    }


    if (appdata == "lbs ip json") {
        console.log("open lbs ip json");
    var todata=`<div class='popup'>
     <blockquote>
     <fieldset>
     <label for="formElement">Enter your ip</label><br>
     <input placeholder="0.0.0.0"  class="api" type="text" id="xip" />
     <button onclick="redapp()">show data</button>
     <br>
     <button onclick="acls()">close</button>
   </fieldset>
     </blockquote>
    </div>`;
    document.getElementById("showbox").innerHTML=todata;
    
    } else {
        // document.getElementById("showbox").innerHTML="" 
        console.log("closed lbs ip json");
    }


    if (appdata == "lbs ip trk") {
        console.log("open lbs ip trk");
        document.getElementById("showbox").innerHTML=`<div class='popup'>
         <blockquote>
         <fieldset>
         <label>Location</label><br>
         <input placeholder="00.0000,00.0000"  class="api" type="text" id="locmy" />
         <button onclick="myloc()">traking</button>
       </fieldset>
         </blockquote>
        </div>`
        } else {
            // document.getElementById("showbox").innerHTML="" 
            console.log("closed lbs ip trk");
        }

}


function myloc(){
    var loction = document.getElementById("locmy").value;
    window.location.href="https://www.google.com/maps/place/"+loction;
    alert("Open The google maps , are you ok")
} 

function redapp(){
    var xipadrs = document.getElementById("xip").value;
    var softurl = "https://ipinfo.io/"+xipadrs+"/json"
    fetch(softurl)
    .then(response => response.json())
    .then(data => {
      var dayinfo = `<div class='popup'>
      <blockquote>
      <fieldset>
     {"ip":"${data.ip}",<br/>
     "City":"${data.city}", <br/>
     "Region":"${data.region}",<br/>
     "Country":"${data.country}",<br/>
     "Location":"${data.loc}", <br/>     
     "Organization":"${data.org}",<br/>
     "Postal Code":"${data.postal}",<br/>
     "Timezone":"${data.timezone}",<br/>
     "powredBy":"http://nahidhk.info"
}  </fieldset>
</blockquote>
</div>`;
 document.getElementById('showbox').innerHTML=dayinfo;
    })
    .catch(error =>document.getElementById("server").value=xn+ 'Error fetching data:', error); 
}

function acls(){
    document.getElementById("showbox").innerHTML="";  
}


