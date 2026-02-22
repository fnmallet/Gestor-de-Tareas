type AuthLayoutProps = {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <>
    <main className="flex justify-center pt-8">
      {children}
    </main>
  </>;
};

export default AuthLayout;