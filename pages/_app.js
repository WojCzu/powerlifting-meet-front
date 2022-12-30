import { AuthProvider } from "@/hooks/useAuth";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/buttons.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
