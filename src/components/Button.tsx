type Button = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const buttonClasses = 'transition-colors duration-300 bg-blue-500 hover:bg-white hover:outline hover:outline-blue-500 hover:text-blue-500 cursor-pointer py-2 px-4 rounded-xl text-white hover:shadow-md hover:shadow-blue-200 text-center';

export const buttonClassesRedOutline = 'transition-colors duration-300 bg-red-500 hover:bg-white hover:outline hover:outline-red-500 hover:text-red-500 cursor-pointer py-2 px-4 rounded-xl text-white hover:shadow-md hover:shadow-red-200 text-center'; 

const Button = ({ children, type, className, isLoading, disabled }: Button) => {
  return <button 
    type={type} 
    disabled={disabled}
    className={className}
  >
    {isLoading ? <span
      className="inline-block h-full aspect-square animate-spin rounded-full border-2  hover:border-blue-500 border-t-transparent"
    ></span> : children}
  </button>;
};

export default Button;