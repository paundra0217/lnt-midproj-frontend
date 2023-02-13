const hidden = document.querySelectorAll('.hide');
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
        console.log(e)
        if (e.isIntersecting) {
            e.target.classList.add('show');
        } else {
            e.target.classList.remove('show');
        }
    })
})

hidden.forEach((e) => {
    observer.observe(e);
})