/* for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i ; j++) {
        document.write("*");
    }
    document.write("<br>");
} */

const level = 5;

for (let i = 1; i <= level; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }
  console.log(stars); //console.log는 자동 개행
}
