import LocalStorage from '@/utils/LocalStorage';
import {reset} from '@/utils/Navigation';

//获取token,没有跳到登陆
export async function getToken(toLogin = true) {
  if (!toLogin) {
    return;
  }
  const token = global.token ?? (await (global.localStorage ?? LocalStorage).get('token'));
  if (!token) {
    // 需要token 但没有就去登陆
    reset('Login', 0);
    return null;
  }
  return token;
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}