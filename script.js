function checkPassword() {
    let password = document.getElementById("pass").value;

    if (password === "RIDBY2026") {
        document.getElementById("downloadBox").style.display = "block";
        document.getElementById("message").innerHTML = "✅ Password Correct";
    } else {
        document.getElementById("downloadBox").style.display = "none";
        document.getElementById("message").innerHTML = "❌ Wrong Password";
    }
}