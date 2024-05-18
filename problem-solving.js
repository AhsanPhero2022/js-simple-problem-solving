
// Answer one
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },

  {
    title: "George",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const getBooksTitle = () => {
  const titles = books.map((book) => book.title);
  return titles;
};

// Answer two

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2005 },
  { make: "Chevrolet", model: "Malibu", year: 2020 },
  { make: "BMW", model: "X5", year: 2018 },
];

const getManufacturedYear = () => {
  const result = cars.sort((a, b) => a.year - b.year);
  return result;
};


// Answer three
const isLeapYear = (value) => {
  if (value % 4 !== 0) {
    return false;
  } else if (value % 100 !== 0) {
    return true;
  } else if (value % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};

// Answer foure

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500];


const  findMaxValue= () => {
    if (numbers.length === 0) {
        throw new Error('Array is empty');
    }
    const result = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
    return result;
}

