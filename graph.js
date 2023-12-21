async function Graph(index1, index2) {
  //$(".container").empty();
  const svg = d3.select("svg");
  svg.selectAll("*").remove();

  const nodes = [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
    { id: 6, label: "Node 6" },
    { id: 7, label: "Node 7" },
    { id: 8, label: "Node 8" },
    { id: 9, label: "Node 9" },
  ];

  const links = [
    { source: 1, target: 2, weight: 4 },
    { source: 1, target: 8, weight: 8 },
    { source: 2, target: 3, weight: 8 },
    { source: 2, target: 8, weight: 11 },
    { source: 3, target: 4, weight: 7 },
    { source: 3, target: 9, weight: 2 },
    { source: 8, target: 9, weight: 7 },
    { source: 8, target: 7, weight: 1 },
    { source: 9, target: 7, weight: 6 },
    { source: 3, target: 6, weight: 4 },
    { source: 4, target: 5, weight: 5 },
    { source: 4, target: 6, weight: 6 },
    { source: 6, target: 5, weight: 5 },
    { source: 6, target: 7, weight: 7 },
  ];

  const nodePositions = [
    [100, 150],
    [250, 80],
    [450, 80],
    [600, 150],
    [450, 290],
    [180, 200],
    [650, 200],
    [600, 250],
    [250, 250],
  ];

//   const marker = svg
//     .append("marker")
//     .attr("id", "arrow")
//     .attr("viewBox", "0 -5 10 10")
//     .attr("refX", 60)
//     .attr("refY", 0)
//     .attr("markerWidth", 10)
//     .attr("markerHeight", 10)
//     .attr("orient", "auto");

//   marker.append("path").attr("d", "M0,-5L10,0L0,5").attr("fill", "red");

  const nodeElements = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", (d, i) => nodePositions[i][0])
    .attr("cy", (d, i) => nodePositions[i][1])
    .attr("r", 20)
    .style("fill", "steelblue");

  const labelElements = svg
    .selectAll(".label")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", (d, i) => nodePositions[i][0])
    .attr("y", (d, i) => nodePositions[i][1])
    .text((d) => d.id)
    .style("fill", "black")
    .style("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("dy", 5);

  const linkElements = svg
    .selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", (d) => nodePositions[d.source - 1][0])
    .attr("y1", (d) => nodePositions[d.source - 1][1])
    .attr("x2", (d) => nodePositions[d.target - 1][0])
    .attr("y2", (d) => nodePositions[d.target - 1][1])
    .style("stroke", "black");
    // .attr("marker-end", "url(#arrow)");

  const linkWeight = svg
    .selectAll(".linkWeight")
    .data(links)
    .enter()
    .append("text")
    .attr("class", "linkWeight")
    .attr(
      "x",
      (d) =>
        (nodePositions[d.source - 1][0] + nodePositions[d.target - 1][0]) / 2
    )
    .attr(
      "y",
      (d) =>
        (nodePositions[d.source - 1][1] + nodePositions[d.target - 1][1]) / 2
    )
    .text((d) => d.weight)
    .style("fill", "black")
    .style("font-size", "12px")
    .attr("text-anchor", "middle")
    .attr("dy", -5)
    .attr("dx", 5);

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const node1 = svg.selectAll(".node").filter((d) => d.id === link.source);
    const node2 = svg.selectAll(".node").filter((d) => d.id === link.target);
    const linkElement = svg.selectAll(".link").filter((d, j) => j === i);
    const linkWeightElement = svg
      .selectAll(".linkWeight")
      .filter((d, j) => j === i);
      if (node1.data()[0].id === index1) {
        node1.style("fill", "red");
      }
  
      if (node2.data()[0].id === index2) {
        node2.style("fill", "red");
      }
    if (node1.data()[0].id === index1 && node2.data()[0].id === index2) {
      linkElement.style("stroke", "red");
    }
  }
  await delay(1000);
}

