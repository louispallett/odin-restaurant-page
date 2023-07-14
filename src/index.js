import './style.css';
// import bannerimg from './banner.jpg';
// import onBooking from './bookings';
// import onHome from './home';

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
                            <button class="link" id="on-page">Home</button>
                            <button class="link">Bookings</button>
                            <button class="link">Contact Us</button>
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
                    `<div class="desc-wrapper">
                        <p class="desc">Matcha Mondays specializes in all the delights which matcha has to offer! We offer lattes, teas, pastries bursting with matcha moose, and delicious cakes of all different sizes which will keep you coming back for more!</p>
                        <p class="desc">Matcha is a very finely grounded green tea. Unlike green tea leaves, much more of the plant is taken when making matcha, and the grinding process releases more caffine (although still much less than coffee) and antidoxidants. Studies have linked matcha to promoting healthy livers and hearts and even aid in weight-loss (although we should stress, no matter how much matcha a piece of cake has, it is still a piece of cake!).</p>
                    </div>`

    content.appendChild(main);
})();