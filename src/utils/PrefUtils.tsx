import AsyncStorage from '@react-native-async-storage/async-storage';
export const getItem = (key: string) => AsyncStorage.getItem(key);
export const setItem = (key: string, value: string) => AsyncStorage.setItem(key, value);
