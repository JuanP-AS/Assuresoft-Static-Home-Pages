const showSidebar = () => {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("backdrop").classList.remove("hidden");
}

const hideSidebar = () => {
    document.getElementById("sidebar").style.left = "-100%";
    document.getElementById("backdrop").classList.add("hidden");
}

const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    hideSidebar();
}

const createClickHandler = (panel) => {
    let isShown = false;
    const description = panel.querySelector(".hidden-description");
    return () => {
        description.style.bottom = isShown ? "-100%" : "0";
        isShown = !isShown;
    }
}

const panels = document.getElementById("panels").querySelectorAll(".panel");
panels.forEach(panel => {
    panel.addEventListener("click", createClickHandler(panel));
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shake');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const targets = document.querySelectorAll('.shake-target');
targets.forEach(target => {
    observer.observe(target);
});

