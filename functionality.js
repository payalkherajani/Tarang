function toggle(id) {
    const sidebarData = document.getElementById(id);
    if (sidebarData.style.display === 'none') {
        sidebarData.style.display = 'block';
    }
    else {
        sidebarData.style.display = 'none';
    }
}