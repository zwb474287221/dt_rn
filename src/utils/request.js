import axios from 'axios';
import config from '@/utils/config';
import { Text } from 'react-native';
import {getToken} from './utils';

export const API_SERVER = config.API_SERVER;

const network = axios.create({
  baseURL: API_SERVER,
  withCredentials: true,  // send cookies when cross-domain requests
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
    const res = response.data;
    console.log(res);
    if (res && res.code !== 0 && res.code !== 101) {
      if (res.code === 2) {
        message.error({
          content: (colors) => (
            <>
              <Text style={{color:colors.text}}>该邮箱已被注册</Text>
              <Text style={{color:colors.text}}>This email has been registered</Text>
            </>
          ),
        });
      } else if (res.code === 102) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>您的账号密码有误</Text>
              <Text style={{color:colors.text}}>Your account or password is incorrect</Text>
            </>
          ),
        });
      } else if (res.code === 103) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>持仓监控数量超出限制，需要升级VIP</Text>
              <Text style={{color:colors.text}}>Token Monitor is exceed limit</Text>
            </>
          ),
        });
      } else if (res.code === 104) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>钱包监控数量超出限制，需要升级VIP</Text>
              <Text style={{color:colors.text}}>Wallet Monitor is exceed limit</Text>
            </>
          ),
        });
      } else if (res.code === 105) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>币价监控数量超出限制，需要升级VIP</Text>
              <Text style={{color:colors.text}}>Pool Price Monitor is exceed limit</Text>
            </>
          ),
        });
      } else if (res.code === 106) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>设置的阈值错误</Text>
              <Text style={{color:colors.text}}>Threshold error</Text>
            </>
          ),
        });
      } else if (res.code === 107) {
        // message.error({
        //   content: '邮箱未完成验证，请前往注册邮箱进行验证后登录', // Threshold error
        // })
        return res;
      } else if (res.code === 108) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>VIP级别不够</Text>
              <Text style={{color:colors.text}}>Need High Level VIP</Text>
            </>
          ),
        });
      } else if (res.code === 109) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>邮箱发送失败!请联系客服</Text>
              <Text style={{color:colors.text}}>Send email error</Text>
            </>
          ),
        });
      } else if (res.code === 110) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>邮箱发送太频繁了，请2分钟后再试</Text>
              <Text style={{color:colors.text}}>Send email too often,please retry 2 minutes later</Text>
            </>
          ),
        });
      } else if (res.code === 1) {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>服务器开小差了，请稍后再试</Text>
              <Text style={{color:colors.text}}>Sever is busy, Please retry later</Text>
            </>
          ),
        });
      } else {
        message.error({
          content: (colors)=>(
            <>
              <Text style={{color:colors.text}}>{res.message_cn}</Text>
              <Text style={{color:colors.text}}>{res.message_en}</Text>
            </>
          ),
        });
      }
      // return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res;
    }
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

  static async Post(url, data) {
    return Network.sendRequest(url, data, 'post');
  }

  static async Get(url, data) {
    return Network.sendRequest(url, data, 'get');
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
