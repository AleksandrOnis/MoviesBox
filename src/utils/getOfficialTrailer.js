import { toast } from 'react-toastify';

export function getOfficialTrailer(trailers = []) {
  if (trailers.length < 1) {
    toast.error('Sorry, trailer not found');
    return;
  }

  const officialTrailers = trailers.find(trailer =>
    trailer.name.toLowerCase().includes('official trailer'),
  );

  if (officialTrailers) return officialTrailers;

  const officialVideo = trailers.find(trailer => trailer.name.toLowerCase().includes('official'));
  return officialVideo || trailers[0];
}
