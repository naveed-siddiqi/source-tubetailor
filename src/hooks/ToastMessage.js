import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default function useToastHook() {
  const $toast = useToast();

  const showSuccessToast = (message) => {
    $toast.success(message, {
      duration: 5000, // Set the duration for the toast (in milliseconds)
      position: "top-right", // Adjust the position of the toast
    });
  };

  const showErrorToast = (message) => {
    $toast.error(message, {
      duration: 5000, // Set the duration for the toast (in milliseconds)
      position: "top-right", // Adjust the position of the toast
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
}
