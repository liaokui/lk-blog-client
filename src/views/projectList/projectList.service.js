import request from '@/utils/request'

export function getProjectList(params) {
  return request({
    url: '/api/project/find',
    method: 'get',
    params
  });
}