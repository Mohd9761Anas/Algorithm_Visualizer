//2d dp visual function
async function visual2dDp(dp,i1,i2,j1,j2,row,col) {
  $(".container").empty();
  const n = dp.length;
  const m = dp[0].length;
  $(".container").css("display", "grid");
  $(".container").css("grid-template-columns", `repeat(${m}, 30px)`); // Set column size
  $(".container").css("grid-template-rows", `repeat(${n}, 30px)`); // Set row size

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const bar = document.createElement("div");
       if((i===i1 && j===j1)||(i==i2&&j===j2)){
        $(bar).css("background-color", "Red");
       }
       else if(i===row &&j===col){
        $(bar).css("background-color", "Yellow");
       }
       else{
        $(bar).css("background-color", "black");
       }
      $(bar).css("height", "30px");
      $(bar).css("width", "30px");
      $(bar).addClass("bar");
      $(bar).css("color", "white");
      $(bar).css("border", "1px solid white");
      $(bar).text(dp[i][j]);
      $(".container").append(bar);
    }

    
  }
  await delay(100);
}
 
// 1d dp visual function
async function visual1dDp(dp, index) {
  $(".container").empty();
  for (let i = 0; i <= 15; i++) {
    const container = document.createElement("div");
    const bar = document.createElement("div");
    const indexLabel = document.createElement("div");

    $(container).css("display", "flex");
    $(container).css("flex-direction", "column");
    $(bar).css("height", "30px");
    $(bar).css("width", "30px");
    $(bar).css("color", "white");
    $(bar).addClass("bar");
    if (i === index) {
      $(bar).css("background-color", "red");
    } else if (i === index - 1 || i === index - 2) {
      $(bar).css("background-color", "yellow");
    } else {
      $(bar).css("background-color", "black");
    }

    // Display both value and index
    $(bar).text(dp[i]);

    $(indexLabel).text(i);
    $(indexLabel).css("text-align", "center");
    $(indexLabel).css("color", "black");

    $(container).append(indexLabel);
    $(container).append(bar);
    $(".container").append(container);
    $(bar).css("border", "0.1px solid white");
  }
  await delay(100);
}

// array visual function
async function visualArray(array,check){
    var arr_text="";
    var arr_visual = "";
      if (check === 0) {
        arr_visual = ".profit";
        arr_text=".profit-text";
        $(arr_text).text("Profit Array:");
      } else if (check === 1) {
        arr_visual = ".weight";
        arr_text=".weight-text";
        $(arr_text).text("Weighted array:");
      }
      
      const n = array.length;
      for(let i=0;i<n;i++){
        // const bar = document.createElement("div");
        // $(bar).css("height", "30px");
        // $(bar).css("width", "30px");
        // $(bar).addClass("bar");
  
        // $(bar).text(array[i]);
        // $(arr_visual).append(bar);
        const container = document.createElement("div");
    const bar = document.createElement("div");
    const indexLabel = document.createElement("div");

    $(container).css("display", "flex");
    $(container).css("flex-direction", "column");
    $(bar).css("height", "40px");
    $(bar).css("width", "30px");
    $(bar).addClass("bar")
    $(bar).text(array[i]);
    $(bar).css("color","white");

    $(indexLabel).text(i+1);
    $(indexLabel).css("text-align", "center");
    $(indexLabel).css("color", "black");

    $(container).append(indexLabel);
    $(container).append(bar);
    $(arr_visual).append(container);
    $(bar).css("border", "0.1px solid white");
        $(bar).css("background-color", "black");
        // $(bar).css("border", "1px solid white");
      }
      await delay(100);
      
}
//visual function for string
async function visualString(str,check,index){
  var str_text="";
  var str_visual = "";
    if (check === 0) {
      str_visual = ".str1";
      str_text=".str1-text";
      $(str_text).text("String 1:");
    } else if (check === 1) {
      str_visual = ".str2";
      str_text=".weight-text";
      $(str_text).text("String 2:");
    }
    $(str_visual).empty();
    const n = str.length;
    for(let i=0;i<n;i++){
     
      const container = document.createElement("div");
  const bar = document.createElement("div");
  const indexLabel = document.createElement("div");

  $(container).css("display", "flex");
  $(container).css("flex-direction", "column");
  $(bar).css("height", "40px");
  $(bar).css("width", "30px");
  $(bar).addClass("bar")
  $(bar).text(str[i]);
  $(bar).css("color","white");
  $(indexLabel).text(i);
  $(indexLabel).css("text-align", "center");
  $(indexLabel).css("color", "black");

  $(container).append(indexLabel);
  $(container).append(bar);
  $(str_visual).append(container);
  $(bar).css("border", "0.1px solid white");
  
    if(i===index){

      $(bar).css("background-color", "red");
    }else{
      
      $(bar).css("background-color", "black");
    }
  
  
      // $(bar).css("border", "1px solid white");
    }
    await delay(200);
    
}
//0/1 knapsack function
async function knapSack(W, wt, val, n) {
  
  const K = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    K[i] = new Array(W + 1).fill(0);
  }
