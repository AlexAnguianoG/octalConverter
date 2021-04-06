function convert(dec) {
  var a = Math.floor(dec / 8);
  var b = dec % 8;
  var c = a * 10 + b;

  return c;
}

exports.convert = convert;
