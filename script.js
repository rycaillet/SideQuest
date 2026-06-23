const activities = [
  {
    name: "Burke Lake Park",
    place: "Burke Lake Park",
    city: "Fairfax Station, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~20 minutes from Fairfax",
    image: "🌲",
    description: "A relaxing park with lake views, trails, picnic areas, and open space. Great for a calm outdoor reset.",
    goodFor: "Walking, relaxing, picnics, easy solo time",
    matchReason: "This matches because it is free, outdoor, solo-friendly, and low energy."
  },
  {
    name: "Green Spring Gardens",
    place: "Green Spring Gardens",
    city: "Alexandria, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🌿",
    description: "A peaceful public garden with walking paths, flowers, historic buildings, and quiet scenery.",
    goodFor: "Relaxing walks, photos, peaceful afternoons",
    matchReason: "This is a calm outdoor option that works well alone and does not require much energy."
  },
  {
    name: "Old Town Fairfax Walk",
    place: "Old Town Fairfax",
    city: "Fairfax, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "🏛️",
    description: "Walk around Old Town Fairfax, explore local shops, historic buildings, and nearby cafes.",
    goodFor: "Simple local exploring, walking, casual afternoons",
    matchReason: "This is local, free, outdoor, and easy to do without a group."
  },
  {
    name: "Fairfax Ice Arena",
    place: "Fairfax Ice Arena",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$15-$25",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "In Fairfax",
    image: "⛸️",
    description: "A local indoor ice skating rink that works well for friends, dates, or casual weekend plans.",
    goodFor: "Friends, casual activity, something active but not exhausting",
    matchReason: "This fits because it is indoor, group-friendly, and medium energy."
  },
  {
    name: "Cinema Arts Theatre",
    place: "Cinema Arts Theatre",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$12-$20",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "🎬",
    description: "A relaxed local movie theater option that is good when you want to go out but keep the energy low.",
    goodFor: "Movies, low-energy hangouts, rainy days",
    matchReason: "This is indoor, group-friendly, and low energy."
  },
  {
    name: "De Clieu Coffee",
    place: "De Clieu Coffee & Sandwiches",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$10-$20",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "☕",
    description: "A cozy coffee shop in Fairfax that works well for reading, studying, or having a relaxed solo outing.",
    goodFor: "Coffee, studying, reading, low-energy solo time",
    matchReason: "This matches because it is indoor, affordable, solo-friendly, and low energy."
  },
  {
    name: "Bowlero Centreville",
    place: "Bowlero Centreville",
    city: "Centreville, VA",
    cost: 25,
    costLabel: "$20-$40",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~20 minutes from Fairfax",
    image: "🎳",
    description: "A modern bowling alley with arcade games, food, and a fun group atmosphere.",
    goodFor: "Friend groups, birthdays, casual weekend plans",
    matchReason: "This is indoor, group-focused, and medium energy."
  },
  {
    name: "Tysons Corner Center",
    place: "Tysons Corner Center",
    city: "Tysons, VA",
    cost: 20,
    costLabel: "$0-$50",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🛍️",
    description: "A large mall with shopping, food, desserts, and plenty of space to walk around with friends.",
    goodFor: "Shopping, food, casual group plans",
    matchReason: "This is an indoor friend activity with a flexible budget and medium energy."
  },
  {
    name: "Monster Mini Golf",
    place: "Monster Mini Golf",
    city: "Chantilly, VA",
    cost: 15,
    costLabel: "$12-$20",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~15 minutes from Fairfax",
    image: "⛳",
    description: "A glow-in-the-dark indoor mini golf spot that is simple, fun, and easy for a group.",
    goodFor: "Friends, casual competition, low-pressure plans",
    matchReason: "This fits because it is affordable, indoor, friend-friendly, and medium energy."
  },
  {
    name: "Meadowlark Botanical Gardens",
    place: "Meadowlark Botanical Gardens",
    city: "Vienna, VA",
    cost: 10,
    costLabel: "$5-$10",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🌸",
    description: "A scenic garden with walking paths, water features, and peaceful outdoor views.",
    goodFor: "Photos, peaceful walks, solo reset",
    matchReason: "This is outdoor, calm, affordable, and solo-friendly."
  },
  {
    name: "Great Falls Park",
    place: "Great Falls Park",
    city: "McLean, VA",
    cost: 20,
    costLabel: "$20 vehicle pass",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "high",
    distance: "~35 minutes from Fairfax",
    image: "🥾",
    description: "A beautiful park with waterfall overlooks and hiking trails. Best for people who want a more active outdoor plan.",
    goodFor: "Hiking, views, active friend groups",
    matchReason: "This is outdoor, group-friendly, and high energy."
  },
  {
    name: "Lake Accotink Park",
    place: "Lake Accotink Park",
    city: "Springfield, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~20 minutes from Fairfax",
    image: "🚶",
    description: "A local park with trails, lake views, picnic areas, and space for a casual group walk.",
    goodFor: "Walking, friends, easy outdoor plans",
    matchReason: "This is free, outdoor, friend-friendly, and medium energy."
  },
  {
    name: "Udvar-Hazy Center",
    place: "Steven F. Udvar-Hazy Center",
    city: "Chantilly, VA",
    cost: 15,
    costLabel: "Parking fee",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~20 minutes from Fairfax",
    image: "✈️",
    description: "A large aviation and space museum with aircraft, exhibits, and plenty to explore indoors.",
    goodFor: "Museums, aviation, solo exploring, rainy days",
    matchReason: "This is indoor, low energy, and works well alone."
  },
  {
    name: "Escape Room Herndon",
    place: "Escape Room Herndon",
    city: "Herndon, VA",
    cost: 35,
    costLabel: "$30-$40",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🧩",
    description: "A team puzzle experience where your group solves clues together before time runs out.",
    goodFor: "Friend groups, teamwork, something different",
    matchReason: "This is indoor, designed for groups, and medium energy."
  },
  {
    name: "Topgolf Loudoun",
    place: "Topgolf Loudoun",
    city: "Ashburn, VA",
    cost: 45,
    costLabel: "$30-$60",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~35 minutes from Fairfax",
    image: "🏌️",
    description: "A social golf range with food, music, and games. Good for groups even if not everyone plays golf.",
    goodFor: "Groups, casual sports, food, weekend plans",
    matchReason: "This is outdoor, friend-friendly, and medium energy."
  },
  {
    name: "Wolf Trap Show",
    place: "Wolf Trap National Park for the Performing Arts",
    city: "Vienna, VA",
    cost: 60,
    costLabel: "$40+",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🎵",
    description: "An outdoor concert and performance venue that is great for a relaxed evening with friends.",
    goodFor: "Concerts, performances, relaxed group nights",
    matchReason: "This is outdoor, group-friendly, and low energy."
  },
  {
    name: "Capital One Hall",
    place: "Capital One Hall",
    city: "Tysons, VA",
    cost: 70,
    costLabel: "$50+",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🎭",
    description: "An indoor performance venue with concerts, comedy, theater, and live events.",
    goodFor: "Shows, concerts, indoor group plans",
    matchReason: "This is indoor, group-friendly, and low energy."
  },
  {
    name: "Workhouse Arts Center",
    place: "Workhouse Arts Center",
    city: "Lorton, VA",
    cost: 20,
    costLabel: "$0-$30",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~30 minutes from Fairfax",
    image: "🎨",
    description: "An arts center with galleries, classes, performances, and creative events.",
    goodFor: "Art, solo exploring, creative inspiration",
    matchReason: "This is indoor, low energy, and works well as a solo activity."
  },
  {
    name: "Cooking Class",
    place: "Sur La Table Cooking Class",
    city: "Tysons, VA",
    cost: 90,
    costLabel: "$80+",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🍳",
    description: "A hands-on cooking class where you learn new recipes and techniques in a structured setting.",
    goodFor: "Trying something new, solo learning, food lovers",
    matchReason: "This is indoor, solo-friendly, and medium energy."
  },
  {
    name: "Salamander Spa Day",
    place: "Salamander Middleburg",
    city: "Middleburg, VA",
    cost: 120,
    costLabel: "$100+",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~45 minutes from Fairfax",
    image: "🧖",
    description: "A premium spa experience for relaxing, resetting, and taking a slower day.",
    goodFor: "Relaxation, self-care, quiet solo time",
    matchReason: "This is indoor, solo-friendly, and low energy."
  },
  {
  name: "Lake Fairfax Park",
  place: "Lake Fairfax Park",
  city: "Reston, VA",
  cost: 10,
  costLabel: "$0-$20",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~25 minutes from Fairfax",
  image: "🚣",
  description: "A large park with trails, picnic space, seasonal water activities, and room for a relaxed group outing.",
  goodFor: "Picnics, walking, casual outdoor plans",
  matchReason: "This is outdoor, group-friendly, affordable, and medium energy."
},
{
  name: "Frying Pan Farm Park",
  place: "Frying Pan Farm Park",
  city: "Herndon, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~25 minutes from Fairfax",
  image: "🐄",
  description: "A working farm-style park with animals, walking areas, and relaxed outdoor space.",
  goodFor: "Casual group visits, animals, easy walking",
  matchReason: "This is free, outdoor, group-friendly, and low energy."
},
{
  name: "Huntley Meadows Park",
  place: "Huntley Meadows Park",
  city: "Alexandria, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~35 minutes from Fairfax",
  image: "🦆",
  description: "A peaceful wetland park with boardwalk trails, wildlife viewing, and quiet scenery.",
  goodFor: "Birdwatching, peaceful walks, solo nature time",
  matchReason: "This is free, outdoor, solo-friendly, and low energy."
},
{
  name: "Ellanor C. Lawrence Park",
  place: "Ellanor C. Lawrence Park",
  city: "Chantilly, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "medium",
  distance: "~15 minutes from Fairfax",
  image: "🌳",
  description: "A wooded park with trails, nature programs, and historic areas close to Fairfax.",
  goodFor: "Trail walking, nature, solo exploring",
  matchReason: "This is free, outdoor, solo-friendly, and medium energy."
},
{
  name: "Riverbend Park",
  place: "Riverbend Park",
  city: "Great Falls, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "medium",
  distance: "~35 minutes from Fairfax",
  image: "🏞️",
  description: "A scenic Potomac River park with trails, river views, and a quieter alternative to Great Falls Park.",
  goodFor: "Nature walks, river views, solo outdoor time",
  matchReason: "This is outdoor, free, solo-friendly, and medium energy."
},
{
  name: "Mason Neck State Park",
  place: "Mason Neck State Park",
  city: "Lorton, VA",
  cost: 10,
  costLabel: "$10 parking",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~35 minutes from Fairfax",
  image: "🦅",
  description: "A state park with trails, water views, wildlife, and peaceful areas near the Potomac.",
  goodFor: "Nature, walking, group outdoor plans",
  matchReason: "This is outdoor, group-friendly, and medium energy."
},
{
  name: "Occoquan Regional Park",
  place: "Occoquan Regional Park",
  city: "Lorton, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~30 minutes from Fairfax",
  image: "🌊",
  description: "A riverside park with trails, open space, water views, and areas for casual group activities.",
  goodFor: "Walking, river views, group hangouts",
  matchReason: "This is free, outdoor, friend-friendly, and medium energy."
},
{
  name: "Bull Run Regional Park",
  place: "Bull Run Regional Park",
  city: "Centreville, VA",
  cost: 10,
  costLabel: "$0-$20",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~20 minutes from Fairfax",
  image: "🏕️",
  description: "A large regional park with trails, picnic areas, camping, and seasonal events.",
  goodFor: "Group outdoor plans, picnics, seasonal events",
  matchReason: "This is outdoor, group-friendly, and medium energy."
},
{
  name: "Fountainhead Regional Park",
  place: "Fountainhead Regional Park",
  city: "Fairfax Station, VA",
  cost: 10,
  costLabel: "$0-$20",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "high",
  distance: "~25 minutes from Fairfax",
  image: "🚵",
  description: "A popular park for hiking, mountain biking, and more active outdoor plans.",
  goodFor: "Hiking, biking, active friend groups",
  matchReason: "This is outdoor, group-friendly, and high energy."
},
{
  name: "Manassas National Battlefield",
  place: "Manassas National Battlefield Park",
  city: "Manassas, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "medium",
  distance: "~30 minutes from Fairfax",
  image: "🏛️",
  description: "A historic battlefield park with walking trails, open fields, and Civil War history.",
  goodFor: "History, walking, solo exploring",
  matchReason: "This is free, outdoor, solo-friendly, and medium energy."
},
{
  name: "National Museum of the U.S. Army",
  place: "National Museum of the U.S. Army",
  city: "Fort Belvoir, VA",
  cost: 0,
  costLabel: "Free",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~30 minutes from Fairfax",
  image: "🎖️",
  description: "A modern museum focused on U.S. Army history, exhibits, and military stories.",
  goodFor: "History, museums, solo indoor plans",
  matchReason: "This is free, indoor, solo-friendly, and low energy."
},
{
  name: "Fairfax Museum",
  place: "Fairfax Museum and Visitor Center",
  city: "Fairfax, VA",
  cost: 0,
  costLabel: "Free",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "In Fairfax",
  image: "🏫",
  description: "A small local museum focused on Fairfax history and local exhibits.",
  goodFor: "Local history, short visits, solo exploring",
  matchReason: "This is free, indoor, solo-friendly, and low energy."
},
{
  name: "Fair Oaks Mall",
  place: "Fair Oaks Mall",
  city: "Fairfax, VA",
  cost: 20,
  costLabel: "$0-$50",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "In Fairfax",
  image: "🛍️",
  description: "A large indoor mall with shopping, food, and casual places to walk around with friends.",
  goodFor: "Shopping, food court, casual group plans",
  matchReason: "This is indoor, friend-friendly, and medium energy."
},
{
  name: "Mosaic District",
  place: "Mosaic District",
  city: "Merrifield, VA",
  cost: 25,
  costLabel: "$0-$50",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~15 minutes from Fairfax",
  image: "🍽️",
  description: "A walkable shopping and dining district with restaurants, outdoor seating, movies, and shops.",
  goodFor: "Dinner, walking around, relaxed group plans",
  matchReason: "This is outdoor, group-friendly, and low energy."
},
{
  name: "Reston Town Center",
  place: "Reston Town Center",
  city: "Reston, VA",
  cost: 25,
  costLabel: "$0-$50",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~25 minutes from Fairfax",
  image: "🌆",
  description: "A walkable town center with restaurants, shops, events, and casual nightlife.",
  goodFor: "Food, walking, relaxed evenings",
  matchReason: "This is outdoor, friend-friendly, and low energy."
},
{
  name: "Fairfax Corner",
  place: "Fairfax Corner",
  city: "Fairfax, VA",
  cost: 20,
  costLabel: "$0-$50",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "In Fairfax",
  image: "🍕",
  description: "A local outdoor shopping and dining area with restaurants, movies, and casual hangout spots.",
  goodFor: "Dinner, movies, easy local group plans",
  matchReason: "This is outdoor, group-friendly, and low energy."
},
{
  name: "One Loudoun",
  place: "One Loudoun",
  city: "Ashburn, VA",
  cost: 30,
  costLabel: "$0-$60",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~35 minutes from Fairfax",
  image: "🌃",
  description: "A popular dining and entertainment area with restaurants, shops, and evening hangout options.",
  goodFor: "Restaurants, nightlife, casual friend plans",
  matchReason: "This is outdoor, group-friendly, and low energy."
},
{
  name: "Angelika Film Center",
  place: "Angelika Film Center",
  city: "Merrifield, VA",
  cost: 18,
  costLabel: "$15-$25",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~15 minutes from Fairfax",
  image: "🎥",
  description: "A stylish movie theater in Mosaic District with mainstream and indie films.",
  goodFor: "Movies, date nights, low-energy friend plans",
  matchReason: "This is indoor, friend-friendly, and low energy."
},
{
  name: "The State Theatre",
  place: "The State Theatre",
  city: "Falls Church, VA",
  cost: 35,
  costLabel: "$25-$50",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~25 minutes from Fairfax",
  image: "🎤",
  description: "A live music and event venue with concerts, tribute bands, and performances.",
  goodFor: "Live music, groups, evening plans",
  matchReason: "This is indoor, friend-friendly, and medium energy."
},
{
  name: "EagleBank Arena",
  place: "EagleBank Arena",
  city: "Fairfax, VA",
  cost: 50,
  costLabel: "$30+",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "In Fairfax",
  image: "🏟️",
  description: "A large event venue on GMU's campus with concerts, sports, comedy, and special events.",
  goodFor: "Concerts, sports, comedy, big events",
  matchReason: "This is indoor, group-friendly, and medium energy."
},
{
  name: "Caboose Commons",
  place: "Caboose Commons",
  city: "Merrifield, VA",
  cost: 20,
  costLabel: "$10-$30",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~15 minutes from Fairfax",
  image: "☕",
  description: "A relaxed cafe and brewery-style spot that works for coffee, food, or casual solo time.",
  goodFor: "Coffee, reading, casual food, solo downtime",
  matchReason: "This is indoor, solo-friendly, and low energy."
},
{
  name: "Cafe Amouri",
  place: "Cafe Amouri",
  city: "Vienna, VA",
  cost: 15,
  costLabel: "$10-$20",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~20 minutes from Fairfax",
  image: "☕",
  description: "A cozy independent coffee shop in Vienna that is good for reading, working, or a quiet break.",
  goodFor: "Coffee, studying, reading, low-energy solo time",
  matchReason: "This is indoor, affordable, solo-friendly, and low energy."
},
{
  name: "Rare Bird Coffee",
  place: "Rare Bird Coffee Roasters",
  city: "Falls Church, VA",
  cost: 15,
  costLabel: "$10-$20",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~25 minutes from Fairfax",
  image: "☕",
  description: "A local coffee roaster and cafe with a calm atmosphere for solo time or light work.",
  goodFor: "Coffee, reading, solo reset",
  matchReason: "This is indoor, affordable, solo-friendly, and low energy."
},
{
  name: "Northside Social",
  place: "Northside Social",
  city: "Falls Church, VA",
  cost: 20,
  costLabel: "$10-$30",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~25 minutes from Fairfax",
  image: "🥐",
  description: "A cafe and wine bar style spot that works well for relaxed conversation or casual food.",
  goodFor: "Coffee, brunch, low-key friend meetups",
  matchReason: "This is indoor, group-friendly, and low energy."
},
{
  name: "Misha's Coffee",
  place: "Misha's Coffee",
  city: "Alexandria, VA",
  cost: 15,
  costLabel: "$10-$20",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "~35 minutes from Fairfax",
  image: "☕",
  description: "A cozy coffee shop option for solo reading, light work, or a quiet change of scenery.",
  goodFor: "Coffee, solo time, reading",
  matchReason: "This is indoor, solo-friendly, affordable, and low energy."
},
{
  name: "Sportrock Climbing",
  place: "Sportrock Climbing Centers",
  city: "Alexandria, VA",
  cost: 30,
  costLabel: "$25-$40",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "high",
  distance: "~30 minutes from Fairfax",
  image: "🧗",
  description: "An indoor climbing gym with bouldering and climbing routes for an active solo challenge.",
  goodFor: "Fitness, climbing, active solo plans",
  matchReason: "This is indoor, solo-friendly, and high energy."
},
{
  name: "The St. James",
  place: "The St. James",
  city: "Springfield, VA",
  cost: 40,
  costLabel: "$30+",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "high",
  distance: "~25 minutes from Fairfax",
  image: "🏋️",
  description: "A large indoor sports and fitness complex with multiple athletic options.",
  goodFor: "Sports, fitness, active group plans",
  matchReason: "This is indoor, group-friendly, and high energy."
},
{
  name: "Autobahn Indoor Speedway",
  place: "Autobahn Indoor Speedway",
  city: "Manassas, VA",
  cost: 30,
  costLabel: "$25-$40",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "high",
  distance: "~30 minutes from Fairfax",
  image: "🏎️",
  description: "Indoor electric go-kart racing for a fast-paced group activity.",
  goodFor: "Groups, competition, high-energy plans",
  matchReason: "This is indoor, group-friendly, and high energy."
},
{
  name: "Fun Land Fairfax",
  place: "Fun Land Fairfax",
  city: "Fairfax, VA",
  cost: 35,
  costLabel: "$20-$50",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "high",
  distance: "In Fairfax",
  image: "🎯",
  description: "An entertainment center with arcade games and active attractions for groups.",
  goodFor: "Arcade games, friends, high-energy fun",
  matchReason: "This is indoor, group-friendly, and high energy."
},
{
  name: "Cox Farms",
  place: "Cox Farms",
  city: "Centreville, VA",
  cost: 25,
  costLabel: "$20-$35",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~20 minutes from Fairfax",
  image: "🎃",
  description: "A seasonal farm destination known for fall events, slides, food, and outdoor activities.",
  goodFor: "Seasonal events, groups, outdoor fun",
  matchReason: "This is outdoor, group-friendly, and medium energy."
},
{
  name: "Roer's Zoofari",
  place: "Roer's Zoofari",
  city: "Vienna, VA",
  cost: 25,
  costLabel: "$20-$35",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "medium",
  distance: "~25 minutes from Fairfax",
  image: "🦒",
  description: "A local animal park with wildlife encounters and outdoor walking areas.",
  goodFor: "Animals, group outings, casual outdoor activity",
  matchReason: "This is outdoor, group-friendly, and medium energy."
},
{
  name: "Clemyjontri Park",
  place: "Clemyjontri Park",
  city: "McLean, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~30 minutes from Fairfax",
  image: "🎠",
  description: "A colorful accessible park that works well for relaxed outdoor visits and casual group time.",
  goodFor: "Easy outdoor plans, families, casual groups",
  matchReason: "This is free, outdoor, group-friendly, and low energy."
},
{
  name: "Mount Vernon Trail",
  place: "Mount Vernon Trail",
  city: "Alexandria, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "high",
  distance: "~35 minutes from Fairfax",
  image: "🚴",
  description: "A scenic paved trail along the Potomac River, good for biking, running, or long walks.",
  goodFor: "Biking, running, active solo time",
  matchReason: "This is free, outdoor, solo-friendly, and high energy."
},
{
  name: "W&OD Trail",
  place: "Washington & Old Dominion Trail",
  city: "Northern Virginia",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "high",
  distance: "~20 minutes from Fairfax",
  image: "🚲",
  description: "A long paved rail trail through Northern Virginia that is great for biking, running, or walking.",
  goodFor: "Cycling, running, long walks",
  matchReason: "This is free, outdoor, solo-friendly, and high energy."
},
{
  name: "Tysons Biergarten",
  place: "Tysons Biergarten",
  city: "Tysons, VA",
  cost: 30,
  costLabel: "$20-$50",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "~25 minutes from Fairfax",
  image: "🍻",
  description: "A casual social spot in Tysons for food, drinks, and relaxed group conversation.",
  goodFor: "Friends, casual nights, food and drinks",
  matchReason: "This is indoor, group-friendly, and low energy."
},
{
  name: "Bunnyman Brewing",
  place: "Bunnyman Brewing",
  city: "Fairfax, VA",
  cost: 25,
  costLabel: "$15-$40",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "In Fairfax",
  image: "🍺",
  description: "A local brewery option for relaxed conversation and low-key group plans.",
  goodFor: "Friends, casual drinks, relaxed evenings",
  matchReason: "This is indoor, group-friendly, and low energy."
},
{
  name: "Ornery Beer Company",
  place: "Ornery Beer Company",
  city: "Fairfax, VA",
  cost: 25,
  costLabel: "$15-$40",
  setting: "indoor",
  groupType: "friends",
  energyLevel: "low",
  distance: "In Fairfax",
  image: "🍺",
  description: "A local brewery and restaurant-style spot for casual food, drinks, and hanging out.",
  goodFor: "Friends, food, relaxed nights",
  matchReason: "This is indoor, friend-friendly, and low energy."
},
{
  name: "GMU Campus Walk",
  place: "George Mason University",
  city: "Fairfax, VA",
  cost: 0,
  costLabel: "Free",
  setting: "outdoor",
  groupType: "alone",
  energyLevel: "low",
  distance: "In Fairfax",
  image: "🎓",
  description: "A simple walk around GMU's campus, green spaces, and nearby areas for a quick reset.",
  goodFor: "Walking, solo breaks, low-pressure outdoor time",
  matchReason: "This is free, outdoor, solo-friendly, and low energy."
},
{
  name: "George Mason Rec Center",
  place: "GMU Recreation",
  city: "Fairfax, VA",
  cost: 0,
  costLabel: "Free/Student access",
  setting: "indoor",
  groupType: "alone",
  energyLevel: "high",
  distance: "In Fairfax",
  image: "🏋️",
  description: "A convenient indoor fitness option for a high-energy solo workout.",
  goodFor: "Workouts, fitness, solo active plans",
  matchReason: "This is indoor, solo-friendly, and high energy."
}
];

