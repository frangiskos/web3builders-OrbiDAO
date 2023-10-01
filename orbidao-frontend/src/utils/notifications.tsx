import { NotificationType } from '@/models/types';
import useNotificationStore from '../stores/useNotificationStore';

export function notify(newNotification: NotificationType) {
  const { notifications, setNotificationStore } = useNotificationStore.getState();

  setNotificationStore((state) => ({
    notifications: [...state.notifications, { type: 'success', ...newNotification }],
  }));
}
