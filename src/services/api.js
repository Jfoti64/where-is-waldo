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
    console.error('Failed to fetch character:', error);
    throw error;
  }
};

export const fetchCharacterCount = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/characters/count`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch character count:', error);
    throw error;
  }
};

export const submitScore = async (user_name, time) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_name, time }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Failed to submit score:', error);
    throw error;
  }
};

export const fetchTopScores = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/scores`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch top scores:', error);
    throw error;
  }
};
