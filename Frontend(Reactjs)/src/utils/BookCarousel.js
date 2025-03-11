import book4 from "../assets/books/4.jpg"
import book5 from "../assets/books/5.jpg"
import book6 from "../assets/books/6.jpg"
import book7 from "../assets/books/7.jpg"
import book8 from "../assets/books/8.jpg"
import book9 from "../assets/books/9.jpg"
import book10 from "../assets/books/10.jpg"
import book11 from "../assets/books/11.jpg"
import book12 from "../assets/books/12.jpg"

const books = [
    book4,book5,book6,book7,book8,book9,book10,book11,book12
];
export const randomCarousel = books.sort(()=> Math.random() - 0.5).concat(books.sort(()=> Math.random() - 0.5)).concat(books.sort(()=> Math.random() - 0.5));