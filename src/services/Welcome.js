import AsyncStorage from '@react-native-community/async-storage';

export const isInitialized = async () => {
  const openingbalance = await AsyncStorage.getItem('openingBalance');

  return openingbalance !== null && openingbalance === 'true';
};

export const setInitialized = async () => {
  await AsyncStorage.setItem('openingBalance', 'true');
};

export const cleanInitialized = async () => {
  await AsyncStorage.removeItem('openingBalance');
};
