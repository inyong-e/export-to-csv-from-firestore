exports.convertDateTimeStampToDate = (timeStamp) => {
  return new Date(Number(timeStamp) * 1000);
};

// 0 -> 00, 1 -> 01, 12 -> 12
exports.getStringDate = (date) => {
  const paddingStr = (targetStr) => {
    if (targetStr === null || targetStr === undefined) return '';
  
    return String(targetStr.toString()).padStart(2, '0');
  };

  return `${date.getFullYear()}/${paddingStr(date.getMonth()+1)}/${paddingStr(date.getDate())} ${paddingStr(date.getHours())}:${paddingStr(date.getMinutes())}:${paddingStr(date.getSeconds())}`;
}