var response, responseJOSN, hospital, hospitalJSON;
var citySelector, hospitalSelector;
var x, changed = false, info, boxDiv, hideButton;
var cityArr = [];
var hospitals = [];
var horoscope, weather, weather_query;
var joke;
var yogaText, doctorText, cnslngText, helplineText;
var yoga, yogaSelector1, yogaSelector2, yogaSelector3, yogaSelector4;
var doctor, doctorSelector1, doctorSelector2, doctorSelector3, doctorSelector4;
var cnslng, cnslngSelector1, cnslngSelector2;
var helpline, helplineSelector;
var movie;
var travel;
var table;

function setup(){
  var canvas = createCanvas(displayWidth, displayHeight*2);

  getData();
  citySelector = createSelect();
  citySelector.position(10,10);

  hospitalSelector = createSelect();
  hospitalSelector.position(citySelector.x, citySelector.y + 50);
  hospitalSelector.hide();

  info = createElement("p");
  info.position(hospitalSelector.x, hospitalSelector.y + 50);

  yoga = createElement("img");
  yoga.elt.src = "Pictures/yoga.jpg";
  yoga.elt.width = canvas.width/2;
  yoga.elt.height = displayWidth/2 - 350;
  yoga.position(0, 40);

  yogaText = createElement("h3");
  yogaText.html("Yoga");
  yogaText.elt.id = "imgText";
  yogaText.style("color","#c5cfb0");
  yogaText.position(yoga.elt.width/2 - 30, yoga.y);

  
  doctor = createElement("img");
  doctor.elt.src = "Pictures/doctor.jpg";
  doctor.elt.width = canvas.width/2;
  doctor.elt.height = yoga.elt.height;
  doctor.position(yoga.x + yoga.elt.width, yoga.y);

  doctorText = createElement("h3");
  doctorText.html("Doctor");
  doctorText.elt.id = "imgText";
  doctorText.style("color","#a0b4ce");
  doctorText.position(doctor.x + doctor.elt.width/2 + 100, doctor.y + 70);


  cnslng = createElement("img");
  cnslng.elt.src = "Pictures/counselling.png";
  cnslng.elt.width = yoga.elt.width;
  cnslng.elt.height = displayWidth/2 - 300;
  cnslng.position(0, yoga.y + yoga.elt.width/2 - 10);

  cnslngText = createElement("h3");
  cnslngText.html("Counselling");
  cnslngText.elt.id = "imgText";
  cnslngText.style("color","#53b1e7");
  cnslngText.position(cnslng.x + cnslng.elt.width/2 - 120, cnslng.y - 30);


  helpline = createElement("img");
  helpline.elt.src = "Pictures/helpline.jpg";
  helpline.elt.width = canvas.width/2;
  helpline.elt.height = cnslng.elt.height;
  helpline.position(cnslng.x + cnslng.elt.width, cnslng.y);


  movie = createElement("img");
  movie.elt.src = "Pictures/movie.jpg";
  movie.elt.width = canvas.width/2;
  movie.elt.height = cnslng.elt.height;
  movie.position(0, cnslng.y + cnslng.elt.width/2 + 40);


  travel = createElement("img");
  travel.elt.src = "Pictures/ticket.jpg";
  travel.elt.width = canvas.width/2;
  travel.elt.height = movie.elt.height;
  travel.position(movie.x + movie.elt.width, movie.y);


  boxDiv = createDiv();
  boxDiv.elt.id = "buttonBg";
  boxDiv.position(displayWidth/2 - 150, 100);
  boxDiv.style("width","300px");
  boxDiv.style("height","500px");
  boxDiv.hide();

  hideButton = createButton("<i class='fa fa-times' style='font-size:20px;'></i>");
  hideButton.elt.id = "cross";
  hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
  hideButton.hide();

  createButtons();

  table = document.getElementsByTagName("table")[0];
  table.style = "left:" + displayWidth/4 + "px; top:450px; display:none";
}

