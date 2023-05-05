/* eslint-disable prettier/prettier */
const api_key = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

const requests = {
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${api_key}&language=en`,
  fetchTrendingMovies: `${baseUrl}/trending/movie/day?api_key=${api_key}&language=en`,
  fetchTrendingTv: `${baseUrl}/trending/tv/day?api_key=${api_key}&language=en`,
};

export default requests;
