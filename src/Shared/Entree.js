const entree = [
  {
    id: 1,
    title: "M-1. Kyi Oo, Recommended",
    category: "entree",
    price: 9.99,
    img: "./images/item-1.jpg",
    desc: `Thin riced noodle soup in pork broth. The bowl comes with minced pork, pork meatball, sliced pork, fishball, fish cakes, tofu, mustard green and green onion. Seasoned with spices and black pepper. Served with soy sauce a d hot chillies dipping sauce`,
  },
  {
    id: 2,
    title: "M-2. Myi Oo Mee Shii, Recommended",
    category: "entree",
    price: 10.99,
    img: "./images/item-2.jpg",
    desc: `Noodle soup served in a clay pot with seafood, fish balls, fish cakes, mixed vegetable, poached egg, topped with cilantro, green onion and ground sesame seeds with black pepper seasoning. A little bit spicy. Your choice of chicken or pork 
      broth and Udon or rice flat noodle
      `,
  },
  {
    id: 3,
    title: "M-3 Shan Noodle",
    category: "entree",
    price: 8.99,
    img: "./images/item-3.jpg",
    desc: `Noodle mixed with chicken, ground peanuts and sesame seeds, green onion and topped with a homemade dressing. A little bit spicy. Served with homemade pickled 
      mustard green and a cup of broth.`,
  },
  //to be continued
  {
    id: 4,
    title: "M-4 Tom Yum Noddle Soup",
    category: "entree",
    price: 9.99,
    img: "./images/item-4.jpg",
    desc: `Our chef special Burmese hot and sour noodle soup with seafood and Enoki mushroom (the long thin stalk white mushroom). Your choice of rice noodle or egg 
      noodle`,
  },
  {
    id: 5,
    title: "M-5 Tofu Tot",
    category: "entree",
    price: 8.99,
    img: "./images/item-5.jpg",
    desc: `Burmese tofu salad mixed with cilantro, shredded cabbage, green onion, topped 
      with chef special dressing, ground peanut and sesame seed`,
  },
  {
    id: 6,
    title: "M-6 Kyi OO Sichat",
    category: "entree",
    price: 10.99,
    img: "./images/item-1.jpg",
    desc: `Seasoned rice noodle served with a bowl of broth with mince pork, pork meatball, 
      fishball, fishcakes, mustard green and green onion 
       `,
  },
  {
    id: 7,
    title: "M-7 Nan Gyi/Nan Tay",
    category: "entree",
    price: 9.99,
    img: "./images/item-2.jpg",
    desc: `Stir fry marinated chicken with cabbage and cilantro. Seasoned with spices and roasted soy bean powder. Mixed with your choice of Udon or thin rice noodle. 
      Served with a cup of broth on the side. `,
  },
  {
    id: 8,
    title: "M-8 Pork Curry",
    category: "entree",
    price: 9.99,
    img: "./images/item-3.jpg",
    desc: `Pork belly stew in our famous chef special Burmese curry. Served with steamed rice .`,
  },
  {
    id: 9,
    title: "M-9 Beef Curry",
    category: "entree",
    price: 12.99,
    img: "./images/item-4.jpg",
    desc: `Beef stew in our famous chef special Burmese curry.. Served with steamed rice.`,
  },
  {
    id: 10,
    title: "Chicken Rice(Tuesdays)",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `Deep fried seasoned chicken shredded, served with rice steamed in chicken broth 
      and homemade hot and sour dipping sauce.`,
  },
  {
    id: 11,
    title: "M-11 Moh Hin Khaa, Recommended(Thursday to Sunday)",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `FThis dish involves fine craft. Fish is seasoned, cooked and blended into a thick and flavorful soup, combined with Burmese seasoning, yellow split peas, hard-boiled 
      egg, cilantro and rice noodle. A lime wedge is served at your choosing `,
  },
  {
    id: 12,
    title: "M-12 La Phet Tha Min (Vegetarian)",
    category: "entree",
    price: 8.99,
    img: "./images/item-5.jpg",
    desc: `Steam rice mixed with seasoned tea leaves, special dressing and an over-medium 
      `,
  },
  {
    id: 13,
    title: "M-13 A Tot Sone",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `Tofu, chicken with udon and rice noodle . `,
  },
  {
    id: 14,
    title: "M-14 Bak Kut The",
    category: "entree",
    price: 12.99,
    img: "./images/item-5.jpg",
    desc: `Pork ribs, belly, enoki mushroom, spinach, green onion soup prepared for hours 
      `,
  },
  {
    id: 15,
    title: "M-15 Chef Special Fried Rice",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `Fragrant rice fried with shrimp, mixed veggies and special seasoning`,
  },
  {
    id: 16,
    title: "M-16 Laksa",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `Coconut curry noodle soup with shrimp, fishcakes, tofu, green onion, beansprouts 
    and cilantro.`,
  },
  {
    id: 17,
    title: "M-17 Thamin Tot",
    category: "entree",
    price: 7.99,
    img: "./images/item-5.jpg",
    desc: `Mixed rice with seasoned chicken. Topped with a fried egg`,
  },
  {
    id: 18,
    title: "M-18 Rakhine Mohtii",
    category: "entree",
    price: 9.99,
    img: "./images/item-5.jpg",
    desc: `Deep fried fish filet slightly crushed and mixed with rice noodle and house made 
    hot and sour dressing. It is spicy! 
    `,
  },
  {
    id: 19,
    title: "M-19 Papaya Salad(Burmese Style)",
    category: "entree",
    price: 7.99,
    img: "./images/item-5.jpg",
    desc: `Shredded green papaya, fresh Burmese tofu, cabbage, cilantro mixed with our unique salad dressing sprinkled with roasted sesame and ground peanuts 
    `,
  },
];
export default entree;
