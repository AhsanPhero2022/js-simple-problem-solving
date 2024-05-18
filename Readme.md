## Javascript simple problemd solving

# Problem-1. Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

- Answer 
```
const getBooksTitle = () => {
  const titles = books.map((book) => book.title);
  return titles;
};

* The books is an Array with those property.
```
# Problem-2. Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

- Answer 
```
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

```