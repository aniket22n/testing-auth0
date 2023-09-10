import "./style/App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const userDetails = (
    <>
      <img
        alt="user Image"
        src={user?.picture}
        height={"200px"}
        width={"200px"}
      />
      <h1>Welcome {user?.name}</h1>
    </>
  );

  return (
    <>
      {isAuthenticated ? userDetails : <h1>Please login</h1>}
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      )}
    </>
  );
}

export default App;
