// Import our custom CSS
import { main } from '@popperjs/core';
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// import Icon from "../icon.svg";

// const iconContainer = document.getElementById("icon");
// const icon = new Image();
// icon.src = Icon;

// iconContainer.appendChild(icon); 

// const createPage = (() => {
//     const content = document.getElementById("content");

//     const header = document.createElement("div");
//     header.classList.add("container", "text-center");
//     header.setAttribute("id", "header");
   
//     for (let i = 0; i < 2; i++) { // Change loop condition to 2 for two rows
//         const headerRow = document.createElement("div");
//         headerRow.classList.add("row");

//         for (let j = 0; j < 2; j++) {  
//             const headerCol = document.createElement("div");
//             // headerCol.classList.add("col", `no${j}`);
//             headerCol.textContent = "Matcha";
//             headerRow.appendChild(headerCol);
//             if(i == 0) {
//                 headerCol.classList.add("col", `no${j}`);
//             } else {
//                 headerCol.classList.add("col", `no${j + 2}`);
//             }
//         }
//         header.appendChild(headerRow);
//     }

//     content.appendChild(header);
// })();