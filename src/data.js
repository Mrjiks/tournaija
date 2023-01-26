import tour1 from "./images/tour-1.jpeg";
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
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: `${tour1}`,
    date: "june 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit Cumqu vitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, quicorporis.",
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: `${tour2}`,
    date: "feb 26th, 2023",
    title: "Best Of Java",
    info: "Lorem ipsum dolor sit Cumqu vitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, quicorporis.",
    location: " Indonesia",
    duration: 30,
    cost: 4100,
  },
  {
    id: 3,
    image: `${tour3}`,
    date: "March 5th, 2023",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit Cumqu vitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, quicorporis.",
    location: "Hong Kong",
    duration: 28,
    cost: 5100,
  },
  {
    id: 4,
    image: `${tour4}`,
    date: "january 26th, 2023",
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit Cumqu vitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, quicorporis.",
    location: "Kenya",
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
