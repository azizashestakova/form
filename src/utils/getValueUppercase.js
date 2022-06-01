export const getValueUppercase = (value) => {
  return value ? value.trim().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ') : 'ret'
};