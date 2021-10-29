console.log('Test it is work');
const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

//----------------------------------------------------
(function (){

	let container1 = document.getElementById('container');
	let newarr = robots.map((ele,i,v) => ele.name);
	let newimag = robots.map((ele,i,v) => ele.image);
	let newemal = robots.map((ele,i,v) => ele.email);
	let myim = document.getElementById('div1');
  let myinp = document.getElementsByTagName("input")[0]
  console.log(myinp)
	
  for(let i =0;i<robots.length;i++){
      let imges = document.createElement('img')
      let mdiv = document.createElement('div');
      let h22 = document.createElement('h2');
      mdiv.id = "div1"
      let p1 = document.createElement('p');
      container1.appendChild(mdiv)
      imges.src=newimag[i]
      mdiv.appendChild(imges)
      h22.textContent =newarr[i]
      mdiv.appendChild(h22)
      p1.textContent=newemal[i]
      mdiv.appendChild(p1)
      //mdiv.style.display = "none";
  }

}());

function myFunction() {
  
    let input = document.getElementById("inpu");
    let filter = input.value.toUpperCase();
    ul = document.getElementById("container");
    li = ul.getElementsByTagName("div");
    //console.log(input)
    for (i = 0; i <li.length; i++) {
      console.log(li[i])
      let a = li[i].getElementsByTagName("h2")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
    } 
  }
myFunction();