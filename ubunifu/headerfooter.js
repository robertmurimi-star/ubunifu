const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
    this.document.head.insertAdjacentHTML('beforeend',
        `<link rel="stylesheet" href="headerfooter.css"/>`)

    header.innerHTML =`
    <div class="logon">
            <a href="home.html">
                <img class="logo" src="img/logon.png" >
            </a>
        </div>
        <div class="motto">
            <h3 class="motto2">
              &#9679 imagine &#9679 create &#9679 innovate
            </h3>
        </div>


        <div class="button-grp">
            <div>
                <button class="button" onclick="window.location.href='home.html'">Home</button>
            </div>
            <div class="dropdown_menu">
                <button class="button"><a href="services.html"></a>Our Services</button>

                <div class="dropmenu">
                    <a href="construction.html" class="lists">Construction</a>
                    <a href="design.html" class="lists">Interior Design</a>
                    <a href="renovations.html" class="lists">Renovations</a>
                    <a href="renovations.html" class="lists">Steel Fabrications</a>

                </div>
            </div>
            <div>
                <button class="button" onclick="window.location.href='projects.html'">Our Projects</button>
            </div>
            <div>
                <button class="button" onclick="window.location.href='contact.html'">Contact Us</button>
            </div>

        </div>
        <div>
            <img class="menu" onclick="showSidebar()" src="img/menu.png">
        </div>
        <div class="sidebar">
            <img class="close" onclick="hideSidebar()" src="img/close.png">
            <div class="sidebar_content">
                <div>
                    <a href="home.html" class="list">Home</a>
                </div>
                <div>
                    <a class="list">Our Services</a>
                    <div>
                        <a href="construction.html" class="lists">Construction</a>
                        <a href="design.html" class="lists">Interior Design</a>
                        <a href="renovations.html" class="lists">Renovations</a>
                        <a href="steel.html" class="lists">Steel Fabrications</a>
                    <div>
                </div>
                <div>
                    <a href="projects.html" class="list">Our Projects</a>
                </div>
                <div>
                    <a href="contact.html" class="list">Contact Us</a>
                </div>
            </div>
        </div>`;

    footer.innerHTML=`
    <div class="company-name">
        <h1>Ubunifu Builders Limited</h1>

    </div>

    <div class="socials">
        <div class="social-logos" >
            <a href="#" target="_blank">
                <img src="img/whatsaap.jpg">
            </a>
        </div>
        <div class="social-logos">
            <a href="https://www.facebook.com/profile.php?id=100069419568017" target="_blank">
                <img src="img/facebook.png">
            </a>
        </div>
        <div class="social-logos">
            <a href="https://www.instagram.com/ubunifubuilders/" target="_blank">
                <img src="img/insta.jpg">
            </a>
        </div>
        <div class="social-logos">
            <a href="https://www.youtube.com/@ubunifubuilders" target="_blank">
                <img src="img/youtube.png">
            </a>
        </div>
    </div>`;
});