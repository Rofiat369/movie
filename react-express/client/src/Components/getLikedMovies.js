function getLikedMovies() {
    if (localStorage.likedMovies) {
      return JSON.parse(localStorage.likedMovies)
    }
    return [];
}

export default getLikedMovies;