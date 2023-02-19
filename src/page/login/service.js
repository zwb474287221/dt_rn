import request from '@/utils/request';

export function login(data) {
  return request.tokenPost('/login', data, false);
}

export function register(data) {
  return request.tokenPost('/register', data, false);
}
