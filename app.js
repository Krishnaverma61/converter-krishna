const input = document.querySelector(".input");
const button = document.querySelector(".btn");

const submitter = input.addEventListener("input", function submitter(e) {
  let val = e.target.value,
    corrVal = val / 1000;

    document.querySelector('.insertedkm').textContent = corrVal ;
    document.querySelector('.insertedcm').textContent = val*100;
    document.querySelector('.insertedmm').textContent = val*1000;
    document.querySelector('.insertedfs').textContent =  val*3.37;
    document.querySelector('.insertedin').textContent = val*39.37;
});
