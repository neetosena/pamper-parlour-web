import Photos1Mobile from "../images/photos-hero-mobile.png";
import AboutImage from "../images/about-image.jpg";
import Gallery1 from "../images/PHOTO-2024-09-17-10-44-30-1.jpg";
import Gallery2 from "../images/PHOTO-2024-09-17-10-44-30-2.jpg";
import Gallery3 from "../images/PHOTO-2024-09-17-10-44-30-3.jpg";
import Gallery4 from "../images/PHOTO-2024-09-17-10-44-30-4.jpg";
import Gallery5 from "../images/PHOTO-2024-09-17-10-44-30-5.jpg";
import Gallery6 from "../images/PHOTO-2024-09-17-10-44-30-6.jpg";
import Gallery7 from "../images/PHOTO-2024-09-17-10-44-30.jpg";

export const navLinks = [
  { id: 1, name: "Home" },
  { id: 2, name: "About Us" },
  { id: 3, name: "Gallery" },
  { id: 4, name: "Testimonials" },
  { id: 5, name: "Packages" },
  { id: 6, name: "Contact" },
];

export const hero = [
  {
    id: 1,
    title: "Join the Fun at Pamper Parlour",
    text: "Ireland’s Favorite Kids' Party Wonderland! Let’s Celebrate the Best Day Ever!",
    img: Photos1Mobile,
  },
];

export const about = {
  title: "About Us",
  img: AboutImage,
  text: [
    "Looking to give your little girl a true salon experience for her next party, Then look no further than our newly opened and custom designed pamper parlour. Let us take away the stress of hosting at party at our venue. From the moment the birthday girl and her guests comes through the door, we will pamper them to their hearts desire. We promise to give your little girl a truly and memorable birthday and to treat her like a princess on her special day.",
    "We host a range of activities like, footspa, facemask, tattoos, fingernails painted, hairstyle, kids champayne, chocolate fondue with marshmallows. We supply juice and nibbles. We finish the party of with dancing, games or karaoke.",
    "Our aim is to provide your little girls a fun and memorable experience. We offer a range of different packages to suit your needs.",
  ],
};

export const gallery = [
  { id: 1, img: Gallery1, alt: "Image-1" },
  { id: 2, img: Gallery2, alt: "Image-2" },
  { id: 3, img: Gallery3, alt: "Image-3" },
  { id: 4, img: Gallery4, alt: "Image-4" },
  { id: 5, img: Gallery5, alt: "Image-5" },
  { id: 6, img: Gallery6, alt: "Image-6" },
  { id: 7, img: Gallery7, alt: "Image-7" },
];

export const testimonials = [
  {
    id: 1,
    name: "MagQiu",
    rating: 4,
    message:
      "Many thanks to Rachel for looking after ar organizing memorable experience for my years old daughter and her friends! Very accommodating and all around great dealing. It's so different from all the play centres out there and they are left with the best memories. Highly recommend this place.",
  },
  {
    id: 2,
    name: "Katrina B",
    rating: 4,
    message:
      "Had my daughters 10th birthday here today and the kids were treated like queens! Start to finish was just brilliant and all the kids were made feel special. So many little touches made it such a memorable day and zero stress. Thank you ladies!",
  },
  {
    id: 3,
    name: "Jessica Smith",
    rating: 4,
    message:
      "Couldn't recommend the pamper parlour enough for fitting my daughters party in last minute on the day after been let.. thank yous so much kallie had the best birthday and all of the girls had a great day × great value for money and well worth every penny spent here x",
  },
  {
    id: 4,
    name: "Laura Grehan",
    rating: 4,
    message:
      "My daughter had her 8th birthday party here and as we were leaving asked if she could have her next birthday party here next year. It was fantastic. The room is so lovely and girly and the girls all just loved being pampered. I received so many txt from parents saying their daughter wants to have their party here too. My daughter's favourite part was the foot spa, some girls preferred their nails and hair done and others loved the champagne.",
  },
];

export const packagesInfo = [
  {
    id: 1,
    title: "Birthday Girl",
    text: [
      "Footspa",
      "Facemask",
      "Tattoo",
      "Fingernails Painted",
      "Perfume",
      "Hairstyle",
      "Facegems",
      "Gift",
    ],
  },
  {
    id: 2,
    title: "Guests",
    text: ["Footspa", "Facemask", "Tattoo", "Fingernails Painted", "Perfume"],
  },
];

export const packages = [
  {
    id: 1,
    primaryColor: "#C30082",
    secondaryColor: "#FFF0F4",
    title: "Standard",
    price: "€250",
    info: ["For 10 children", "€12.50 per extra child"],
    items: [
      "Kids Champagne",
      "Chocolate Fondue with Marshmallows",
      "Juice and Nibbles",
      "Satin Robe and Headband, to be given back at the end of treatments",
    ],
  },

  {
    id: 2,
    primaryColor: "#423FD7",
    secondaryColor: "#EBEBFF",
    title: "Special Offer",
    price: "€260",
    info: ["For 10 children", "€12.50 per extra child"],
    items: [
      "Kids Champagne",
      "Chocolate Fondue with Marshmallows",
      "Juice and Nibbles",
      "Satin Robe and Headband, to be given back at the end of treatments",
      "Pizza and Chips",
    ],
  },
  {
    id: 3,
    primaryColor: "#716F71",
    secondaryColor: "#F0F0F0",
    title: "Silver",
    price: "€300",
    info: ["For 10 children", "€12.50 per extra child"],
    items: [
      "Kids Champagne",
      "Chocolate Fondue with Marshmallows",
      "Juice and Nibbles",
      "Satin Robe and Headband, to be given back at the end of treatments",
      "Donut Wall",
      "Party Bags",
    ],
  },
  {
    id: 4,
    primaryColor: "#A28A21",
    secondaryColor: "#F9F5E7",
    title: "Gold",
    price: "€350",
    info: ["For 10 children", "€15 per extra child"],
    items: [
      "Kids Champagne",
      "Chocolate Fondue with Marshmallows",
      "Juice and Nibbles",
      "Satin Robe and Headband, to be given back at the end of treatments",
      "Donut Wall",
      "Party Bags",
      "Pizza, Chips or Wedges, Fruit Juice and Sauces Supplied",
    ],
  },
];

// Function to organise item per page for desktop only

export const pagination = (arr, items) => {
  const totalPage = Math.ceil(arr.length / items);

  const newArr = Array.from({ length: totalPage }, (_, index) => {
    const start = index * items;
    const end = start + items;
    return arr.slice(start, end);
  });

  return newArr;
};
