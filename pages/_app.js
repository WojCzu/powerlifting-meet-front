import { AuthProvider } from "@/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/variables.css";
import "@/styles/toastify.css";
import "@/styles/globals.css";
import "@/styles/buttons.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer theme='dark' position='bottom-right' />
    </AuthProvider>
  );
}
