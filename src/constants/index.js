import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import { customer1, customer2 } from "../assets/images";

import tyryon from "../assets/images/tyryon.png";
import john from "../assets/images/john.png";
import ned from "../assets/images/ned.png";

export const shoes = [
  {
    thumbnail: john,
    bigShoe: john,
  },
  {
    thumbnail: tyryon,
    bigShoe: tyryon,
  },
  {
    thumbnail: ned,
    bigShoe: ned,
  },
];

export const statistics = [
  { value: "4.5", label: "Reviews" },
  { value: "16+", label: "Rated for" },
  { value: "500+", label: "Downloads" },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "ThroneWatch is a must-have for any Game of Thrones fan! It's incredibly detailed, offering comprehensive character profiles and backstory summaries.",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "I love how easy it is to navigate through ThroneWatch. Whether you're a casual viewer or a die-hard fan, this app provides everything you need to know about every character.",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
