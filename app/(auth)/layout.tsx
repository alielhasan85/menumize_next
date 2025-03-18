// Define a functional component named Layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  // Return a div element that serves as a container
  return (
    <div
      // Apply multiple Tailwind CSS classes to style the container
      // 'flex': Use Flexbox layout
      // 'min-h-svh': Set minimum height to a specific value (assuming a typo for min-h-screen)
      // 'flex-col': Arrange children in a column
      // 'items-center': Center children horizontally
      // 'justify-center': Center children vertically
      // 'bg-white': Set background color to white
      // 'p-6': Apply padding of 6 on small screens
      // 'md:p-10': Apply padding of 10 on medium and larger screens
      className="flex min-h-screen flex-col items-center justify-center bg-white p-6 md:p-10"
    >
      {/* Render children elements within this container */}
      {children}
    </div>
  );
};
export default Layout;
