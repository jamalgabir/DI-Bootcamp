const products = [
  {id :1 ,name: 'iPhone', price:800},
  {id :2 ,name: 'iPad', price:650},
  {id :3 ,name: 'iWatch', price:750},
];
function getitems(){
  for(let i = 0;i<products.length;i++){
    for(let v of products){
      return v[i]
    }
  }
  
};
getitems();
 
module.exports ={
  da:products,
  func: getitems
   
}; 