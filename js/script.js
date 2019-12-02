console.log('NZ tourism');

var accommodation = [
  {
    name: 'Novotel Wellington',
    id: 101,
    address: '133 The Terrace 6011, Wellington',
    location: 'Wellington',
    type: 'Hotel',
    facilities: 'wifi',
    bed: '1',
    rating : 4.5,
    price: 157,
    minPeople: 1,
    maxPeople: 2,
    minNight: 1,
    maxNight: 5,
    description: 'Novotel Wellington is a 4.5 star hotel located in the heart of the CBD, close to iconic attractions - Te Papa, Cable Car, Botanical Gardens and the Waterfront. Our modern accommodation rooms have a pop of colour and are designed with guest comfort in mind. All rooms feature smart flat screen televisions, working desks and plenty of natural light.',
    latitude : -41.283692,
    longitude : 174.774749,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/novotel1.jpg',
    photo2: 'images/accommodation/novotel2.jpg',
    photo3: 'images/accommodation/novotel3.jpg',
    photoCity: 'images/locations/Wellington1.jpg',
    website: 'https://www.accorhotels.com/gb/hotel-3060-novotel-auckland-ellerslie/index.shtml'
  },

  {
    name: 'SkyCity Grand Hotel',
    id: 102,
    address: '90 Federal Street, Auckland CBD, Auckland 1010',
    location: 'Auckland',
    type: 'Hotel',
    facilities: 'wifi',
    bed: '1+2',
    rating : 5,
    price: 157,
    minPeople: 1,
    maxPeople: 2,
    minNight: 1,
    maxNight: 5,
    description: 'Ideally situated in the heart of Auckland\'s CBD, with many of the City\'s most impressive attractions and eateries literally on our doorstep, the Grand Hotel offers guests a truly five-star experience.',
    latitude : -36.848916,
    longitude : 174.762391,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/sky1.jpg',
    photo2: 'images/accommodation/sky2.jpg',
    photo3: 'images/accommodation/sky3.jpg',
    photoCity: 'images/locations/Auckland1.jpg',
    website: 'https://skycityauckland.co.nz/hotels/skycity-grand/'
  },

  {
    name: 'Motel 80',
    id: 103,
    address: '80 Great South Road, Epsom / Newmarket, Auckland, New Zealand',
    location: 'Auckland',
    type: 'Motel',
    facilities: 'wifi',
    bed: '1+1',
    rating : 3,
    price: 90,
    minPeople: 2,
    maxPeople: 4,
    minNight: 3,
    maxNight: 10,
    description: 'Motel 80, located just off Mt St John Domain, offers business accommodation with free Wi Fi. The venue comprises 35 rooms. Private parking is available as well. Newmarket is a 15-minute walk away, and Remuera train station is at a 5-minute walking distance. Spark Arena is reachable within a 10-minute drive.',
    latitude : -36.877693,
    longitude : 174.781257,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/m801.jpg',
    photo2: 'images/accommodation/m802.jpg',
    photo3: 'images/accommodation/m803.jpg',
    photoCity: 'images/locations/Auckland1.jpg',
    website: 'https://motel-80.aucklandcityhotels.net/en/'
  },

  {
    name: 'YHA Auckland City Backpackers',
    id: 104,
    address: '18 Liverpool Street, Auckland CBD, Auckland 1010•09-309 2802',
    location: 'Auckland',
    type: 'Hostel',
    facilities: 'wifi',
    bed: '1',
    rating : 4,
    price: 30,
    minPeople: 1,
    maxPeople: 1,
    minNight: 1,
    maxNight: 10,
    description: 'The hostel is located in Auckland’s CBD close to Queen Street, the Sky Tower, Aotea Square, Civic Theatre and many other attractions. YHA Auckland International can cater for up to 168 people across 47 rooms',
    latitude : -36.856640,
    longitude : 174.762643,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/yha1.jpg',
    photo2: 'images/accommodation/yha2.jpg',
    photo3: 'images/accommodation/yha3.jpg',
    photoCity: 'images/locations/Auckland1.jpg',
    website: 'https://www.yha.co.nz/hostels/north-island-hostels/yha-auckland-city'
  },

  {
    name: 'Auckland Holiday Home',
    id: 105,
    address: '294 Glenvar Road, Torbay, Auckland 0630',
    location: 'Auckland',
    type: 'House',
    facilities: 'wifi',
    bed: '2',
    rating : 3,
    price: 90,
    minPeople: 1,
    maxPeople: 4,
    minNight: 2,
    maxNight: 15,
    description: 'Furnished Accommodation, Secluded Bush Retreat in New Zealand on the Auckland North Shore. Quality 6 bedroom Auckland holiday house and basement apartment furnished accomodation with a total of 3 bathrooms and 2 kitchens in native bush setting, quiet and secure North Shore suburb ideal for holiday rentals, short term rental and corporate rentals.',
    latitude : -36.694882,
    longitude : 174.727756,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/holidayh1.jpg',
    photo2: 'images/accommodation/holidayh2.jpg',
    photo3: 'images/accommodation/holidayh3.jpg',
    photoCity: 'images/locations/Auckland1.jpg',
    website: 'http://www.aucklandholidayhome.co.nz/'
  },

  {
    name: 'Capital View Motor Inn Motel',
    id: 106,
    address: '12 Thompson Street, Mount Cook, Wellington 6001',
    location: 'Wellington',
    type: 'Motel',
    facilities: 'wifi',
    bed: '1+1',
    rating : 4,
    price: 90,
    minPeople: 2,
    maxPeople: 4,
    minNight: 3,
    maxNight: 10,
    description: 'Capital View is in the heart of the business centre, within walking distance to all city amenities, Renouf Centre, Michael Fowler Conference Centre and other entertainment/conference venues. A short walk to the vibrant Cuba Street area, cafés, restaurants and shops',
    latitude : -41.297237,
    longitude : 174.771544,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/capital1.jpg',
    photo2: 'images/accommodation/capital2.png',
    photo3: 'images/accommodation/capital3.jpg',
    photoCity: 'images/locations/Wellington1.jpg',
    website: 'https://www.capitalview.co.nz/'
  },

  {
    name: 'Trek Global Backpackers',
    id: 107,
    address: '9 O\'Reily Avenue, Te Aro, Wellington 6141',
    location: 'Wellington',
    type: 'Hostel',
    facilities: 'wifi',
    bed: '1',
    rating : 3.9,
    price: 30,
    minPeople: 1,
    maxPeople: 1,
    minNight: 1,
    maxNight: 10,
    description: 'Whether you are flying solo or travelling with friends our aim at Trek Global is to provide you with a memorable Wellington experience whilst giving you a homely and friendly base to explore from. ',
    latitude : -41.288749,
    longitude : 174.773549,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/trek1.jpg',
    photo2: 'images/accommodation/trek2.jpg',
    photo3: 'images/accommodation/trek3.jpg',
    photoCity: 'images/locations/Wellington1.jpg',
    website: 'https://trekglobal.nz/'
  },

  {
    name: 'Wellington City Cottages',
    id: 108,
    address: '7/5 Tonks Grove, Te Aro, Wellington 6011',
    location: 'Wellington',
    type: 'House',
    facilities: 'wifi',
    bed: '2',
    rating : 4,
    price: 90,
    minPeople: 1,
    maxPeople: 4,
    minNight: 2,
    maxNight: 15,
    description: 'Your fully renovated historic cottage comprises a Queen bed with the option of two additional guests in the lounge room using a double sofa bed (One Bed Cottage + Sofa bed). Each cottage has a modern bathroom with great shower. The kitchen has a microwave, stove top, Nespresso machine and dishwasher plus crockery, cutlery and glassware.',
    latitude : -41.296579,
    longitude : 174.773141,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/cottage1.jpg',
    photo2: 'images/accommodation/cottage2.jpg',
    photo3: 'images/accommodation/cottage3.jpg',
    photoCity: 'images/locations/Wellington1.jpg',
    website: 'https://wellingtoncityaccommodation.co.nz/'
  },

  {
    name: 'The George',
    id: 109,
    address: '50 Park Terrace, Christchurch Central City, Christchurch 8013',
    location: 'Christchurch',
    type: 'Hotel',
    facilities: 'wifi',
    bed: '1',
    rating : 5,
    price: 157,
    minPeople: 1,
    maxPeople: 2,
    minNight: 1,
    maxNight: 5,
    description: 'The George typifies luxury at every level. Extensive facilities, comprehensive service, excellent quality and attention to detail. Experience signature service with our one-to-one guest ratio, and consistent personalised service. ',
    latitude : -43.525671,
    longitude : 172.628395,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/george1.jpg',
    photo2: 'images/accommodation/george2.jpg',
    photo3: 'images/accommodation/george3.jpg',
    photoCity: 'images/locations/Christchurch1.jpg',
    website: 'https://www.thegeorge.com/'
  },


  {
    name: 'Dorset House Backpackers Hostel',
    id: 110,
    address: '1 Dorset Street, Christchurch Central City, Christchurch 8013',
    location: 'Christchurch',
    type: 'Hostel',
    facilities: 'wifi',
    bed: '1',
    rating : 4,
    price: 30,
    minPeople: 1,
    maxPeople: 1,
    minNight: 1,
    maxNight: 10,
    description: 'A boutique backpackers in Christchurch, Dorset House offers affordable accommodation in central Christchurch. A minute\'s walk away you\'ll find the city\'s most vibrant bar and restaurant hub, while the tranquil Hagley Park is a minute in the other direction. ',
    latitude : -43.522345,
    longitude : 172.627401,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/dorset1.jpg',
    photo2: 'images/accommodation/dorset2.jpg',
    photo3: 'images/accommodation/dorset3.jpg',
    photoCity: 'images/locations/Christchurch1.jpg',
    website: 'https://www.dorset.co.nz/'
  },

  {
    name: '136 On Bealey - Motel',
    id: 111,
    address: '136 Bealey Avenue, Christchurch Central City, Christchurch 8013',
    location: 'Christchurch',
    type: 'Motel',
    facilities: 'wifi',
    bed: '1+1',
    rating : 4.2,
    price: 90,
    minPeople: 2,
    maxPeople: 4,
    minNight: 3,
    maxNight: 10,
    description: 'Set in a residential neighbourhood, this streamlined motel is within 2 km of both the Canterbury Museum and Christchurch Botanic Gardens. Christchurch International Airport is 10 km away.',
    latitude : -43.520957,
    longitude : 172.636048,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/bealey1.jpg',
    photo2: 'images/accommodation/bealey2.jpg',
    photo3: 'images/accommodation/bealey3.jpg',
    photoCity: 'images/locations/Christchurch1.jpg',
    website: 'http://136onbealey.co.nz/'
  },

  {
    name: '200 Riccarton Holiday House',
    id: 112,
    address: '200 Riccarton Road, Riccarton, Christchurch 8041',
    location: 'Christchurch',
    type: 'House',
    facilities: 'wifi',
    bed: '2',
    rating : 3.5,
    price: 90,
    minPeople: 1,
    maxPeople: 4,
    minNight: 2,
    maxNight: 15,
    description: 'Boasting a garden, Holiday house is situated in Christchurch, within 5 km of Victoria Street. Complimentary WiFi is offered. Some accommodation includes a kitchen with an oven, living room, and a shared bathroom with shower.',
    latitude : -43.529800,
    longitude : 172.590771,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/riccarton1.jpg',
    photo2: 'images/accommodation/riccarton2.jpg',
    photo3: 'images/accommodation/riccarton3.jpg',
    photoCity: 'images/locations/Christchurch1.jpg',
    website: 'https://holidayhouse.newzealandhotels.website/'
  },

  {
    name: 'Millennium Hotel Queenstown',
    id: 113,
    address: '32 Frankton Road, Queenstown 9300',
    location: 'Queenstown',
    type: 'Hotel',
    facilities: 'wifi',
    bed: '1',
    rating : 5,
    price: 157,
    minPeople: 1,
    maxPeople: 2,
    minNight: 1,
    maxNight: 5,
    description: 'Right in the heart of the action, Millennium Hotel Queenstown is just minutes from Queenstown central shopping, entertainment and outdoor activities such as bungy jumping, white water rafting and jet boating. The popular ski destinations of Coronet Peak, Remakables, and Cardrona are also close by.  ',
    latitude : -45.033511,
    longitude : 168.667356,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/millennium1.jpg',
    photo2: 'images/accommodation/millennium2.jpg',
    photo3: 'images/accommodation/millennium3.jpg',
    photoCity: 'images/locations/Queenstown1.jpg',
    website: 'https://www.millenniumhotels.com/en/queenstown/millennium-hotel-queenstown/?cid=gplaces-millennium-hotel-queenstown'
  },

  {
    name: 'Autoline Motel and Apartments',
    id: 114,
    address: '2/4 Dublin Street, Queenstown 9300',
    location: 'Queenstown',
    type: 'Motel',
    facilities: 'wifi',
    bed: '1+1',
    rating : 4.2,
    price: 90,
    minPeople: 2,
    maxPeople: 4,
    minNight: 3,
    maxNight: 10,
    description: 'These recently renovated central Queenstown lakeview motel and apartments offer Studios, One and Two Bedroom Apartments that are self-contained, stylishly appointed and all fitted with the latest appliances and accessories for guests who seek a home away from home.',
    latitude : -45.033046,
    longitude : 168.668862,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/autoline1.jpg',
    photo2: 'images/accommodation/autoline2.jpg',
    photo3: 'images/accommodation/autoline3.jpg',
    photoCity: 'images/locations/Queenstown1.jpg',
    website: 'http://www.autolinemotel.co.nz/'
  },


  {
    name: 'Southern Laughter Backpackers',
    id: 115,
    address: '4 Isle Street, Queenstown 7050',
    location: 'Queenstown',
    type: 'Hostel',
    facilities: 'wifi',
    bed: '1',
    rating : 3.7,
    price: 30,
    minPeople: 1,
    maxPeople: 1,
    minNight: 1,
    maxNight: 10,
    description: 'Independently run friendly backpacker hostel in central Queenstown. Lots of freebies including; FREE off street parking, unlimited WIFI, FREE soup and a FREE hot tub! Whether you are passing through between hikes or staying for a ski, Southern Laughter Backpackers is the ideal base for your time in Queenstown.',
    latitude : -45.029913,
    longitude : 168.658497,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/southern1.jpg',
    photo2: 'images/accommodation/southern2.jpg',
    photo3: 'images/accommodation/southern3.jpg',
    photoCity: 'images/locations/Queenstown1.jpg',
    website: 'https://www.stayatsouthern.co.nz/'
  },

  {
    name: 'Relaxaway Holiday Homes',
    id: 116,
    address: '10 Athol Street, Queenstown 9300',
    location: 'Queenstown',
    type: 'House',
    facilities: 'wifi',
    bed: '2',
    rating : 4.8,
    price: 90,
    minPeople: 1,
    maxPeople: 4,
    minNight: 2,
    maxNight: 15,
    description: 'Book your Queenstown accommodation now and relax away while you look forward to enjoying this spectacular part of New Zealand. Relaxaway offer a selection of premier Queenstown holiday houses and apartments for short-term holiday accommodation. ',
    latitude : -45.030821,
    longitude : 168.661505,
    meals: {breakfast:20, lunch:35, dinner: 35, all:80, noMeal: 0},
    photo1: 'images/accommodation/relaxaway1.jpg',
    photo2: 'images/accommodation/relaxaway2.jpg',
    photo3: 'images/accommodation/relaxaway3.jpg',
    photoCity: 'images/locations/Queenstown1.jpg',
    website: 'https://www.relaxaway.co.nz/'
  }

]



