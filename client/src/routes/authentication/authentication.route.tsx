export default function AuthPage() {
  return (
    <main>
      <section>
        <h1>No account yet?</h1>
        <form>
          <label>Name</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />

          <label>Confirm Password</label>
          <input type="password" />

          <button type="submit">Sign up</button>
        </form>
      </section>

      <section>
        <h1>Already have an account?</h1>
        <form>
          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />

          <button type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}
