import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";


export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" }
]

export const socialLinks = [
    { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
    { id: 2, href: "hhttps://x.com/?lang=en", icon: "fab fa-twitter" },
    { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
]

export const services = [
    { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." },
    { id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." }
]


export const tours = [
    { id: 1, images: tour1, date: "august 26th, 2025", title: "Tibet Adventure", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "china", days: "6 days", price: "from $2100" },
    { id: 2, images: tour2, date: "october 1th, 2025", title: "best of java", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "indonesia", days: "11 days", price: "from $1400" },
    { id: 3, images: tour3, date: "september 15th, 2025", title: "amazing bali", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "bali", days: "8 days", price: "from $1800" },
    { id: 4, images: tour4, date: "december 11th, 2025", title: "kenya safari", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "kenya", days: "10 days", price: "from $2500" },
    { id: 5, images: tour5, date: "August 14th, 2026", title: "Southern African safari", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "Africa", days: "10 days", price: "from $3500" },
    { id: 6, images: tour6, date: "March 10th, 2027", title: "Indian Royal Visit", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: "India", days: "7 days", price: "from $1000" }

];