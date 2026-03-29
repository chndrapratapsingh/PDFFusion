

function PdfViewerFunction() {
    let pdfInput = document.getElementById("pdf");
    let file = pdfInput.files[0];
    if (file) {
        let fileURL = URL.createObjectURL(file);
        console.log(fileURL);
        let main = document.getElementById("main");
        let iframe = document.createElement("iframe");
        iframe.src = fileURL;
        main.innerHTML = "";
        main.appendChild(iframe);
        let header = document.querySelector("header");
        header.style.height = "5vh";
        let footer = document.querySelector("footer");
        footer.style.display = "none";
        let button = document.createElement("button");
        button.innerHTML = `<img src="maximize.png" alt="Exit Full Screen" style=" width:stretch; height: stretch;">`;
        button.setAttribute("onclick", "openFullscreen()");
        button.setAttribute("id", "fullScreenButton");
        main.appendChild(button);
    } else {
        alert("Please select a PDF file to upload.");
    }
}


function openFullscreen() {
  const viewer = document.getElementById("main")

  if (viewer.requestFullscreen) {
    viewer.requestFullscreen();
  } else if (viewer.webkitRequestFullscreen) { // Safari
    viewer.webkitRequestFullscreen();
  } else if (viewer.msRequestFullscreen) { // IE11
    viewer.msRequestFullscreen();
  }
  let button = document.getElementById("fullScreenButton");
  button.removeAttribute("onclick");
  button.setAttribute("onclick", "closeFullscreen()");
  button.innerHTML = `<img src="minimize.png" alt="Exit Full Screen" style="width:stretch; height:stretch;">`;
  iframe = document.querySelector("iframe");
  iframe.style.height = "100vh";
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE11
    document.msExitFullscreen();
  }
  let button = document.getElementById("fullScreenButton");
  button.removeAttribute("onclick");
  button.setAttribute("onclick", "openFullscreen()");
  button.innerHTML = `<img src="maximize.png" alt="Exit Full Screen" style="width: stretch; height: stretch;">`;
  
}

// import { PDFDocument } from 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
// import initGhostscript from './ghostscript-wasm.js';

// async function resizePDF() {
//   const file = document.getElementById('pdf').files[0];
//   const arrayBuffer = await file.arrayBuffer();

//   const gs = await initGhostscript();
//   const compressed = await gs.run({
//       args: ['-sDEVICE=pdfwrite', '-dPDFSETTINGS=/ebook', '-sOutputFile=output.pdf', 'input.pdf'],
//       inputFiles: [{ name: 'input.pdf', data: arrayBuffer }]
//   });

//   const blob = new Blob([compressed.files[0].data], { type: 'application/pdf' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'compressed.pdf';
//   link.click();
// }
