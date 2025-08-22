import { instantSearch } from "https://cdn.jsdelivr.net/npm/algoliasearch@5.35.0/dist/algoliasearch.umd.min.js";

export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World';
    block.textContent = '';
    block.appendChild(greeting);
}