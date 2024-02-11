let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');


document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


const download_box = document.querySelector(".box"),
download_text = document.querySelector(".bar"),
download_btn = document.querySelector(".download a");

download_btn.addEventListener("click", progress);
var i = 0;
function progress() {
  // progress function
  if (i == 0) {
    // if else
      i = 1
      var elem = document.getElementById("text");
      var load = document.getElementById("download");
      var downloaded = document.getElementById("active");
      var width = 10;
      var id = setInterval(frame, 50); // this is the speed taken to download file / or to reach the 100 goal
      function frame() {
        // frame function
        if (width >= 100){ //if width reaches 100%
          clearInterval(id); // clears the interval after reaching 100%
          i = 0; // set i to 0
          downloaded.innerHTML = "<i class='bx bxs-check-circle' ></i> Completed";
          elem.classList.remove("active");
          elem.classList.add("premium");
          load.classList.add("done");
          downloaded.style.background = "#2ed573";
          // Now create this code to download file when download is done/finished
          function download(fileUrl, fileName) {
            var a = document.createElement("a");
            a.href = fileUrl;
            a.setAttribute("download", fileName);
            a.click();
          }
          download(" https://download.bukaolshop.com/files/apk/storewellgoo.apk")
        } else{
          // else
          width++;
          load.style.width = width + "%";
          elem.innerHTML = width + "%";
          downloaded.innerHTML = "<i class='bx bxs-cloud-download bx-flashing' ></i> Downloading";
          elem.classList.add("active");
          elem.classList.remove("premium");
          load.classList.add("show");
          load.classList.remove("done");
          downloaded.style.background = "#161fc8";
        }
      }
    }
}
