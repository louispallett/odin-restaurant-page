import { homeBtn, bookingsBtn, contactBtn } from ".";

export default function onContact() {
    const descWrapper = document.querySelector(".desc-wrapper");

    descWrapper.innerHTML = 
                            `<div> Contact page </div>`

    homeBtn.removeAttribute("id", "on-page");
    bookingsBtn.removeAttribute("id", "on-page");

    contactBtn.setAttribute("id", "on-page");
}