import { useAuth } from "./auth";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  const { token } = useAuth();
  return (
    <>
      {token && <Home />}
      {!token && <Login />}
    </>
  );
}
