//  Evaluate the postfix expression "2 3 4 * +" using a stack.

function postfix(array) {
  let stack = [];
  let value = array.split(" ");
  value.forEach((e) => {
    if (!isNaN(e)) {
      stack.push(Number(e));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (e) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
            stack.push(a-b);
            break;
        case "*":
            stack.push(a*b);
            break;
      }
    }
  });
  return stack.pop();
}

const array = "1 2 3 4 * + +";

const result = postfix(array);
console.log(result);
