import { create } from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface UserSOLBalanceStore {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let newBalance = 0;
    try {
      newBalance = await connection.getBalance(publicKey, 'confirmed');
      newBalance = newBalance / LAMPORTS_PER_SOL;
    } catch (e) {
      console.error(`error getting balance: `, e);
    }
    console.log(`balance updated, `, newBalance);
    set(() => ({ balance: newBalance }));
  },
}));

export default useUserSOLBalanceStore;
