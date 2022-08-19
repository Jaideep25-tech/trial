const homePage = `
    <div class="main__container">
        <h1 class="main__pageheading">SOS 42</h1>
        <h2 class="main__pagehashtag">#notJustAnAlarmClock</h2>
        <div class="main__storebuttoncontainer">
            <a href="" target="_blank" rel="noopener noreferrer">
                <button class="btn btn--playstore">
                    <span class="btn__storelogocontainer">
                        <img src="./assets/playstore.png" alt="Play Store">
                    </span>
                    <span class="main__btn__textcontainer">
                        <small class="btn__textcontainer__smalltext">Get it on</small>
                        <p class="btn__textcontainer__storename">Google Play</p>
                    </span>
                </button>
            </a>
            <a href="https://apps.apple.com/in/app/sos-42/id1637256901" target="_blank" rel="noopener noreferrer">
                <button class="btn btn--appstore">
                    <span class="btn__storelogocontainer">
                        <img src="./assets/appstore.png" alt="App Store">
                    </span>
                    <span class="main__btn__textcontainer">
                        <small class="btn__textcontainer__smalltext">Download on the</small>
                        <p class="btn__textcontainer__storename">App Store</p>
                    </span>
                </button>
            </a>
        </div>
    </div>
    <footer class="main__footer">
        <a href="" class="textlink" id="">
            <p class="main__footer__text">Terms & Conditions</p>
        </a>
        <div class="main__footer__textseparator"></div>
        <a href="" class="textlink" id="privacypolicy">
            <p class="main__footer__text">Privacy Policy</p>
        </a>
    </footer>
`

export default homePage;