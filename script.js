// This a visual function thaqt visualize the sorting algorithims
// const n = 10;
// const array = [];
// for (let i = 0; i < n; i++) {
//   array[i] = Math.floor(Math.random() * 100);
// }
async function visual(userArray, index1, index2, check) {
  $(".container").empty();
  const n = userArray.length;
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    if (check === 1) {
      const ele = userArray[i] + 40;
      $(bar).css("height", ele + "px");
      // $(bar).css("height", userArray[i]+"5" + "%");
      $(bar).css("width", "30px");
      $(bar).addClass("bar");
      if (i === index1) {
        $(bar).css("background-color", "red");
      } else if (i === index2) {
        $(bar).css("background-color", "yellow");
      } else {
        $(bar).css("background-color", "black");
      }
      $(bar).css("border", "1px solid white");
      $(bar).css("color", "white");

      $(bar).text(userArray[i]);
      $(".container").append(bar);
    } else {
      var arr_visual = "";
      if (check === 0) {
        arr_visual = ".arr-unsort";
      } else if (check === -1) {
        arr_visual = ".arr-sort";
      }
      $(bar).css("height", "30px");
      $(bar).css("width", "30px");
      $(bar).addClass("bar");

      $(bar).text(userArray[i]);
      $(arr_visual).append(bar);
      $(bar).css("background-color", "black");
      $(bar).css("border", "1px solid white");
      $(bar).css("color", "white");

    }
  }
  await delay(500);
}

//this is a bubble-sort function
async function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await visual(arr, j, j + 1, 1);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        await visual(arr, j + 1, j, 1);
      }
    }

    if (!swapped) break;
  }
  // visual(array, -1, -1, -1);
  // visual(array, -1, -1, 1);
}

//this is a insertion sort function
async function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    await visual(arr, i, -1, 1);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    await visual(arr, -1, j + 1, 1);
  }
  // visual(array, -1, -1, -1);
  // visual(array, -1, -1, 1);
}

// this is a partition function used in quick sort
async function partition(arr, start, end) {
  const pvt = arr[start];
  let i = start + 1,
    j = end;
  while (i <= j) {
    while (i <= end && arr[i] <= pvt) {
      i++;
    }
    while (j > start && arr[j] > pvt) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[start], arr[j]] = [arr[j], arr[start]];

  return j;
}

//this is random number generate function that generate random index to choose pivot element in quick sort
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this is a random quick sort function
async function randomQuickSort(arr, low, high) {
  if (low < high) {
    const r = getRandomNumber(low, high);
    await visual(arr, -1, r, 1);
    [arr[low], arr[r]] = [arr[r], arr[low]];
    const p = await partition(arr, low, high);

    await visual(arr, p, -1, 1);
    await randomQuickSort(arr, low, p - 1);
    await randomQuickSort(arr, p + 1, high);
  }
}

//this is a selection sort function
async function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    await visual(arr, minIdx, -1, 1);
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      await visual(arr, -1, i, 1);
    } else {
      await visual(arr, minIdx, -1, 1);
    }
  }

  // visual(array, -1, -1, -1);
  // visual(array, -1, -1, 1);
}

async function visual_search(array, index, check) {
  $(".container").empty();
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    $(bar).css("height", +"10" + array[i] + "%");
    $(bar).css("width", "30px");
    $(bar).addClass("bar");
    if (check === 1) {
      if (i === index) {
        $(bar).css("background-color", "red");
      } else {
        $(bar).css("background-color", "black");
      }
    } else if (check === 0) {
      if (i === index) {
        $(bar).css("background-color", "yellow");
      } else if (check === -2) {
      } else {
        $(bar).css("background-color", "black");
      }
    } else {
      $(bar).css("background-color", "black");
    }
    $(bar).css("color", "white");
    $(bar).css("border", "1px solid white");
    $(bar).text(array[i]);
    $(".container").append(bar);
  }
  await delay(500);
}

async function linear_search(arr) {
  const n = arr.length;
  const randomIndex = Math.floor(Math.random() * n); // Generate a random index within the array length
  const x = arr[randomIndex]; // Generate a random value to search for
  $(".target").html("Target : " + x);
  for (let i = 0; i < n; i++) {
    await visual_search(arr, i, 1); // Pass all three arguments
    if (arr[i] === x) {
      $(".target").html(
        "Target : " + x + "<br>" + "Target present at index " + i
      );
      await visual_search(arr, i, 0); // Update visualization for found element
      return i;
    }
  }
}
//function for binary search
async function binarySearch(arr) {
  const n = arr.length;
  const randomIndex = Math.floor(Math.random() * n);
  const x = arr[randomIndex];
  $(".target").html("Target : " + x);
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    await visual_search(arr, m, 1);

    if (arr[m] === x) {
      $(".target").html(
        "Target : " + x + "<br>" + "Target present at index " + m
      );
      return m;
    }

    if (arr[m] < x) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  // If we reach here, then element was not present
  return -1;
}

