import { useState } from 'react';
import { Alert } from '../components/ui/Alert';
import { AlertContext } from './AlertContextDef';

export function AlertProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

  const autoDismissAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const showAlert = (message, variant = 'success') => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, message, variant }]);

    setTimeout(() => autoDismissAlert(id), 5000);
  };

  const hideAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert, hideAlert }}>
      {children}
      {/* Alert Container */}
      {alerts.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {alerts.map(alert => (
            <Alert
              key={alert.id}
              variant={alert.variant}
              onClose={() => hideAlert(alert.id)}
            >
              {alert.message}
            </Alert>
          ))}
        </div>
      )}
    </AlertContext.Provider>
  );
}

