exports.notFound = (res, message) => {
  res.status(404).json({
    code: "not_found",
    status: 404,
    message,
  });
};
