const accessKey="6PP1m2mejj-RCLkCWsILjYJCF_z9pSGUWGZBQZ9N0tw";
const googleKey="b9748cc8e181845f2e32a12c0cba036406ab83e5aa64ad0c967566937c5e5f79";
const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const searchResults=document.querySelector(".search-results");
const showMore=document.getElementById("show-more-button");

let inputData="";
let page=1;

async function searchImages() {
    inputData=inputEl.value;
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const urla= `https://serpapi.com/search.json?q=${inputData}&engine=google_images&ijn=${page}`;

    const response=await fetch(url);
    const data= await response.json();

    const results=data.results;
    if(page===1){
        searchResults.innerHTML="";
    }

    results.map((result)=>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });
    page++;
    if(page>1){
        showMore.style.display="block";
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
showMore.addEventListener("click",()=>{
   
    searchImages();
})
