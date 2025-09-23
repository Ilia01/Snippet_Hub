import { useAlert } from "./useAlert";

export function useNotification() {
  const { showAlert } = useAlert();

  return {
    success: (message) => showAlert(message, 'success'),
    warning: (message) => showAlert(message, 'warning'),
    error: (message) => showAlert(message, 'error')
  };
}
