const apiKey = process.env.ALGOLIA_API_KEY;

export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World:' + apiKey;
    block.textContent = '';
    block.appendChild(greeting);
}