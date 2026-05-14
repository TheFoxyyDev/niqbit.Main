export const toast = (shortmessage, message, type = "info", duration = 10000) => {
    window.dispatchEvent(new CustomEvent('toast', { detail: { shortmessage, message, type, duration } }));
};