// Button.jsx
export const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  