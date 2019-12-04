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
    website: 'https://www.accorhotels.com/gb/hotel-3060-novotel-auckland-ellerslie/index.shtml',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.146252422166!2d174.77256575160916!3d-41.28392134808128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd515cc2713%3A0x3242c942791e060a!2s133%20The%20Terrace%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1575405260392!5m2!1sen!2snz'
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
    website: 'https://skycityauckland.co.nz/hotels/skycity-grand/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7194439961327!2d174.76018625149595!3d-36.849194687139814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f00505e139%3A0x633779196867774b!2s90%20Federal%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1575407251968!5m2!1sen!2snz'
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
    website: 'https://motel-80.aucklandcityhotels.net/en/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.519052596582!2d174.77901975149675!3d-36.87792928874774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d487c879a5efb%3A0x5b29a76861b2124e!2s80%20Great%20South%20Road%2C%20Epsom%2C%20Auckland%201051!5e0!3m2!1sen!2snz!4v1575407332210!5m2!1sen!2snz'
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
    website: 'https://www.yha.co.nz/hostels/north-island-hostels/yha-auckland-city',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.399337096791!2d174.76043815149617!3d-36.856859187568595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e89dbef893%3A0x4023111561e1c7cd!2s18%20Liverpool%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1575407397726!5m2!1sen!2snz'
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
    website: 'http://www.aucklandholidayhome.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.14157166227!2d174.72558315149226!3d-36.695135778537214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3b1cf57bcecb%3A0x8bb96bbd0db1048f!2s294%20Glenvar%20Road%2C%20Torbay%2C%20Auckland%200630!5e0!3m2!1sen!2snz!4v1575407444677!5m2!1sen!2snz'
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
    website: 'https://www.capitalview.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.14157166227!2d174.72558315149226!3d-36.695135778537214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3b1cf57bcecb%3A0x8bb96bbd0db1048f!2s294%20Glenvar%20Road%2C%20Torbay%2C%20Auckland%200630!5e0!3m2!1sen!2snz!4v1575407481449!5m2!1sen!2snz'
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
    website: 'https://trekglobal.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.913134906879!2d174.77132235160937!3d-41.288994948394176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd618ddaa2f%3A0x54d2350fd4a57034!2s9%20O&#39;Reily%20Avenue%2C%20Te%20Aro%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1575407526393!5m2!1sen!2snz'
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
    website: 'https://wellingtoncityaccommodation.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5522333322306!2d174.77096795160955!3d-41.29684864887862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b0275ed6701f%3A0xa57c58fa31bdef7b!2s7%2F5%20Tonks%20Grove%2C%20Te%20Aro%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1575407563074!5m2!1sen!2snz'
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
    photoCity: 'images/locations/Christchurch1.png',
    website: 'https://www.thegeorge.com/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8716582868515!2d172.62620095166972!3d-43.52586898947737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a3840a9081b%3A0xd28ad22ac2fee09e!2s50%20Park%20Terrace%2C%20Christchurch%20Central%20City%2C%20Christchurch%208013!5e0!3m2!1sen!2snz!4v1575407599522!5m2!1sen!2snz'
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
    photoCity: 'images/locations/Christchurch1.png',
    website: 'https://www.dorset.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.029632453495!2d172.6252176516696!3d-43.52257478926506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a37ce27511d%3A0x3566de4e2c2c1c48!2s1%20Dorset%20Street%2C%20Christchurch%20Central%20City%2C%20Christchurch%208013!5e0!3m2!1sen!2snz!4v1575407631164!5m2!1sen!2snz'
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
    photoCity: 'images/locations/Christchurch1.png',
    website: 'http://136onbealey.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.0980520283974!2d172.63388595166955!3d-43.52114798917307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318a3193114157%3A0x3dbf65b1a7dcf6fe!2s136%20Bealey%20Avenue%2C%20Christchurch%20Central%20City%2C%20Christchurch%208013!5e0!3m2!1sen!2snz!4v1575407662452!5m2!1sen!2snz'
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
    photoCity: 'images/locations/Christchurch1.png',
    website: 'https://holidayhouse.newzealandhotels.website/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6698678922444!2d172.58858735166984!3d-43.53007658974841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318aecefb17f01%3A0x1b52cc13f0385f5f!2s200%20Riccarton%20Road%2C%20Riccarton%2C%20Christchurch%208041!5e0!3m2!1sen!2snz!4v1575407696945!5m2!1sen!2snz'
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
    website: 'https://www.millenniumhotels.com/en/queenstown/millennium-hotel-queenstown/?cid=gplaces-millennium-hotel-queenstown',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5663695713165!2d168.66517225171154!3d-45.03372748801061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51d8885503f67%3A0x837e8b647e02b4e6!2s32%20Frankton%20Road%2C%20Queenstown%209300!5e0!3m2!1sen!2snz!4v1575407735903!5m2!1sen!2snz'
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
    website: 'http://www.autolinemotel.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.587412150632!2d168.66669995171156!3d-45.03330038798233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51d88e833ce49%3A0x9a4748d090a9c81c!2s2%2F4%20Dublin%20Street%2C%20Queenstown%209300!5e0!3m2!1sen!2snz!4v1575407776433!5m2!1sen!2snz'
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
    website: 'https://www.stayatsouthern.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.741061094207!2d168.65634585171148!3d-45.03018168777583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51d82372c9c95%3A0x8176a1935aba84e!2s4%20Isle%20Street%2C%20Queenstown%209300!5e0!3m2!1sen!2snz!4v1575407806249!5m2!1sen!2snz'
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
    website: 'https://www.relaxaway.co.nz/',
    situated: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.695913696639!2d168.6593857517115!3d-45.03109808783641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51d83ff2c37b1%3A0x609f40f5f2b17b6c!2s10%20Athol%20Street%2C%20Queenstown%209300!5e0!3m2!1sen!2snz!4v1575407854072!5m2!1sen!2snz'
  }

]



