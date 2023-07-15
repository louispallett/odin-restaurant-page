import {homeBtn, bookingsBtn, contactBtn} from "./index.js"

export default function onBookings() {
    const descWrapper = document.querySelector(".desc-wrapper");

    descWrapper.innerHTML = 
                            `<h3>Want to Book - great! Fill out the form below:</h3>
                            <form action="#">
                            <div>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div>
                                <label for="email">Email Address</label>
                                <input type="email" name="email" id="email">
                            </div>
                            <div>
                                <label for="number">Contact Number</label>
                                <input type="number" name="number" id="number">
                            </div>
                            <div>
                                <label for="date">Date</label>
                                <input type="date" name="date" id="date"></input>
                                <label for="time">Time</label>
                                <input type="time" name="time" id="time">
                            </div>
                            <button type="submit">Submit</button>
                            </form>`

    
    homeBtn.removeAttribute("id", "on-page");
    contactBtn.removeAttribute("id", "on-page");

    bookingsBtn.setAttribute("id", "on-page");
}