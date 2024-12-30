// 80. Given a few pairs of names in the order child, father.
// The input is a person name andlevel number.
// The output should be the number of children in that particular level for the person given.
// Example:
// Input:
// [
// {Ram, Syam},
// {Akil, Syam},
// {Nikil, Ram},
// {Subhash, Ram},
// {Karthik, Akil}
// ];

// Syam 2
// Output: 3 (Syam has Ram and Akil in level 1 and in level 2 he have Nikil, Subhash, Karthik. So the answer is 3).

const findChildrenAtLevel = (relationships, person, level) => {
  const parentMap = new Map();
  for (const [child, father] of relationships) {
    if (!parentMap.has(father)) parentMap.set(father, []);
    parentMap.get(father).push(child);
  }

  const queue = [];
  queue.push({ name: person, currLevel: 0 });
  let count = 0;

  while (queue.length > 0) {
    const { name, currLevel } = queue.shift();
    if (currLevel === level) count++;
    if (currLevel >= level) continue;

    const children = parentMap.get(name) || [];
    for (const child of children)
      queue.push({ name: child, currLevel: currLevel + 1 });
  }
  return count;
};

const relationships = [
  ["Ram", "Syam"],
  ["Akil", "Syam"],
  ["Nikil", "Ram"],
  ["Subhash", "Ram"],
  ["Karthik", "Akil"]
];
const person = "Syam";
const level = 2;
console.log(findChildrenAtLevel(relationships, person, level));
