// TODO
function find(data, item) {
  var result;
  data.some(elem => {
    return result = elem.id === item.id && elem || find(elem.children, item)
  });
  return result || undefined;
}
