// Get Navbar
async function load_blogdata() {
    document.querySelector(".blog-data").innerText = await (await fetch('../blogs/9_Oct_2020_Raw.txt')).text();
}

load_blogdata();