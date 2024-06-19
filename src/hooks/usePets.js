import dog1 from "../assets/dog1.jpg";
import dog2 from "../assets/dog2.jpg";
import dog3 from "../assets/dog3.jpg";
import dog4 from "../assets/dog4.jpg";
import dog5 from "../assets/dog5.jpg";
import dog6 from "../assets/dog6.jpg";
import cat from "../assets/cat.jpg";

export function usePets() {
  // Replace with fetching of real data from API
  const pets = [
    { type: "Dogs", img: dog1, name: "Labrador Retriever", age: 3 },
    { type: "Dogs", img: dog2, name: "Pembroke Welsh Corgi", age: 2.5 },
    { type: "Dogs", img: dog3, name: "Poodle", age: 5 },
    { type: "Dogs", img: dog4, name: "Labrador Black", age: 3 },
    { type: "Dogs", img: dog5, name: "America Eskimo", age: 2.5 },
    { type: "Dogs", img: dog6, name: "Shih Tzu", age: 5 },
    { type: "Cats", img: cat, name: "Siamese", age: 5 },
  ];

  return pets;
}
