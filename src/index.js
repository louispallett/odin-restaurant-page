import './style.css';
import bannerimg from './banner.jpg';
console.log("Hello, World!");

function createPage() {
    const content = document.getElementById("content");
    const header = document.createElement("div");
    const para = document.createElement("p");
    // const image = document.createElement("img");

    header.classList.add("header");
    header.innerHTML = '<img src="../src/icon.svg" alt="teapot" id="icon><div class="links"><div class="link">Home</div><div class="link">Bookings</div><div class="link">Events</div><div class="link">Contact Us</div>';
    content.appendChild(header);

    const banner = document.createElement("div");
    banner.classList.add("banner");

    const theBannerImg = new Image();
    theBannerImg = src.bannerimg;
    banner.appendChild(theBannerImg);

    content.appendChild(banner);
    // banner.innerHTML = '<img src="../src/banner.jpg" alt="">'
    // content.appendChild(banner);


}

createPage();