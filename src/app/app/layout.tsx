
import Nav from '@/components/Nav';

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>
    <Nav />
    <main className='flex flex-col w-full grow'>
      <div className='flex flex-col items-center justify-center grow'>
        {children}
      </div>
    </main>
  </>;
};

export default AppLayout;