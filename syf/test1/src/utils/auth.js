import Cookies from 'js-cookie'

export function getThename() {
  return Cookies.get('Thename');
}
export function getadmin() {
  return Cookies.get('admin');
}

