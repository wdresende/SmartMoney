import {useState, useEffect} from 'react';

import {getBalance} from '../services/Balance';

const useBalance = () => {
  const [balance, setbalance] = useState();

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance();

      setbalance(value);
    }

    loadBalance();
  }, []);

  return [balance];
};

export default useBalance;
