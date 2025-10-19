import AuthProvider from "./authContext/authContext.jsx";

export default function Provider({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}