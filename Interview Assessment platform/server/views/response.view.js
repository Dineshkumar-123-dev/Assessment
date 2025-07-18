exports.success = (res, data) => {
  res.status(200).json({ success: true, data });
};

exports.error = (res, err) => {
  res.status(400).json({ success: false, message: err.message });
};