await visual2dDp(K,-1,-1,-1,-1-1,-1);
await visualArray(wt,1);
await visualArray(val,0);
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (wt[i - 1] <= w) {
       
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
        
      } else {
        K[i][w] = K[i - 1][w];
       
      }
      await visual2dDp(K,i-1,i-1,w-wt[i-1],w,i,w);
      
      
    }
  }
  await visual2dDp(K,-1,-1,-1,-1,-1,-1);
  
}


//longest common sub sequence
async function lcs(){
  
  const string1 = 'AGGTAB';
const string2 = 'GXTXAYB';
const m = string1.length;
const n = string2.length;
const A = new Array(m + 1);
for (let i = 0; i < m + 1; i++) {
  A[i] = new Array(n + 1);
}


let lcsIndexes1 = [];
let lcsIndexes2 = [];

let i;
let j;
await visualString(string1,0,-1);
        await visualString(string2,1,-1);
// Build the memo table in bottom up fashion
for (i = 0; i <= m; i++) {
  for (j = 0; j <= n; j++) {
    if (i === 0 || j === 0) {
      A[i][j] = 0;
     await visual2dDp(A,-1,-1,-1,-1,i,j);
    } else if (string1[i - 1] === string2[j - 1]) {
      
      A[i][j] = A[i - 1][j - 1] + 1;

      // visualize {
        await visualString(string1,0,i-1);
        await visualString(string2,1,j-1);
      await visual2dDp(A,i-1,-1,j-1,-1,i,j);
      lcsIndexes1.push(i - 1);
      lcsIndexes2.push(j - 1);
      // }
    } else {
      // visualize {
     
      // }

      if (A[i - 1][j] > A[i][j - 1]) {
        A[i][j] = A[i - 1][j];
      } else {
        A[i][j] = A[i][j - 1];
      }

      // visualize {
        await visualString(string1,0,-1);
        await visualString(string2,1,-1);
        await visual2dDp(A,i-1,i,j,j-1,i,j);
      // }
    }
    // visualize {
   
    // }
  }
  
}
await visualString(string1,0,-1);
await visualString(string2,1,-1);
await visual2dDp(A,i-1,i,j,j-1,i,j);
let finalString = '';
i = m;
j = n;
while (i >= 1 && j >= 1) {
  
  if (string1[i - 1] === string2[j - 1]) {
    // visualize {
   
    // }

    finalString = string1[i - 1] + finalString;
    i--;
    j--;
  } else if (A[i - 1][j] > A[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}
for(let i=0;i<finalString.length;i++){

}
$(".capacity").text("Longest common sub sequence : " +finalString);
$(".capacity").css("color", "white");

}

// fibonacci function
async function fibonacci(dp){
  
  for(let i=2;i<=15;i++){
    dp[i]=dp[i-1]+dp[i-2];
    await visual1dDp(dp,i);
  }
  await visual1dDp(dp,-1);
}

// ready document
$(document).ready(async function () {

  //visualize 0/1 knapsack
  $(".knapsack").click(async function () {
    
    const pseudocode ="<h2>0/1 Knapsack </h2><br>"+
    "<h1><pre>Psudocode :<pre></h1>"+
    "<p>0-1-knapsack (v, w, n, W)</p><br>"+
"<pre> for w = 0 to W do</pre>"+
   "<pre>   c[0, w] = 0</pre>"+
"<pre>for i = 1 to n do</pre>"+
   "<pre>  c[i, 0] = 0</pre>"+
   "<pre>    for w = 1 to W do</pre>"+
      "<pre>      if wi ≤ w then</pre>"+
         "<pre>        if vi + c[i-1, w-wi] then</pre>"+
            "<pre>          c[i, w] = vi + c[i-1, w-wi]</pre>"+
         "<pre>        else c[i, w] = c[i-1, w]</pre>"+
      "<pre>      else<pre>"+
         "<pre>        c[i, w] = c[i-1, w]</pre><br>"+
         "<h3>Time complexity :O(n.W)<br>"+
         "<h3>Auxilary Space :O(W)<br>" ;
     
      $(".psudocode").html(pseudocode);
  const profit = [10, 20, 12,50,40];
  const weights = [2, 1, 3,4,5];
  const W = 6;
  const n = profit.length;
  
 await knapSack(W, weights, profit, n);
  });
//visualize lcs
$(".lcs").click(async function (){
  const pseudocode ="<h3>Longest Common Subsequence </h3><br>"+
  "<h1><pre>Psudocode :<pre></h1>"+
  "<pre>1 Initialize a table LCS of dimension X.length * Y.length</pre><br>"+
  "<pre>2 X and Y be two given sequences</pre><br>"+
"<pre>3 X.label = X</pre><br>"+
"<pre>4 Y.label = Y</pre><br>"+
"<pre>5 LCS[0][] = 0</pre><br>"+
"<pre>6 LCS[][0] = 0</pre><br>"+
"<pre>7 Start from LCS[1][1]</pre><br>"+
"<pre>8 Compare X[i] and Y[j]</pre><br>"+
 "<pre>9    If X[i] = Y[j]</pre><br>"+
 "<pre>10        LCS[i][j] = 1 + LCS[i-1, j-1]</pre><br>"+   
 "<pre>11        Point an arrow to LCS[i][j]</pre><br>"+
 "<pre>12    else</pre><br>"+
 "<pre>13        LCS[i][j] = max(LCS[i-1][j], LCS[i][j-1])</pre><br>"+
 "<pre>14        Point an arrow to max(LCS[i-1][j], LCS[i][j-1])</pre><br>"+
 "<h4>Time Complexity: O(2m*n)</h4>"+
"<h4>Auxiliary Space: O(1)</h4>";
$(".psudocode").html(pseudocode);

      await lcs();
});
  //visualize fibonacci series
  $(".fibonacci").click(async function () {
    $(".profit-text").html("<h3>Fibonacci Sequence </h3>");
    $(".profit-text").css("text-align","center")
    $(".profit-text").css("color","#333")
    const pseudocode ="<h2>Fibonacci Sequence </h2><br>"+
  "<h1><pre>Psudocode :<pre></h1>"+
  "<pre>1 fibonacci(int n):</pre><br>"+

    "<pre>2 Initialize 1d array F[n+1] of size n+1</pre><br>"+
 
    "<pre>3 F[0]=0</pre><br>"+
    "<pre>4 F[1]=1</pre><br>"+
 
    "<pre>5 for(int i=2;i<=n;i++)</pre><br>"+
    "<pre>6     F[i]=F[i-1]+F[i-2];</pre><br>"+
 
    "<pre>7 return F[n];</pre><br>"+

  "<h3>Time complexity: O(n) for given n</h3><br>"+
"<h3>Auxiliary space: O(n)</h3>";
$(".psudocode").html(pseudocode);
    const dp = new Array(16).fill(0);
    dp[0]=1;
    dp[1]=1;
    await visual1dDp(dp,-1);
    await fibonacci(dp);
    });
});

// delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
