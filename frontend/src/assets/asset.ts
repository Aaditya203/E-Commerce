import logo from "./logo.png"
import profileIcon  from "./profileIcon.png"
import user from "./user.png"
import searchIcon from "./searchIcon.png"
import search from "./search.png"
import cart from "./cart.png"
import cartIcon from "./shopping-cart.png"
import logo1 from "./logo1.png"
import menuIcon from "./menuNew.png"
import back from "./back.png"
import home from "./home.png"
import infoIcon from "./info.png"
import mailIcon from "./mail.png"
import models from "./models.png"
import model2 from "./models2.png"
import model3 from "./models3.png"
import rightArrow from "./right-arrow.png"
import parcel from "./parcel.png"
import secure from "./secure.png"
import premium from "./premium.png"
import p_img1 from "./p_img1.jpg"
import p_img2 from "./p_img2.jpg"
import p_img3 from "./p_img3.jpg"
import p_img4 from "./p_img4.jfif"
import p_img5 from "./p_img5.jfif"
import p_img6 from "./p_img6.jfif"
import p_img7 from "./p_img7.jfif"
import p_img8 from "./p_img8.jfif"
import p_img9 from "./p_img9.jfif"
import p_img10 from "./p_img10.jfif"

export {
    logo,
    profileIcon,
    searchIcon,
    search,
    user,
    cart,
    cartIcon,
    logo1,
    menuIcon,
    back,
    home,
    infoIcon,
    mailIcon,
    models,
    model2,
    model3,
    rightArrow,
    premium,
    secure,
    parcel
}

export const products = [
  {
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    description: "Soft and breathable cotton top perfect for casual wear.",
    price: 999,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },

  {
    _id: "aaaab",
    name: "Men Oversized T-Shirt",
    description: "Premium oversized t-shirt with relaxed fit.",
    price: 1199,
    image: [p_img2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345449,
    bestseller: true,
  },

  {
    _id: "aaaac",
    name: "Women Denim Jacket",
    description: "Classic denim jacket for everyday styling.",
    price: 2499,
    image: [p_img3],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 1716634345450,
    bestseller: false,
  },

  {
    _id: "aaaad",
    name: "Men Slim Fit Jeans",
    description: "Comfortable stretch denim with slim fit design.",
    price: 1799,
    image: [p_img4],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36"],
    date: 1716634345451,
    bestseller: true,
  },

  {
    _id: "aaaae",
    name: "Women Floral Dress",
    description: "Elegant floral dress suitable for all occasions.",
    price: 1999,
    image: [p_img5],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 1716634345452,
    bestseller: true,
  },

  {
    _id: "aaaaf",
    name: "Men Polo T-Shirt",
    description: "Stylish polo t-shirt with premium cotton fabric.",
    price: 1299,
    image: [p_img6],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345453,
    bestseller: false,
  },

  {
    _id: "aaaag",
    name: "Women Cargo Pants",
    description: "Trendy cargo pants with multiple utility pockets.",
    price: 1899,
    image: [p_img7],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["28", "30", "32"],
    date: 1716634345454,
    bestseller: false,
  },

  {
    _id: "aaaah",
    name: "Men Hooded Sweatshirt",
    description: "Warm fleece hoodie for winter comfort.",
    price: 2299,
    image: [p_img8],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: 1716634345455,
    bestseller: true,
  },

  {
    _id: "aaaai",
    name: "Women Casual Shirt",
    description: "Lightweight casual shirt with modern fit.",
    price: 1499,
    image: [p_img9],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345456,
    bestseller: false,
  },

  {
    _id: "aaaaj",
    name: "Men Running Shoes",
    description: "Lightweight running shoes with cushioned sole.",
    price: 2999,
    image: [p_img10],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["7", "8", "9", "10"],
    date: 1716634345457,
    bestseller: true,
  },
];