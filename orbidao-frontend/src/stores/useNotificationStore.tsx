import { create } from 'zustand';
import { NotificationType } from '@/models/types';

interface NotificationStore {
  notifications: NotificationType[];
  setNotificationStore: (
    fn: (state: { notifications: NotificationType[] }) => { notifications: NotificationType[] }
  ) => void;
}

const useNotificationStore = create<NotificationStore>()((set) => ({
  notifications: [],
  setNotificationStore: (fn) => set((state) => fn(state)),
}));

export default useNotificationStore;
