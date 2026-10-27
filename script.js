// ==================== CSE QUESTION BANK ====================
const QUESTION_BANK = [
  // 1. Data Structures & Algorithms
  {
    id: 1,
    subject: "DSA",
    difficulty: "Easy",
    question: "What is the worst-case time complexity of Quick Sort, and when does it occur?",
    code: null,
    options: [
      "O(n log n) — when the pivot is the median",
      "O(n²) — when the array is already sorted and the first/last element is chosen as pivot",
      "O(n) — when all elements are equal",
      "O(n² log n) — when recursion stack overflows"
    ],
    answer: 1,
    explanation: "Quick Sort degrades to O(n²) when the partition is maximally unbalanced (e.g., sorted array with first/last element as pivot), creating a recurrence of T(n) = T(n-1) + O(n)."
  },
  {
    id: 2,
    subject: "DSA",
    difficulty: "Medium",
    question: "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation below?",
    code: "T(n) = 2T(n / 2) + n",
    options: [
      "Θ(n)",
      "Θ(n log n)",
      "Θ(n²)",
      "Θ(log n)"
    ],
    answer: 1,
    explanation: "Here a = 2, b = 2, and f(n) = n. Since n^(log_b(a)) = n^(log_2(2)) = n¹, this falls under Case 2 of the Master Theorem, giving T(n) = Θ(n log n) (same as Merge Sort)."
  },
  {
    id: 3,
    subject: "DSA",
    difficulty: "Hard",
    question: "Which data structure is primarily used to implement Tarjan's Strongly Connected Components (SCC) algorithm?",
    code: null,
    options: [
      "Priority Queue (Min-Heap)",
      "Depth-First Search (DFS) with an explicit Stack",
      "Breadth-First Search (BFS) with a Queue",
      "Disjoint Set Union (Union-Find)"
    ],
    answer: 1,
    explanation: "Tarjan's SCC algorithm performs a single pass of DFS and maintains an invariant stack of valid ancestors along with discovery times and low-link values."
  },

  // 2. Operating Systems
  {
    id: 4,
    subject: "Operating Systems",
    difficulty: "Easy",
    question: "Which of the following is NOT one of Coffman's four necessary conditions for a deadlock to occur?",
    code: null,
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait"
    ],
    answer: 2,
    explanation: "The four Coffman conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Allowing preemption actually prevents or breaks deadlocks."
  },
  {
    id: 5,
    subject: "Operating Systems",
    difficulty: "Medium",
    question: "How many total processes (including the initial parent process) are created when the following C code executes?",
    code: "#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    fork();\n    fork();\n    fork();\n    return 0;\n}",
    options: [
      "3 processes",
      "6 processes",
      "8 processes",
      "7 processes"
    ],
    answer: 2,
    explanation: "For n consecutive fork() calls without conditionals, a total of 2^n processes exist (including the parent) and 2^n - 1 new child processes are spawned. Here 2³ = 8."
  },
  {
    id: 6,
    subject: "Operating Systems",
    difficulty: "Hard",
    question: "Which page replacement algorithm suffers from Belady's Anomaly (more frames leading to more page faults)?",
    code: null,
    options: [
      "Least Recently Used (LRU)",
      "Optimal Page Replacement (OPT)",
      "First-In First-Out (FIFO)",
      "Least Frequently Used (LFU) with stack property"
    ],
    answer: 2,
    explanation: "FIFO does not satisfy the inclusion (stack) property, so increasing physical page frames for reference strings like 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5 increases page faults."
  },

  // 3. Compiler Design
  {
    id: 7,
    subject: "Compiler Design",
    difficulty: "Easy",
    question: "In Compiler Design, which tool is widely used to generate a Lexical Analyzer (Scanner) from regular expressions?",
    code: null,
    options: [
      "YACC / Bison",
      "Lex / Flex",
      "LLVM IR",
      "GDB"
    ],
    answer: 1,
    explanation: "Lex (and Flex) takes regular expression token specifications and generates a deterministic finite automaton (DFA) C implementation (`yylex()`) for lexical analysis."
  },
  {
    id: 8,
    subject: "Compiler Design",
    difficulty: "Medium",
    question: "Which among the following LR parsers is the most powerful and has the largest number of states?",
    code: null,
    options: [
      "SLR(1)",
      "LALR(1)",
      "Canonical LR(1) / CLR(1)",
      "LL(1)"
    ],
    answer: 2,
    explanation: "CLR(1) maintains exact lookahead symbols in each LR(1) item without merging states that share cores, making it the most powerful but also the largest in table size."
  },

  // 4. C Programming & Pointers
  {
    id: 9,
    subject: "C Programming",
    difficulty: "Medium",
    question: "What will be printed to the console when this C program runs?",
    code: "#include <stdio.h>\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    int *p = arr;\n    printf(\"%d\", *(p + 2) + *p);\n    return 0;\n}",
    options: [
      "30",
      "40",
      "50",
      "Compilation Error"
    ],
    answer: 1,
    explanation: "Pointer `p` points to `arr[0]` (10). `*(p + 2)` dereferences `arr[2]` (30). Thus `30 + 10 = 40`."
  },
  {
    id: 10,
    subject: "C Programming",
    difficulty: "Hard",
    question: "What is the output of the following C snippet demonstrating static storage duration?",
    code: "#include <stdio.h>\nint counter() {\n    static int x = 5;\n    return x--;\n}\nint main() {\n    printf(\"%d %d\", counter(), counter());\n    return 0;\n}",
    options: [
      "5 5",
      "5 4",
      "4 3",
      "Undefined Behavior"
    ],
    answer: 1,
    explanation: "`static int x` is initialized only once. The first call returns 5 (post-decrement sets x to 4), and the second call returns 4 (post-decrement sets x to 3)."
  },

  // 5. Artificial Intelligence
  {
    id: 11,
    subject: "Artificial Intelligence",
    difficulty: "Easy",
    question: "In A* State Space Search, the evaluation function is f(n) = g(n) + h(n). When is A* guaranteed to find an optimal solution on a tree search?",
    code: null,
    options: [
      "When h(n) always overestimates the true cost",
      "When h(n) is admissible (never overestimates the true cost to the goal)",
      "When g(n) is set to zero",
      "Only when branching factor b = 1"
    ],
    answer: 1,
    explanation: "An admissible heuristic h(n) <= h*(n) guarantees that A* never overlooks a lower-cost optimal path during tree search."
  },
  {
    id: 12,
    subject: "Artificial Intelligence",
    difficulty: "Medium",
    question: "Which uninformed search strategy is both complete (for finite branching factors) and optimal when all step costs are identical?",
    code: null,
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Greedy Best-First Search",
      "Hill Climbing Search"
    ],
    answer: 1,
    explanation: "BFS explores the shallowest unexpanded node first via a FIFO queue, guaranteeing completeness and optimality when step costs are uniform."
  },

  // 6. Web Development
  {
    id: 13,
    subject: "Web Development",
    difficulty: "Easy",
    question: "What will be logged to the console in JavaScript?",
    code: "console.log(typeof null, null === undefined);",
    options: [
      "\"null\" true",
      "\"object\" false",
      "\"undefined\" false",
      "\"object\" true"
    ],
    answer: 1,
    explanation: "`typeof null` returns `\"object\"` due to a legacy specification quirk in JavaScript, and strict equality `null === undefined` evaluates to `false`."
  },
  {
    id: 14,
    subject: "Web Development",
    difficulty: "Medium",
    question: "In the browser Event Loop, which queue has higher execution priority after the current call stack clears?",
    code: null,
    options: [
      "Macrotask Queue (setTimeout, setInterval)",
      "Microtask Queue (Promise.then, MutationObserver)",
      "DOM Rendering Queue",
      "Both execute simultaneously in separate threads"
    ],
    answer: 1,
    explanation: "The JavaScript Event Loop drains the entire Microtask Queue (e.g., resolved Promises) immediately after each task before picking the next Macrotask (`setTimeout`)."
  }
];

