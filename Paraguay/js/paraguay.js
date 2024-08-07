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

