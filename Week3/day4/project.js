let sideb = document.getElementById("sidebar");
let main = document.getElementById("main");




for(let i=0; i<21;i++){
	let newdiv = document.createElement("div");
	let myarray= ["red","orangered","orange","yellow","yellowgreen",
    "lightgreen","green","turquoies","cyan","lightskyblue",
    "dodgerblue","blue","darkblue","indigo","darmagenta","violet","lightpink",
    "lightgray","gray","black","white"];
	for(arr of myarray){
	    newdiv.style.backgroundColor = arr;
	}
	 

	sideb.appendChild(newdiv);

}

for(let i = 0; i<60;i++){
	let newdi = document.createElement("div");
	main.appendChild(newdi)

}
////////////////////////////////////////
let color = null;
let mousedown = false;

let myarray= ["red","orangered","orange","yellow","yellowgreen",
"lightgreen","green","turquoies","cyan","lightskyblue",
"dodgerblue","blue","darkblue","indigo","darmagenta","violet","lightpink",
"lightgray","gray","black","white"];


let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#main > *");
let clear_button = document.getElementsByTagName("button")[0];
console.log(color_blocks);


// for(let colo of myarray){
// 	for(let i = 0;i<myarray.length;i++){
// 		color_blocks.style.backgroundColor = colo;
// 	}

    
//     // console.log(colo);

// }

clear_button.addEventListener("click", function(){
    for (fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (fill_block of fill_blocks){
    fill_block.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    fill_block.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}




// let color = null;
// let mousedown = false;

// let body = document.getElementsByTagName("body")[0];
// let color_blocks = document.querySelectorAll("#sidebar > *");
// let fill_blocks = document.querySelectorAll("#main > *");
// let clear_button = document.getElementsByTagName("button")[0];

// clear_button.addEventListener("click", function(){
//     for (fill_block of fill_blocks){
//         fill_block.style.backgroundColor = "white";
//     }
// });

// body.addEventListener("mousedown", function(){
//     mousedown = true;
// })

// body.addEventListener("mouseup", function(){
//     mousedown = false;
// })


// for (color_block of color_blocks){
//     color_block.addEventListener("click", function(event){
//         color = event.target.style.backgroundColor;
//     });
// }

// for (fill_block of fill_blocks){
//     fill_block.addEventListener("mousedown", function(event){
//         if (color != null) event.target.style.backgroundColor = color;
//     });
//     fill_block.addEventListener("mouseover", function(event){
//         if (mousedown && color != null) event.target.style.backgroundColor = color;
//     });
// }