// Subject Metadata for Dashboard Cards
const SUBJECTS = [
  { id: "DSA", title: "Data Structures & Algorithms", icon: "🌳", desc: "Divide & Conquer, Recurrences, Sorting, Trees, and Graph Algorithms." },
  { id: "Operating Systems", title: "Operating Systems", icon: "⚙️", desc: "Process fork(), CPU Scheduling, Deadlocks, and Virtual Memory Paging." },
  { id: "Compiler Design", title: "Compiler Design", icon: "🛠️", desc: "Lexical Analysis (Lex), Parsing (LL/LR), Syntax Trees, and Code Gen." },
  { id: "C Programming", title: "C & Pointers", icon: "💻", desc: "Pointer Arithmetic, Memory Layout, Static Variables, and Arrays." },
  { id: "Artificial Intelligence", title: "Artificial Intelligence", icon: "🤖", desc: "State Space Search, BFS/DFS, A* Heuristics, and Adversarial Games." },
  { id: "Web Development", title: "Web Technologies", icon: "🌐", desc: "HTML5, CSS3 Layout, DOM Manipulation, and JS Event Loop." }
];

// ==================== APPLICATION STATE ====================
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let selectedSubject = "Mixed";
let timerInterval = null;
let timeLeft = 30;
let totalTimeSpent = 0;
let userResponses = [];
let bookmarkedIds = new Set();
let hasAnsweredCurrent = false;

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  renderSubjectCards();
  setupKeyboardShortcuts();
});

