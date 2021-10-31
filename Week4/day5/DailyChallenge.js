console.log('it is work?');

function anagram(s1, s2){

    let str1 = s1.toUpperCase().replace(/\s+/g, "");
    let str2 = s2.toUpperCase().replace(/\s+/g, "");
    //console.log(str1)
  if(str1.split("").sort().join("")=== str2.split("").sort().join("")){
  	console.log(`${s1} is an anagram of ${s2}`);
  }else{
  	console.log(`${s1} Not anagram ${s2}`);
  }
}
anagram("Astronomer","Moon starer");
anagram("School master","The classroom");
anagram("The Morse Code","Here come dots");

