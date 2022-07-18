export const titlesGenres = (genres = []) => {
  const arrayGenres = genres.map((genre, index) => {
    if (index === 0) return genre.name;
    if (index < 3) return `, ${genre.name}`;
    if (index === 3) return `, etc`;
    return null;
  });
  return arrayGenres.join('');
};

export const getGenresMovie =
  (genresList = []) =>
  arrayGenres =>
    genresList.filter(genre => arrayGenres.includes(genre.id));
