function dom2Json(domtree) {
  let result = {
    name: domtree.tagName,
    children: [],
  }
  domtree.childNodes.forEach((child) => result.children.push(dom2Json(child)));
  return result;
}
