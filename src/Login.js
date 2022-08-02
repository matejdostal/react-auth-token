import { useAuth } from "./auth";

const Login = () => {
  const { signIn } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("a", "b")}>Sign in</button>
    </div>
  );
};

export default Login;
