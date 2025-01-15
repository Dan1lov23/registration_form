let check = 0;

function changeTheme() {
    const body = document.body;
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    if (check % 2 === 0) {
        body.style.backgroundColor = "black";
        form.style.backgroundColor = "black";
        title.style.color = "white";
        Array.from(form.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
    } else {
        body.style.backgroundColor = "white";
        form.style.backgroundColor = "white";
        form.style.borderColor = "#007bff";
        Array.from(form.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
    }
    check++;
}