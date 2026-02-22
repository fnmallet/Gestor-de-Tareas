import { cn } from '@/utils/cn';
import React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const styles = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
};

const Heading = ({ children, level, className }: HeadingProps) => {
  const Tag = `h${level}` as const;
  return <Tag className={cn('text-center font-bold', styles[level], className)}>{children}</Tag>;
};

export default Heading;