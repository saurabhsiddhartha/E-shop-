// Select.jsx
export const Select = ({ children, className }) => {
    return <div className={`relative ${className}`}>{children}</div>;
  };
  
  export const SelectTrigger = ({ children, className, ...props }) => {
    return (
      <button
        className={`w-full px-3 py-2 border rounded-lg bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export const SelectContent = ({ children, className }) => {
    return (
      <div
        className={`absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg ${className}`}
      >
        {children}
      </div>
    );
  };
  
  export const SelectItem = ({ children, className, ...props }) => {
    return (
      <div
        className={`px-3 py-2 hover:bg-blue-100 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };

  