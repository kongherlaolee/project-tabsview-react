import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

export const fetchNearbyPlaces = async (latitude, longitude) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
};