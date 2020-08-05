const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");
// console.log("aa");
// console.log(previews);
previews.forEach(preview =>{
    preview.addEventListener('click', () => {
        // const originalSrc = preview.getAttribute("data-original");
        const originalSrc = preview.src;
        const altText = preview.alt;
        const originalFname = originalSrc.replace(/^.*[\\\/]/,'');
        console.log(altText);
        console.log(originalFname);
        original.src = `./images/${originalFname}`;
        imgText.textContent = altText;
        modal.classList.add("open");
        original.classList.add("open");
    } )
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.src="";
        original.classList.remove("open");
    }
} )