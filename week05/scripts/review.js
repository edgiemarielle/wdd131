const countLoad = "reviewCount";

let count = Number(localStorage.getItem(countLoad)) || 0;
count += 1;
localStorage.setItem(countLoad, String(count));


const reviewCountElement = document.querySelector("#review-count");
if (reviewCountElement) {
    reviewCountElement.textContent = count;
}

console.log("Number of Reviews: ", count);