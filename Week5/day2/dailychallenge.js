console.log('work');



(function(){
    let APIKEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let b = document.addEventListener("DOMContentLoaded", init);
    function init() {

        let btnSear = document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); 
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          
          fetch(url)
            .then(response => response.json())
            .then(content => {
              let btn1 = document.createElement('button');
              let fig = document.createElement("div");
              fig.id = 'div1';
              let img = document.createElement("img");
              let fc = document.createElement("p");
              console.log(content.data[0].title);
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
              fig.appendChild(img);
              btn1.textContent='Delet';
              fig.appendChild(btn1);
              fig.appendChild(fc);
              btn1.id = 'btn2';
              
              let out = document.querySelector(".out");
              out.insertAdjacentElement("afterbegin", fig);
              let ser = document.querySelector("#search").value = "";

              let del = document.getElementById('btn2');
              del.addEventListener("click",()=>{
                del.parentElement.remove();
              });


              //Clear All button
              let clearall = document.getElementById('btn');
              clearall.addEventListener('click',(e)=>{
                e.preventDefault();
                while (out.firstChild) {
                      out.removeChild(out.firstChild);
                }
              })
            })
            .catch(err => {
              console.error(err);
            });




        });
      }
}());
//console.log(url);