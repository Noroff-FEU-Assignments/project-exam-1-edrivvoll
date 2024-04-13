export function displayMessage(container, message, messageType) {
    const element = document.querySelector(container);
    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
    
}