$('#searchBanner').hide();
$('#sec2').hide();
// $('#landing').hide();

$(document).ready(function(){

  //  modal screen
  $('#sec1').click(function(){
    $('#searchBanner').show();
    $('#sec1').hide();

  });


  $('#backToHome').click(function(){
    $('#landing').show();
    $('#sec2').hide();
  });


  $('#mapBtn').click(function(){
    $('#map').show();
    var location = document.getElementById('location').value;
    var duration = document.getElementById('duration').value;
    console.log(location,duration);
     initMap(location,duration);
  });


});


// move from landing page to accommdation list result
  document.getElementById('search').addEventListener('click',function(){

    validate();

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
};




// check required field, validate the form is not empty
function validate() {
  var location = document.getElementById('locationSelect');
  var chosenLocation = location.options[location.selectedIndex].text;
  var guest = document.getElementById('guestSelect');
  var chosenGuest = guest.options[guest.selectedIndex].text;
  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');

  if ((chosenLocation === 'Select Location') || (chosenGuest === "Guest") || (start === null) || (end === null)){
     //alert("Sorry! Please enter choose your location!");
    swal("Error!", "All field are required. Please select your location, check-in date, check-out date and guest!", "error");
  } else {
    $('#landing').hide();
    $('#sec2').show();
    // $('#searchBanner').show();
    filter();

  }

  // else if (chosenGuest === "Guest"){
  //   swal("Sorry!", "Please select number of guest!", "error");
  // } else if ((chosenLocation === 'Select Location') && (chosenGuest === "Guest")){
  //   swal("Sorry!", "Please choose your location  and select number of guest!", "error");
  // }

};





var id = 101; //variable is used to generate id's for view more button

// function for display accommodation
function displayAccommodation(k) {
  $('#sec3').show();
  displaySummary();

  var days = dateDiff();
  var total = accommodation[k].price * days;


  document.getElementById('result').innerHTML
  += '<div class="align-items-center mx-auto my-5 px-4 col-sm-12 col-lg-4">'
  +    '<div class="card card-size">'
  +        '<img src=" ' + accommodation[k].photo1 + ' " alt="photo1" class="card-img-top img-size"/>'
  // +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
  // +        '<ol class="carousel-indicators">'
  // +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
  // +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
  // +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li> '
  // +        '</ol>'
  // +        '<div class="carousel-inner">'
  // +           '<div class="carousel-item active">'
  // +             '<img src=" ' + accommodation[k].photo1 + ' " alt="photo1" class="d-block img-size"/>'
  // +           '</div>'
  // +           '<div class="carousel-item">'
  // +             '<img src=" ' + accommodation[k].photo2 + ' "class="d-block img-size" alt="photo2"/>'
  // +           '</div>'
  // +           '<div class="carousel-item">'
  // +             '<img src=" ' + accommodation[k].photo3 + ' " class="d-block img-size" alt="photo3"/>'
  // +           '</div>'
  // +         '</div>'
  // +         '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
  // +           '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
  // +           '<span class="sr-only">Previous</span>'
  // +         '</a>'
  // +         '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
  // +           '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
  // +           '<span class="sr-only">Next</span>'
  // +         '</a>'
  // +        '</div>'
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
  +               '<p class="text-right"> $' + accommodation[k].price + ' / night</p>'
  +             '</div>'
  +            '</div>'
  +            '<div class="row">'
  +             '<div class="col">'
  +               '<p class="text-info text-left text-size"> min ' + accommodation[k].minNight + ' night/s, max ' + accommodation[k].maxNight + ' nights</p>'
  +             '</div>'
  +             '<div class="col">'
  +               '<p class="text-right"> $' + total + ' total</p>'
  +             '</div>'
  +            '</div>'
  // +               '</br> <button id="' + accommodation[k].id + '"  class="btn btn-lg text-white bg-primary w-100 my-accommodation" data-toggle="modal" data-target="modalDisplay" type="button">View More</button>'
  +           ' <button type="button" id="'+ accommodation[k].id +'"class="btn btn-primary my-accommodation w-100">View More </button>'
  +         '</div>'
  +     '</div>'
  +   '</div>';



};



// display banner location image
function displayBannerImg(){
  var location = document.getElementById('locationSelect');
  var chosenLocation = location.options[location.selectedIndex].text;

  for(var i=0; i< accommodation.length; i++){
    if (chosenLocation === accommodation[i].location){
     console.log(accommodation[i]);
      document.getElementById('imgBanner').innerHTML
      = '<img src=" ' + accommodation[i].photoCity + ' " alt="locationPhoto" class="banner-size"position-relative"/>'
      + '<h1 class="position-absolute re-position text-white font-size-sm display-4 text-break">' + accommodation[i].location + '</h1>';

     }

    }

}



 // display summary of trip selection details
 function displaySummary(){
   var location = document.getElementById('locationSelect');
   var guest = document.getElementById('guestSelect');
   var chosenLocation = location.options[location.selectedIndex].text;
   var chosenGuest = guest.options[guest.selectedIndex].text;
   var start = $('#startDate').datepicker('getDate');
   var end = $('#endDate').datepicker('getDate');
   var days = dateDiff();

   // convert date picker to string
   var dateStart = $.datepicker.formatDate('dd-mm-yy', start);
   var dateEnd = $.datepicker.formatDate('dd-mm-yy', end);

   console.log(typeof chosenLocation, typeof chosenGuest, typeof dateStart, typeof dateEnd , typeof days);

   document.getElementById('summary').innerHTML ='';
   document.getElementById('summary').innerHTML
   // += '<div class="container">'
   += '<p class="text-left pl-3 h6 font-size-sm">Your trip is ' + days + ' days in ' + chosenLocation + ' for '
   + chosenGuest  + ' guests from ' + dateStart + ' to ' + dateEnd + '</p>'
   // + '</div>';
 };


// display all accommodation
// function allAccommodation(){
//   document.getElementById('result').innerHTML = '';
//   for(var i=0; i< accommodation.length; i++){
//     // displayBanner(i);
//     displayAccommodation(i);
//
//     openModal();
//
//      id++;
//   }
// };




// Filter the options based on user's input
function filter(){

  var location = document.getElementById('locationSelect');
  var guest = document.getElementById('guestSelect');
  var chosenLocation = location.options[location.selectedIndex].text;
  var chosenGuest = guest.options[guest.selectedIndex].text;
  var days = dateDiff();

  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');

  console.log(chosenLocation, chosenGuest, days);

  document.getElementById('result').innerHTML = '';

    for(var i=0; i< accommodation.length; i++){
      if ((chosenLocation === accommodation[i].location)
           && (chosenGuest >= accommodation[i].minPeople) && (chosenGuest <= accommodation[i].maxPeople)
           && (days >= accommodation[i].minNight) && (days <= accommodation[i].maxNight)){
             console.log(accommodation[i]);
        displayAccommodation(i);
        displayBannerImg();
        // openModal(accommodation[i]);

       }

      }
    console.log(chosenLocation, chosenGuest, days);
    console.log(accommodation[i]);

    id ++;
    // modalContent(i);
    // openModal();
  };


// open modal content
document.getElementById('result').addEventListener('click', function(e) {

  $('#myModal').modal('show');
  console.log(e.target.id);
  console.log(accommodation);
  let accommodationID = parseInt(e.target.id);
  console.log(accommodationID);
  console.log(typeof accommodationID)
  let accommodationToShow = (accommodation.filter(acc => acc.id === accommodationID))[0];
  console.log(accommodationToShow);
   // document.getElementById('modalContent').innerHTML = accommodationToShow.address;


   // get start and end date value
   var start = $('#startDate').datepicker('getDate');
   var end = $('#endDate').datepicker('getDate');

   // convert date picker to string
   var dateStart = $.datepicker.formatDate('dd-mm-yy', start);
   var dateEnd = $.datepicker.formatDate('dd-mm-yy', end);

   // get guest value
   var guest = document.getElementById('guestSelect');
   var chosenGuest = guest.options[guest.selectedIndex].text;

   // calculate total accommodation price
   var days = dateDiff();
   var total = accommodationToShow.price * days;

   // display accommodation title name
   document.getElementById('modalTitle').innerHTML
   = '<h3 class="modal-title text-white text-break pl-3">' + accommodationToShow.name + '</h3>';

   document.getElementById('modalBody').innerHTML
   =  '<div class="text-center ml-auto mr-auto px-1">'
   +    '<div class="card w-100" style="width: 25rem;">'
   +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
   +        '<ol class="carousel-indicators">'
   +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
   +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
   +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
   +        '</ol>'
   +        '<div class="carousel-inner">'
   +           '<div class="carousel-item active">'
   +             '<img src=" ' + accommodationToShow.photo1 + ' " class="d-block img-size my-accommodation" alt="photo1"/>'
   +           '</div>'
   +           '<div class="carousel-item">'
   +             '<img src=" ' + accommodationToShow.photo2 + ' "class="d-block img-size" alt="photo2"/>'
   +           '</div>'
   +           '<div class="carousel-item">'
   +             '<img src=" ' + accommodationToShow.photo3 + ' " class="d-block img-size" alt="photo3"/>'
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
   +         '<div class="card-body">'
   +           '<div class="row">'
   +             '<div class="col">'
   +               '<p class="text-center border border-dark">' + accommodationToShow.type + ' </p>'
   +             '</div>'
   +             '<div class="col">'
   +              '<i class="d-inline pr-2 fas fa-users"></i>'
   +              '<p class="text-center d-inline">' + accommodationToShow.maxPeople + '</p>'
   +             '</div>'
   +             '<div class="col">'
   +               '<i class="d-inline pr-2 fas fa-bed"></i>'
   +               '<p class="d-inline text-center">' + accommodationToShow.bed + '</p>'
   +             '</div>'
   +             '<div class="col">'
   +               '<i class="d-inline pr-2 fas fa-wifi"></i>'
   +               '<p class="d-inline text-center">' + accommodationToShow.facilities + '</p>'
   +             '</div>'
   +             '<div class="col">'
   +               '<i class="d-inline pr-2 text-warning fas fa-star"></i>'
   +               '<p class="d-inline text-center">' + accommodationToShow.rating + '</p>'
   +             '</div>'
   +           '</div>'
   +           '<div class="row">'
   +             '<p class="text-left">' + accommodationToShow.description + '</p>'
   +            '</div>'
   +            '<div class="row">'
   +             '<div class="col">'
   +               '<ul class="list-unstyled">'
   +                 '<li class="text-primary font-weight-bold">Checkin</li>'
   +                 '<li class="text-primary">' + dateStart + ' </li>'
   +                '</ul>'
   +             '</div>'
   +             '<div class="col">'
   +               '<ul class="list-unstyled">'
   +                 '<li class="text-primary font-weight-bold">Checkout</li>'
   +                 '<li class="text-primary">' + dateEnd + ' </li>'
   +                '</ul>'
   +             '</div>'
   +             '<div class="col">'
   +               '<ul class="list-unstyled">'
   +                 '<li class="text-primary font-weight-bold">Guests</li>'
   +                 '<li class="text-primary">' + chosenGuest + ' people </li>'
   +                '</ul>'
   +             '</div>'
   +            '</div>'
   +            '<div class="row">'
   +              '<div class="col">'
   +                '<p id="pricePerNight"> $' + accommodationToShow.price + ' / night</p>'
   +              '</div>'
   +              '<div class="col">'
   +                '<p> $' + accommodationToShow.price + ' X 3 night/s</p>'
   +              '</div>'
   +              '<div class="col">'
   +                '<p id="accPrice"> $' + total + '</p>'
   +              '</div>'
   +            '</div>'
   +           '</br> <label class="text-left" for="mealSelect">Optional Meal Package</label></br>'
   +           '<select id="mealSelect" class="form-control">'
   +             '<option selected>Choose Meal Options</option>'
   +             '<option value="breakfast">Breakfast $20</option>'
   +             '<option value="lunch">Lunch $35</option>'
   +             '<option value="dinner">Dinner $35</option>'
   +             '<option value="all">Breakfast, Lunch & Dinner $80</option>'
   +             '<option value="none">No Meal</option>'
   +            '</select>'
   // +            '</br><h4 id="grandTotal" class="text-primary"> Grand Total: $' + total.toFixed(2) + '</h4>'
   +            '</br></br><div id="grandTotalResult" class="text-primary"><h4>Grand Total: $' + total + '</h4></div>'
   +            '</br>'
   +            '<a href="' + accommodationToShow.website + '" target="_blank"><button class="btn btn-lg text-white bg-primary w-50" type="button">Reserve</button></a>'
   +            '</br></br><i class="fas fa-map-marker-alt d-inlne"></i>'
   +            '<p class="d-inline"> ' + accommodationToShow.address + '</p></br><br>'
   +             '<iframe src="' +  accommodationToShow.situated + '" class="frame-size" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
   +        '</div>'
   +   '</div>'
   +  '</div>';

   $('#mealSelect').click(function(){
     calcMeal()
 });

})







// calculate meal cost
function calcMeal(){
  // let accommodationID = parseInt(e.target.id);
  // let accommodationToShow = (accommodation.filter(acc => acc.id === accommodationID))[0];
  // var price = accommodationToShow.price;
  // var price = document.getElementById('accPrice').value;
  var x = document.getElementById('mealSelect').value;
  var grandTotal = 0;

  console.log(typeof(price),typeof(x),price,x);

  switch(x){
    case 'breakfast':
      grandTotal = 20 + price;
      document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + grandTotal + '</h4>';
    break;

    case 'lunch':
      grandTotal = 35 + price;
      document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + grandTotal + '</h4>';
    break;

    case 'dinner':
      grandTotal = 35 + price;
      document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + grandTotal + '</h4>';
    break;

    case 'all':
      grandTotal = 80 + price;
      document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + grandTotal + '</h4>';
    break;

    case 'none':
      grandTotal = 0 + price;
      document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + grandTotal + '</h4>';
    break;

    default:
     document.getElementById('grandTotalResult').innerHTML = '<h4>Grand Total: $' + price + '</h4>';
  }

  console.log((x));
  console.log(grandTotal);



};






// access API key from config.json
var myKey = JSON.parse(apiKey);
console.log(myKey[0].key);

//dynamically creating the script elements and
//giving src attribute the google plug in with key from external JSON
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key
document.getElementsByTagName('body')[0].appendChild(script);


function initMap(l,d) {
  console.log(l,d);

//   var center = {lat:beaches[0].latitude, lng:beaches[0].longitude};//Scorching Bay Beach - first in objects array
    var center;
    var oldwindow;

    if (l === "Wellington") {
      center = {lat: -41.2911449, lng: 174.7814447};
    } else if (l === "Auckland") {
      center = {lat:-36.8485 , lng:174.7633};
    } else if (l === "Christchurch") {
      center = {lat:-43.5321 , lng:172.6362};
    } else if (l === "Queenstown") {
      center = {lat:-45.0312 , lng:168.6626};
    }
    console.log(l);

   var map = new google.maps.Map(document.getElementById('map'), {
     center: center,
     zoom: 12,
     mapTypeId: 'roadmap',
     styles:[
       {
       featureType : 'water',
       stylers: [
            {
           color: '#48dbfb'
            }]
        },
        {
        featureType : 'road',
        elementType : 'geometry',
        stylers: [
             {
            lightness: '-40'
             }]
         },
         {
         featureType : 'road',
         elementType : 'labels.text.fill',
         stylers: [
              {
             color: '#34495e'
              }]
          },
          {
          featureType : 'landscape',
          stylers: [
               {
              color: '#2ecc71'
               }]
           },
      ]
   }); //end of map objects


    for (var i = 0; i < accommodation.length; i++) {
    console.log(l,typeof(l), d, typeof(d));
    console.log(accommodation[i].location, typeof(accommodation[i].location));
    console.log(accommodation[i].location === l);
    console.log(accommodation[i].duration <= d);

       if ((accommodation[i].location === l) && (accommodation[i].duration <= d)){
         // create content dynamically
         var contentString
           = 'div class="card" style="width: 10rem;">'
           +   '<img class="card-img-top" src="'+ accommodation[i].photo1 + '" alt="photo">'
           +   '<div class="card-body">'
           +      '<h5>' + accommodation[i].name + '</h5>'
           +      '<h6>' + accommodation[i].address + '</h6>'
           +      '<h6>' + accommodation[i].price + ' /night </h6>'
           +      '<h6>' + accommodation[i].rating + '</h6>'
           +   '</div>' ;

       }


       // create infowindow
     var infowindow = new google.maps.InfoWindow({ content: contentString });


      // position to add marker
      var position = {lat: accommodation[i].latitude, lng: accommodation[i].longitude};

      // create marker
       var myIcon = 'http://maps.google.com/mapfiles/kml/shapes/ranger_station.png';
       var marker =  new google.maps.Marker({
         position: position,
         map: map,
         icon : myIcon
       });

       newWindow(marker, infowindow);

       function newWindow(newMarker, newInfowindow){

         newMarker.addListener('click', function() {
           if( oldwindow){
             oldwindow.close();
           }
           newInfowindow.open(map, newMarker);
           oldwindow = newInfowindow;
         }); // end of addListener

       } // end of newWindow function


     } // end of for

} //initMap ENDS






//===============================================================

 // Open Modal
// function openModal(){
// $('.my-accommodation').on('click', function(){
//
//     console.log(this.id, typeof(this.id));
//       for(var i=0; i< accommodation.length; i++){
//         if (parseInt(this.id) === accommodation[i].id){
//
//           console.log(accommodation[i].id);
//           modalContent(i);
//         }
//       }
// })
// };
//
//
//
//
// // Open modal content
// function modalContent(i){
//   console.log(i)
//    // $('#exampleModalCenter').show();
//
//   for (var i=0; i < accommodation.length; i++){
//     console.log(this.id, accommodation[i].id);
//     if(parseInt(this.id) === accommodation[i].id){
//   document.getElementById('modalBody').innerHTML
//   += '<div class="text-center ml-auto mr-auto mt-5 px-4 col-sm-12 col-lg-4 ml-5">'
//   +    '<div class="card w-100" style="width: 25rem;">'
//   +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
//   +        '<ol class="carousel-indicators">'
//   +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
//   +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
//   +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li> '
//   +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
//   +        '</ol>'
//   +        '<div class="carousel-inner">'
//   +           '<div class="carousel-item active">'
//   +             '<img src=" ' + accommodation[i].photo1 + ' " class="d-block img-size my-accommodation" alt="photo1"/>'
//   +           '</div>'
//   +           '<div class="carousel-item">'
//   +             '<img src=" ' + accommodation[i].photo2 + ' "class="d-block img-size" alt="photo2"/>'
//   +           '</div>'
//   +           '<div class="carousel-item">'
//   +             '<img src=" ' + accommodation[i].photo3 + ' " class="d-block img-size" alt="photo3"/>'
//   +           '</div>'
//   +         '</div>'
//   +         '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
//   +         '<div class="card-body">'
//   +           '<div class="row">'
//   +             '<div class="col">'
//   +               '<p class="text-center border border-dark">' + accommodation[i].type + ' </p>'
//   +             '</div>'
//   +             '<div class="col">'
//   +              '<i class="d-inline pr-2 fas fa-users"></i>'
//   +              '<p class="text-center d-inline">' + accommodation[i].maxPeople + '</p>'
//   +             '</div>'
//   +             '<div class="col">'
//   +               '<i class="d-inline pr-2 fas fa-bed"></i>'
//   +               '<p class="d-inline text-center">' + accommodation[i].bed + '</p>'
//   +             '</div>'
//   +             '<div class="col">'
//   +               '<i class="d-inline pr-2 fas fa-wifi"></i>'
//   +               '<p class="d-inline text-center">' + accommodation[i].facilities + '</p>'
//   +             '</div>'
//   +             '<div class="col">'
//   +               '<i class="d-inline pr-2 text-warning fas fa-star"></i>'
//   +               '<p class="d-inline text-center">' + accommodation[i].rating + '</p>'
//   +             '</div>'
//   +           '</div>'
//   +           '<div class="row">'
//   +             '<p>' + accommodation[i].description + '</p>'
//   +            '</div>'
//   +            '<div class="row">'
//   +             '<div class="col">'
//   +            '</div>'
//   +            '<div class="row">'
//   +              '<div class="col">'
//   +                '<p class="text-right"> $ ' + accommodation[i].price + ' / night</p>'
//   +              '</div>'
//   +              '<div class="col">'
//   +                '<p class="text-right"> $ ' + accommodation[i].price + ' X night/s</p>'
//   +              '</div>'
//   +              '<div class="col">'
//   +                '<p class="text-right"> $ total </p>'
//   +             '<option value="dinner">Dinner $35</option>'
//   +             '<option value="all">All $80</option>'
//   +             '<option value="noMeal">No Meal</option>'
//   +            '<select>'
//   +            '</select>'
//   +         '</div>'
//   +     '</div>'
//   +   '</div>';
// }
// }
//
//
//    console.log('content');
// };
// ====================================









 // $('.my-accommodation').on('click', function(){
 //     console.log(this.id);
 //       for(var i=0; i< accommodation.length; i++){
 //         if (parseInt(this.id) === accommodation[i].id){
 //
 //           modalContent(i);
 //         }
 //       }
 //
 // })
 // };



 // Open modal content
 // function modalContent(){
 //   console.log(i)
 //   $('#myModal').show();
 //
 //   document.getElementById('result').addEventListener('click', function(e) {
 //     let accommodationToShow = accommdation.filter(accommdation => accomodation.id === e.target.id);
 //
 //     document.getElementById('modalContent').innerHTML
 //     += '<div class="text-center ml-auto mr-auto mt-5 px-4 col-sm-12 col-lg-4 ml-5">'
 //     +    '<div class="card w-100" style="width: 25rem;">'
 //     +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
 //     +        '<ol class="carousel-indicators">'
 //     +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
 //     +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
 //     +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
 //     +        '</ol>'
 //     +        '<div class="carousel-inner">'
 //     +           '<div class="carousel-item active">'
 //     +             '<img src=" ' + accommodationToShow.photo1 + ' " class="d-block img-size my-accommodation" alt="photo1"/>'
 //     +           '</div>'
 //     +           '<div class="carousel-item">'
 //     +             '<img src=" ' + accommodationToShow.photo2 + ' "class="d-block img-size" alt="photo2"/>'
 //     +           '</div>'
 //     +           '<div class="carousel-item">'
 //     +             '<img src=" ' + accommodationToShow.photo3 + ' " class="d-block img-size" alt="photo3"/>'
 //     +           '</div>'
 //     +         '</div>'
 //     +         '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
 //     +           '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
 //     +           '<span class="sr-only">Previous</span>'
 //     +         '</a>'
 //     +         '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
 //     +           '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
 //     +           '<span class="sr-only">Next</span>'
 //     +         '</a>'
 //     +        '</div>'
 //     +         '<div class="card-body">'
 //     +           '<div class="row">'
 //     +             '<div class="col">'
 //     +               '<p class="text-center border border-dark">' + accommodationToShow.type + ' </p>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +              '<i class="d-inline pr-2 fas fa-users"></i>'
 //     +              '<p class="text-center d-inline">' + accommodationToShow.maxPeople + '</p>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +               '<i class="d-inline pr-2 fas fa-bed"></i>'
 //     +               '<p class="d-inline text-center">' + accommodationToShow.bed + '</p>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +               '<i class="d-inline pr-2 fas fa-wifi"></i>'
 //     +               '<p class="d-inline text-center">' + accommodationToShow.facilities + '</p>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +               '<i class="d-inline pr-2 text-warning fas fa-star"></i>'
 //     +               '<p class="d-inline text-center">' + accommodationToShow.rating + '</p>'
 //     +             '</div>'
 //     +           '</div>'
 //     +           '<div class="row">'
 //     +             '<p>' + accommodationToShow.description + '</p>'
 //     +            '</div>'
 //     +            '<div class="row">'
 //     +             '<div class="col">'
 //     +               '<ul>'
 //     +                 '<li class="font-weight-bold">Check-in Date</li>'
 //     +                 '<li> 12/13/17 </li>'
 //     +                '</ul>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +               '<ul>'
 //     +                 '<li class="font-weight-bold">Check-out Date</li>'
 //     +                 '<li> 12/13/17 </li>'
 //     +                '</ul>'
 //     +             '</div>'
 //     +             '<div class="col">'
 //     +               '<ul>'
 //     +                 '<li class="font-weight-bold">Guests</li>'
 //     +                 '<li> 2 people </li>'
 //     +                '</ul>'
 //     +             '</div>'
 //     +            '</div>'
 //     +            '<div class="row">'
 //     +              '<div class="col">'
 //     +                '<p class="text-right"> $ ' + accommodationToShow.price + ' / night</p>'
 //     +              '</div>'
 //     +              '<div class="col">'
 //     +                '<p class="text-right"> $ ' + accommodationToShow.price + ' X night/s</p>'
 //     +              '</div>'
 //     +              '<div class="col">'
 //     +                '<p class="text-right"> $ total </p>'
 //     +              '</div>'
 //     +            '</div>'
 //     +           '</br> <label for="mealSelection">Optional Meal Package</label>'
 //     +           '<select id="mealSelect" class="form-control">'
 //     +             '<option selected>Choose Meal Options</option>'
 //     +             '<option value="breakfast">Breakfast $20</option>'
 //     +             '<option value="lunch">Lunch $35</option>'
 //     +             '<option value="dinner">Dinner $35</option>'
 //     +             '<option value="all">All $80</option>'
 //     +             '<option value="noMeal">No Meal</option>'
 //     +            '</select>'
 //     +         '</div>'
 //     +     '</div>'
 //     +   '</div>';
 //   })
 //
 //   // for (var i=0; i < accommodation.length; i++){
 //   //   console.log(thisId, accommodation[i].id);
 //     // if(thisId.trim() === accommodation[i].id.trim()){
 //
 // // }
 // //
 // // }
 //    console.log('content');
 // }






 // function to filter Modal display content
 // function filterModal(data){
 //
 //   var days = dateDiff();
 //
 //     console.log('hotel');
 //      document.getElementById('result').innerHTML = '';
 //      var k=0;
 //      //var romanceId = 101;
 //      for( k=0; k< accommodation.length; k++){
 //        if(accommodation[k].type.toLowerCase() === data){
 //
 //          // displayAccommodation(k);
 //          filter(k);
 //
 //
 //         $('.my-accommodation').on('click', function(){
 //             $('#myModal').show();
 //           console.log(this.id);
 //            document.getElementById('modalContent').innerHTML = '';
 //            for (var i=0; i < accommodation.length; i++){
 //               console.log(accommodation[i].type.toLowerCase());
 //               console.log(this.id, accommodation[i].id);
 //              if ((accommodation[i].type.toLowerCase().trim() === data) && (this.id.trim() === type[i].id.trim())) {
 //                console.log('modal content');
 //
 //                document.getElementById('modalContent').innerHTML
 //                += '<div class="text-center ml-auto mr-auto mt-5 px-4 col-sm-12 col-lg-4 ml-5">'
 //                +    '<div class="card w-100" style="width: 25rem;">'
 //                +      '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
 //                +        '<ol class="carousel-indicators">'
 //                +           '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
 //                +           '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
 //                +           '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li> '
 //                +        '</ol>'
 //                +        '<div class="carousel-inner">'
 //                +           '<div class="carousel-item active">'
 //                +             '<img src=" ' + accommodation[i].photo1 + ' " class="d-block img-size my-accommodation" alt="photo1"/>'
 //                +           '</div>'
 //                +           '<div class="carousel-item">'
 //                +             '<img src=" ' + accommodation[i].photo2 + ' "class="d-block img-size" alt="photo2"/>'
 //                +           '</div>'
 //                +           '<div class="carousel-item">'
 //                +             '<img src=" ' + accommodation[i].photo3 + ' " class="d-block img-size" alt="photo3"/>'
 //                +           '</div>'
 //                +         '</div>'
 //                +         '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
 //                +           '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
 //                +           '<span class="sr-only">Previous</span>'
 //                +         '</a>'
 //                +         '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
 //                +           '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
 //                +           '<span class="sr-only">Next</span>'
 //                +         '</a>'
 //                +        '</div>'
 //                +         '<div class="card-body">'
 //                +           '<div class="row">'
 //                +             '<div class="col">'
 //                +               '<p class="text-center border border-dark">' + accommodation[i].type + ' </p>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +              '<i class="d-inline pr-2 fas fa-users"></i>'
 //                +              '<p class="text-center d-inline">' + accommodation[i].maxPeople + '</p>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +               '<i class="d-inline pr-2 fas fa-bed"></i>'
 //                +               '<p class="d-inline text-center">' + accommodation[i].bed + '</p>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +               '<i class="d-inline pr-2 fas fa-wifi"></i>'
 //                +               '<p class="d-inline text-center">' + accommodation[i].facilities + '</p>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +               '<i class="d-inline pr-2 text-warning fas fa-star"></i>'
 //                +               '<p class="d-inline text-center">' + accommodation[i].rating + '</p>'
 //                +             '</div>'
 //                +           '</div>'
 //                +           '<div class="row">'
 //                +             '<p>' + accommodation[i].description + '</p>'
 //                +            '</div>'
 //                +            '<div class="row">'
 //                +             '<div class="col">'
 //                +               '<ul>'
 //                +                 '<li class="font-weight-bold">Check-in Date</li>'
 //                +                 '<li> 12/13/17 </li>'
 //                +                '</ul>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +               '<ul>'
 //                +                 '<li class="font-weight-bold">Check-out Date</li>'
 //                +                 '<li> 12/13/17 </li>'
 //                +                '</ul>'
 //                +             '</div>'
 //                +             '<div class="col">'
 //                +               '<ul>'
 //                +                 '<li class="font-weight-bold">Guests</li>'
 //                +                 '<li> 2 people </li>'
 //                +                '</ul>'
 //                +             '</div>'
 //                +            '</div>'
 //                +            '<div class="row">'
 //                +              '<div class="col">'
 //                +                '<p class="text-right"> $ ' + accommodation[i].price + ' / night</p>'
 //                +              '</div>'
 //                +              '<div class="col">'
 //                +                '<p class="text-right"> $ ' + accommodation[i].price + ' X ' + days + ' night/s</p>'
 //                +              '</div>'
 //                +              '<div class="col">'
 //                +                '<p class="text-right"> $ total </p>'
 //                +              '</div>'
 //                +            '</div>'
 //                +           '</br> <label for="mealSelection">Optional Meal Package</label>'
 //                +           '<select id="mealSelect" class="form-control">'
 //                +             '<option selected>Choose Meal Options</option>'
 //                +             '<option value="breakfast">Breakfast $20</option>'
 //                +             '<option value="lunch">Lunch $35</option>'
 //                +             '<option value="dinner">Dinner $35</option>'
 //                +             '<option value="all">All $80</option>'
 //                +             '<option value="noMeal">No Meal</option>'
 //                +            '<select>'
 //                +         '</div>'
 //                +     '</div>'
 //                +   '</div>';
 //              };
 //            }
 //     });
 //
 //   }
 //   }
 //
 // }







 // function to open modal
  // function modal(){
  //   console.log('modal');
  //  $('.my-accommodation').on('click', function(){
  //
  //   console.log(this.id);
  //   $('.my-modal').show();
  //   document.getElementById('modalContent').innerHTML = '';
  //
  //   modalContent(this.id);
  //
  // });
  // }
