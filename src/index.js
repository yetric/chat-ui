import App from './components/App.svelte';

const app = new App({
    target: document.getElementById('chat'),
    props: {
        name: 'Chat UI',
    },
});

export default app;
