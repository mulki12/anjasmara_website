import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'luthfy'
	}
});

export default app;