function renderSubjectCards() {
  const grid = document.getElementById("subject-grid");
  grid.innerHTML = SUBJECTS.map(sub => {
    const count = QUESTION_BANK.filter(q => q.subject === sub.id).length;
    return `
      <div class="subject-card" onclick="startQuiz('${sub.id}')">
        <div>
          <div class="subject-icon">${sub.icon}</div>
          <h3>${sub.title}</h3>
          <p>${sub.desc}</p>
        </div>
        <div class="subject-card-footer">
          <span>${count} Curated Questions</span>
          <span>Launch →</span>
        </div>
      </div>
    `;
  }).join("");
}

// ==================== QUIZ ENGINE ====================
function startQuiz(subject) {
  selectedSubject = subject;
  const difficulty = document.getElementById("difficulty-select").value;
  const maxCount = parseInt(document.getElementById("count-select").value, 10);

  // Filter questions
  let filtered = QUESTION_BANK.filter(q => {
    const matchSubject = subject === "Mixed" || q.subject === subject;
    const matchDiff = difficulty === "all" || q.difficulty === difficulty;
    return matchSubject && matchDiff;
  });

  // Fallback if filter combination is too strict
  if (filtered.length === 0) {
    filtered = subject === "Mixed"
      ? [...QUESTION_BANK]
      : QUESTION_BANK.filter(q => q.subject === subject);
  }

  // Shuffle and slice
  currentQuiz = shuffleArray([...filtered]).slice(0, maxCount);
  currentIndex = 0;
  score = 0;
  totalTimeSpent = 0;
  userResponses = [];

  switchView("quiz-view");
  renderQuestionDots();
  loadQuestion();
}

function loadQuestion() {
  hasAnsweredCurrent = false;
  const q = currentQuiz[currentIndex];

  // Update Header & Meta
  document.getElementById("quiz-subject-badge").textContent = q.subject;
  document.getElementById("quiz-difficulty-badge").textContent = q.difficulty;
  document.getElementById("question-counter").textContent = `Question ${currentIndex + 1} of ${currentQuiz.length}`;
  document.getElementById("question-text").textContent = q.question;

  // Update Progress Bar
  const progressPercent = ((currentIndex) / currentQuiz.length) * 100;
  document.getElementById("progress-bar").style.width = `${progressPercent}%`;
  updateQuestionDots();

  // Bookmark button state
  const bmBtn = document.getElementById("bookmark-btn");
  bmBtn.classList.toggle("bookmarked", bookmarkedIds.has(q.id));
  bmBtn.textContent = bookmarkedIds.has(q.id) ? "🔖 Flagged" : "🔖 Flag";

  // Code Snippet Handling
  const codeWrapper = document.getElementById("code-block-wrapper");
  const codeEl = document.getElementById("question-code");
  if (q.code) {
    codeWrapper.classList.remove("hidden");
    codeEl.textContent = q.code;
  } else {
    codeWrapper.classList.add("hidden");
    codeEl.textContent = "";
  }

  // Render Options
  const keys = ["A", "B", "C", "D"];
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = q.options.map((opt, idx) => `
    <button class="option-btn" onclick="selectOption(${idx})">
      <span class="option-key">${keys[idx]}</span>
      <span>${escapeHTML(opt)}</span>
    </button>
  `).join("");

  // Hide explanation & Next button
  document.getElementById("explanation-box").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");

  // Start 30s Timer
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  const timerDisplay = document.getElementById("timer-display");
  const timerBox = timerDisplay.parentElement;
  timerDisplay.textContent = timeLeft;
  timerBox.classList.remove("warning");

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 8) {
      timerBox.classList.add("warning");
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function selectOption(selectedIndex) {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;
  clearInterval(timerInterval);

  const q = currentQuiz[currentIndex];
  const isCorrect = selectedIndex === q.answer;
  const timeTaken = 30 - timeLeft;
  totalTimeSpent += timeTaken;

  if (isCorrect) {
    score++;
    streak++;
  } else {
    streak = 0;
  }
  document.getElementById("streak-counter").textContent = `🔥 Streak: ${streak}`;

  // Highlight Buttons
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
    if (idx === selectedIndex && !isCorrect) btn.classList.add("wrong");
  });

  // Record response
  userResponses.push({
    questionObj: q,
    selected: selectedIndex,
    isCorrect: isCorrect,
    timeTaken: timeTaken
  });

  updateQuestionDots();
  showExplanation(q.explanation);
}

function handleTimeOut() {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;
  totalTimeSpent += 30;
  streak = 0;
  document.getElementById("streak-counter").textContent = `🔥 Streak: 0`;

  const q = currentQuiz[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
  });

  userResponses.push({
    questionObj: q,
    selected: -1,
    isCorrect: false,
    timeTaken: 30
  });

  updateQuestionDots();
  showExplanation(`⏰ Time's up! ${q.explanation}`);
}