async function visual1dDp(dp, index) {
  $(".arr").empty();
  for (let i = 0; i < 9; i++) {
    const container = document.createElement("div");
    const bar = document.createElement("div");
    const indexLabel = document.createElement("div");

    $(container).css("display", "flex");
    $(container).css("flex-direction", "column");
    $(bar).css("height", "50px");
    $(bar).css("width", "50px");
    $(bar).addClass("bar");
    if (i === index) {
      $(bar).css("background-color", "red");
      //   } else if (i === index - 1 || i === index - 2) {
      //     $(bar).css("background-color", "yellow");
    } else {
      $(bar).css("background-color", "white");
    }
    $(bar).css("color","black");
    // Display both value and index
    $(bar).text(dp[i]);

    $(indexLabel).text(i+1);
    $(indexLabel).css("text-align", "center");
    $(indexLabel).css("color", "black");

    $(container).append(indexLabel);
    $(container).append(bar);
    $(".arr").append(container);
    $(bar).css("border", "0.1px solid black");
  }
  await delay(100);
}


//async function runGraphs() {
//     await graph(2, 3);
//     // await new Promise(resolve => setTimeout(resolve, 500)); // Add a delay here
//     await graph(2, 6);
// //}
//runGraphs();
// await runGraphs(2,3);
// await runGraphs(2,6);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// A Javascript program for Dijkstra's single
// source shortest path algorithm.
// The program is for adjacency matrix
// representation of the graph
let V = 9;

// A utility function to find the
// vertex with minimum distance
// value, from the set of vertices
// not yet included in shortest
// path tree
function minDistance(dist, sptSet) {
  // Initialize min value
  let min = Number.MAX_VALUE;
  let min_index = -1;

  for (let v = 0; v < V; v++) {
    if (sptSet[v] == false && dist[v] <= min) {
      min = dist[v];
      min_index = v;
    }
  }
  return min_index;
}


async function dijkstra(graph, src) {
  let dist = new Array(V);
  let sptSet = new Array(V);

  // Initialize all distances as
  // INFINITE and stpSet[] as false
  for (let i = 0; i < V; i++) {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = false;
  }

  // Distance of source vertex
  // from itself is always 0
  dist[src] = 0;

  // Find shortest path for all vertices
  for (let count = 0; count < V - 1; count++) {
    // Pick the minimum distance vertex
    // from the set of vertices not yet
    // processed. u is always equal to
    // src in first iteration.
    let u = minDistance(dist, sptSet);

    // Mark the picked vertex as processed
    sptSet[u] = true;

    // Update dist value of the adjacent
    // vertices of the picked vertex.
    for (let v = 0; v < 9; v++) {
      // Update dist[v] only if is not in
      // sptSet, there is an edge from u
      // to v, and total weight of path
      // from src to v through u is smaller
      // than current value of dist[v]
      if (
        !sptSet[v] &&
        graph[u][v] != 0 &&
        dist[u] != Number.MAX_VALUE &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
        await Graph(u + 1, v + 1);
        visual1dDp(dist, v);
      }
    }
  }

  // Print the constructed distance arprintSolution(dist);
}


	
// Driver program to test methods of graph class
	
	
	
// This code is contributed by Aman Kumar.



async function bfs(graph, startNode) {
  const v = graph.length;
  const sequence = new Array(v).fill(-1);
  const visited = new Array(v).fill(0);
  const queue = [];

  queue.push(startNode);
  visited[startNode] = 1;
  //console.log(startNode + "->");
 sequence[0]=startNode+1;
 let count=1;
 await visual1dDp(sequence,0);
  while (queue.length !== 0) {
    const currentNode = queue.shift();

    for (let i = 0; i < v; i++) {
      if (visited[i] === 0) {
        if (graph[currentNode][i] !== 0) {
          queue.push(i);
          visited[i] = 1;
          sequence[count++]=i+1;
          await visual1dDp(sequence,count-1);
          await Graph(currentNode+1,i+1);
          //console.log(i + "->");
        }
      }
    }
  }
  await visual1dDp(sequence,-1);
  await Graph(-1,-1);
}
async function dfs(v, s) {
  const stack = [];
  const visited = new Array(v).fill(0);
  const sequence = new Array(v).fill(-1);
  stack.push(s);
  visited[s] = 1;
  
  sequence[0]=s+1;
  let count=1;
  await visual1dDp(sequence,0);
  while (stack.length !== 0) {
    const currentNode = stack.pop();

    for (let i = 0; i < v; i++) {
      if (visited[i] === 0) {
        if (graph[currentNode][i] !== 0) {
          stack.push(i);
          visited[i] = 1;
          
          sequence[count++]=i+1;
          await visual1dDp(sequence,count-1);
          await Graph(currentNode+1,i+1);
        }
      }
    }
  }
  await visual1dDp(sequence,-1);
  await Graph(-1,-1);
}


