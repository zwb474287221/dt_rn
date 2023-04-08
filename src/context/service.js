import request from '@/utils/request';

export function getInfo() {
  return request.Get('/user/info');
}

export function logout() {
  return request.Post('/logout');
}
