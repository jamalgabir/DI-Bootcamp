console.log('work');
(function(){
    let APIKEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    document.addEventListener("DOMContentLoaded", init);
    function init() {

        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          //console.log(url);
          //url = Math.floor(Math.random() *url);
          //console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
              let fig = document.createElement("div");
              fig.id = 'div1';
              let img = document.createElement("img");
              let fc = document.createElement("p");
              console.log(content.data);
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
              fig.appendChild(img);
              fig.appendChild(fc);
              let btn1 = document.createElement('button');
              btn1.id = 'btn2';
              btn1.textContent='Delet'
              fig.appendChild(btn1);
              let out = document.querySelector(".out");
              out.insertAdjacentElement("afterbegin", fig);
              document.querySelector("#search").value = "";
              let del = document.getElementById('btn2');
              del.addEventListener("click",()=>{
                del.parentElement.remove();
              });
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