const form = document.getElementById("quest-form");
const budgetInput = document.getElementById("budget");
const settingInput = document.getElementById("setting");
const groupInput = document.getElementById("groupType");
const energyInput = document.getElementById("energyLevel");
const message = document.getElementById("form-message");
const resultsSection = document.getElementById("results-section");
const resultsGrid = document.getElementById("results-grid");
const resultsTitle = document.getElementById("results-title");
const randomBtn = document.getElementById("random-btn");
const randomPick = document.getElementById("random-pick");
const resetBtn = document.getElementById("reset-btn");
const keywordInput = document.getElementById("keyword");
const resultsSummary = document.getElementById("results-summary");
const statsGrid = document.getElementById("stats-grid");

let currentMatches = [];
let favorites = JSON.parse(localStorage.getItem("sideQuestFavorites")) || [];

function isValidBudget(budget) {
  return typeof budget === "number" && !Number.isNaN(budget) && budget >= 0;
}

function getPreferences() {
  return {
    budget: Number(budgetInput.value),
    setting: settingInput.value,
    groupType: groupInput.value,
    energyLevel: energyInput.value,
    keyword: keywordInput.value.trim().toLowerCase()
  };
}

function validatePreferences(preferences) {
  return (
    isValidBudget(preferences.budget) &&
    preferences.setting !== "" &&
    preferences.groupType !== "" &&
    preferences.energyLevel !== ""
  );
}

