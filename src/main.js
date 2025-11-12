console.log('hello');
console.log('Vite + Express is working!');

const api = await fetch('/api');
const data = await api.text();
console.log(data);
