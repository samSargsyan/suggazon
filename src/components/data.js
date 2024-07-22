const data = [
  {
    id: 0,
    image: "https://m.media-amazon.com/images/I/71e5YIl6LhL._AC_SX679_.jpg",
    name: "Under Sink Organizers and Storage",
    category: ["homegoods"],
    link: "https://amzn.to/3Wu6tpp",
    price: "29.99"
  },
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/813bdjNmeuL._AC_SX679_.jpg",
    name: "Hanobe White Washed Wooden Round Serving Tray",
    category: ["homegoods"],
    link: "https://amzn.to/3zGrgy0",
    price: "21.98"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81e3TmHKmML._AC_SX679_PIbundle-12,TopRight,0,0_SH20_.jpg",
    name: "FineDine 24 Piece Glass Storage Containers",
    category: ["homegoods"],
    link: "https://amzn.to/3SaDuVW",
    price: "39.99"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/815vZaQ9FXL._AC_SX679_.jpg",
    name: "Homedics Tabletop Water Fountain",
    category: ["homegoods"],
    link: "https://amzn.to/3WsPswX",
    price: "29.99"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/91sMONTo-wL._AC_SX679_.jpg",
    name: "Wooden Spoons for Cooking",
    category: ["homegoods"],
    link: "https://amzn.to/3Y7Q107",
    price: "39.25"
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/718FtT2bbhL._AC_SX679_.jpg",
    name: "MUDEELA Pots and Pans Organizer",
    category: ["homegoods"],
    link: "https://amzn.to/3Scr8wx",
    price: "19.99"
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/51imrSup74L._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg",
    name: "4 Pack Magnetic Spice Storage Rack Organizer",
    category: ["homegoods"],
    link: "https://amzn.to/3WpoOF9",
    price: "19.99"
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71ZS33DuERL._AC_SX679_.jpg",
    name: "Cuisinart 15-Piece Knife Set",
    category: ["homegoods"],
    link: "https://amzn.to/3WrpYA1",
    price: "99.00"
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/81b2aCHRw5L._AC_SX679_.jpg",
    name: "Charcuterie Boards Gift Set",
    category: ["homegoods"],
    link: "https://amzn.to/4bWwzag",
    price: "39.99"
  },
  {
    id: 9,
    image: "https://m.media-amazon.com/images/I/71wLsybzFZL._AC_SX679_.jpg",
    name: "16 Pieces Dishwasher Safe Professional Chef Kitchen Knife Set",
    category: ["homegoods"],
    link: "https://amzn.to/4d2H0d6",
    price: "49.99"
  },
  {
    id: 10,
    image: "https://m.media-amazon.com/images/I/81uWnqAojyL._AC_SX569_.jpg",
    name: "Disney Minnie Mouse Rainbow Floral July 4th T-Shirt",
    category: ["clothing"],
    link: "https://amzn.to/3zNdeL6",
    price: "19.99"
  },
  {
    id: 11,
    image: "https://m.media-amazon.com/images/I/81miroNz5XL._AC_SY550_.jpg",
    name: "OQQ Women's 3 Piece Tank Tops",
    category: ["clothing"],
    link: "https://amzn.to/3SdXIOC",
    price: "29.99"
  },
  {
    id: 12,
    image: "https://m.media-amazon.com/images/I/71kvZTHPQXL._AC_SX569_.jpg",
    name: "COOFANDY Men's Linen Shirts",
    category: ["clothing"],
    link: "https://amzn.to/3y9T8Ks",
    price: "29.99"
  },
  {
    id: 13,
    image: "https://m.media-amazon.com/images/I/717oZ78e8-L._AC_SY550_.jpg",
    name: "Women Trendy Sweatsuit Sets",
    category: ["clothing"],
    link: "https://amzn.to/3Y7Qn6X",
    price: "47.99"
  },
  {
    id: 14,
    image: "https://m.media-amazon.com/images/I/71ML+h9Q+6L._AC_SX466_.jpg",
    name: "Summer Casual Short Sleeves",
    category: ["clothing"],
    link: "https://amzn.to/3WbZYaB",
    price: "19.99"
  },
  {
    id: 16,
    image: "https://m.media-amazon.com/images/I/71B+4V5YhnL._AC_SX679_.jpg",
    name: "INIU Wireless Charger",
    category: ["gadgets"],
    link: "https://amzn.to/3WveuM0",
    price: "15.98"
  },
  {
    id: 17,
    image: "https://m.media-amazon.com/images/I/71cjRhnTVtL._AC_SX679_.jpg",
    name: "Cell Phone Stand with Wireless Bluetooth Speaker",
    category: ["gadgets"],
    link: "https://amzn.to/3WcKhQn",
    price: "24.69"
  },
  {
    id: 18,
    image: "https://m.media-amazon.com/images/I/51njEEZxXVL._AC_SX679_.jpg",
    name: "Electric Candle Lighter",
    category: ["gadgets"],
    link: "https://amzn.to/4bJzCT3",
    price: "9.99"
  },
  {
    id: 19,
    image: "https://m.media-amazon.com/images/I/71OHbUuDGQL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Revolving Countertop Spice Rack",
    category: ["gadgets"],
    link: "https://amzn.to/4bWxkjC",
    price: "49.99"
  },
  {
    id: 20,
    image: "https://m.media-amazon.com/images/I/61WpHbJeIlL._AC_SX679_.jpg",
    name: "Blood Circulation Supplement",
    category: ["wellness"],
    link: "https://amzn.to/4d2HHDe",
    price: "22.49"
  },
  {
    id: 21,
    image: "https://m.media-amazon.com/images/I/713U50-QzpL._AC_SX679_.jpg",
    name: "Source Naturals Wellness Formula",
    category: ["wellness"],
    link: "https://amzn.to/3Yc2Pmj",
    price: "33.41"
  },
  {
    id: 21,
    image: "https://m.media-amazon.com/images/I/61JRxttxvDL._AC_SX679_.jpg",
    name: "Massage Gun",
    category: ["wellness"],
    link: "https://amzn.to/3YaVMu6",
    price: "29.99"
  },
  {
    id: 22,
    image: "https://m.media-amazon.com/images/I/717ldREkbHL._AC_SX679_.jpg",
    name: "Wellness CORE Natural Dry Grain",
    category: ["wellness"],
    link: "https://amzn.to/4d8b1se",
    price: "43.19"
  },
  {
    id: 23,
    image: "https://m.media-amazon.com/images/I/71+jIPMYkML._AC_SY879_.jpg",
    name: "Wellness Alligator Natural Dental Chews for Dogs",
    category: ["wellness"],
    link: "https://amzn.to/3LrDcGH",
    price: "15.03"
  },
  {
    id: 24,
    image: "https://m.media-amazon.com/images/I/71Hkxh81mgL._AC_SX679_.jpg",
    name: "Moly Magnolia Cleaning Gel for Car",
    category: ["accessories"],
    link: "https://amzn.to/3Wu7WvV",
    price: "5.99"
  },
  {
    id: 25,
    image: "https://m.media-amazon.com/images/I/61My+bdXsxL._AC_SX679_.jpg",
    name: "Car Gear Shift Hoodie",
    category: ["accessories"],
    link: "https://amzn.to/3LrIKke",
    price: "6.49"
  },
  {
    id: 26,
    image: "https://m.media-amazon.com/images/I/61VAMsQpzZL._AC_SX679_.jpg",
    name: "Tempered Glass Screen Protector",
    category: ["accessories"],
    link: "https://amzn.to/3W85hHS",
    price: "39.99"
  },
  {
    id: 27,
    image: "https://m.media-amazon.com/images/I/71TjNDlT50L._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    name: "Leather Car Box Seat Organizer",
    category: ["accessories"],
    link: "https://amzn.to/3WsxBpK",
    price: "36.99"
  },
  {
    id: 28,
    image: "https://m.media-amazon.com/images/I/61Pu+TCm+ML._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg",
    name: "Car Bling Crystal Rhinestone",
    category: ["accessories"],
    link: "https://amzn.to/3LOuv9H",
    price: "5.99"
  },
  {
    id: 29,
    image: "https://m.media-amazon.com/images/I/71+UUqhLe5L._AC_SX679_.jpg",
    name: "Dinosaur Kids Camera",
    category: ["kids"],
    link: "https://amzn.to/3LuAksz",
    price: "35.99"
  },
  {
    id: 30,
    image: "https://m.media-amazon.com/images/I/71fiQzd9oiL._AC_SX679_.jpg",
    name: "Indoor Basketball Hoop for Kids",
    category: ["kids"],
    link: "https://amzn.to/3zJuGQx",
    price: "30.99"
  },
  {
    id: 31,
    image: "https://m.media-amazon.com/images/I/71gwDpwIlHL._SX679_.jpg",
    name: "Firefly Kids Anti-Cavity Fluoride Rinse",
    category: ["kids"],
    link: "https://amzn.to/4d7uA3C",
    price: "4.99"
  },
  {
    id: 32,
    image: "https://m.media-amazon.com/images/I/91G2F+36oDL._AC_SX679_.jpg",
    name: "Mega Science Lab - Science Kit for Kids",
    category: ["kids"],
    link: "https://amzn.to/3y50e2V",
    price: "59.99"
  },
  {
    id: 33,
    image: "https://m.media-amazon.com/images/I/81yejGA1xhL._AC_SX679_.jpg",
    name: "Galaxy Projector",
    category: ["kids"],
    link: "https://amzn.to/3LEQ4Jn",
    price: "18.99"
  },
  {
    id: 34,
    image: "https://m.media-amazon.com/images/I/713okcKVY3L._AC_SX679_.jpg",
    name: "Garden Kitchen Tool Organizer",
    category: ["homegoods"],
    link: "https://amzn.to/4bRPkvk",
    price: "9.99"
  },
  {
    id: 35,
    image: "https://m.media-amazon.com/images/I/71J6P8L6ORL._AC_SX679_.jpg",
    name: "Kitchen Utensil Set",
    category: ["homegoods"],
    link: "https://amzn.to/3y9IHXn",
    price: "26.97"
  },
  {
    id: 36,
    image: "https://m.media-amazon.com/images/I/511v9HDcsGL._AC_SX679_.jpg",
    name: "Prep Bowls",
    category: ["homegoods"],
    link: "https://amzn.to/3LxEJuJ",
    price: "29.99"
  },
  {
    id: 37,
    image: "https://m.media-amazon.com/images/I/910WE-Al2tL._AC_SX679_.jpg",
    name: "Wooden Tiered Tray Decor",
    category: ["homegoods"],
    link: "https://amzn.to/3SiESpA",
    price: "44.99"
  },
  {
    id: 38,
    image: "https://m.media-amazon.com/images/I/71xsgkTiVCL._AC_SX679_.jpg",
    name: "Reusable Food Storage Bags",
    category: ["homegoods"],
    link: "https://amzn.to/3zP8Ye6",
    price: "13.99"
  },
  {
    id: 39,
    image: "https://m.media-amazon.com/images/I/617eLJF-AHL._AC_SX679_.jpg",
    name: "Electric Griddle Nonstick with Lid",
    category: ["homegoods"],
    link: "https://amzn.to/4cPAjvm",
    price: "269.75"
  },
  {
    id: 40,
    image: "https://m.media-amazon.com/images/I/71H33idJ19L._AC_SX679_.jpg",
    name: "Bathroom Accessories Set",
    category: ["homegoods"],
    link: "https://amzn.to/4cRlwAa",
    price: "24.99"
  },
  {
    id: 41,
    image: "https://m.media-amazon.com/images/I/81xU0qxl4DL._AC_SX679_.jpg",
    name: "Gold Mixology Bartender Kit",
    category: ["homegoods"],
    link: "https://amzn.to/3SjBGdn",
    price: "45.99"
  },
  {
    id: 42,
    image: "https://m.media-amazon.com/images/I/815W-lr2-UL._AC_SX679_.jpg",
    name: "Whiskey Glass Gift Set",
    category: ["homegoods"],
    link: "https://amzn.to/4cQJtYj",
    price: "15.99"
  },
  {
    id: 43,
    image: "https://m.media-amazon.com/images/I/71eKmv8CFSL._AC_SX679_.jpg",
    name: "Shelf for Kitchen Organization",
    category: ["homegoods"],
    link: "https://amzn.to/4cNmGwx",
    price: "38.99"
  },
  {
    id: 44,
    image: "https://m.media-amazon.com/images/I/71OhR3BtvJL._AC_SX679_.jpg",
    name: "30pcs Mixology Bartender Kit",
    category: ["homegoods"],
    link: "https://amzn.to/4cSnj8c",
    price: "21.99"
  },
  {
    id: 45,
    image: "https://m.media-amazon.com/images/I/61hkbSSZlIL._AC_SX679_.jpg",
    name: "12 Inch Shower Linear Gold",
    category: ["homegoods"],
    link: "https://amzn.to/3W6h61a",
    price: "21.99"
  },
  {
    id: 46,
    image: "https://m.media-amazon.com/images/I/81CWohOVxBL._AC_SX679_.jpg",
    name: "FIREGAS Wall Mount Range Hood",
    category: ["homegoods"],
    link: "https://amzn.to/3Y9xdhb",
    price: "210.99"
  },
  {
    id: 47,
    image: "https://m.media-amazon.com/images/I/71O6uWeRVaL._AC_SX679_.jpg",
    name: "Stone 3D Wall Panels",
    category: ["homegoods"],
    link: "https://amzn.to/3y3rtLe",
    price: "163.99"
  },
  {
    id: 48,
    image: "https://m.media-amazon.com/images/I/814LyPmuhHL._AC_SX679_.jpg",
    name: "Kaytee Supreme Bird Food For Parakeets",
    category: ["wellness"],
    link: "https://amzn.to/4cGv2WR",
    price: "14.99"
  },
  {
    id: 49,
    image: "https://m.media-amazon.com/images/I/61YgDo+Xz1L._AC_SX679_.jpg",
    name: "Inspire Black Nitrile Gloves",
    category: ["accessories"],
    link: "https://amzn.to/3y56hEO",
    price: "16.99"
  },
  {
    id: 50,
    image: "https://m.media-amazon.com/images/I/81jpJW7bRgL._AC_SX679_.jpg",
    name: "Legging Organizer for Closet",
    category: ["homegoods"],
    link: "https://amzn.to/3SdiPkj",
    price: "15.99"
  },
  {
    id: 51,
    image: "https://m.media-amazon.com/images/I/71gzM-EqddL._AC_SX679_.jpg",
    name: "2 Pack Bra Organizer for Closet",
    category: ["homegoods"],
    link: "https://amzn.to/3YeTmuI",
    price: "17.99"
  },
  {
    id: 52,
    image: "https://m.media-amazon.com/images/I/810hDGC51dL._AC_SX679_.jpg",
    name: "2 Pack Closet-Organizers",
    category: ["homegoods"],
    link: "https://amzn.to/4cPK38G",
    price: "16.99"
  },
  {
    id: 53,
    image: "https://m.media-amazon.com/images/I/71GM1cHCrpL._AC_SX679_.jpg",
    name: "4 Pack 6-Tier Space Saving Pant Hangers",
    category: ["homegoods"],
    link: "https://amzn.to/4d8heEm",
    price: "32.71"
  },
  {
    id: 54,
    image: "https://m.media-amazon.com/images/I/71su3LgpaDL._AC_SX679_.jpg",
    name: "Legging Organizer for Closet",
    category: ["homegoods"],
    link: "https://amzn.to/46j72qj",
    price: "13.99"
  },
  {
    id: 55,
    image: "https://m.media-amazon.com/images/I/713zJSnKu1L._AC_SX679_.jpg",
    name: "HOUSE DAY Sturdy Plastic Space",
    category: ["homegoods"],
    link: "https://amzn.to/46gL33o",
    price: "14.99"
  },
  {
    id: 55,
    image: "https://m.media-amazon.com/images/I/81fzh8z1jvL._SX522_.jpg",
    name: "Laevo Mortar and Pestle Stone",
    category: ["homegoods"],
    link: "https://amzn.to/3YcFSQ4",
    price: "24.99"
  },
  {
    id: 56,
    image: "https://m.media-amazon.com/images/I/61nlY7QRaLL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Grain Mill Grinder",
    category: ["homegoods"],
    link: "https://amzn.to/3zRPTrM",
    price: "81.95"
  },
  {
    id: 57,
    image: "https://m.media-amazon.com/images/I/61ipJpmTq-L._AC_SX679_.jpg",
    name: "FIREGAS Wall Mount Range Hood",
    category: ["homegoods"],
    link: "https://amzn.to/3LAdRKO",
    price: "210.99"
  },
  {
    id: 58,
    image: "https://m.media-amazon.com/images/I/613tfju0AbL._AC_SX679_.jpg",
    name: "5 in 1 Designed for iPhone 13 Case",
    category: ["accessories"],
    link: "https://amzn.to/3LA8JX6",
    price: "9.99"
  },
  {
    id: 59,
    image: "https://m.media-amazon.com/images/I/6173OJftuKL._AC_SX679_.jpg",
    name: "Elegant 4-Piece electroplated Ceramic Bathroom Set",
    category: ["homegoods"],
    link: "https://amzn.to/3Lytd2f",
    price: "26.99"
  },
];

export default data;
