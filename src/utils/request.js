import axios from 'axios';
import config from '@/utils/config';
import {getToken} from './utils';

export const API_SERVER = config.API_SERVER;

const network = axios.create({
  baseURL: API_SERVER,
  // timeout: 5000,
});

network.interceptors.request.use(async configs => {
  // 填充token
  console.log(configs);
  return configs;
});

// respone拦截器
network.interceptors.response.use(
  async response => {
    // 请求返会统一处理
    console.log(response);
    return response.data;
  },
  error => {
    console.log(error);
    console.log(error.toString());
    if (error.response) {
      console.log(error.response);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      if (error.response.status === 502) {
        return Promise.reject({code: 502, msg: 'Server error, please try again later'});
      } else if (Array.isArray(error.response.data.message)) {
        return Promise.reject({
          msg: error.response.data.message.map(item => item.msg).join('\n'),
          code: error.response.data.code,
        });
      }
      return Promise.reject({
        code: error.response.data?.code ?? error.response.status,
        msg: error.response.data.message,
      });
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  }
);

export default class Network {
  /**
   * get请求带token，没有跳到登陆
   * @param url 地址
   * @param data 数据
   * @param type 请求类型 'get' | 'post' | 'put' | 'delete'
   * @param header 请求头
   * @returns {Promise<void>}
   */
  static async sendRequest(url, data, type, header) {
    return network[type](url, data, header);
  }

  /**
   * get请求带token，没有跳到登陆
   * @param url 地址
   * @param data 数据
   * @param needLogin 是否需要登陆
   * @returns {Promise<void>}
   */
  static async tokenGet(url, data, needLogin = true) {
    const token = await getToken(needLogin ?? true);
    if (!token && needLogin) {
      return Promise.reject();
    }
    return Network.sendRequest(
      url,
      {
        params: data,
        headers: {
          token,
        },
      },
      'get',
      null
    );
  }

  /**
   * Post请求带token，没有跳到登陆
   * @param url 地址
   * @param data 数据
   * @param needLogin
   * @returns {Promise<void>}
   */
  static async tokenPost(url, data, needLogin = true) {
    const token = await getToken(needLogin);
    if (!token&&needLogin) {
      return;
    }
    // mergeObject(data, {token});
    return Network.sendRequest(url, data, 'post', {
      headers: {token},
    });
  }

  /**
   * Post请求带token，没有跳到登陆
   * @param url 地址
   * @param data 数据
   * @returns {Promise<void>}
   */
  static async tokenDelete(url, data) {
    const token = await getToken(true);
    if (!token) {
      return;
    }
    return network
      .request({data, url, method: 'delete', headers: {token}})
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  /**
   * Post请求带token，没有跳到登陆
   * @param url 地址
   * @param data 数据
   * @returns {Promise<void>}
   */
  static async tokenPut(url, data) {
    const token = await getToken(true);
    if (!token) {
      return;
    }
    return Network.sendRequest(url, data, 'put', {
      headers: {token},
    });
  }
}
