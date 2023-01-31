import tour1 from "./images/tour1.webp";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  ,
  { id: 3, href: "#services", text: "services" },
  ,
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Tour Guide",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Hotel Booking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "General Tourism Services",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: `${tour1}`,
    date: "june 26th, 2023",
    title: "Yankari National Park",
    info: "Yankari National Park is one of the most popular tourist destinations in Nigeria. It is located in the northern part of Nigeria and is home to some of the most magnificent wildlife species in Africa. The park covers an area of about 2,244 km2 and is renowned for its hot springs and mineral baths. Some of the most popular wildlife species that you can spot in Yankari National Park include elephants, lions, baboons, buffalo and many others. Visitors to the park can also enjoy various activities such as game drives, bird watching, and camping.",
    location: "Osun State",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: `${tour2}`,
    date: "feb 26th, 2023",
    title: "Zuma Rock",
    info: "Zuma Rock is a monolith located in Niger State, Nigeria. It is one of the most iconic landmarks in Nigeria and is a popular tourist destination. The rock stands at an impressive height of 725 meters and is believed to have spiritual and cultural significance to the local people. Visitors to Zuma Rock can enjoy stunning views of the surrounding landscape and can also learn about the rich cultural and historical heritage of the area.",
    location: "Niger State",
    duration: 30,
    cost: 4100,
  },
  {
    id: 3,
    image: `${tour3}`,
    date: "March 5th, 2023",
    title: "Obudu Cattle Ranch",
    info: "Obudu Cattle Ranch is a mountain resort located in Cross River State, Nigeria. It is one of the most popular tourist destinations in Nigeria and is known for its stunning scenery and incredible wildlife. The ranch covers an area of over 11,000 hectares and is home to over 10 species of primates, as well as other wildlife species such as elephants, antelopes, and many others.",
    location: "Cross River State",
    duration: 28,
    cost: 5100,
  },
  {
    id: 4,
    image: `${tour4}`,
    date: "january 26th, 2023",
    title: "Idanre Hills",
    info: "Idanre Hills is a stunning mountain range located in Ondo State, Nigeria. It is considered one of the most beautiful tourist destinations in Nigeria and is home to several species of endemic plants and wildlife. Visitors to Idanre Hills can enjoy breathtaking views of the surrounding landscape and can also learn about the rich cultural and historical heritage of the area.",
    location: "Ondo State",
    duration: 20,
    cost: 3100,
  },
];

export const footerLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  ,
  { id: 3, href: "#services", text: "services" },
  ,
  { id: 4, href: "#tours", text: "featured" },
];
