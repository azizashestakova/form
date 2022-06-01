export const phoneMask = (phone) => {
  const x = phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  phone = '+7' + (!x[3] ? x[2] : '(' + x[2] + ') ') + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');

  return phone;
}