function getRecommendations(activityList, preferences) {
  return activityList
    .filter(activity => activity.cost <= preferences.budget)
    .filter(activity => preferences.setting === "any" || activity.setting === preferences.setting)
    .filter(activity => preferences.groupType === "any" || activity.groupType === preferences.groupType)
    .filter(activity => preferences.energyLevel === "any" || activity.energyLevel === preferences.energyLevel)
    .filter(activity => {
      if (preferences.keyword === "") return true;

      const searchableText = `
        ${activity.name}
        ${activity.place}
        ${activity.city}
        ${activity.description}
        ${activity.goodFor}
      `.toLowerCase();

      return searchableText.includes(preferences.keyword);
    })
    .sort((a, b) => a.cost - b.cost);
}

function getRandomActivity(activityList) {
  if (activityList.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * activityList.length);
  return activityList[randomIndex];
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function saveFavorites() {
  localStorage.setItem("sideQuestFavorites", JSON.stringify(favorites));
}

function isFavorite(activityName) {
  return favorites.some(activity => activity.name === activityName);
}

function toggleFavorite(activity) {
  if (isFavorite(activity.name)) {
    favorites = favorites.filter(saved => saved.name !== activity.name);
  } else {
    favorites.push(activity);
  }

  saveFavorites();
  renderResults(currentMatches);
}

function renderStats(matches) {
  if (!statsGrid) return;

  if (matches.length === 0) {
    statsGrid.innerHTML = "";
    return;
  }

  const indoorCount = matches.filter(activity => activity.setting === "indoor").length;
  const outdoorCount = matches.filter(activity => activity.setting === "outdoor").length;
  const averageCost = Math.round(
    matches.reduce((sum, activity) => sum + activity.cost, 0) / matches.length
  );

  statsGrid.innerHTML = `
    <div class="stat-card">
      <strong>${matches.length}</strong>
      <span>Total Matches</span>
    </div>
    <div class="stat-card">
      <strong>${indoorCount}</strong>
      <span>Indoor</span>
    </div>
    <div class="stat-card">
      <strong>${outdoorCount}</strong>
      <span>Outdoor</span>
    </div>
    <div class="stat-card">
      <strong>$${averageCost}</strong>
      <span>Average Cost</span>
    </div>
  `;
}

function createActivityCard(activity) {
  const card = document.createElement("article");
  card.className = "activity-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="card-image">${activity.image}</div>
    <div class="card-body">
      <p class="location">${activity.city}</p>
      <h3>${activity.name}</h3>
      <p class="description">${activity.description}</p>

      <div class="tag-row">
        <span class="tag ${activity.cost === 0 ? "free" : "cost"}">${activity.costLabel}</span>
        <span class="tag">${capitalize(activity.setting)}</span>
        <span class="tag">${activity.groupType === "alone" ? "Solo" : "Friends"}</span>
        <span class="tag energy">${capitalize(activity.energyLevel)} Energy</span>
      </div>

      <div class="card-actions">
        <button type="button" class="favorite-btn">
          ${isFavorite(activity.name) ? "♥ Saved" : "♡ Save"}
        </button>
        <button type="button" class="details-btn">View Details</button>
      </div>
    </div>
  `;

  const favoriteBtn = card.querySelector(".favorite-btn");

  favoriteBtn.addEventListener("click", event => {
    event.stopPropagation();
    toggleFavorite(activity);
  });

  card.addEventListener("click", () => openModal(activity));

  card.addEventListener("keydown", event => {
    if (event.key === "Enter") openModal(activity);
  });

  return card;
}

function renderResults(matches) {
  resultsGrid.innerHTML = "";
  randomPick.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  const preferences = getPreferences();

  resultsSummary.textContent =
    `Showing ${matches.length} activit${matches.length === 1 ? "y" : "ies"} under $${preferences.budget}. Saved favorites: ${favorites.length}.`;

  renderStats(matches);

  if (matches.length === 0) {
    resultsTitle.textContent = "No Matching Quests";
    randomBtn.classList.add("hidden");

    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <h3>No activities matched those preferences.</h3>
      <p>Try increasing your budget or changing one of your filters.</p>
    `;

    resultsGrid.appendChild(emptyState);
    return;
  }

  resultsTitle.textContent = `${matches.length} Quest${matches.length === 1 ? "" : "s"} Found`;
  randomBtn.classList.remove("hidden");

  matches.forEach(activity => {
    resultsGrid.appendChild(createActivityCard(activity));
  });

  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRandomPick() {
  const pick = getRandomActivity(currentMatches);

  if (!pick) return;

  openModal(pick);
}

function getRecommendationReason(activity) {
  const preferences = getPreferences();
  const reasons = [];

  if (activity.cost <= preferences.budget) {
    reasons.push(`it fits within your $${preferences.budget} budget`);
  }

  if (preferences.setting !== "any") {
    reasons.push(`it matches your ${preferences.setting} setting choice`);
  }

  if (preferences.groupType !== "any") {
    reasons.push(`it works for ${preferences.groupType === "alone" ? "a solo plan" : "a group plan"}`);
  }

  if (preferences.energyLevel !== "any") {
    reasons.push(`it matches your ${preferences.energyLevel} energy level`);
  }

  return `SideQuest recommended this because ${reasons.join(", ")}.`;
}

function openModal(activity) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";

  modal.innerHTML = `
    <div class="modal-card">
      <button type="button" class="modal-close">×</button>

      <div class="modal-hero">${activity.image}</div>

      <p class="eyebrow">Quest Details</p>
      <h2>${activity.name}</h2>
      <p class="modal-location">📍 ${activity.place} — ${activity.city}</p>

      <div class="modal-tags">
        <span class="tag ${activity.cost === 0 ? "free" : "cost"}">${activity.costLabel}</span>
        <span class="tag">${capitalize(activity.setting)}</span>
        <span class="tag">${activity.groupType === "alone" ? "Solo" : "Friends"}</span>
        <span class="tag energy">${capitalize(activity.energyLevel)} Energy</span>
      </div>

      <div class="modal-section">
        <h3>What it entails</h3>
        <p>${activity.description}</p>
      </div>

      <div class="modal-section">
        <h3>Good for</h3>
        <p>${activity.goodFor}</p>
      </div>

      <div class="modal-section">
        <h3>Distance</h3>
        <p>${activity.distance}</p>
      </div>

      <div class="modal-section match-box">
        <h3>Why it was recommended</h3>
        <p>${getRecommendationReason(activity)}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const closeBtn = modal.querySelector(".modal-close");

  function closeModal() {
    modal.remove();
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function escapeClose(event) {
    if (event.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escapeClose);
    }
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const preferences = getPreferences();

  if (!validatePreferences(preferences)) {
    message.textContent = "Please fill out every field before searching.";
    resultsSection.classList.add("hidden");
    return;
  }

  message.textContent = "";
  currentMatches = getRecommendations(activities, preferences);
  renderResults(currentMatches);
});

randomBtn.addEventListener("click", renderRandomPick);

resetBtn.addEventListener("click", () => {
  form.reset();
  message.textContent = "";
  currentMatches = [];

  resultsGrid.innerHTML = "";
  resultsSummary.textContent = "";
  statsGrid.innerHTML = "";

  randomPick.innerHTML = "";
  randomPick.classList.add("hidden");

  resultsSection.classList.add("hidden");

  budgetInput.focus();
});

const revealElements = document.querySelectorAll(".hero, .panel, .results-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});