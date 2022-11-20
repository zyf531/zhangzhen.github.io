const headerEl = document.querySelector("header");

window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;

    if(window.pageYOffset - height > 800) {
        if(!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky")
        } 
    }else {
        headerEl.classList.remove("sticky")
    }
});

const glide = new Glide(".glide");
const captionsEl = document.querySelectorAll(".slide-caption");

glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEl[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, {start: 300}),
        translateY: [anime.stagger([40, 10]), 0]
    });
});

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    });
});

glide.mount();

