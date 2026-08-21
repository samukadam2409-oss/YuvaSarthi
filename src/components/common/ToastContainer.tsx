import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let bgColor = 'bg-white text-on-surface border-outline-variant';
        let icon = <Info className="w-5 h-5 text-primary" />;

        if (toast.type === 'success') {
          bgColor = 'bg-white text-on-surface border-tertiary-fixed';
          icon = <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
        } else if (toast.type === 'error') {
          bgColor = 'bg-white text-on-surface border-error';
          icon = <AlertCircle className="w-5 h-5 text-error" />;
        } else if (toast.type === 'warning') {
          bgColor = 'bg-white text-on-surface border-amber-400';
          icon = <AlertTriangle className="w-5 h-5 text-amber-500" />;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg transition-all duration-200 transform translate-y-0 opacity-100 ${bgColor}`}
          >
            <div className="shrink-0 mt-0.5">{icon}</div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold leading-tight">{toast.title}</h4>
              <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-on-surface-variant hover:text-on-surface p-1 -mr-1 -mt-1 rounded-lg hover:bg-surface-container transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
