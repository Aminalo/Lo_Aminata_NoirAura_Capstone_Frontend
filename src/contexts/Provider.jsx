import AuthProvider from "./authContext/authContext";

export default function Provider({ children }) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}