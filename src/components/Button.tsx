import { cn } from '@/utils/cn';

type Button = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({ children, type, className }: Button) => {
  return <button 
    type={type} 
    className={cn('transition-colors duration-300 bg-blue-500 hover:bg-white hover:outline hover:outline-blue-500 hover:text-blue-500 cursor-pointer py-1 px-4 rounded-md text-white hover:shadow-md hover:shadow-blue-200', className)}
  >
    {children}
  </button>;
};

export default Button;