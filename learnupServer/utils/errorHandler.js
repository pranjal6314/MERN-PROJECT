// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     console.log("-------------------->", message, statusCode);
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// export default ErrorHandler;
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;
