import { useState, useCallback } from 'react';

interface ToastOptions {
  type: 'error' | 'success' | 'warning' | 'info';
  title: string;
  message: string;
  autoClose?: boolean;
  duration?: number;
}

interface ToastState extends ToastOptions {
  id: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = useCallback((options: ToastOptions) => {
    const id = Date.now() + Math.random();
    const newToast: ToastState = {
      id,
      ...options,
      autoClose: options.autoClose !== false, // Default to true
      duration: options.duration || 5000,
    };

    setToasts(prev => [...prev, newToast]);
  }, []);

  const hideToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showError = useCallback((title: string, message: string) => {
    showToast({ type: 'error', title, message });
  }, [showToast]);

  const showSuccess = useCallback((title: string, message: string) => {
    showToast({ type: 'success', title, message });
  }, [showToast]);

  const showWarning = useCallback((title: string, message: string) => {
    showToast({ type: 'warning', title, message });
  }, [showToast]);

  const showInfo = useCallback((title: string, message: string) => {
    showToast({ type: 'info', title, message });
  }, [showToast]);

  return {
    toasts,
    showToast,
    hideToast,
    showError,
    showSuccess,
    showWarning,
    showInfo,
  };
};
