// Input.jsx
export const Input = ({ className, ...props }) => {
    return (
      <input
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
        {...props}
      />
    );
  };
  