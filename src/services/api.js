// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCharacterByName = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/characters/${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch characters:', error);
    throw error;
  }
};
