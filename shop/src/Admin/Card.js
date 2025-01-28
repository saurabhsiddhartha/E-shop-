// Card.jsx
export const Card = ({ children, className }) => {
    return (
      <div
        className={`rounded-2xl shadow-md bg-white p-4 ${className || ""}`}
      >
        {children}
      </div>
    );
  };
  
  export const CardContent = ({ children, className }) => {
    return <div className={`space-y-4 ${className || ""}`}>{children}</div>;
  };
  