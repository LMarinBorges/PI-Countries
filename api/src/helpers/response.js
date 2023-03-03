exports.notFound = (res, message) => {
  res.status(404).json({
    code: "not_found",
    status: 404,
    message,
  });
};

exports.badRequest = (res, errors) => {
  res.status(400).json({
    code: "bad_request",
    status: 400,
    errors,
  });
};

exports.created = (res, payload) => {
  res.status(201).json({
    code: "created",
    status: 201,
    payload,
  });
};
