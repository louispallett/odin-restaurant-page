import './style.css';
// import bannerimg from './banner.jpg';
import onBooking from './bookings';
import onHome from './home';

onHome();

const onPage = (() => {
    
    const link = document.querySelector(".link");
    // link.addEventListener("click", (e) => {
    //     e.onclick = onBooking;
    // })
    link.onclick = onBooking;
})();