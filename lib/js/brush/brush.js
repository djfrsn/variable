

function box() {
    [].forEach.call(document.querySelectorAll("*"), function(a) {
        a.style.outline = "1.5px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
    });
}