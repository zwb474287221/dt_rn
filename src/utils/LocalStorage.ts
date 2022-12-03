import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  set(key: string, data: any) {
    return AsyncStorage.setItem(key, JSON.stringify(data));
  };

  get(key: string) {
    return AsyncStorage.getItem(key).then(data => {
      return data && JSON.parse(data)
    });
  };

  delete(key: string) {
    return AsyncStorage.removeItem(key);
  };
}

export default new LocalStorage();
