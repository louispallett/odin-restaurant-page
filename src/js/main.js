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
    
    const headerRowArray = [];
    const headerColArray = [];
    
    for(let i = 0; i < 1; i++) {
        const headerRow = document.createElement("div");
        headerRow.classList.add("row");
        headerRowArray.push(headerRow);

        for(let j = 0; j < 2; j++) {
        const headerCol = document.createElement("div");
        headerCol.classList.add("col-1");
        headerCol.textContent = "Matcha";
        headerColArray.push(headerCol);
        headerRowArray[i].appendChild(headerColArray[j]);
        }

        console.log(headerRowArray);
        header.appendChild(headerRowArray[i]);
    }

    content.appendChild(header);
})();