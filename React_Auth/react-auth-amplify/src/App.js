import { useEffect, useState, useRef } from "react";
import {
  getCurrentUser,
  fetchUserAttributes,
  signInWithRedirect,
  signOut,
} from "aws-amplify/auth";
import { fetchMessage } from "./services/api";

function App() {
  const [user, setUser] = useState(null);
  // Use a ref to track if we've already initialized
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      checkUser();
      // hitYourBackendApi(); // Call your backend here
      initialized.current = true;
    }
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      const attributes = await fetchUserAttributes();

      setUser({
        username: currentUser.username,
        email: attributes.email,
        name: attributes.name,
        role: attributes['custom:userRole']
      });
     await fetchMessage(); // Call API after sign-in
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
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
}

export default App;