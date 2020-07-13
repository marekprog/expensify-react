//object destructuring

// console.log("destructirung");

// const person = {
//   name: "Marek",
//   age: 36,
//   location: {
//     city: "Oslo",
//     temp: 16,
//   },
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

const book = {
  title: "my life",
  author: "okpo",
  publisher: {
    //name: "wtf",
  },
};

const { name: publisherName = "Self published" } = book.publisher;

console.log(publisherName);
//array ddestructuring

const address = ["christoffer hellums vei", "oslo", "Norway", "0951"];
const [street, city, country, zip] = address;
console.log(`You are in ${city}, ${country}`);
