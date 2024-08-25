import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

window.$ = require("jquery");

let imgLink = $("table a.image");

$("table a.image > img").each((n, el) => {
  imgLink[n].setAttribute("data-pswp-height", el.naturalHeight);
  imgLink[n].setAttribute("data-pswp-width", el.naturalWidth);
});

const lightbox = new PhotoSwipeLightbox({
  gallery: "table",
  children: "a.image",
  pswpModule: () => import("photoswipe")
});
lightbox.init();