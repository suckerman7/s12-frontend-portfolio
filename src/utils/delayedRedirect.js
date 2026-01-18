import { toast } from "react-toastify";

export const delayedRedirect = (url, message, delay = 2000) => {
    toast.info(message);

    setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
    }, delay);
};