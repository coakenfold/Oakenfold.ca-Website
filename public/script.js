---
permalink: script.js
---

document.getElementById('toggle-button-spa').addEventListener('click', function(event){
    if (this.checked) {
        this.setAttribute('class', 'toggle-button js-toggle-button toggle-button-clicked');
        return;
    }
    this.setAttribute('class', 'toggle-button js-toggle-button');
});
document.getElementById('toggle-button-performance').addEventListener('click', function(event){
    if (this.checked) {
        this.setAttribute('class', 'toggle-button js-toggle-button toggle-button-clicked');
        return;
    }
    this.setAttribute('class', 'toggle-button js-toggle-button');
});