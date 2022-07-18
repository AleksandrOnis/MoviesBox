export function getOfficialTrailer(trailers = []) {
  if (trailers.length < 1) return 0;

  const officialTrailers = trailers.find(trailer =>
    trailer.name.toLowerCase().includes('official trailer'),
  );

  if (officialTrailers) return officialTrailers;

  const officialVideo = trailers.find(trailer => trailer.name.toLowerCase().includes('official'));
  return officialVideo || trailers[0];
}
