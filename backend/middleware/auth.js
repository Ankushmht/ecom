const catchAsyncErrors = require("../middleware/catAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const JWT = require("jsonwebtoken");
const User = require("../models/userMOdel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login To Access This Resource", 401));
  }
  const decodedData = JWT.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowd to access this resource`,
          403
        )
      );
    }
    next();
  };
};
