<script context="module">
  export const load = async ({ session }) => {
    if (!session.user.exists) return {};
    return {
      status: 301,
      redirect: "/",
    };
  };
</script>

<script>
  import { auth } from "$lib/firebase";
  import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { request } from "$lib/fetch.js";
  import { goto } from "$app/navigation";

  let email, password;

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const googleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const idToken = userCredential._tokenResponse.idToken;
      
      await request("/api/auth", "POST", { idToken });
      window.location.replace("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const login = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = userCredential._tokenResponse.idToken;
    await request("/api/auth", "POST", { idToken });
    window.location.replace("/");
  };
</script>

<div>
  <h1>Login</h1>
  <p>Email</p>
  <input type="text" bind:value={email} />
  <p>Password</p>
  <input type="password" bind:value={password} />
  <button on:click={login}>Continue</button>
  <button on:click={googleLogin}>Signin with Google</button>
</div>