// Driver code
let graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

$(document).ready(async function () {
  $(".Dijkstra").click(async function () {
    const pseudocode =
    "<h3>Dijkstra's Algorithm</h3><br>" +
    "<pre>1  function Dijkstra(Graph, source):</pre><br>"+
         
    "<pre>2      for each vertex v in Graph.Vertices:</pre>"+
    "<pre>3          dist[v] ← INFINITY</pre>"+
    "<pre>4          prev[v] ← UNDEFINED</pre>"+
    "<pre>5          add v to Q</pre>"+
    "<pre>6      dist[source] ← 0</pre><br>"+
         
    "<pre>7      while Q is not empty:</pre>"+
   "<pre>8          u ← vertex in Q with min dist[u]</pre>"+
   "<pre>9          remove u from Q</pre><br>"+
             
   "<pre>10          for each neighbor v of u still in Q:</pre>"+
   "<pre>11              alt ← dist[u] + Graph.Edges(u, v)</pre>"+
   "<pre>12              if alt < dist[v]:</pre>"+
   "<pre>13                  dist[v] ← alt</pre>"+
   "<pre>14                  prev[v] ← u</pre><br>"+
   
   "<pre>15      return dist[], prev[]</pre><br>"+
   "<h4>Time Complexity: O(V2)</h4><br>"+
"<h4>Auxiliary Space: O(V)</h4><br>";
         $(".psudocode").html(pseudocode);
    $(".arr-name").text("Shortest Distabce From Node 1:");
    $(".arr-name").css("color","black");
    dijkstra(graph, 0);
  });

  $(".bfs").click(async function () {
    const pseudocode =
    "<h1>BFS<br> Algorithm</h1><br>" +
    "<h3>Psudocode :</h3><br>"+
    "<pre>1 create a queue Q</pre><br>"+ 
"<pre>2 mark v as visited and put v into Q </pre><br>"+
"<pre>3 while Q is non-empty</pre><br>"+ 
"<pre>4    remove the head u of Q</pre><br>"+ 
"<pre>5    mark and enqueue all (unvisited) neighbours of u</pre><br>"+
"<h3>Time Complexity: O(V+E)</h3><br>"+
"<h3>Auxiliary Space: O(V)</h3><br>";
"<p>where V is the number of nodes and E is the number of edges.</p><br>";
$(".psudocode").html(pseudocode);
    $(".arr-name").text("BFS sequence :");
    $(".arr-name").css("color","black");
   bfs(graph, 0);

  });
  $(".dfs").click(async function () {
    const pseudocode =
    "<h3>DFS Algorithm</h3><br>" +
    "<h3>Psudocode :</h3><br>"+
    "<h4>DFS(G,v)   ( v is the vertex where the search starts )</h4>"+    
      "<pre>1  Stack S := {};   ( start with an empty stack )</pre>"+    
      "<pre>2  for each vertex u, set visited[u] := false;</pre>"+    
      "<pre>3  push S, v;</pre><br>"+    
      "<pre>4  while (S is not empty) do</pre>"+    
      "<pre>5     u := pop S;</pre>"+    
      "<pre>6     if (not visited[u]) then</pre>"+    
      "<pre>7        visited[u] := true; </pre>"+   
      "<pre>8        for each unvisited neighbour w of uu</pre>"+    
      "<pre>9           push S, w</pre><br>"+   
      "<pre>10     end if</pre><br>"+    
      "<pre>11  end while</pre><br>"+    
     "<pre>12 END DFS() </pre><br>"+   
     "<h4>Time Complexity: O(V+E)</h4>"+
"<h4>Auxiliary Space: O(V)</h4><br>"+
   "<p> where V is the number of nodes and E is the number of edges.</p>";
   $(".psudocode").html(pseudocode);
    $(".arr-name").text("DFS sequence :");
    $(".arr-name").css("color","black");
    dfs(9, 0);

  });
});