$('#searchBanner').hide();
// $('#landing').hide();

$(document).ready(function(){

  //  modal screen
  $('#sec1').click(function(){
    $('#searchBanner').show();
    $('#sec1').hide();
  });

});



// open modal for app information
  $('#appInfo').click(function(){
    $('.info-modal').show();
  });

// close modal
  $('.closeBar').click(function(){
    $('.info-modal').hide();

  });





  // date calculation
  // validate user entry
$('#startDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true,
  minDate : new Date(),
  maxDate : '+1y',
  onSelect : function(date){
    var selectDate = new Date(date);
    //number of miliseconds in a day
    var msecsInADay = 86400000;

    // considering the time of the day when the site is used
    var stDate = new Date(selectDate.getTime() + msecsInADay);

    // Set Minimum date of endDatePicker after selected date of startDate endDatePicker
    $('#endDate').datepicker('option', 'minDate', stDate);
    var enDate = new Date(selectDate.getTime() + 15 * msecsInADay);

    $('#endDate').datepicker('option', 'maxDate', enDate);
  }


  });

  $('#endDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true
});


function dateDiff(){
  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');
  // conver miliseconds, then to seconds, then to minutes, then to hours and last days
  var days = (end - start)/1000/60/60/24; // user readable format

  // document.getElementById('days').value = days;
  console.log(days);
  return days;
}

