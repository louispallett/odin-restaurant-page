export default function onHome() {

    const descWrapper = document.querySelector(".desc-wrapper");

    descWrapper.innerHTML = 
                    `<p class="desc">Matcha Mondays specializes in all the delights which matcha has to offer! We offer lattes, teas, pastries bursting with matcha moose, and delicious cakes of all different sizes which will keep you coming back for more!</p>
                    <p class="desc">Matcha is a very finely grounded green tea. Unlike green tea leaves, much more of the plant is taken when making matcha, and the grinding process releases more caffine (although still much less than coffee) and antidoxidants. Studies have linked matcha to promoting healthy livers and hearts and even aid in weight-loss (although we should stress, no matter how much matcha a piece of cake has, it is still a piece of cake!).</p>
                    <p class="desc">Please use the links at the top to make a booking or to see how to get in contact with us.</p>`

    const onHomeLink = document.querySelector(".home");
    console.log(onHomeLink);

    onHomeLink.setAttribute("id", "on-page");
}