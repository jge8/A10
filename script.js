function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function displayCookie() {
    var userCookie = getCookie("user");
    if (userCookie != null) {
        document.getElementById("cookieValue").innerHTML = "Cookie value: " + userCookie;
    } else {
        // Set a new cookie if not found
        setCookie("user", "TestUser", 7); // Expires in 7 days
        document.getElementById("cookieValue").innerHTML = "Cookie set. Please reload the page.";
    }
}

// Call displayCookie on page load
window.onload = function() {
    displayCookie();
}
