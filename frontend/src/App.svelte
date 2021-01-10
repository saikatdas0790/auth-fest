<script lang="ts">
	import { Route } from "tinro";
	import Register from "./Register.svelte";
	import Login from "./Login.svelte";
</script>

<style>
	nav > ul > li > a {
		font-size: 1.5rem;
	}
</style>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/app">App</a></li>
		<li><a href="/login">Login</a></li>
		<li><a href="/register">Register</a></li>
	</ul>
</nav>

<Route path="/">
	<h1>Home Page</h1>
</Route>
<Route path="/app">
	<h1>Protected app</h1>
</Route>
<Route path="/login">
	<Login />
</Route>
<Route path="/register">
	<Register />
</Route>
