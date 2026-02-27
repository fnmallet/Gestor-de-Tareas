import { cn } from '@/utils/cn';
import Link from 'next/link';
import { buttonClasses } from './Button';

type LinkStyledProps = {
  children: React.ReactNode
  href: string;
  className?: string;
  buttonStyle?: boolean;
}

const LinkStyled = ({ children, href, className, buttonStyle }: LinkStyledProps) => {
  return <Link
    href={href}
    className={cn({
      [buttonClasses]: buttonStyle,
      'hover:text-blue-500 visited:text-blue-800 hover:underline': !buttonStyle
    }, className)}
  >
    {children}
  </Link>;
};

export default LinkStyled;