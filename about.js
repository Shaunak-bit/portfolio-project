// This would be your API service file for making backend calls
// For a full-stack app, you would implement these functions

const API_BASE_URL = 'http://localhost:3001/api';

export const getAboutContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/about`);
    if (!response.ok) throw new Error('Failed to fetch content');
    return await response.text();
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
};

export const saveAboutContent = async (content) => {
  try {
    const response = await fetch(`${API_BASE_URL}/about`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    if (!response.ok) throw new Error('Failed to save content');
    return true;
  } catch (error) {
    console.error('Error saving about content:', error);
    return false;
  }
};

// For Node.js/Express backend, you would need to set up these API endpoints