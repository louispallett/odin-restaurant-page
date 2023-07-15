import { homeBtn, bookingsBtn, contactBtn } from ".";

export default function onContact() {
    const descWrapper = document.querySelector(".desc-wrapper");

    descWrapper.innerHTML = 
                            `<h3> Contact page </h3>
                            <p>You can contact us for any queries via: <a href="mailto: thisisnotarealemail@dontbother.com">thisisnotarealemail@dontbother.com</a></p>
                            <p>If you're interested in work, part or full time, please let us know! We are always open to receiving applicants and even if there is no work going we can make a note. Experience is always a plus, but it is not necessary. No need to send a CV, just send an email to the link above with your name and any relevant experience, and we'll put your name down!</p>`
                            

    homeBtn.removeAttribute("id", "on-page");
    bookingsBtn.removeAttribute("id", "on-page");

    contactBtn.setAttribute("id", "on-page");
}