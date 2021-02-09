function myInstanceof(target, origin) {
  const proto = target.__proto__;
  // 如果proto不存在
  if (!proto) {
    return false;
  }
  if (proto === origin.prototype) {
    return true;
  } else {
    return myInstanceof(proto, origin)
  }
}