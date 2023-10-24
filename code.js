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