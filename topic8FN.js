function test(num = 1) {
  console.log(typeof num);
}

test();
test(undefined);
test("");
test(null);

function f1() {
  console.log("Hi by f1!");
}

function f2() {
  f1();
  console.log("Hi by f2!");
}

f2();

//Ders topic 8

function test(x, y = 2) {
  // if(!y){
  //   y=0
  // }
  console.log(x + y);
}
test(2);

const x = () => console.log("Salam");

function showFn(cb) {
  console.log(cb);
  cb();
}
showFn(x);
