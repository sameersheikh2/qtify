export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await fetch(`${BACKEND_ENPOINT}/albums/top`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const fetchNewAlbums = async () => {
  try {
    const res = await fetch(`${BACKEND_ENPOINT}/albums/new`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
