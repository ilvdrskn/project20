window.onload = function() {
    let number = document.getElementsByClassName("notificNumber")[0];
    let notif = document.getElementsByClassName("notification");
    document.getElementsByClassName("main-action")[0].onclick = function() {
        for (let i = 0; i < notif.length; i++) {
            notif[i].classList.remove("new");
        }

        number.innerHTML = "0";
    }

    for (let i = 0; i < notif.length; i++) {
        if (notif[i].classList.contains("new")) {
            notif[i].onclick = function() {
                this.classList.remove("new");
                number.innerHTML--;
            }
            
        }
    }
}