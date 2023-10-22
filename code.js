function dijkstra(graph, sourceNode) {
    let dist = {};
    let marked = {};

    //Initialize dist of each vertex to Infinity, sourceNode to 0
    for (let vertex in graph) {
        dist[vertex] = Infinity;
    }
    dist[sourceNode] = 0;

    while (true) {
        let minDist = Infinity;
        let minVertex = null;

        //Find unmarked node with minimum distance
        for (let vertex in graph) {
            if (!marked[vertex] && dist[vertex] < minDist) {
                minDist = dist[vertex];
                minVertex = vertex;
            }
        }

        //Break if there are no more vertices to visit
        if (minVertex === null) {
            break;
        }

        marked[minVertex] = true;

        //Update distances to all adjacent vertices
        for (let adjacent in graph[minVertex]) {
            let newDist = dist[minVertex] + graph[minVertex][adjacent];
            if (newDist < dist[adjacent]) {
                dist[adjacent] = newDist;
            }
        }
    }

    return dist;
}

function testDijkstra(graph, start, expected) {
    var path = dijkstra(graph, start);

    if (path.length != expected.length) {
        console.log("Test failed. length does not match");
    }

    var allMatch = true;

    for (var i = 0; i < path.length; i++) {
        if (path[i] != expected[i]) {
            allMatch = false;
            break;
        }
    }

    if (allMatch) {
        console.log("Test Passed.");
    } else {
        console.log(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(path)}.`);
    }
}

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

testDijkstra(graph, 'foo', graphShortestPath);
testDijkstra(graph1, 'C', graph1ShortestPath);