window.addEventListener("load", () => {
    const imgInput = document.getElementById("img-input");
    const fieldImg = document.getElementById("battlefield-img");

    imgInput.addEventListener("change", () => {
        const [file] = imgInput.files;
        if (file) {
          fieldImg.src = URL.createObjectURL(file);
        }
    });

    let turretPos;

    fieldImg.addEventListener("click", event => {
        if (!turretPos) {
            turretPos = {
                x: event.offsetX,
                y: event.offsetY
            };
        } else {
            const dx = event.offsetX - turretPos.x;
            const dy = -1 * (event.offsetY - turretPos.y);

            console.log(Math.atan2(dy, dx) * 180 / Math.PI);
        }
    });
});
