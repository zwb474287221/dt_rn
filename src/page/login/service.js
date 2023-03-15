import request from '@/utils/request';

export function login(data) {
  return request.Post('/login', data);
}

export function register(data) {
  return request.Post('/register', data);
}

export function reset(data) {
  return request.Post('/account/reset', data);
}
