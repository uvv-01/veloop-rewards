// Lightweight custom toast notification utility matching VELoop production
let toastContainer = null;

const createToastContainer = () => {
  if (toastContainer) return toastContainer;
  toastContainer = document.createElement('div');
  toastContainer.id = 'veloop-toast-container';
  toastContainer.style.cssText = `
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    pointer-events: none;
  `;
  document.body.appendChild(toastContainer);
  return toastContainer;
};

export const showToast = (message, type = 'info', duration = 3500) => {
  const container = createToastContainer();
  const toast = document.createElement('div');
  
  const bg = type === 'success' ? 'linear-gradient(135deg, #059669, #10b981)' 
           : type === 'error' ? 'linear-gradient(135deg, #dc2626, #ef4444)'
           : 'linear-gradient(135deg, #1e293b, #334155)';
  
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

  toast.style.cssText = `
    background: ${bg};
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    gap: 10px;
    pointer-events: auto;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.25s ease-out;
    font-family: 'Nunito', sans-serif;
  `;

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  }, duration);
};

export const showSuccess = (message) => showToast(message, 'success');
export const showError = (message) => showToast(message, 'error');
