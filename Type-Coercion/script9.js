function coercion(){
  console.log("10"+5);
  console.log("100"-3);
  console.log(true+1);
  console.log(5+"5");
  console.log("5"*2);
  console.log("10"/2);
  console.log(true+ 1);
  console.log(false+0);
  console.log(false+5);
  console.log(null+5);console.log(undefined+5);
  console.log(NaN+null);
  console.log(NaN+null+undefined+6+false+true+"text");
}
coercion();