function showExplanation(text) {
  const expBox = document.getElementById("explanation-box");
  document.getElementById("explanation-text").textContent = text;
  expBox.classList.remove("hidden");

  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent = currentIndex === currentQuiz.length - 1 ? "Finish & View Analytics →" : "Next Question →";
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  if (currentIndex < currentQuiz.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    showResults();
  }
}

// ==================== RESULTS & ANALYTICS ====================
function showResults() {
  clearInterval(timerInterval);
  switchView("result-view");

  const total = currentQuiz.length;
  const accuracy = Math.round((score / total) * 100);
  const avgTime = Math.round(totalTimeSpent / total);

  document.getElementById("final-score").textContent = `${score} / ${total}`;
  document.getElementById("final-accuracy").textContent = `${accuracy}%`;
  document.getElementById("final-time").textContent = `${avgTime}s`;
  document.getElementById("final-bookmarks").textContent = bookmarkedIds.size;

  // Assign CSE Rank Badge
  const rankBadge = document.getElementById("rank-badge");
  if (accuracy >= 85) {
    rankBadge.textContent = "🏆 Principal Kernel Architect (S-Tier)";
  } else if (accuracy >= 65) {
    rankBadge.textContent = "⚡ Senior Systems Engineer (A-Tier)";
  } else if (accuracy >= 45) {
    rankBadge.textContent = "💻 Logic Compiler (B-Tier)";
  } else {
    rankBadge.textContent = "🔧 Debugging Apprentice — Keep Practicing!";
  }

  // Render Review List
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = userResponses.map((item, i) => {
    const q = item.questionObj;
    const userChoice = item.selected === -1 ? "Timed Out (No Answer)" : escapeHTML(q.options[item.selected]);
    const correctChoice = escapeHTML(q.options[q.answer]);

    return `
      <div class="review-item ${item.isCorrect ? 'correct' : 'wrong'}">
        <div class="review-meta">${q.subject} • ${q.difficulty} • ${item.timeTaken}s</div>
        <div class="review-q">${i + 1}. ${escapeHTML(q.question)}</div>
        <p style="font-size:0.9rem; margin-bottom:0.3rem;">
          <b>Your Answer:</b> <span style="color:${item.isCorrect ? '#10b981' : '#ef4444'}">${userChoice}</span>
        </p>
        ${!item.isCorrect ? `<p style="font-size:0.9rem; margin-bottom:0.3rem;"><b>Correct Answer:</b> <span style="color:#10b981">${correctChoice}</span></p>` : ''}
        <p style="font-size:0.86rem; color:#8b949e; margin-top:0.4rem;">💡 ${escapeHTML(q.explanation)}</p>
      </div>
    `;
  }).join("");
}

// ==================== UTILITIES & HELPERS ====================
function renderQuestionDots() {
  const dotsContainer = document.getElementById("question-dots");
  dotsContainer.innerHTML = currentQuiz.map((_, idx) => `<div class="dot" id="dot-${idx}"></div>`).join("");
}

function updateQuestionDots() {
  currentQuiz.forEach((_, idx) => {
    const dot = document.getElementById(`dot-${idx}`);
    if (!dot) return;
    dot.className = "dot";
    if (idx === currentIndex) dot.classList.add("current");
    if (userResponses[idx]) {
      dot.classList.add(userResponses[idx].isCorrect ? "correct" : "wrong");
    }
  });
}

function toggleBookmark() {
  const q = currentQuiz[currentIndex];
  if (bookmarkedIds.has(q.id)) {
    bookmarkedIds.delete(q.id);
  } else {
    bookmarkedIds.add(q.id);
  }
  const bmBtn = document.getElementById("bookmark-btn");
  bmBtn.classList.toggle("bookmarked", bookmarkedIds.has(q.id));
  bmBtn.textContent = bookmarkedIds.has(q.id) ? "🔖 Flagged" : "🔖 Flag";
}

function copyCodeSnippet() {
  const code = document.getElementById("question-code").textContent;
  navigator.clipboard.writeText(code);
  const btn = document.querySelector(".copy-btn");
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = "Copy"), 1500);
}

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const quizActive = document.getElementById("quiz-view").classList.contains("active");
    if (!quizActive) return;

    const key = e.key.toUpperCase();
    if (!hasAnsweredCurrent) {
      if (key === "1" || key === "A") selectOption(0);
      if (key === "2" || key === "B") selectOption(1);
      if (key === "3" || key === "C") selectOption(2);
      if (key === "4" || key === "D") selectOption(3);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      nextQuestion();
    }
  });
}

function restartCurrentQuiz() {
  startQuiz(selectedSubject);
}

function returnToDashboard() {
  clearInterval(timerInterval);
  switchView("dashboard-view");
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag]));
}