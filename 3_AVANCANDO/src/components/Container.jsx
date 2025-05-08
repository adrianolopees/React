const Container = ({ children, className = "" }) => {
  return (
    <div className={`p-5 border border-black ${className}`}>{children}</div>
  );
};

export default Container;
