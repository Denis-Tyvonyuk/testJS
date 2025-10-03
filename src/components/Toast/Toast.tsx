import { useEffect, useState } from "react";

type ToastData = {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
};

type ToastProps = {
  Toast: ToastData;
};

export default function Toast({
  Toast: { message, type = "info", duration = 4000 },
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`toast toast-${type} ${visible ? "show" : "hide"}`}>
      <div className="toast-content">
        <div>{message}</div>
      </div>
      <div className="close-toast-button">
        <button onClick={() => setVisible(false)}>X</button>
      </div>
    </div>
  );
}
