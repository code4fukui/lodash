import groupBy from "../groupBy.js";

// lodash で groupBy を複数の値でしたい - Qiita
// https://qiita.com/takutakuma/items/04f71881a59089404348

const data = [
  { id: '111', name: 'A', score: 100 },
  { id: '111', name: 'B', score: 50 },
  { id: '222', name: 'C', score: 100 },
  { id: '222', name: 'C', score: 50 },
  { id: '222', name: 'D', score: 70 },
];

const groups = groupBy(data, (v) => v.id + "#" + v.name);
console.log(groups);
/*
{
  "111#A": [ { id: "111", name: "A", score: 100 } ],
  "111#B": [ { id: "111", name: "B", score: 50 } ],
  "222#C": [ { id: "222", name: "C", score: 100 }, { id: "222", name: "C", score: 50 } ],
  "222#D": [ { id: "222", name: "D", score: 70 } ]
}
*/
//console.log(Object.values(groups));

const sumBy = (ar, name) => ar.reduce((prev, cur) => prev + cur[name], 0);

const result = Object.values(groups).map((group) => {
  return {
    id: group[0].id,
    name: group[0].name,
    //sum: group.reduce((prev, cur) => prev + cur.score, 0),
    sum: sumBy(group, "score"),
  };
});
console.table(result);
//console.log(result);
/*
[
  { id: '111', name: 'A', sum: 100 },
  { id: '111', name: 'B', sum: 50 },
  { id: '222', name: 'C', sum: 150 },
  { id: '222', name: 'D', sum: 70 }
];
*/
