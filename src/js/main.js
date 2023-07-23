// Import our custom CSS
import { main } from '@popperjs/core';
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const createPage = (() => {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.classList.add("container", "text-center");
    header.setAttribute("id", "header");
   
    for (let i = 0; i < 2; i++) { // Change loop condition to 2 for two rows
        const headerRow = document.createElement("div");
        headerRow.classList.add("row");

        for (let j = 0; j < 2; j++) {
            const headerCol = document.createElement("div");
            headerCol.classList.add("col");
            headerCol.textContent = "Matcha";
            headerRow.appendChild(headerCol);

        }
        header.appendChild(headerRow);
    }

    content.appendChild(header);
})();