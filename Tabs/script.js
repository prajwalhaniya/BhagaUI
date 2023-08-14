function openTab(event, tab) {
    const tabcontents = document.getElementsByClassName('tabcontent');
    const tablinks = document.getElementsByClassName('tablink');

    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', "");
    }

    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";
}