import './style.css';
// import bannerimg from './banner.jpg';
import onBookings from './bookings';
import onHome from './home';
import onContact from './contact';

const createPage = (() => {

    const content = document.getElementById("content");
    const header = document.createElement("div");
    const para = document.createElement("p");
    // const image = document.createElement("img");

    header.classList.add("header");
    header.innerHTML = 
                        `<div>
                            <img src="../src/icon.svg" alt="teapot" id="icon">
                            <div>Matcha Mondays</div>
                        </div>
                        <div class="links">
                            <button class="home">Home</button>
                            <button class="bookings"">Bookings</button>
                            <button class="contact">Contact Us</button>
                        </div>`
    content.appendChild(header);

    const banner = document.createElement("div");
    banner.classList.add("banner");

    // const theBannerImg = new Image();
    // theBannerImg = src.bannerimg;
    // banner.appendChild(theBannerImg);

    content.appendChild(banner);
    banner.innerHTML = '<img src="../src/banner.jpg" alt="">'
    content.appendChild(banner);

    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = 
                    `<div class="desc-wrapper"></div>`

    content.appendChild(main);
})();

export const homeBtn = document.querySelector(".home");
export const bookingsBtn = document.querySelector(".bookings");
export const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", () => {
    onHome();
});

bookingsBtn.addEventListener("click", () => {
    onBookings();
});

contactBtn.addEventListener("click", () => {
    onContact();
})

export const myVariable = "Hello World";

onHome();
