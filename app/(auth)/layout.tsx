interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="flex flex-row justify-center pt-40">{children}</div>;
};

export default AuthLayout;
