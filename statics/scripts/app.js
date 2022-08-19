import homePage from "./home.js";
import privacyPolicy from "./privacy.js";

const routes = {
    '/': homePage,
    '/privacypolicy': privacyPolicy
};

const root = document.getElementById("root");
root.innerHTML = routes[window.location.pathname];

window.onpopstate = () => {
    root.innerHTML = routes[window.location.pathname];
    if (window.location.pathname === "/privacypolicy") {
        if (!root.classList.contains ("privacyBody")) { root.classList.add("privacyBody") }
    } else { 
        if (root.classList.contains ("privacyBody")) { root.classList.remove("privacyBody") }
    }
}

window.onpushstate = () => {
    root.innerHTML = routes[window.location.pathname];
    if (window.location.pathname === "/privacypolicy") {
        if (!root.classList.contains ("privacyBody")) { root.classList.add("privacyBody") }
    } else { 
        if (root.classList.contains ("privacyBody")) { root.classList.remove("privacyBody") }
    }
}

const textLinks = document.querySelectorAll(".textlink");
for (let textlink of textLinks) {
    textlink.onclick = function (e) {
        e.preventDefault();
        let pathName = `/${textlink.id}`;
        onNavItemClick(pathName);
    }
}

const onNavItemClick = (pathName) => {
    if (pathName) {
        window.history.pushState({}, pathName, window.location.origin + pathName);
        root.innerHTML = routes[pathName];
    } else { root.innerHTML = routes[window.location.pathname]; }

    if (pathName === "/privacypolicy") {
        if (!root.classList.contains ("privacyBody")) { root.classList.add("privacyBody") }
    } else { 
        if (root.classList.contains ("privacyBody")) { root.classList.remove("privacyBody") }
    }
}