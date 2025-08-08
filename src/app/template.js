export default function Template({ children }) {
  return (
    <div>
      <h1>Template Component</h1>
      <p>This is a template component that can be reused.</p>
      {children}
      <footer>© 2023 My Company</footer>
    </div>
  );
} 