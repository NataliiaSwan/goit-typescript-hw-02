declare module "react-hot-toast" {
  import * as React from "react";

  interface ToastOptions {
    id?: string;
    icon?: React.ReactNode;
    duration?: number;
    style?: React.CSSProperties;
    className?: string;
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
  }

  interface ToasterProps {
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
    reverseOrder?: boolean;
    gutter?: number;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
  }

  export const Toaster: React.FC<ToasterProps>;

  interface Toast {
    (message: string, options?: ToastOptions): string;
    success(message: string, options?: ToastOptions): string;
    error(message: string, options?: ToastOptions): string;
    loading(message: string, options?: ToastOptions): string;
    dismiss(id?: string): void;
    remove(id?: string): void;
  }

  export const toast: Toast;
}
