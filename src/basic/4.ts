function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}
export {};
function customError(): never {
  throw new Error("Error");
}
