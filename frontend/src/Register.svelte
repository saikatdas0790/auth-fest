<script>
  let username = "";
  let password = "";

  const submitHandler = async () => {
    const fetchResponse = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };
</script>

<h1>Register</h1>

<form on:submit|preventDefault={submitHandler}>
  <label>Username<input type="text" bind:value={username} /></label>
  <label>Password<input type="password" bind:value={password} /></label>
  <button>Sign up</button>
</form>
