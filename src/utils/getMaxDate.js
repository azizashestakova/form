export const getMaxDate = () => {
  const today = new Date();

  let dd = today.getDate();
  if (dd < 10) dd = `0${ dd }`;

  let mm = today.getMonth() + 1;
  if (mm < 10) mm = `0${ mm }`;

  let yy = today.getFullYear();
  if (yy < 10) yy = `0${ yy }`;

  return `${ yy }-${ mm }-${ dd }`
}