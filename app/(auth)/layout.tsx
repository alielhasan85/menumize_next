// app/(auth)/layout.tsx
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-6 md:p-10 bg-accent-gradient"
    >
      {children}
    </div>
  );
};

export default Layout;
