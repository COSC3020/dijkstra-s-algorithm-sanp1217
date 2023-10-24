const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

var graph = {
    'foo': { 'boo': 7 },
    'boo': { 'foo': 3, 'bar': 2 },
    'bar': { 'boo': 4, 'can': 5 },
    'can': { 'toot': 3 },
    'toot': { "foo": 3 }
};

//if source = 'foo'
var graphShortestPath = {
    'foo': 0,
    'boo': 7,
    'bar': 9,
    'can': 14,
    'toot': 6
};

assert(JSON.stringify(dijkstra(graph, 'foo') == JSON.stringify(graphShortestPath)));

var graph1 = {
    'A': { 'B': 2, 'D': 4, 'C': 1 },
    'B': { 'C': 1, 'E': 10, 'F': 2 },
    'C': { 'A': 9, 'E': 8 },
    'D': { 'C': 2 },
    'E': { 'D': 7, 'G': 1 },
    'F': { 'H': 3 },
    'G': { 'F': 2, 'E': 4 },
    'H': { 'G': 1 }
};

//if source = 'C'
var graph1ShortestPath = {
    'A': 9,
    'B': 11,
    'C': 0,
    'D': 15,
    'E': 8,
    'F': 11,
    'G': 9,
    'H': 14
};
assert(JSON.stringify(dijkstra(graph1, 'C') == JSON.stringify(graph1ShortestPath)));