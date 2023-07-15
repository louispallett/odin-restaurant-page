import {homeBtn, bookingsBtn, contactBtn} from "./index.js"

export default function onBookings() {
    const descWrapper = document.querySelector(".desc-wrapper");

    descWrapper.innerHTML = 
                            `<div> Bookings page </div>`

    
    homeBtn.removeAttribute("id", "on-page");
    contactBtn.removeAttribute("id", "on-page");

    bookingsBtn.setAttribute("id", "on-page");
}