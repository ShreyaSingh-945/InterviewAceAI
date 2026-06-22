export default function Button({
  children,
  className="",
  ...props
}){
  return(
    <button
      className={`
        px-6 py-3
        rounded-xl
        font-semibold
        transition
        hover:scale-105
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}