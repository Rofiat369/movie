export default function getLikedMovies() {
    if (localStorage.likedMovies) {
      return JSON.parse(localStorage.likedMovies)
    }
    return [];
}