function draw(){
  background("lightgray");

  citySelector.changed(()=>{
    hospitalSelector.show();
    hospitalSelector.elt.innerHTML = "";
    changed = true;
    for(x in hospitals){
      if(hospitals[x][0] === citySelector.value()){
        hospitalSelector.option(hospitals[x][1]);
      }
    }
  })

  if(changed === true){
    for(x in hospitals){
      if(hospitals[x][1] === hospitalSelector.value()){
        info.html("City: " + hospitals[x][0] + "<br>Name: " + hospitals[x][1] + "<br>Address: " + hospitals[x][2] + "<br>Email: " + hospitals[x][3]);
      }
    }
  }

  hideButton.mousePressed(()=>{
    hideYogaButton();
    hideDoctorButton();
    hideCounsellingButton();
    boxDiv.hide();
    hideButton.hide();
    table.style = "left:" + displayWidth/4 + "px; top:450px; display:none";
    boxDiv.style("width","300px");
  })

  yoga.mousePressed(()=>{
    boxDiv.position(displayWidth/2 - 150, 100);
    boxDiv.style("height","300px");
    hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
    boxDiv.show();
    hideButton.show();
    yogaSelector1.show();
    yogaSelector2.show();
    yogaSelector3.show();
    yogaSelector4.show();

    hideDoctorButton();
    hideCounsellingButton();
  })

  yogaSelector1.mousePressed(()=>{
    window.open("https://silverageyoga.org/online-classes");
    hideYogaButton();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector2.mousePressed(()=>{
    window.open("https://patanjaleeyoga.com/online-yoga-classes");
    hideYogaButton();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector3.mousePressed(()=>{
    window.open("https://www.artofliving.org/in-en/yoga/health-and-wellness/yoga-for-seniors");
    hideYogaButton();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector4.mousePressed(()=>{
    window.open("https://www.vishuddhiyogaindia.com/yoga-online-courses/");
    hideYogaButton();
    boxDiv.hide();
    hideButton.hide();
  })
  

  doctor.mousePressed(()=>{
    boxDiv.position(displayWidth/2 - 150, 100);
    boxDiv.style("height","280px");
    hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
    hideButton.show();
    boxDiv.show();
    doctorSelector1.show();
    doctorSelector2.show();
    doctorSelector3.show();

    hideYogaButton();
    hideCounsellingButton();
  })

  doctorSelector1.mousePressed(()=>{
    window.open("https://www.1mg.com/online-doctor-consultation");
    hideDoctorButton();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector2.mousePressed(()=>{
    window.open("https://www.icliniq.com/en_IN/");
    hideDoctorButton();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector3.mousePressed(()=>{
    window.open("https://lockdownclinic.com");
    hideDoctorButton();
    boxDiv.hide();
    hideButton.hide();
  })


  cnslng.mousePressed(()=>{
    boxDiv.position(displayWidth/2 - 150, 450);
    boxDiv.style("height","200px");
    hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
    hideButton.show();
    boxDiv.show();
    cnslngSelector1.show();
    cnslngSelector2.show();

    hideYogaButton();
    hideDoctorButton();
  })

  cnslngSelector1.mousePressed(()=>{
    window.open("https://yourdost.com");
    hideCounsellingButton();
    boxDiv.hide();
    hideButton.hide();
  })
  cnslngSelector2.mousePressed(()=>{
    window.open("https://www.manastha.com");
    hideCounsellingButton();
    boxDiv.hide();
    hideButton.hide();
  })

  helpline.mousePressed(()=>{
    boxDiv.position(displayWidth/4 - 25, 450);
    boxDiv.style("width","650px");
    boxDiv.style("height","660px");
    table.style = "left:" + displayWidth/4 + "px; top:500px; display:block";
    hideButton.position(boxDiv.x + 630, boxDiv.y - 10);
    hideButton.show();
    boxDiv.show();

    hideYogaButton();
    hideDoctorButton();
    hideCounsellingButton();
  })
}

async function getData(){
  horoscope = (await (await fetch("https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/aries")).json()).horoscope.substring(1);
  console.log(horoscope);

  weather_query = "Mumbai";
  //Exceptions: Vijaywada, Fridabad, Raigad, Sindhudurg
  weather = (await (await fetch("https://api.openweathermap.org/data/2.5/weather?&appid=0acbed08482b338a220e6ba9c72d00e9&q=" + weather_query)).json())
  //console.log(weather);
  console.log("Temperature: " + (Math.round(weather.main.temp - 273)) + "°C");
  console.log("Humidity: " + weather.main.humidity);
  console.log("Weather: " + weather.weather[0].main);

  joke = (await (await fetch("https://icanhazdadjoke.com/", {headers:{Accept: "application/json"}})).json()).joke;
  console.log(joke);

  response = await fetch("data.txt");
  responseJOSN = await response.json();
  hospital = responseJOSN["Table1"];

  for(var obj in hospital){
    cityArr.push(hospital[obj].city);
    hospitals.push([hospital[obj].city, hospital[obj].name, hospital[obj].address, hospital[obj].id]);
  }

  cityArr = cityArr.filter((value, index) => cityArr.indexOf(value) === index);
  
  for(x of cityArr){
    citySelector.option(x);
  }
}

function hideYogaButton(){
  yogaSelector1.hide();
  yogaSelector2.hide();
  yogaSelector3.hide();
  yogaSelector4.hide();
}

function hideDoctorButton(){
  doctorSelector1.hide();
  doctorSelector2.hide();
  doctorSelector3.hide();
}

function hideCounsellingButton(){
  cnslngSelector1.hide();
  cnslngSelector2.hide();
}

function createButtons(){
  yogaSelector1 = createButton("Silver Age Yoga");
  yogaSelector1.position(displayWidth/2 - 100, 200);
  yogaSelector1.elt.id = "buttonLink";
  yogaSelector1.hide();

  yogaSelector2 = createButton("Patanjalee Yoga");
  yogaSelector2.position(yogaSelector1.x,yogaSelector1.y + 50);
  yogaSelector2.elt.id = "buttonLink";
  yogaSelector2.hide();

  yogaSelector3 = createButton("Art of Living Yoga");
  yogaSelector3.position(yogaSelector1.x,yogaSelector1.y + 100);
  yogaSelector3.elt.id = "buttonLink";
  yogaSelector3.hide();

  yogaSelector4 = createButton("Vishuddhi Yoga");
  yogaSelector4.position(yogaSelector1.x,yogaSelector1.y + 150);
  yogaSelector4.elt.id = "buttonLink";
  yogaSelector4.hide();

  doctorSelector1 = createButton("Online Doctor Consultation");
  doctorSelector1.position(displayWidth/2 - 100, 200);
  doctorSelector1.elt.id = "buttonLink";
  doctorSelector1.hide();

  doctorSelector2 = createButton("iCliniq Doctor Consultation");
  doctorSelector2.position(doctorSelector1.x, doctorSelector1.y + 50);
  doctorSelector2.elt.id = "buttonLink";
  doctorSelector2.hide();

  doctorSelector3 = createButton("Lock Down Clinic Doctor Consultation");
  doctorSelector3.position(doctorSelector1.x,  doctorSelector1.y + 100);
  doctorSelector3.elt.id = "buttonLink";
  doctorSelector3.hide();

  cnslngSelector1 = createButton("Your Dost Counselling");
  cnslngSelector1.position(displayWidth/2 - 100, 550);
  cnslngSelector1.elt.id = "buttonLink";
  cnslngSelector1.hide();

  cnslngSelector2 = createButton("Manastha Counselling");
  cnslngSelector2.position(cnslngSelector1.x,cnslngSelector1.y + 50);
  cnslngSelector2.elt.id = "buttonLink";
  cnslngSelector2.hide();
}