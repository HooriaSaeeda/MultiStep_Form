
const stepinfo = document.querySelectorAll(".count");
const steps= document.querySelectorAll(".steps");
const nextBtn = document.querySelector(".nextBtn");
let index= 0;

nextBtn.addEventListener("click" , handleNext);

function handleNext(event)
{ index++;
     
if(index === 3)
{
    nextBtn.style.display = "none";
}
document.querySelector(" .count.active").classList.remove("active");

stepinfo[index].classList.add("active");

document.querySelector(".steps.active").classList.remove("active");
steps[index].classList.add("active");
}

const dropzoneinp = document.querySelector(".dropzone__input");
const dropzoneEl = dropzoneinp.closest(".drop_zone");

dropzoneEl.addEventListener("dragover", (e) => {
  e.preventDefault();
console.log("drag");
  dropzoneEl.classList.add("dropzone__over");
});
dropzoneEl.addEventListener("dragleave", (e) => {
  e.preventDefault();
console.log("drag leave");
  dropzoneEl.classList.remove("dropzone__over");
});
dropzoneEl.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length) {
    dropzoneinp.files = e.dataTransfer.files;
    updateThumbnail(dropzoneEl, e.dataTransfer.files[0]);
  }
  dropzoneEl.classList.remove("dropzone__over");
});
function updateThumbnail(dropzoneEl, file) {
  let thumbnailElement = dropzoneEl.querySelector(".dropzone__thumb");

  if (dropzoneEl.querySelector(".drop_promt")) {
    dropzoneEl.querySelector(".drop_promt").remove();
  }

  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("dropzone__thumb");
    console.log(thumbnailElement);
    dropzoneEl.appendChild(thumbnailElement);
    console.log(dropzoneEl);
  }

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
