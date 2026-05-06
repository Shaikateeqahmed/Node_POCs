import { useEffect, useState } from "react";
import {
  getCurrentUser,
  fetchUserAttributes,
  signInWithRedirect,
  signOut,
} from "aws-amplify/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const attributes = await fetchUserAttributes();

      setUser({
        username: currentUser.username,
        email: attributes.email,
      });
    } catch {
      setUser(null);
    }
  };

  const handleSignIn = async () => {
    await signInWithRedirect(); // redirects to Cognito Hosted UI
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>

          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}

export default App;