$(document).ready(async function () {
  // Add this code inside your $(document).ready() function
  const userArray = []; // Initialize an array to store user input

  $("#add-element").click(function () {
    const elementValue = $("#array-element").val(); // Get the value entered by the user

    if (elementValue.trim() === "") {
      alert("Please enter a valid element.");
      return;
    }

    // Convert the user input (comma-separated) to an array of integers
    const elements = elementValue.split(",").map((str) => parseInt(str.trim()));

    // Add the elements to the userArray
    userArray.push(...elements);

    // Clear the input field
    // $("#array-element").val("");
  });
  $("#reset-array").click(function () {
    location.reload();
  });
  // You can use the userArray in your sorting and searching algorithms

  $(".insertion-sort").click(async function () {
    // const array = [];
    // for (let i = 0; i < n; i++) {
    //   array[i] = Math.floor(Math.random() * 100);
    // }
    const pseudocode =
    "<h1>Insertion Sort<br> Algorithm</h1><br>" +
   

"<p>Step 1 - If the element is the first element, assume that it is already sorted. Return 1.</p><br>"+

"<p>Step2 - Pick the next element, and store it separately in a key.</p><br>"+

"<p>Step3 - Now, compare the key with all elements in the sorted array.</p><br>"+

"<p>Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.</p><br>"+

"<p>Step 5 - Insert the value.</p><br>"+

"<p>Step 6 - Repeat until the array is sorted.</p><br>"+
"<h3>Time complexity :<h3><br>" +
      "<p>Best : O(n)<p><br>" +
      "<p>Average : O(n^2)<p><br>" +
      "<p>Worst : O(n^2)<p><br>";
$(".psudocode").html(pseudocode);
    await visual(userArray, 1, 1, 0);
    await insertionSort(userArray);
    visual(userArray, -1, -1, -1);
    visual(userArray, -1, -1, 1);
  });
  $(".bubble-sort").click(async function () {
    // const array = [];
    // for (let i = 0; i < n; i++) {
    //   array[i] = Math.floor(Math.random() * 100);
    // }
    const pseudocode =
      "<h1>Bubble Sort<br> Algorithm</h1><br>" +
      "<p>begin BubbleSort(arr)</p><br> "+ 
   "<p>for all array elements</p><br>" + 
      "<p>if arr[i] > arr[i+1]</p><br> " +
        " <p>swap(arr[i], arr[i+1]) </p><br> "+
      "<p>end if</p><br> " +
  "<p> end for</p><br>  "   +
   "<p>return arr</p><br>"  +   
"<p>end BubbleSort</p><br> " +
"<h3>Time complexity :<h3><br>" +
      "<p>Best : O(n^2)<p><br>" +
      "<p>Average : O(n^2)<p><br>" +
      "<p>Worst : O(n^2)<p><br>";
      $(".psudocode").html(pseudocode);
    await visual(userArray, 1, 1, 0);
    await bubbleSort(userArray);
    visual(userArray, -1, -1, -1);
    visual(userArray, -1, -1, 1);
  });
  $(".quick-sort").click(async function () {
    // const array = [];
    // for (let i = 0; i < n; i++) {
    //   array[i] = Math.floor(Math.random() * 100);
    // }
    const pseudocode =
      "<p><h2>Quick Sort  Algorithm</h1></p>" +
      "<p>QUICKSORT (array A, start, end)</p> " +   

 "<p>1 if (start < end)</p> " +   
 
"<p>2 p = partition(A, start, end)</p><br>"  +
"<p>3 QUICKSORT (A, start, p - 1)</p><br>" +
"<p>4 QUICKSORT (A, p + 1, end)</p><br>"  +  


"<h3>Partition  Algorithm</h3><br>" +
"<p>PARTITION (array A, start, end)</p>" +    
 "<p>1 pivot ? A[end]</p>"  +  
 "<p>2 i ? start-1</p>  "   +
 "<p>3 for j ? start to end -1 </p>"  +
" <p>4 do if (A[j] < pivot) "  +
 "<p>5 then i ? i + 1  </p>  " +
 "<p>6 swap A[i] with A[j]</p> "  +

 "<p>7 swap A[i+1] with A[end] </p> "   +
" <p>8 return i+1</p><br> " +

"<h4>Time complexity :<h4><br>" +
      "<p>Best : O(n^2)<p>" +
      "<p>Average : O(n^2)<p>" +
      "<p>Worst : O(n^2)<p>";
      $(".psudocode").html(pseudocode);
    const N = userArray.length;
    await visual(userArray, 1, 1, 0);
    await randomQuickSort(userArray, 0, N - 1);
    visual(userArray, -1, -1, -1);
    visual(userArray, -1, -1, 1);
  });

  $(".selection-sort").click(async function () {
    // const array = [];
    // for (let i = 0; i < n; i++) {
    //   array[i] = Math.floor(Math.random() * 100);
    // }
    const pseudocode =
      "<h1>Selection Sort<br> Algorithm</h1><br>" +
      "<p>Step 1 − Set MIN to location 0</p><br>" +
      "<p>Step 2 − Search the minimum element in the list</p><br>" +
      "<p>Step 3 − Swap with value at location MIN</p><br>" +
      "<p>Step 4 − Increment MIN to point to next element</p><br>" +
      "<p>Step 5 − Repeat until list is sorted</p><br>" +
  //     "<h3>Psudocode :</h3><br><br>"+
  //     "<p> procedure selection sort </p><br>"+
  //  "<p> list  : array of items</p><br>"+
  //  "<p> n     : size of list</p><br>"+

  //  "<p>for i = 1 to n - 1</p><br>"+
  //  /* set current element as minimum*/
  //     "<p>min = i  </p><br>"+  
  
  //     /* check the element to be minimum */

  //     "<p>for j = i+1 to n</p> <br>"+
  //        "<p>if list[j] < list[min] then</p><br>"+
  //           "<p>min = j</p><br>"+
  //        "<p>end if</p><br>"+
  //     "<p>end for</p><br>"+

  //     /* swap the minimum element with the current element*/
  //     "<p>if indexMin != i  then</p><br>"+
  //        "<p>swap list[min] and list[i]</p><br>"+
  //     "<p>end if</p><br>"+
  //  "<p>end for</p><br>"+
      "<h3>Time complexity :<h3><br>" +
      "<p>Best : O(n^2)<p><br>" +
      "<p>Average : O(n^2)<p><br>" +
      "<p>Worst : O(n^2)<p><br>";

      $(".psudocode").html(pseudocode);
      (await visual(userArray, 1, 1, 0));
    await selectionSort(userArray);
    visual(userArray, -1, -1, -1);
    visual(userArray, -1, -1, 1);
  });

  $(".linear-search").click(async function () {
    const pseudocode =
      "<h1>Linear Search Algorithm</h1><br>" +
      "<p>Step 1: Set i to 0</p><br>" +
      "<p>Step 2: Repeat while i < n:</p>" +
      "<p>   - If A[i] equals x, return i</p>" +
      "<p>   - Increment i by 1</p><br>" +
      "<p>Step 3: Return 'Element not found'</p><br><br>" +
      "<h3>Time complexity :<h3><br>" +
      "<p>Best : O(1)<p><br>" +
      "<p>Average : O(n)<p><br>" +
      "<p>Worst : O(n)<p><br>";

    $(".psudocode").html(pseudocode);
    await visual_search(userArray, -1, -1);
    const index = await linear_search(userArray);
    await visual_search(userArray, index, 0);
    //await visual_search(userArray, -1, -1);
  });

  $(".binary-search").click(async function () {
    // const array = [];
    // for (let i = 0; i < n; i++) {
    //   array[i] = Math.floor(Math.random() * 100);
    // }
    const pseudocode =
      "<h1>Binary Search Algorithm</h1><br>" +
      "<p>Step 1: Set left to 0 and right to n-1</p><br>" +
      "<p>Step 2: Repeat while left <= right:</p><br>" +
      "<p>   - Set mid to (left + right) / 2</p>" +
      "<p>   - If A[mid] equals x, return mid</p>" +
      "<p>   - If A[mid] < x, set left to mid + 1</p>" +
      "<p>   - If A[mid] > x, set right to mid - 1</p><br>" +
      "<p>Step 3: Return 'Element not found'</p><br>" +
      "<h3>Time complexity :<h3><br>" +
      "<p>Best : O(1)<p><br>" +
      "<p>Average : O(logn)<p><br>" +
      "<p>Worst : O(logn)<p><br>";

    $(".psudocode").html(pseudocode);
    userArray.sort(function (a, b) {
      return a - b; // Compare function for ascending order
    });
    await visual_search(userArray, -1, -1);
    const index = await binarySearch(userArray);
    await visual_search(userArray, index, 0);
   // await visual_search(userArray, -1, -1);
  });
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function openSortingPage() {
  window.location.href = "sorting.html";
}
function openSearchPage() {
  window.location.href = "search.html";
}
function openDpPage() {
  window.location.href = "dp.html";
}
function openGraphPage() {
  window.location.href = "graph.html";
}
function openAboutPage() {
  window.location.href = "about.html";
}
function openIndexPage() {
  window.location.href = "index.html";
}
// code for search algorithim
