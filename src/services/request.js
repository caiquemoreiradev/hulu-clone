const API_KEY = 'c3577630d4a810712372eb1056709f36';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
    fetchMistery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=pt-BR`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=pt-BR`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=pt-BR`
}