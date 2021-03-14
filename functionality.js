function toggle(id) {
    const sidebarData = document.getElementById(id);
    if (sidebarData.style.display === 'none') {
        sidebarData.style.display = 'block';
    }
    else {
        sidebarData.style.display = 'none';
    }
}
function showCode(id) {
    const imagetoShow = document.getElementById(id);
    if (imagetoShow.style.display === 'none') {
        imagetoShow.style.display = 'block';
    }
    else {
        imagetoShow.style.display = 'none';
    }
}