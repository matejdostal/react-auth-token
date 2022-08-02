import { useAuth } from "./auth";

const Home = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
