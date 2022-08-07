import ReactPlayer from 'react-player';

export function getOfficialTrailer(trailers = []) {
  if (trailers.length < 1) return null;

  const officialTrailers = trailers.find(trailer =>
    trailer.name.toLowerCase().includes('official trailer'),
  );

  if (
    officialTrailers &&
    ReactPlayer.canPlay(`https://www.youtube.com/watch?v=${officialTrailers.key}`)
  )
    return officialTrailers;

  const officialVideo = trailers.find(trailer => trailer.name.toLowerCase().includes('official'));
  if (officialVideo && ReactPlayer.canPlay(`https://www.youtube.com/watch?v=${officialVideo.key}`))
    return officialVideo;

  return trailers.find(trailer =>
    ReactPlayer.canPlay(`https://www.youtube.com/watch?v=${trailer.key}`),
  );
}