// $('#calcDate').click(function(){
//   dateDiff();
// });


var id = 101;

// function for display accommodation
function displayAccommodation(k) {
  document.getElementById('result').innerHTML
  += '<div class="text-center ml-auto mr-auto mt-5 px-4 col-sm-12 col-lg-4 ml-5">'
  +    '<div class="card w-100" style="width: 25rem;">'
  +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
  +        '<ol class="carousel-indicators">'
  +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
  +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
  +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li> '
  +        '</ol>'
  +        '<div class="carousel-inner">'
  +           '<div class="carousel-item active">'
  +             '<img src=" ' + accommodation[k].photo1 + ' " class="d-block img-size" alt="photo1">'
  +           '</div>'
  +           '<div class="carousel-item">'
  +             '<img src=" ' + accommodation[k].photo2 + ' "class="d-block img-size" alt="photo2">'
  +           '</div>'
  +           '<div class="carousel-item">'
  +             '<img src=" ' + accommodation[k].photo3 + ' " class="d-block img-size" alt="photo3">'
  +           '</div>'
  +         '</div>'
  +         '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
  +           '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
  +           '<span class="sr-only">Previous</span>'
  +         '</a>'
  +         '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
  +           '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
  +           '<span class="sr-only">Next</span>'
  +         '</a>'
  +        '</div>'
  // +      '<img class="img-size" src=" ' + accommodation[k].photo1 + ' " alt="Accommodation"/>'
  +         '<div class="card-body">'
  +           '<div class="row">'
  +             '<div class="col">'
  +               '<p class="text-center border border-dark">' + accommodation[k].type + ' </p>'
  +             '</div>'
  +             '<div class="col">'
  +              '<i class="d-inline pr-2 fas fa-users"></i>'
  +              '<p class="text-center d-inline">' + accommodation[k].maxPeople + '</p>'
  +             '</div>'
  +             '<div class="col">'
  +               '<i class="d-inline pr-2 fas fa-bed"></i>'
  +               '<p class="d-inline text-center">' + accommodation[k].bed + '</p>'
  +             '</div>'
  +             '<div class="col">'
  +               '<i class="d-inline pr-2 fas fa-wifi"></i>'
  +               '<p class="d-inline text-center">' + accommodation[k].facilities + '</p>'
  +             '</div>'
  +             '<div class="col">'
  +               '<i class="d-inline pr-2 text-warning fas fa-star"></i>'
  +               '<p class="d-inline text-center">' + accommodation[k].rating + '</p>'
  +             '</div>'
  +           '</div>'
  +           '<div class="row">'
  +             '<div class="col">'
  +               '<h6 class="text-left">' + accommodation[k].name + ' </h6>'
  +             '</div>'
  +             '<div class="col">'
  +               '<p class="text-right"> $ ' + accommodation[k].price + ' / night</p>'
  +             '</div>'
  +            '</div>'
  +            '<div class="row">'
  +             '<div class="col">'
  +               '<p class="text-info text-left text-size"> min ' + accommodation[k].minNight + ' night/s, max ' + accommodation[k].maxNight + ' nights</p>'
  +             '</div>'
  +             '<div class="col">'
  +               '<p class="text-right"> $ total</p>'
  +             '</div>'
  +            '</div>'
  +           '</br>  <button id="search" class="btn btn-lg text-white bg-primary w-100" type="button">View More</button>'
  +         '</div>'
  +     '</div>'
  +   '</div>';

};


