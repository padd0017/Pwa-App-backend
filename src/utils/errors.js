class ApiError extends Error {
    statusCode = 500;
  }
  
  class BadRequestError extends ApiError {
    statusCode = 400;
  }
  
  class UnauthorizedError extends ApiError {
    statusCode = 401;
  }
  
  class ForbiddenError extends ApiError {
    statusCode = 403;
  }
  
  class NotFoundError extends ApiError {
    statusCode = 404;
  }
  
  const errorHandler = (error, req, res, next) => {
    console.log("error", error);
  
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({
        error: {
          message: error.message,
        },
      });
      return;
    }
  
    res.status(500).json({
      error: {
        message: "Something went wrong",
      },
    });
  };
  
  module.exports = {
    ApiError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    errorHandler,
  };