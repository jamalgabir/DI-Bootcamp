console.log('it is work?');

function anagram(s1, s2){

    str1 = s1.replace(/\s+/g, "");
    str2 = s2.replace(/\s+/g, "");
  if(str1.split("").sort().join("") === str2.split("").sort().join("")){
  	console.log(`${s1} is an anagram of ${s2}`);
  }else{
  	console.log(`${s1} Not anagram ${s2}`);
  }
}
anagram('la   maj b i r ga', 'ja   m a l g   a b ir');