// function displayBanner(k){
//   document.getElementById('banner').innerHTML
//   =+ '<img src=" ' + accommodation[k].photoCity + ' " class="img-size" alt="background">'
//   + '<p class"text-white"> Your trip is 3 days in Auckland for 2 guests from 01/12/19 to 03/12/19. </p>';
// }

// function for display all books
function allAccommodation(){
  document.getElementById('result').innerHTML = '';
  for(var i=0; i< accommodation.length; i++){
    // displayBanner(i);
    displayAccommodation(i);
    //modal();

     id++;
  }
}


// move from landing page to accommdation options
document.getElementById('search').addEventListener('click',function(){
  $('#accommodation').show();
  $('#sec1').hide();
  validate();
  sort();
  // allAccommodation();
});



// function sortLocation(){
//   // document.getElementById('accommodation').innerHTML = '';
//   var x = document.getElementById('guestSelect').value;
//   console.log(typeof(x));
//
//   switch (x){
//     case '1':
//     break;
//
//     case '2':
//     break;
//
//     case '3':
//     break;
//
//     case '4':
//     break;
//
//   }
//
// }

function sort(){

var location = document.getElementById('locationSelect');
var guest = document.getElementById('guestSelect');
var chosenLocation = location.options[location.selectedIndex].text;
var chosenGuest = guest.options[guest.selectedIndex].text;
var days = dateDiff();

console.log(chosenLocation, chosenGuest, days);

document.getElementById('result').innerHTML = '';
for(var i=0; i< accommodation.length; i++){
  if ((chosenLocation === accommodation[i].location)
       && (chosenGuest >= accommodation[i].minPeople) && (chosenGuest <= accommodation[i].maxPeople)
       && (days >= accommodation[i].minNight) && (days <= accommodation[i].maxNight)){
    displayAccommodation(i);
  }

}
  console.log(chosenLocation, chosenGuest, days);
}


// check required field, validate the form is not empty
function validate() {
  var location = document.getElementById('locationSelect');
  var chosenLocation = location.options[location.selectedIndex].text;
  var guest = document.getElementById('guestSelect');
  var chosenGuest = guest.options[guest.selectedIndex].text;


  if ((chosenLocation === 'Select Location') || (chosenGuest === "Guest")){
     //alert("Sorry! Please enter choose your location!");
    swal("Sorry!", "All field are required. Please choose your location, date and guest!", "error");
  }
  // else if (chosenGuest === "Guest"){
  //   swal("Sorry!", "Please select number of guest!", "error");
  // } else if ((chosenLocation === 'Select Location') && (chosenGuest === "Guest")){
  //   swal("Sorry!", "Please choose your location  and select number of guest!", "error");
  // }

}


// function checkAccommodationType(){
//   document.getElementById('result').innerHTML
//
// }
