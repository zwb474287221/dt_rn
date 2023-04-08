import request from '@/utils/request';

export function getInviteCount() {
  return request.Get('/user/invite/count');
}
