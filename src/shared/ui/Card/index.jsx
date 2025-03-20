const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;