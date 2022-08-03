export const fetchTracks = async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallenge/master/react%20native/simple%20audio%20player/data/manifest.json',
    );
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
