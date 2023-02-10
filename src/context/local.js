import React, {useContext, createContext, useState, useEffect} from 'react';
import LocalStorage from '@/utils/LocalStorage';

export const LocalContext = createContext();

export const ZH_CN = 'zh-CN';

export const EN_US = 'en-US';

const lang = {
  'zh-CN': null,
  'en-US': null,
};

export const useLocal = () => {
  const local = useContext(LocalContext);
  let langMap;
  if (local.local === ZH_CN) {
    if (!lang[ZH_CN]) {
      lang[ZH_CN] = new Map(Object.entries(require('@/locales/zh-CN').default));
    }
    langMap = lang[ZH_CN];
  } else if (local.local === EN_US) {
    if (!lang[EN_US]) {
      lang[EN_US] = new Map(Object.entries(require('@/locales/en-US').default));
    }
    langMap = lang[EN_US];
  }
  const useGet = key => {
    return langMap?.has(key) ? langMap.get(key) : key;
  };

  const setLocal = type => {
    global.localStorage.set('local', type);
    local.setLocal(type);
  };

  return {
    local: local.local,
    setLocal: setLocal,
    useGet,
  };
};

export const LocalProvider = props => {
  const [local, setLocal] = useState('');
  useEffect(() => {
    (global.localStorage ?? LocalStorage)?.get('local').then(value => {
      setLocal(value || ZH_CN);
    });
  }, []);

  return (
    <LocalContext.Provider
      value={{
        local,
        setLocal,
      }}>
      {props.children}
    </LocalContext.Provider>
  );
};
