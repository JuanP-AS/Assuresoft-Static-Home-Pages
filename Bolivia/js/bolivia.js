const showSidebar = () => {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("backdrop").classList.remove("hidden");
}

const hideSidebar = (e) => {
    console.log(e?.target?.id)
    document.getElementById("sidebar").style.left = "-100%";
    document.getElementById("backdrop").classList.add("hidden");
}

