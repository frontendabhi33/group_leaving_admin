export default function layout({ children }) {
  return (
    <>
      <div>Sidebar</div>
      <div>
        Navbar
        {children}
        Footer
      </div>
    </>
  );
}
