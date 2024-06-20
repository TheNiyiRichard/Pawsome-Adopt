import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePets(type) {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`https://pawsomeadoptbackend20240619101131.azurewebsites.net/api/pets/category/${type}`, {
          headers: { 'accept': 'text/plain' }
        });
        const petData = response.data.map(pet => ({
          type: pet.category,
          img: pet.imageUrl,
          name: pet.name,
          age: pet.age,
          status: pet.status
        }));
        setPets(petData);
      } catch (error) {
        console.error("Error fetching pets data:", error);
      }
    };

    fetchPets();
  }, [type]);

  return pets;
}
