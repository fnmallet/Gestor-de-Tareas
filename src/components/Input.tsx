import { cn } from '@/utils/cn';

type InputProps = {
  type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  expanded?: boolean;
  className?: string;
  id?: string;
};

const Input = ({className, ...props}: InputProps) => {
  return <input 
    className={cn('outline py-1 px-4 rounded-md focus:outline-2 focus:outline-blue-500', className)}
    {...props}
  />;
};

export default Input;