'use client';
import { useTransition } from 'react';
import { signOutAction } from '@/features/auth/logout/actions';
import { toast } from 'react-toastify';
import Button, { buttonClassesRedOutline } from '@/components/Button';
import { cn } from '@/utils/cn';

type LogOutButtonProps = {
  className?: string;
}

const LogOutButton = ({ className }: LogOutButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = async () => {
    startTransition(async () => {
      const response = await signOutAction();
  
      if(response.success)
        toast('Ha ocurrido un error', {type: 'error'});
    });
  };
      
  return <form action={onSubmit} className={className}>
    <Button isLoading={isPending} className={cn(buttonClassesRedOutline, 'w-full')}>Cerrar sesión</Button>
  </form>;
};

export default LogOutButton;