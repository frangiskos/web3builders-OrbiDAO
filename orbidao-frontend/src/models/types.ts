export type EndpointTypes = 'mainnet' | 'devnet' | 'localnet';

export type NotificationType = {
  type?: 'success' | 'info' | 'error';
  message: string;
  description?: string;
  txid?: string;
};

export type NotificationActionType = NotificationType & {
  onHide: () => void;
};
