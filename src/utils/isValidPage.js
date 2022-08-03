export const isValidPage = (page, totalPages) =>
  isNaN(page) || page < 1 || page > totalPages ? false : true;
