var people = [
  ["mike", "paul"],
  ["tom", "robin"],
  ["jae", "paul"],
  ["paul", "micheal"],
  ["robin", "ross"],
];

var child = "tom";
function findGrandpaa(child) {
  var son = child;
  for (var i = 0; i < people.length; i++) {
    if (people[i][0] == son) {
      son = people[i][1];
    }
  }
  for (var i = 0; i < people.length; i++) {
    if (people[i][0] == son) {
      son = people[i][1];
    }

    return son;
  }
}
var grandpaa = findGrandpaa(child);
