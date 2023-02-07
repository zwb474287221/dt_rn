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
