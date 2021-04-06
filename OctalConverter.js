function convert(dec) {
  const base = 8;
  var octalString = dec.toString(base);
  var octalNum = parseInt(octalString);

  return octalNum;
}

exports.convert = convert;
