// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
     var h = Math.floor(currency/50);
  var q = Math.floor((currency-50*h)/25);
  var d = Math.floor(((currency-50*h)-25*q)/10);
  var n = Math.floor(((currency-50*h)-25*q -10*d)/5);
  var p = Math.floor(((currency-50*h)-25*q-10*d-5*n)/1);
var Obj = {};
  Obj.H = h;
  Obj.Q = q;
  Obj.D = d;
  Obj.N = n;
  Obj.P = p;
if( currency <= 0){
  delete Obj.H;
  delete Obj.Q;
  delete Obj.D;
  delete Obj.N;
  delete Obj.P;
  return Obj;
}
  if(currency >= 10000){
  delete Obj.H;
  delete Obj.Q;
  delete Obj.D;
  delete Obj.N;
  delete Obj.P;
  Obj.error = "You are rich, my friend! We don't have so much coins for exchange";
  return Obj;
} else {
  if(h === 0) delete Obj.H;
  if(q === 0) delete Obj.Q;
  if(d === 0) delete Obj.D;
  if(n === 0) delete Obj.N;;
  if(p === 0) delete Obj.P;
  return Obj;

}
}
