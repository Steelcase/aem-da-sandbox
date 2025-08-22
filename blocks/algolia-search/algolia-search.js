import '../../scripts/algolia/algoliasearch.js';
import '../../scripts/algolia/instantsearch.js';

export default function decorate(block) {
    const greeting = document.createElement('div');
    greeting.textContent = 'Hello World';
    block.textContent = '';
    block.appendChild(greeting);
}