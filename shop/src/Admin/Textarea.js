// Textarea.jsx
export const Textarea = ({ className, ...props }) => {
    return (
      <textarea
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
        rows="4"
        {...props}
      />
    );
  };
  