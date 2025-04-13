let questions = [
  "Largest Element in an Array",
  "Second Largest Element in an Array without sorting",
  "Check if the array is sorted",
  "Remove duplicates from Sorted array",
  "Left Rotate an array by one place",
  "Left rotate an array by D places",
  "Move Zeros to end",
  "Linear Search",
  "Find the Union",
  "Find missing number in an array",
  "Maximum Consecutive Ones",
  "Find the number that appears once, and other numbers twice.",
  "Longest subarray with given sum K (positives)",
  "Longest subarray with sum K (positives + negatives)",
  "2sum",
  "Sort an array of 0's 1's and 2's",
  "Majority Element (>n/2 times)",
  "Kadane's Algorithm, maximum subarray sum",
  "Print subarray with maximum subarray sum (extended version of above problem)",
  "Stock Buy and Sell",
  "Rearrange the array in alternating positive and negative items",
  "Next Permutation",
  "Leaders in an Array problem",
  "Longest Consecutive Sequence in an Array",
  "Set Matrix Zeros",
  "Rotate Matrix by 90 degrees",
  "Print the matrix in spiral manner",
  "Count subarrays with given sum",
  "Pascal's Triangle",
  "Majority Element (n/3 times)",
  "3-Sum Problem",
  "4-Sum Problem",
  "Largest Subarray with 0 Sum",
  "Count number of subarrays with given xor K",
  "Merge Overlapping Subintervals",
  "Merge two sorted arrays without extra space",
  "Find the repeating and missing number",
  "Count Inversions",
  "Reverse Pairs",
  "Maximum Product Subarray",
  "Binary Search to find X in sorted array",
  "Implement Lower Bound",
  "Implement Upper Bound",
  "Search Insert Position",
  "Floor/Ceil in Sorted Array",
  "Find the first or last occurrence of a given number in a sorted array",
  "Count occurrences of a number in a sorted array with duplicates",
  "Search in Rotated Sorted Array I",
  "Search in Rotated Sorted Array II",
  "Find minimum in Rotated Sorted Array",
  "Find out how many times has an array been rotated",
  "Single element in a Sorted Array",
  "Find peak element",
  "Find square root of a number in log n",
  "Find the Nth root of a number using binary search",
  "Koko Eating Bananas",
  "Minimum days to make M bouquets",
  "Find the smallest Divisor",
  "Capacity to Ship Packages within D Days",
  "Kth Missing Positive Number",
  "Aggressive Cows",
  "Book Allocation Problem",
  "Split array - Largest Sum",
  "Painter's partition",
  "Minimize Max Distance to Gas Station",
  "Median of 2 sorted arrays",
  "Kth element of 2 sorted arrays",
  "Find the row with maximum number of 1's",
  "Search in a 2 D matrix",
  "Search in a row and column wise sorted matrix",
  "Find Peak Element (2D Matrix)",
  "Matrix Median",
  "Remove outermost Paranthesis",
  "Reverse words in a given string / Palindrome Check",
  "Largest odd number in a string",
  "Longest Common Prefix",
  "Isomorphic String",
  "check whether one string is a rotation of another",
  "Check if two strings are anagram of each other",
  "Sort Characters by frequency",
  "Maximum Nesting Depth of Paranthesis",
  "Roman Number to Integer and vice versa",
  "Implement Atoi",
  "Count Number of Substrings",
  "Longest Palindromic Substring [Do it without DP]",
  "Sum of Beauty of all substring",
  "Reverse Every Word in A String",
  "Inserting a node in LinkedList",
  "Deleting a node in LinkedList",
  "Find the length of the linkedlist [learn traversal]",
  "Search an element in the LL",
  "Insert a node in DLL",
  "Delete a node in DLL",
  "Reverse a DLL",
  "Reverse a LinkedList [Iterative]",
  "Reverse a LL [Recursive]",
  "Detect a loop in LL",
  "Find the starting point in LL",
  "Length of Loop in LL",
  "Check if LL is palindrome or not",
  "Segrregate odd and even nodes in LL",
  "Remove Nth node from the back of the LL",
  "Delete the middle node of LL",
  "Sort LL",
  "Sort a LL of 0's 1's and 2's by changing links",
  "Find the intersection point of Y LL",
  "Add 1 to a number represented by LL",
  "Add 2 numbers in LL",
  "Middle Of A linked List",
  "Delete all occurrences of a key in DLL",
  "Find pairs with given sum in DLL",
  "Remove duplicates from sorted DLL",
  "Reverse LL in group of given size K",
  "Rotate a LL",
  "Flattening of LL",
  "Clone a Linked List with random and next pointer",
];

const questionList = document.querySelector(".question-list");
const QUESTIONS_PER_DAY = 5;

let seenQuestions = JSON.parse(localStorage.getItem("seenQuestions") || "[]");
let lastDate = localStorage.getItem("lastDate");
let today = new Date().toDateString();

function getTodaysQuestions() {
  if (lastDate !== today) {
    lastDate = today;

    let remaining = questions.filter((q) => !seenQuestions.includes(q));

    if (remaining.length < QUESTIONS_PER_DAY) {
      seenQuestions = [];
      remaining = [...questions];
    }

    remaining.sort(() => 0.5 - Math.random());
    const todays = remaining.slice(0, QUESTIONS_PER_DAY);

    seenQuestions.push(...todays);

    localStorage.setItem("seenQuestions", JSON.stringify(seenQuestions));
    localStorage.setItem("lastDate", today);
    localStorage.setItem("todaysQuestions", JSON.stringify(todays));

    return todays;
  } else {
    return JSON.parse(localStorage.getItem("todaysQuestions") || "[]");
  }
}

function renderQuestions() {
  const todays = getTodaysQuestions();
  todays.forEach((q) => {
    const label = document.createElement("label");
    const key = `checked_${q}`;

    const isChecked = localStorage.getItem(key) === "true";
    label.innerHTML = `<input type="checkbox" ${
      isChecked ? "checked" : ""
    }> ${q}`;
    if (isChecked) label.classList.add("checked");

    const checkbox = label.querySelector("input");

    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked);
      label.classList.toggle("checked", checkbox.checked);
    });

    questionList.appendChild(label);
  });
}

renderQuestions();
