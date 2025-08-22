export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World:' + process.env.ALGOLIA_API_KEY;;
    block.textContent = '';
    block.appendChild(greeting);
}