   
        // --- Planet Icons SVG Definitions ---
        const planetIcons = {
            study: `<svg class="planet-icon" viewBox="0 0 100 100"><defs><radialGradient id="grad_study" cx="30%" cy="30%" r="70%"><stop offset="0%" style="stop-color:#FDE68A;stop-opacity:1" /><stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" /></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#grad_study)"/><ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="#FDE68A" stroke-width="3" transform="rotate(-20 50 50)"/></svg>`,
            DSA: `<svg class="planet-icon" viewBox="0 0 100 100"><defs><radialGradient id="grad_dsa" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#A7F3D0;stop-opacity:1" /><stop offset="100%" style="stop-color:#34D399;stop-opacity:1" /></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#grad_dsa)"/><path d="M 20,50 C 40,30 60,70 80,50" stroke="rgba(255,255,255,0.4)" stroke-width="5" fill="none"/><path d="M 25,60 C 45,80 65,40 85,60" stroke="rgba(255,255,255,0.3)" stroke-width="4" fill="none"/></svg>`,
            Development: `<svg class="planet-icon" viewBox="0 0 100 100"><defs><radialGradient id="grad_development" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#93C5FD;stop-opacity:1" /><stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" /></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#grad_development)"/><circle cx="45" cy="45" r="2" fill="#FDE68A"/><circle cx="55" cy="55" r="2" fill="#FDE68A"/><circle cx="60" cy="40" r="1" fill="#FDE68A"/></svg>`,
            project: `<svg class="planet-icon" viewBox="0 0 100 100"><defs><radialGradient id="grad_project" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:#93C5FD;stop-opacity:1" /><stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" /></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#grad_project)"/><circle cx="45" cy="45" r="2" fill="#FDE68A"/><circle cx="55" cy="55" r="2" fill="#FDE68A"/><circle cx="60" cy="40" r="1" fill="#FDE68A"/></svg>`,
        };

        // --- Daily Content Data ---
   let craftedItems = [];
let inventory = { 'scrap': 0, 'crystal': 0, 'datachip': 0 }; // ADD THIS

let researchPoints = 0, unlockedTech = [], completedChallenges = [];


const components = {
    // Common Components
    'scrap': { name: 'Nano-Steel Scrap', icon: '🔩', rarity: 'common' },
    'datachip': { name: 'Encrypted Data Chip', icon: '💾', rarity: 'common' },
    
    // Uncommon Components
    'crystal': { name: 'Quantum Crystal', icon: '💎', rarity: 'uncommon' },
    'circuit': { name: 'Micro-Circuitry', icon: '⚙️', rarity: 'uncommon' },
    
    // Rare Component
    'core': { name: 'Sentient AI Core', icon: '🧠', rarity: 'rare' }
};

const craftingRecipes = {
    // --- Consumables (Single-Use Boosts) ---
    'boost_rp_1': {
        name: 'RP Booster (30 min)',
        type: 'consumable',
        description: 'Doubles all RP earned from completing tasks for 30 minutes.',
        cost: { 'datachip': 15, 'crystal': 5 }
    },
    'boost_comp_1': {
        name: 'Component Magnet (1 hour)',
        type: 'consumable',
        description: 'Doubles your chance of finding components for one hour.',
        cost: { 'scrap': 30, 'circuit': 2 }
    },

    // --- Permanent Upgrades & Blueprints ---
    'theme_nebula': {
        name: 'Nebula Theme Blueprint',
        type: 'permanent',
        description: 'A vibrant theme of purple and blue cosmic clouds.',
        cost: { 'crystal': 15 }
    },
    'theme_aurora': {
        name: 'Aurora Theme Blueprint',
        type: 'permanent',
        description: 'A brilliant green and cyan theme inspired by polar lights.',
        cost: { 'crystal': 30, 'datachip': 5 }
    },
    'theme_gold': {
        name: 'Gilded Galaxy Blueprint',
        type: 'permanent',
        description: 'An elegant black and gold theme for the discerning user.',
        cost: { 'crystal': 50, 'circuit': 10, 'core': 1 } // Requires a rare core
    },
    'focus_bonus_1': {
        name: 'Focus Capacitor Mk. I',
        type: 'permanent',
        description: 'Permanently increases RP gain from Focus Mode by 10%.',
        cost: { 'scrap': 20, 'datachip': 10 }
    },
    'focus_bonus_2': {
        name: 'Focus Capacitor Mk. II',
        type: 'permanent',
        description: 'Increases RP gain from Focus Mode by an additional 15%.',
        cost: { 'scrap': 40, 'datachip': 25, 'circuit': 2 }
    },
    'component_finder_1': {
        name: 'Component Scanner',
        type: 'permanent',
        description: 'Permanently increases the chance to find components by 5%.',
        cost: { 'scrap': 50, 'circuit': 1 }
    }
};
        const motivationalQuotes = [
    'The journey of a thousand miles begins with a single step.',
    'Discipline is the bridge between goals and accomplishment.',
    'Your only limit is you.',
    'The only way to do great work is to love what you do.',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'Believe you can and you\'re halfway there.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'The secret of getting ahead is getting started.',
    'Don\'t watch the clock; do what it does. Keep going.',
    'Act as if what you do makes a difference. It does.',
    'Hardships often prepare ordinary people for an extraordinary destiny.',
    'The harder you work for something, the greater you\'ll feel when you achieve it.',
    'Dream bigger. Do bigger.',
    'It’s not whether you get knocked down, it’s whether you get up.',
    'You are capable of more than you know.',
    'The expert in anything was once a beginner.',
    'The difference between ordinary and extraordinary is that little extra.',
    'Your positive action combined with positive thinking results in success.',
    'Strive for progress, not perfection.',
    'The only person you are destined to become is the person you decide to be.',
    'Go the extra mile. It’s never crowded there.',
    'Success is the sum of small efforts, repeated day in and day out.',
    'A little progress each day adds up to big results.',
    'It does not matter how slowly you go as long as you do not stop.',
    'The key to success is to focus on goals, not obstacles.',
    'Wake up with determination. Go to bed with satisfaction.',
    'Push yourself, because no one else is going to do it for you.',
    'You have to be at your strongest when you’re feeling at your weakest.',
    'The best way to predict the future is to create it.',
    'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
    'If you want to lift yourself up, lift up someone else.',
    'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    'Do something today that your future self will thank you for.',
    'The secret to your success is found in your daily routine.',
    'Either you run the day or the day runs you.',
    'You will never always be motivated, so you must learn to be disciplined.',
    'The comeback is always stronger than the setback.',
    'I am not a product of my circumstances. I am a product of my decisions.',
    'The temptation to quit will be greatest just before you are about to succeed.',
    'Doubt kills more dreams than failure ever will.',
    'Set a goal that makes you want to jump out of bed in the morning.',
    'You don’t find willpower, you create it.',
    'Success doesn’t just find you. You have to go out and get it.',
    // Added 20 More Entries
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'Your limitation—it’s only your imagination.',
    'The way to get started is to quit talking and begin doing.',
    'The greatest discovery of all time is that a person can change his future by merely changing his attitude.',
    'One day or day one. You decide.',
    'The question isn’t who is going to let me; it’s who is going to stop me.',
    'If you can dream it, you can do it.',
    'Failure is the condiment that gives success its flavor.',
    'It’s going to be hard, but hard does not mean impossible.',
    'To be the best, you must be able to handle the worst.',
    'Perseverance is not a long race; it is many short races one after the other.',
    'You can’t cross the sea merely by standing and staring at the water.',
    'Genius is 1% inspiration, 99% perspiration.',
    'The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it.',

    'If you get tired, learn to rest, not to quit.',
    'The master has failed more times than the beginner has even tried.',
    'A goal without a plan is just a wish.',
    'The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.',
    'There are no shortcuts to any place worth going.',
    'You are the creator of your own destiny.'
];

const bookQuotes = [
    { title: 'Atomic Habits', quote: 'You do not rise to the level of your goals. You fall to the level of your systems.', author: 'James Clear' },
    { title: 'Deep Work', quote: 'To produce at your peak level you need to work for extended periods with full concentration.', author: 'Cal Newport' },
    { title: 'The Pragmatic Programmer', quote: 'Don\'t repeat yourself. Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.', author: 'Andrew Hunt & David Thomas' },
    { title: 'Clean Code', quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
    { title: 'Grit: The Power of Passion and Perseverance', quote: 'Enthusiasm is common. Endurance is rare.', author: 'Angela Duckworth' },
    { title: 'Mindset: The New Psychology of Success', quote: 'The view you adopt for yourself profoundly affects the way you lead your life.', author: 'Carol S. Dweck' },
    { title: 'The 7 Habits of Highly Effective People', quote: 'Start with the end in mind.', author: 'Stephen Covey' },
    { title: 'Man\'s Search for Meaning', quote: 'When we are no longer able to change a situation, we are challenged to change ourselves.', author: 'Viktor Frankl' },
    { title: 'Thinking, Fast and Slow', quote: 'We are prone to overestimate how much we understand about the world and to underestimate the role of chance in events.', author: 'Daniel Kahneman' },
    { title: 'Code Complete', quote: 'The primary goal of software design and construction is to build a product that is cheap to maintain and easy to modify.', author: 'Steve McConnell' },
    { title: 'Designing Data-Intensive Applications', quote: 'A system that is not reliable is not trusted by its users.', author: 'Martin Kleppmann' },
    { title: 'The Mythical Man-Month', quote: 'Adding manpower to a late software project makes it later.', author: 'Fred Brooks' },
    { title: 'Getting Things Done', quote: 'Your mind is for having ideas, not holding them.', author: 'David Allen' },
    { title: 'Flow: The Psychology of Optimal Experience', quote: 'The best moments in our lives are not the passive, receptive, relaxing times… The best moments usually occur if a person’s body or mind is stretched to its limits in a voluntary effort to accomplish something difficult and worthwhile.', author: 'Mihaly Csikszentmihalyi' },
    { title: 'Sapiens: A Brief History of Humankind', quote: 'The secret to success is to be in a constant state of learning.', author: 'Yuval Noah Harari' },
    { title: 'Zero to One', quote: 'The single most powerful word in a startup is "focus".', author: 'Peter Thiel' },
    { title: 'Refactoring: Improving the Design of Existing Code', quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { title: 'Don\'t Make Me Think', quote: 'Get rid of half the words on each page, then get rid of half of what\'s left.', author: 'Steve Krug' },
    { title: 'Structure and Interpretation of Computer Programs', quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { title: 'The Lean Startup', quote: 'The only way to win is to learn faster than anyone else.', author: 'Eric Ries' },
    { title: 'The Effective Executive', quote: 'What gets measured gets improved.', author: 'Peter Drucker' },
    { title: 'How to Win Friends and Influence People', quote: 'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.', author: 'Dale Carnegie' },
    { title: 'The Black Swan', quote: 'The problem with experts is that they do not know what they do not know.', author: 'Nassim Nicholas Taleb' },
    { title: 'The Design of Everyday Things', quote: 'A brilliant solution to the wrong problem can be worse than no solution at all: solve the correct problem.', author: 'Don Norman' },
    { title: 'Antifragile: Things That Gain from Disorder', quote: 'The resilient resists shocks and stays the same; the antifragile gets better.', author: 'Nassim Nicholas Taleb' },
    { title: 'Cracking the Coding Interview', quote: 'Practice, practice, practice. The more you do, the more you see the patterns.', author: 'Gayle Laakmann McDowell' },
    { title: 'The Art of Computer Programming', quote: 'Premature optimization is the root of all evil.', author: 'Donald Knuth' },
    { title: 'Code: The Hidden Language of Computer Hardware and Software', quote: 'The computer is a tool, and like any tool, it has its own language.', author: 'Charles Petzold' },
    { title: 'Algorithms to Live By', quote: 'Sometimes the best solution is to just stop and think.', author: 'Brian Christian & Tom Griffiths' },
    { title: 'The Soul of a New Machine', quote: 'When you have a team of people who are really good, you don\'t have to tell them what to do. You just have to tell them what the goal is.', author: 'Tracy Kidder' },
    { title: 'Outliers: The Story of Success', quote: 'Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good.', author: 'Malcolm Gladwell' },
    { title: 'The Innovator\'s Dilemma', quote: 'The reason why it is so difficult for existing firms to capitalize on disruptive innovations is that their processes and their business model that make them good at the existing business actually make them bad at competing for the disruption.', author: 'Clayton M. Christensen' },
    { title: 'Clean Architecture', quote: 'Good architecture makes the system easy to understand, easy to develop, easy to maintain, and easy to deploy. The ultimate goal is to minimize the lifetime cost of the system and to maximize programmer productivity.', author: 'Robert C. Martin' },
    { title: 'A Philosophy of Software Design', quote: 'The greatest limitation in writing software is our ability to understand the systems we are creating.', author: 'John Ousterhout' },
    { title: 'The Go-Giver', quote: 'Your true worth is determined by how much more you give in value than you take in payment.', author: 'Bob Burg and John David Mann' },
    { title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking', quote: 'There\'s zero correlation between being the best talker and having the best ideas.', author: 'Susan Cain' },
    { title: 'Essentialism: The Disciplined Pursuit of Less', quote: 'If you don\'t prioritize your life, someone else will.', author: 'Greg McKeown' },
    { title: 'Radical Candor', quote: 'It\'s not mean, it\'s clear.', author: 'Kim Scott' },
    { title: 'The Phoenix Project', quote: 'Improving daily work is even more important than doing daily work.', author: 'Gene Kim, Kevin Behr, George Spafford' },
    { title: 'So Good They Can\'t Ignore You', quote: 'The craftsman mindset focuses on what you can offer the world; the passion mindset focuses instead on what the world can offer you.', author: 'Cal Newport' },
    { title: 'Drive: The Surprising Truth About What Motivates Us', quote: 'Autonomy, mastery, and purpose are the three pillars of motivation.', author: 'Daniel H. Pink' },
    // Added 20 More Entries
    { title: 'Gödel, Escher, Bach: An Eternal Golden Braid', quote: 'Every aspect of thinking can be viewed as a high-level description of a system which, on a lower level, is governed by simple, even formal, rules.', author: 'Douglas Hofstadter' },
    { title: 'The Power of Habit', quote: 'Change might not be fast and it isn\'t always easy. But with time and effort, almost any habit is malleable.', author: 'Charles Duhigg' },
    { title: 'Influence: The Psychology of Persuasion', quote: 'A well-known principle of human behavior says that when we ask someone to do us a favor we will be more successful if we provide a reason.', author: 'Robert B. Cialdini' },
    { title: 'Team Topologies', quote: 'Instead of seeking to optimize the parts of a system in isolation, we should seek to optimize the interactions between the parts.', author: 'Matthew Skelton & Manuel Pais' },
    { title: 'Software Engineering at Google', quote: 'Software engineering is programming integrated over time.', author: 'Titus Winters, Tom Manshreck, Hyrum Wright' },
    { title: 'Peopleware: Productive Projects and Teams', quote: 'The major problems of our work are not so much technological as sociological in nature.', author: 'Tom DeMarco & Timothy Lister' },
    { title: 'The Manager\'s Path', quote: 'Your job as a manager is to make your team successful.', author: 'Camille Fournier' },
    { title: 'Staff Engineer: Leadership beyond the management track', quote: 'A Staff engineer’s job is to look around, identify a lack of clarity, and drive it to a useful conclusion.', author: 'Will Larson' },
    { title: 'Working Effectively with Legacy Code', quote: 'Legacy code is simply code without tests.', author: 'Michael Feathers' },
    { title: 'Release It!: Design and Deploy Production-Ready Software', quote: 'Your system will be probed, scanned, and attacked. It’s not a question of if, but when.', author: 'Michael T. Nygard' },
    { title: 'Building Microservices', quote: 'A microservice is a small, autonomous service that works together with other small, autonomous services.', author: 'Sam Newman' },
    { title: 'Database Internals', quote: 'There are two hard problems in computer science: cache invalidation and naming things.', author: 'Alex Petrov' },
    { title: 'The Five Dysfunctions of a Team', quote: 'Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.', author: 'Patrick Lencioni' },
    { title: 'The Goal: A Process of Ongoing Improvement', quote: 'A bottleneck is any resource whose capacity is equal to or less than the demand placed upon it.', author: 'Eliyahu M. Goldratt' },
    { title: 'Measure What Matters', quote: 'Ideas are easy. Execution is everything.', author: 'John Doerr' },
    { title: 'Nudge: Improving Decisions About Health, Wealth, and Happiness', quote: 'If you want to encourage someone to do something, make it easy.', author: 'Richard H. Thaler & Cass R. Sunstein' },
    { title: 'The Algorithm Design Manual', quote: 'The easiest way to solve a problem is to not have it in the first place.', author: 'Steven S. Skiena' },
    { title: 'Hackers & Painters', quote: 'The most powerful programming language is the one that allows you to express your ideas most clearly.', author: 'Paul Graham' },
    { title: 'The Unicorn Project', quote: 'The goal of technology is to create a world where everyone can do their best work, and to be happy doing it.', author: 'Gene Kim' },
    { title: 'An Elegant Puzzle: Systems of Engineering Management', quote: 'The best engineering teams are the ones that are constantly learning.', author: 'Will Larson' }
];

const dsaTopics = [
    { 
        title: 'Binary Search', 
        content: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. You continue this process until the value is found or the interval is empty.', 
        code: `function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}`, 
        interviewTip: 'Always clarify if the input array is sorted. Explain that its logarithmic time complexity, $O(\\log n)$, makes it vastly superior to linear search for large, sorted datasets. Be ready to implement it both iteratively and recursively.' 
    },
    { 
        title: 'Linked List', 
        content: 'A linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. Each element is a separate object, called a "node", consisting of two items: the data and a reference (or pointer) to the next node in the sequence. The last node has a reference to null.', 
        code: `class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() { this.head = null; }
}`, 
        interviewTip: 'Master common operations: insertion (at head, tail, middle), deletion, and reversal. Contrast its $O(n)$ search time with an array\'s $O(1)$ indexed access but highlight its efficient $O(1)$ insertion/deletion compared to an array\'s $O(n)$.' 
    },
    { 
        title: 'Stack', 
        content: 'A linear data structure that follows a particular order in which the operations are performed. The order is LIFO (Last-In, First-Out). Think of it as a stack of plates: you can only add a new plate to the top, and you can only remove the top plate. Key operations are `push` (add to top) and `pop` (remove from top).', 
        code: `class Stack {
    constructor(){ this.items = []; }
    push(element){ this.items.push(element); }
    pop(){ return this.items.pop(); }
    peek(){ return this.items[this.items.length - 1]; }
}`, 
        interviewTip: 'Explain its use cases in managing function calls (the call stack), parsing expressions (infix to postfix), and implementing algorithms like Depth-First Search (DFS). Be ready to implement a stack using an array or a linked list.' 
    },
    { 
        title: 'Queue', 
        content: 'A linear data structure that follows a FIFO (First-In, First-Out) order. This is like a queue of people at a checkout counter; the first person to get in line is the first one to be served. Key operations are `enqueue` (add to the rear/tail) and `dequeue` (remove from the front/head).', 
        code: `class Queue {
    constructor(){ this.items = []; }
    enqueue(element){ this.items.push(element); }
    dequeue(){ return this.items.shift(); }
    front(){ return this.items[0]; }
}`, 
        interviewTip: 'Queues are fundamental for Breadth-First Search (BFS) in graphs, which is used to find the shortest path in unweighted graphs. Also mention its use in scheduling tasks, managing requests in a web server, and print queues.' 
    },
    { 
        title: 'Hash Table', 
        content: 'A data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. This provides very fast average-case lookup, insertion, and deletion.', 
        code: `// In JS, Maps and Objects provide hash table-like functionality.
let map = new Map();
map.set('name', 'Gemini');
console.log(map.get('name'));`, 
        interviewTip: 'The most important topic is collision handling. Be able to explain the two main strategies: Separate Chaining (using linked lists in each bucket) and Open Addressing (probing for the next empty slot). Discuss the trade-offs. Average time complexity for operations is $O(1)$, worst case is $O(n)$.' 
    },
    { 
        title: 'Depth-First Search (DFS)', 
        content: 'An algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (or an arbitrary node in a graph) and explores as far as possible along each branch before backtracking. It\'s like navigating a maze by always turning right at every junction until you hit a dead end, then backtracking to the last junction and trying the next turn.', 
        code: `function dfs(graph, startNode, visited = new Set()) {
    visited.add(startNode);
    console.log(startNode); // Process node
    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}`, 
        interviewTip: 'Compare it directly with BFS. DFS is often implemented recursively (using the call stack implicitly) or iteratively (using an explicit stack). Mention its use cases: detecting cycles in a graph, topological sorting, and solving puzzles like mazes or Sudoku.' 
    },
    // Added 20 More Entries
    { 
        title: 'Breadth-First Search (BFS)', 
        content: 'An algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. It uses a queue to keep track of the next location to visit.', 
        code: `function bfs(graph, startNode) {
    let queue = [startNode];
    let visited = new Set(queue);
    while (queue.length > 0) {
        let vertex = queue.shift();
        console.log(vertex); // Process node
        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}`, 
        interviewTip: 'The key application of BFS is finding the shortest path between two nodes in an unweighted graph. Explain that because it explores level by level, the first time it reaches a target node, it must have done so via the shortest possible path.' 
    },
    { 
        title: 'Binary Search Tree (BST)', 
        content: 'A node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node’s key. The right subtree of a node contains only nodes with keys greater than the node’s key. The left and right subtree each must also be a binary search tree. There must be no duplicate nodes.', 
        code: `class TreeNode { /* ... */ }
// Invariant: node.left.value < node.value < node.right.value`, 
        interviewTip: 'Discuss its average-case time complexity of $O(\\log n)$ for search/insert/delete. Crucially, explain how this degrades to $O(n)$ in the worst case (a skewed tree, like a linked list). This motivates the need for self-balancing BSTs like AVL or Red-Black Trees.' 
    },
    { 
        title: 'Heap (Min-Heap/Max-Heap)', 
        content: 'A specialized tree-based data structure that is a complete binary tree and satisfies the heap property. In a Max-Heap, for any given node C, if P is a parent node of C, then the key of P is greater than or equal to the key of C. In a Min-Heap, the key of P is less than or equal to the key of C. It\'s commonly implemented using an array for efficiency.', 
        code: `// Typically implemented with an array, using math to find children/parent.
// parent(i) = floor((i-1)/2)
// leftChild(i) = 2*i + 1`, 
        interviewTip: 'Heaps are the ideal data structure for implementing Priority Queues. Mention their use in Heap Sort and algorithms like Dijkstra\'s shortest path and Prim\'s MST algorithm. Key operations `insert` and `extractMax/Min` are $O(\\log n)$.' 
    },
    { 
        title: 'Trie (Prefix Tree)', 
        content: 'A tree-like data structure that proves to be very efficient for retrieving a key in a dataset of strings. With a trie, you can find all strings with a given prefix by traversing a single path from the root. Each node represents a character, and paths from the root to a node represent a prefix.', 
        code: `class TrieNode {
    constructor() {
        this.children = {}; // or new Map()
        this.isEndOfWord = false;
    }
}`, 
        interviewTip: 'The #1 use case to mention is building an autocomplete feature for a search bar or text editor. It\'s also used in spell checkers and IP routing. Searching for a word of length `k` is an efficient $O(k)$ operation.' 
    },
    { 
        title: 'Dijkstra\'s Algorithm', 
        content: 'An algorithm for finding the shortest paths between nodes in a weighted graph. For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It works by maintaining a set of visited nodes and greedily choosing the unvisited node with the smallest distance from the source, using a priority queue for efficiency.', 
        code: `// Requires a graph, a source, and a priority queue.
function dijkstra(graph, startNode) { /* ... */ }`, 
        interviewTip: 'Crucially, you must state that Dijkstra\'s algorithm only works for graphs with non-negative edge weights. If there are negative weights, you must use Bellman-Ford. Its time complexity is typically $O(E \\log V)$ with a binary heap.' 
    },
    { 
        title: 'Dynamic Programming (DP)', 
        content: 'A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. The next time the same subproblem occurs, instead of recomputing its solution, one simply looks up the previously computed solution. There are two main approaches: Memoization (top-down) and Tabulation (bottom-up).', 
        code: `// Memoization example for Fibonacci
const memo = {};
function fib(n) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}`, 
        interviewTip: 'Identify DP problems by looking for "optimal substructure" and "overlapping subproblems". Be able to explain the difference between memoization (recursive, stores results as needed) and tabulation (iterative, builds a table from the ground up). Start with the Fibonacci sequence as your go-to example.' 
    },
    { 
        title: 'Greedy Algorithms', 
        content: 'An algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. The greedy choice is the one that looks best at the current moment, without any consideration for the future. It hopes that a series of locally optimal choices will lead to a globally optimal solution.', 
        code: `// Example: Making change with the fewest coins using standard denominations.
// At each step, take the largest coin possible without going over.`, 
        interviewTip: 'Always state that greedy algorithms don\'t always produce the optimal solution, but are great when they do because they are often simpler and faster. Provide a classic example like making change (and a counterexample where it fails, e.g., with coin values {1, 3, 4} to make 6). Kruskal\'s and Prim\'s algorithms are famous greedy algorithms.' 
    },
    { 
        title: 'AVL Tree', 
        content: 'A self-balancing Binary Search Tree (BST). In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property. This rebalancing is achieved through "rotations" (single or double).', 
        code: `// Involves calculating a "balance factor" for each node.
// BalanceFactor = height(leftSubtree) - height(rightSubtree)`, 
        interviewTip: 'Mention it as a way to guarantee $O(\\log n)$ worst-case time complexity for all operations (search, insert, delete), which is an improvement over a standard BST\'s $O(n)$ worst case. Contrast it with Red-Black trees, which are less strictly balanced but require fewer rotations on average.' 
    },
    { 
        title: 'Topological Sort', 
        content: 'A linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge from vertex `u` to vertex `v`, `u` comes before `v` in the ordering. It is not possible if the graph has a cycle. A common algorithm is Kahn\'s algorithm, which uses a queue and tracks the "in-degree" of each node.', 
        code: `// Algorithm:
// 1. Compute in-degrees of all nodes.
// 2. Enqueue all nodes with an in-degree of 0.
// 3. While queue is not empty, dequeue a node, add to result, and decrement in-degrees of its neighbors.
// 4. If a neighbor's in-degree becomes 0, enqueue it.`, 
        interviewTip: 'The canonical use case is for scheduling a sequence of tasks or jobs that have dependencies. For example, to put on your shoes, you must first put on your socks. You must be able to state that it only works on Directed Acyclic Graphs (DAGs).' 
    },
    { 
        title: 'Disjoint Set Union (DSU)', 
        content: 'A data structure that stores a collection of disjoint (non-overlapping) sets. It provides two primary operations: `find`, which determines which set a particular element is in, and `union`, which joins two sets into one. It is highly optimized with techniques like "path compression" and "union by rank/size".', 
        code: `function find(parent, i) { /* ... */ }
function union(parent, x, y) { /* ... */ }`, 
        interviewTip: 'DSU is incredibly efficient for its main use case: detecting cycles in an undirected graph. It is the core data structure used in Kruskal\'s algorithm for finding a Minimum Spanning Tree (MST). Its amortized time complexity is nearly constant.' 
    },
    { 
        title: 'Merge Sort', 
        content: 'A highly efficient, comparison-based, divide-and-conquer sorting algorithm. It works by recursively dividing the unsorted list into n sublists, each containing one element (which are considered sorted), and then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining.', 
        code: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}`, 
        interviewTip: 'Highlight its key features: always has a time complexity of $O(n \\log n)$ (best, average, and worst case), and it is a "stable" sort. Its main disadvantage is that it requires $O(n)$ extra space for the merging process, unlike the in-place Quicksort.' 
    },
    { 
        title: 'Quicksort', 
        content: 'A highly efficient, in-place, comparison-based, divide-and-conquer sorting algorithm. It works by selecting a \'pivot\' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.', 
        code: `function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`, 
        interviewTip: 'This is a very common interview topic. Discuss the pivot selection strategy and how a poor pivot leads to the $O(n^2)$ worst-case. Mention its $O(n \\log n)$ average-case complexity and its $O(\\log n)$ space complexity (for the recursion stack), which makes it very practical.' 
    },
    { 
        title: 'Two Pointers Technique', 
        content: 'An algorithmic pattern, not a data structure. It involves using two pointers that iterate through a data structure, often an array, until they meet or satisfy a condition. The pointers can move in opposite directions (e.g., from start and end) or in the same direction at different speeds (fast/slow pointers).', 
        code: `// Opposite direction example for finding a pair sum in a sorted array
let left = 0, right = arr.length - 1;
while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
}`, 
        interviewTip: 'Be ready with examples for each pattern. Opposite direction: finding a pair that sums to a target. Same direction (fast/slow): detecting a cycle in a linked list. It is an effective way to optimize brute-force solutions from $O(n^2)$ to $O(n)$.' 
    },
    { 
        title: 'Sliding Window Technique', 
        content: 'An algorithmic pattern used on linear data structures like arrays or strings. The "window" is a sub-list or sub-string that runs over the data. The window can be of a fixed size or a variable size, and it "slides" over the data one element at a time, performing some computation.', 
        code: `// Find max sum of a subarray of size k
let maxSum = 0, windowSum = 0;
for (let i = 0; i < k; i++) windowSum += arr[i];
maxSum = windowSum;
for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i-k];
    maxSum = Math.max(maxSum, windowSum);
}`, 
        interviewTip: 'This technique is used to efficiently solve problems that involve finding a contiguous subarray or substring that satisfies a certain condition. It typically reduces the time complexity from a naive $O(n*k)$ or $O(n^2)$ to an optimal $O(n)$.' 
    },
    { 
        title: 'Backtracking', 
        content: 'A general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time. It is a refined brute-force approach that prunes the search space.', 
        code: `function solve(board) {
    for (/* all possible choices */) {
        if (isValid(choice)) {
            make(choice); // Place piece
            if (solve(board)) return true; // Recurse
            unmake(choice); // Backtrack
        }
    }
    return false;
}`, 
        interviewTip: 'Think of it as a DFS on an implicit state-space tree. Classic problems include N-Queens, Sudoku solvers, and generating all permutations/combinations. The key is the "choose, explore, unchoose" pattern.' 
    },
    { 
        title: 'Kruskal\'s Algorithm', 
        content: 'A greedy algorithm to find a Minimum Spanning Tree (MST) for a connected, undirected, and weighted graph. An MST is a subgraph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Kruskal\'s algorithm builds the MST by adding the next-cheapest edge that doesn\'t form a cycle.', 
        code: `// 1. Sort all edges by weight in ascending order.
// 2. Iterate through sorted edges. For each edge, if adding it does not form a cycle, add it to the MST.
// 3. Use a DSU data structure to efficiently check for cycles.`, 
        interviewTip: 'Compare it with Prim\'s algorithm. Kruskal\'s considers edges one by one, while Prim\'s grows the MST from a single starting vertex. Kruskal\'s is often preferred for sparse graphs where sorting edges is faster.' 
    },
    { 
        title: 'Prim\'s Algorithm', 
        content: 'Another greedy algorithm to find a Minimum Spanning Tree (MST). It builds the MST by starting with an arbitrary vertex and then, at each step, adding the cheapest possible edge that connects a vertex in the MST to a vertex outside the MST. It is very similar in structure to Dijkstra\'s algorithm.', 
        code: `// 1. Start with an arbitrary vertex in the MST set.
// 2. Use a Priority Queue to store edges connecting vertices in the MST to those outside.
// 3. Repeatedly extract the minimum-weight edge from the PQ. If it connects to a new vertex, add it to the MST.`, 
        interviewTip: 'Compare it with Kruskal\'s algorithm. Prim\'s is generally more efficient for dense graphs. The similarity to Dijkstra\'s is a key point to mention; the only difference is how the priority value is determined in the priority queue.' 
    },
    { 
        title: 'Bit Manipulation', 
        content: 'The act of algorithmically manipulating bits or other pieces of data shorter than a word. This includes operations like AND (&), OR (|), XOR (^), NOT (~), and bit shifts (<<, >>). It is used for low-level optimization, data compression, and solving certain types of algorithmic problems very efficiently.', 
        code: `// Check if the i-th bit is set in a number n
if (n & (1 << i)) { /* ... */ }
// XOR property: a ^ a = 0; a ^ 0 = a`, 
        interviewTip: 'While not always a primary topic, showing comfort with bit manipulation can be very impressive. Know the key properties of XOR for finding unique/missing numbers in an array. Using bits as flags or masks (bitmasking) can solve some DP problems with smaller constraints.' 
    },
    { 
        title: 'Bellman-Ford Algorithm', 
        content: 'An algorithm that computes the shortest paths from a single source vertex to all other vertices in a weighted digraph. It is slower than Dijkstra\'s algorithm, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.', 
        code: `// 1. Initialize distances: source=0, others=infinity.
// 2. Relax all edges |V|-1 times.
// 3. One more relaxation pass to detect negative-weight cycles.`, 
        interviewTip: 'This is your go-to algorithm for shortest path problems with negative edge weights. Its ability to detect negative-weight cycles is a crucial feature to mention. The time complexity is $O(V*E)$, which is higher than Dijkstra\'s.' 
    },
    { 
        title: 'Floyd-Warshall Algorithm', 
        content: 'An algorithm for finding the shortest paths between all pairs of vertices in a weighted graph (All-Pairs Shortest Path problem). It works for both positive and negative edge weights but does not work with negative cycles. It uses a dynamic programming approach.', 
        code: `for k from 1 to |V|
    for i from 1 to |V|
        for j from 1 to |V|
            path[i][j] = min(path[i][j], path[i][k] + path[k][j])`, 
        interviewTip: 'Its main advantage is finding all-pairs shortest paths in one go. The implementation is famously simple with three nested loops. The time complexity is $O(V^3)$, so it is only suitable for smaller graphs.' 
    }
];

const webDevTopics = [
    { title: 'Flexbox', content: 'A CSS layout model for arranging items in a container.', code: '.container { display: flex; }', interviewTip: 'Discuss how Flexbox simplifies responsive design.' },
    { title: 'CSS Grid', content: 'A two-dimensional layout system for CSS, designed for creating complex web page layouts.', code: '.grid-container { display: grid; }', interviewTip: 'Explain the difference between CSS Grid (2D) and Flexbox (1D).' },
    { title: 'HTML Semantic Tags', content: 'HTML elements that clearly describe their meaning in a human- and machine-readable way.', code: '<nav>, <main>, <article>, <section>, <footer>', interviewTip: 'Emphasize their importance for SEO and accessibility (a11y).' },
    { title: 'CSS Box Model', content: 'Describes how elements are laid out on a page. Consists of: content, padding, border, and margin.', code: 'div { box-sizing: border-box; }', interviewTip: 'Explain the difference between `content-box` and `border-box` sizing.' },
    { title: 'CSS Specificity', content: 'The algorithm used by browsers to determine which CSS property values are the most relevant to an element and, therefore, should be applied.', code: '// Inline > ID > Class > Tag', interviewTip: 'Explain how to calculate specificity and why using `!important` is generally bad practice.' },
    { title: 'Responsive Design', content: 'An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.', code: '@media (max-width: 600px) { /* styles */ }', interviewTip: 'Discuss mobile-first vs. desktop-first approaches.' },
    { title: 'JavaScript `var`, `let`, `const`', content: 'Different ways to declare variables in JS.', code: 'let name = "AI"; const year = 2025;', interviewTip: 'Explain the concepts of scope (global, function, block) and hoisting for each.' },
    { title: 'Arrow Functions', content: 'A concise syntax for writing function expressions. They have a lexically bound `this`.', code: 'const add = (a, b) => a + b;', interviewTip: 'Explain how `this` behaves differently in arrow functions vs. regular functions.' },
    { title: 'JavaScript Promises', content: 'An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.', code: 'fetch(url).then(res => res.json())', interviewTip: 'Describe the states: pending, fulfilled, rejected.' },
    { title: '`async`/`await`', content: 'Syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.', code: 'async function getData() { const res = await fetch(url); }', interviewTip: 'Explain how it simplifies promise chains and error handling with `try...catch`.' },
    { title: 'DOM Manipulation', content: 'Interacting with the Document Object Model (the tree structure of a web page) using JavaScript.', code: 'document.getElementById("myId").innerHTML = "New Text";', interviewTip: 'Discuss the performance implications of frequent DOM updates and the concept of the Virtual DOM.' },
    { title: 'Event Loop', content: 'A model in JavaScript that handles asynchronous operations. It consists of the call stack, message queue, and microtask queue.', code: '// setTimeout, promises, user events', interviewTip: 'Explain how it allows a single-threaded language like JS to be non-blocking.' },
    { title: 'Closures', content: 'A feature where an inner function has access to the outer (enclosing) function’s variables.', code: 'function outer() { let a=5; return function inner() { console.log(a); } }', interviewTip: 'Be ready to provide a practical example, like in data privacy or a function factory.' },
    { title: 'The `this` keyword', content: 'A special keyword in JavaScript whose value is determined by how a function is called (the execution context).', code: 'obj.myMethod() // `this` is obj', interviewTip: 'Explain the four binding rules: default, implicit, explicit (call, apply, bind), and new.' },
    { title: 'REST API', content: 'An architectural style for designing networked applications using standard HTTP methods.', code: '// GET, POST, PUT, DELETE', interviewTip: 'Explain what makes an API "RESTful" (stateless, client-server, etc.).' },
    { title: 'GraphQL', content: 'A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.', code: 'query { user(id: 4) { name } }', interviewTip: 'Contrast it with REST, highlighting its ability to prevent over-fetching and under-fetching.' },
    { title: 'WebSockets', content: 'A communication protocol that provides full-duplex communication channels over a single TCP connection.', code: 'const socket = new WebSocket("ws://example.com");', interviewTip: 'Explain its use cases for real-time applications like chat or live notifications.' },
    { title: 'CORS (Cross-Origin Resource Sharing)', content: 'A browser security feature that restricts cross-origin HTTP requests initiated from scripts.', code: '// Server-side header: Access-Control-Allow-Origin: *', interviewTip: 'Explain what a preflight request (OPTIONS) is and why it\'s necessary.' },
    { title: 'Web Storage (localStorage/sessionStorage)', content: 'APIs that allow browsers to store key/value pairs locally, within the user\'s browser.', code: 'localStorage.setItem("key", "value");', interviewTip: 'Differentiate between localStorage (persistent) and sessionStorage (per-session).' },
    { title: 'Cookies', content: 'Small pieces of data stored on the client-side, sent with every request to the server.', code: 'document.cookie = "user=John Doe";', interviewTip: 'Compare cookies with web storage, mentioning use cases like authentication.' },
    { title: 'React', content: 'A JavaScript library for building user interfaces, based on a component architecture.', code: 'function Welcome(props) { return <h1>Hello, {props.name}</h1>; }', interviewTip: 'Explain key concepts like JSX, components, state, and props.' },
    { title: 'React Hooks', content: 'Functions that let you “hook into” React state and lifecycle features from function components.', code: 'const [count, setCount] = useState(0);', interviewTip: 'Explain `useState` and `useEffect` as the two most fundamental hooks.' },
    { title: 'Virtual DOM', content: 'A programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM.', code: '// React uses a Virtual DOM', interviewTip: 'Explain how it improves performance by minimizing direct DOM manipulations through a "diffing" algorithm.' },
    { title: 'Node.js', content: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing JS to be run on the server.', code: 'const http = require("http");', interviewTip: 'Explain its event-driven, non-blocking I/O model.' },
    { title: 'Express.js', content: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.', code: 'app.get("/", (req, res) => res.send("Hello"));', interviewTip: 'Describe its role in handling routing, middleware, and requests/responses.' },
    { title: 'Middleware', content: 'Functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.', code: 'app.use((req, res, next) => { /* ... */ next(); });', interviewTip: 'Provide examples like logging, authentication, or body-parsing.' },
    { title: 'Webpack', content: 'A static module bundler for modern JavaScript applications.', code: '// webpack.config.js', interviewTip: 'Explain its primary role: to bundle JS files for usage in a browser, and how it can also transform, bundle, or package just about any resource.' },
    { title: 'Babel', content: 'A JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser.', code: '// Converts () => {} to function() {}', interviewTip: 'Explain why it is essential for using modern JS features in production.' },
    { title: 'Git', content: 'A distributed version control system for tracking changes in source code during software development.', code: 'git commit -m "feat: Implement new feature"', interviewTip: 'Be ready to explain basic commands (commit, push, pull, branch, merge) and concepts like rebasing.' },
    { title: 'HTTP/HTTPS', content: 'The protocol used for transmitting hypermedia documents. HTTPS is the secure version.', code: '// URL starts with http:// or https://', interviewTip: 'Explain that HTTPS uses SSL/TLS to encrypt communication.' },
    { title: 'SSR vs CSR', content: 'Server-Side Rendering vs. Client-Side Rendering.', code: '// Next.js (SSR) vs. Create React App (CSR)', interviewTip: 'Discuss the trade-offs: performance, SEO, and user experience.' },
    { title: 'Web Accessibility (a11y)', content: 'The inclusive practice of ensuring there are no barriers that prevent interaction with websites by people with disabilities.', code: '<img src="cat.jpg" alt="A cute cat playing with yarn">', interviewTip: 'Mention WAI-ARIA roles and the importance of semantic HTML.' },
    { title: 'Progressive Web Apps (PWA)', content: 'Web applications that use modern web capabilities to deliver an app-like experience to users.', code: '// Service Workers, Web App Manifest', interviewTip: 'Mention key features like offline capability, installability, and push notifications.' },
    { title: 'Cross-Site Scripting (XSS)', content: 'A type of security vulnerability where malicious scripts are injected into otherwise benign and trusted websites.', code: '', interviewTip: 'Explain how to prevent it, e.g., by sanitizing user input or using frameworks that auto-escape data.' },
    { title: 'SQL Injection', content: 'A code injection technique that might destroy your database.', code: `// DANGEROUS: "SELECT * FROM users WHERE id = " + userId`, interviewTip: 'Explain the importance of using parameterized queries or prepared statements.' },
    { title: 'OAuth 2.0', content: 'An authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.', code: '// "Login with Google/Facebook"', interviewTip: 'Describe the general flow involving a client, resource owner, and authorization server.' },
    { title: 'CI/CD', content: 'Continuous Integration and Continuous Deployment/Delivery. The practice of automating the build, test, and deployment of applications.', code: '// e.g., GitHub Actions, Jenkins', interviewTip: 'Explain the benefits: faster delivery, improved quality, less risk.' },
    { title: 'Docker', content: 'A platform for developing, shipping, and running applications in containers.', code: 'docker run -p 80:80 my-image', interviewTip: 'Explain the difference between an image and a container, and the benefits of containerization.' },
    { title: 'Testing Pyramid', content: 'A concept that groups software tests into three different categories: Unit, Integration, and End-to-End (E2E).', code: '// Jest (Unit), Cypress (E2E)', interviewTip: 'Explain why you should have many unit tests, some integration tests, and few E2E tests.' },
    { title: 'State Management (Redux/Context)', content: 'Libraries or patterns for managing the "state" of an application in a predictable way, especially in large applications.', code: 'const store = createStore(reducer);', interviewTip: 'Discuss when to use a global state manager vs. local component state.' },
    // Added 20 More Entries
    { title: 'TypeScript', content: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static types to JavaScript.', code: 'function greet(name: string): string { return `Hello, ${name}`; }', interviewTip: 'Explain the main benefit: catching type-related errors during development rather than at runtime. Mention interfaces and types.' },
    { title: 'Web Vitals', content: 'A set of metrics from Google related to speed, responsiveness, and visual stability of a webpage. Key metrics include LCP, FID, and CLS.', code: '// Measured by tools like Lighthouse and PageSpeed Insights', interviewTip: 'Being aware of performance metrics shows you care about user experience. Briefly define Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).' },
    { title: 'Memoization in React', content: 'An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. In React, this is done with `useMemo` and `useCallback` hooks, and `React.memo` for components.', code: 'const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);', interviewTip: 'Explain that it prevents unnecessary re-renders and re-calculations, but has a memory cost. It should not be used on everything.' },
    { title: 'CSS-in-JS', content: 'A styling paradigm where CSS is composed using JavaScript. It allows for dynamic, scoped, and component-based styling. Examples include Styled Components and Emotion.', code: 'import styled from \'styled-components\';\nconst Title = styled.h1`font-size: 1.5em;`;', interviewTip: 'Discuss the pros (scoped styles, dynamic theming) and cons (potential performance overhead, learning curve).' },
    { title: 'Microfrontends', content: 'An architectural style where a web application is composed of small, independent frontend applications. Each microfrontend can be developed and deployed by a separate team.', code: '// Conceptually like microservices for the frontend.', interviewTip: 'Explain how this architecture can help scale development in large organizations, but adds complexity in communication and state sharing between frontends.' },
    { title: 'Serverless Architecture', content: 'A cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed. AWS Lambda and Google Cloud Functions are popular examples.', code: '// No server to manage, just write functions.', interviewTip: 'Discuss the benefits (scalability, cost-effectiveness for spiky traffic) and drawbacks (cold starts, potential for vendor lock-in).' },
    { title: 'JWT (JSON Web Token)', content: 'A compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in APIs. A token is signed by the server and sent to the client, which sends it back on subsequent requests.', code: '// Consists of three parts: Header, Payload, Signature.', interviewTip: 'Explain how JWTs enable stateless authentication, contrasting them with session-based authentication which requires server-side storage.' },
    { title: 'Service Workers', content: 'A script that your browser runs in the background, separate from a web page, opening the door to features that don\'t need a web page or user interaction. They are the foundation of Progressive Web Apps (PWAs).', code: 'navigator.serviceWorker.register("/sw.js");', interviewTip: 'Focus on their two main use cases: acting as a network proxy to enable offline functionality (caching) and handling push notifications.' },
    { title: 'SEO (Search Engine Optimization) Basics', content: 'The practice of increasing the quantity and quality of traffic to your website through organic search engine results. For developers, this involves using semantic HTML, ensuring fast load times, mobile-friendliness, and providing `alt` text for images.', code: '<title>My Awesome Page</title>\n<meta name="description" content="A great page."/>', interviewTip: 'Shows you understand the business context of web development. Mentioning server-side rendering (SSR) as a technique to improve SEO for SPAs is a great point.' },
    { title: 'Idempotency in APIs', content: 'An operation is idempotent if making the same request multiple times produces the same result as making it once. For example, a `DELETE` request is idempotent, but a `POST` request to create a resource is not. `GET` and `PUT` are also typically idempotent.', code: '// PUT /users/123 { name: "Alex" } should be idempotent.', interviewTip: 'This is a key concept in reliable API design. Explain why it is important, especially for handling network failures where a client might automatically retry a request.' },
    { title: 'gRPC', content: 'A high-performance, open-source universal RPC (Remote Procedure Call) framework. It uses HTTP/2 for transport and Protocol Buffers as the interface description language. It is often used for communication between backend microservices.', code: '// Uses .proto files to define services and messages.', interviewTip: 'Contrast it with REST/JSON. Highlight its performance benefits (binary protocol, HTTP/2 multiplexing) and strong typing, making it suitable for internal service-to-service communication.' },
    { title: 'WebAssembly (Wasm)', content: 'A binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications. It allows running code written in languages like C++ or Rust in the browser at near-native speed.', code: '// Not written directly, but compiled from other languages.', interviewTip: 'Mention its use case for performance-intensive tasks in the browser, such as gaming, video editing, or complex scientific simulations. It complements, rather than replaces, JavaScript.' },
    { title: 'Content Delivery Network (CDN)', content: 'A geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users. They are used to serve static assets like images, CSS, and JS files.', code: '// e.g., Cloudflare, Akamai, AWS CloudFront', interviewTip: 'Explain how a CDN improves website load times by caching content closer to the user, reducing latency.' },
    { title: 'Tree Shaking', content: 'A term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax (`import` and `export`) to detect what code is not being used and exclude it from the final bundle.', code: '// A feature of module bundlers like Webpack and Rollup.', interviewTip: 'This is a key optimization technique in modern frontend development. Explain that its purpose is to reduce the final bundle size, leading to faster page loads.' },
    { title: 'Event Delegation', content: 'A technique in JavaScript for listening to events where you delegate a parent element as the listener for all of the events that happen inside it. Instead of attaching an event listener to each individual child element, you attach a single listener to the parent.', code: `parent.addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.child-item')) {
        console.log('List item clicked!');
    }
});`, interviewTip: 'Explain its two main benefits: it improves performance by reducing the number of event listeners, and it simplifies code when dealing with dynamically added or removed child elements.' },
    { title: 'Web Workers', content: 'A simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. A worker can send and receive messages from the main thread that created it.', code: 'const myWorker = new Worker(\'worker.js\');', interviewTip: 'Differentiate them from Service Workers. Web Workers are for offloading CPU-intensive tasks from the main UI thread to prevent the page from freezing. They cannot directly manipulate the DOM.' },
    { title: 'The `prototype` chain', content: 'The mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has an internal and hidden property called `[[Prototype]]` that is either null or references another object. When you try to access a property of an object, if it\'s not on the object itself, the JavaScript engine looks at its prototype, and so on up the chain.', code: 'let obj = {};\n// obj inherits from Object.prototype', interviewTip: 'This is a fundamental concept of JavaScript\'s object model. Explain that this is how classical inheritance is simulated in pre-ES6 JavaScript. `class` syntax is largely syntactic sugar over this prototype-based inheritance.' },
    { title: 'Tailwind CSS', content: 'A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup. It provides low-level utility classes instead of prebuilt components.', code: '<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"></div>', interviewTip: 'Contrast it with component-based frameworks like Bootstrap. Discuss the pros (rapid prototyping, no "magic" CSS) and cons (can lead to "class soup" in the HTML, requires discipline).' },
    { title: 'Next.js', content: 'A popular open-source web development framework built on top of React. It enables features such as server-side rendering (SSR), static site generation (SSG), and file-system based routing.', code: '// A React "framework for production"', interviewTip: 'Explain that it solves common problems you face when building a production React app, particularly around rendering strategies (SSR/SSG for performance and SEO) and routing.' },
    { title: 'Vite', content: 'A modern frontend build tool that provides an extremely fast development experience. It consists of a dev server that serves files over native ES modules, and a build command that bundles your code with Rollup for production.', code: 'npm create vite@latest', interviewTip: 'Contrast it with Webpack. Its main selling point is the near-instant server start and Hot Module Replacement (HMR) during development, thanks to its use of native ES modules instead of bundling everything.' }
];

const cseTopics = [
    { 
        title: 'Operating System', 
        content: 'An Operating System (OS) is the core system software that acts as an intermediary between a computer user and the computer hardware. Its primary goals are to manage hardware resources (CPU, memory, storage), provide a platform for software to run, and offer essential services like file management, process scheduling, and user interface.', 
        interviewTip: 'Be able to give examples (Windows, macOS, Linux, Android) and explain its role as a "resource allocator" and "control program". The most common follow-up question is about processes vs. threads.' 
    },
    { 
        title: 'Process vs. Thread', 
        content: 'A Process is a program in execution. Each process has its own private address space, which includes its code, data, and stack. Think of it as a house. A Thread is the smallest unit of execution within a process. Multiple threads can exist within a single process and they share the process\'s resources, like memory and files. Threads are the people living in the house; they share the kitchen and living room but have their own private bedrooms (their stacks).', 
        interviewTip: 'Focus on the trade-offs. Creating a process is "heavy" (slower, more memory), while creating a thread is "lightweight". The key difference is memory sharing: threads share memory (enabling easy communication but risking race conditions), while processes are isolated (safer, but communication requires explicit Inter-Process Communication, IPC).' 
    },
    { 
        title: 'Concurrency vs. Parallelism', 
        content: 'Concurrency is the concept of multiple tasks making progress over overlapping periods of time, but not necessarily simultaneously. On a single-core CPU, this is achieved by context switching rapidly between tasks. It\'s about *dealing* with a lot of things at once. Parallelism is the concept of multiple tasks executing at the exact same time, which requires a multi-core processor. It\'s about *doing* a lot of things at once.', 
        interviewTip: 'Use a simple analogy. Concurrency: One person juggling multiple balls. Parallelism: Multiple people each juggling one ball. Concurrency is a design pattern, while parallelism is a hardware feature.' 
    },
    { 
        title: 'Deadlock', 
        content: 'A situation in a multi-threaded environment where two or more threads are blocked forever, each waiting for the other to release a resource that it needs. For a deadlock to occur, four conditions must hold simultaneously: 1. Mutual Exclusion (resource can only be used by one process at a time), 2. Hold and Wait (a process holds one resource while waiting for another), 3. No Preemption (a resource cannot be forcibly taken away), 4. Circular Wait (a chain of processes waiting for each other in a circle).', 
        interviewTip: 'You must be able to list the four necessary conditions. A classic analogy is two people on a narrow staircase, each wanting to go in the opposite direction and refusing to step back.' 
    },
    { 
        title: 'Mutex vs. Semaphore', 
        content: 'Both are synchronization primitives. A Mutex (Mutual Exclusion Object) is like a key to a room. Only one thread can hold the key at a time, so only one thread can be in the "critical section" (the room). A Semaphore is a counter that controls access to a shared resource. An "N-value" semaphore allows up to N threads to access the resource. A binary semaphore (N=1) is functionally similar to a mutex, but their intended use differs. Mutexes are for mutual exclusion, semaphores are for signaling.', 
        interviewTip: 'Mutex = Locking mechanism. Semaphore = Signaling mechanism. Use the analogy: A mutex is the key to a single restroom. A semaphore is a set of N keys for N identical study rooms at the library.' 
    },
    { 
        title: 'TCP vs. UDP', 
        content: 'Two core protocols of the Transport Layer. TCP (Transmission Control Protocol) is connection-oriented, reliable, and ordered. It establishes a connection (three-way handshake), guarantees that data packets arrive in the correct sequence, and retransmits lost packets. UDP (User Datagram Protocol) is connectionless, unreliable, and unordered. It just sends packets (datagrams) without establishing a connection or checking for delivery.', 
        interviewTip: 'This is a classic networking question. The key is to explain the trade-off: Reliability vs. Speed. Use cases for TCP: Web (HTTP), Email (SMTP), File Transfer (FTP). Use cases for UDP: Video Streaming, Online Gaming, DNS. You get reliability at the cost of overhead/latency.' 
    },
    { 
        title: 'DNS (Domain Name System)', 
        content: 'DNS is the hierarchical and distributed naming system used to identify computers, services, and other resources reachable through the Internet. Its primary function is to translate human-friendly domain names (e.g., `www.google.com`) into the numerical IP addresses (e.g., `142.250.196.196`) needed for locating and identifying computer services and devices.', 
        interviewTip: 'Describe it as "the phonebook of the Internet." Be able to outline the lookup process at a high level: Browser Cache -> OS Cache -> Recursive Resolver (ISP) -> Root Servers -> TLD Servers -> Authoritative Name Servers.' 
    },
    { 
        title: 'SQL vs. NoSQL', 
        content: 'Two major categories of database management systems. SQL (Structured Query Language) databases are relational. They store data in a structured way using tables with predefined schemas (rows and columns). They are excellent for complex queries and ensuring data integrity (ACID). NoSQL ("Not only SQL") databases are non-relational. They store data in various models like document (JSON), key-value, wide-column, or graph. They offer flexible schemas and are built for horizontal scaling and high availability.', 
        interviewTip: 'Focus on the trade-offs. SQL: strong consistency, structured data, complex joins. NoSQL: high scalability, flexible schema, better for unstructured data. Give examples: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis, Cassandra).' 
    },
    { 
        title: 'ACID Properties', 
        content: 'A set of four properties that guarantee that database transactions are processed reliably. They are a cornerstone of relational database systems. The properties are: Atomicity (A transaction is all-or-nothing; it either completes fully or not at all), Consistency (A transaction brings the database from one valid state to another), Isolation (Concurrent transactions produce the same result as if they were executed sequentially), Durability (Once a transaction is committed, it will remain so, even in the event of power loss or system crash).', 
        interviewTip: 'You should be able to name all four properties and give a one-sentence definition for each. The classic example is a bank transfer: Atomicity ensures money isn\'t just debited without being credited.' 
    },
    { 
        title: 'Database Normalization', 
        content: 'The process of organizing the columns (attributes) and tables (relations) of a relational database to minimize data redundancy and improve data integrity. It involves dividing larger tables into smaller, well-structured tables and defining relationships between them. The goal is to eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies.', 
        interviewTip: 'You don\'t need to be an expert on all normal forms, but you should understand the purpose. Explain that normalization reduces redundancy at the cost of requiring more complex queries with joins. Mention the first three normal forms (1NF, 2NF, 3NF) as the most common.' 
    },
    { 
        title: 'Object-Oriented Programming (OOP)', 
        content: 'A programming paradigm based on the concept of "objects", which can contain both data (in the form of fields, often known as attributes or properties) and code (in the form of procedures, often known as methods). The main idea is to bind together the data and the functions that operate on them so that no other part of the code can access this data except through those functions.', 
        interviewTip: 'You must know the four pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism. Be prepared to define each and provide a simple, real-world analogy (e.g., a car or a coffee machine).' 
    },
    { 
        title: 'Memory Hierarchy', 
        content: 'A structure that organizes computer memory into a hierarchy based on response time. At the top are the fastest, smallest, and most expensive memories (CPU registers and cache), and at the bottom are the slowest, largest, and cheapest (main memory/RAM and secondary storage/SSD/HDD). The goal is to provide a memory system with performance close to the fastest memory and cost close to the cheapest memory.', 
        interviewTip: 'List the levels in order: Registers -> L1/L2/L3 Cache -> RAM -> SSD/HDD. Explain the principle of locality (temporal and spatial), which is why this hierarchy works effectively.' 
    },
    { 
        title: 'Compiler vs. Interpreter', 
        content: 'Both are translators that convert high-level programming language code into machine-readable code. A Compiler scans the entire program and translates it as a whole into machine code. The result is an executable file that can be run. An Interpreter translates the program one statement at a time, executing each statement before moving to the next. No executable file is created.', 
        interviewTip: 'Key differences to highlight: Compiler (e.g., C++, Java) - faster execution after compilation, errors are reported after the entire program is scanned. Interpreter (e.g., Python, JavaScript) - slower execution, easier debugging as errors are reported line-by-line, more portable.' 
    },
    // Added 20 More Entries
    { 
        title: 'SOLID Principles', 
        content: 'A set of five design principles for object-oriented programming intended to make software designs more understandable, flexible, and maintainable. They are: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.', 
        interviewTip: 'You don\'t need to be an expert on all five, but being able to name them and explain one or two (like the Single Responsibility Principle) shows a strong understanding of good software design.' 
    },
    { 
        title: 'CAP Theorem', 
        content: 'A fundamental theorem in distributed systems that states it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees: Consistency (every read receives the most recent write or an error), Availability (every request receives a non-error response, without guarantee that it contains the most recent write), and Partition Tolerance (the system continues to operate despite an arbitrary number of messages being dropped by the network between nodes).', 
        interviewTip: 'The key takeaway is that in any real-world distributed system, you *must* choose Partition Tolerance. Therefore, the real trade-off is between Consistency and Availability (CP vs. AP systems). Give an example: a bank might choose Consistency (CP), while a social media feed might choose Availability (AP).' 
    },
    { 
        title: 'Load Balancing', 
        content: 'The process of distributing network traffic or computational workloads across multiple servers. The goal is to optimize resource use, maximize throughput, minimize response time, and avoid overload of any single server. Common algorithms include Round Robin, Least Connections, and IP Hash.', 
        interviewTip: 'Explain that load balancing is crucial for achieving high availability and scalability in web applications. It acts as a "traffic cop" in front of your server farm.' 
    },
    { 
        title: 'Database Indexing', 
        content: 'A data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure. It\'s like the index at the back of a book; instead of scanning every page, you can go directly to the page you need. B-Trees are a common data structure used for database indexes.', 
        interviewTip: 'Explain the trade-off: Indexes dramatically speed up read operations (SELECT) but slow down write operations (INSERT, UPDATE, DELETE) because the index must also be updated. This is a critical database performance tuning concept.' 
    },
    { 
        title: 'Caching', 
        content: 'The process of storing copies of files or data in a temporary storage location (a cache) so that they can be accessed more quickly. Instead of fetching data from a slow source (like a database or a remote API) every time, a system can check the cache first. If the data is there (a "cache hit"), it\'s returned quickly. If not (a "cache miss"), the data is fetched from the source and stored in the cache for next time.', 
        interviewTip: 'This is a universal performance optimization technique. Mention different caching strategies like LRU (Least Recently Used) and the problem of "cache invalidation" (ensuring the cached data is not stale), which is one of the hard problems in computer science.' 
    },
    { 
        title: 'Public Key Cryptography (Asymmetric)', 
        content: 'A cryptographic system that uses pairs of keys: public keys, which may be disseminated widely, and private keys, which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical one-way functions. Data encrypted with the public key can only be decrypted with the corresponding private key.', 
        interviewTip: 'Contrast it with Symmetric Cryptography (where the same key is used for both encryption and decryption). The main use case is for establishing secure communication (like in SSL/TLS) and for digital signatures.' 
    },
    { 
        title: 'Docker', 
        content: 'A platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files; they can communicate with each other through well-defined channels. It allows you to package an application with all of its dependencies into a standardized unit for software development.', 
        interviewTip: 'Explain the difference between a container and a virtual machine (VM). Containers virtualize the OS, while VMs virtualize the hardware. This makes containers much more lightweight and faster to start.' 
    },
    { 
        title: 'Microservices Architecture', 
        content: 'An architectural style that structures an application as a collection of loosely coupled, independently deployable services. Each service is self-contained, responsible for a specific business capability, and communicates with others over a well-defined API. This is in contrast to a monolithic architecture where the entire application is built as a single, unified unit.', 
        interviewTip: 'Discuss the pros (independent deployment, technology diversity, fault isolation) and cons (operational complexity, distributed system challenges, network latency).' 
    },
    { 
        title: 'API (Application Programming Interface)', 
        content: 'A set of rules, protocols, and tools for building software applications. An API specifies how software components should interact. It\'s like a contract between two pieces of software. For web services, it defines the kinds of requests that can be made, how to make them, the data formats that should be used, and the conventions to follow.', 
        interviewTip: 'Use the restaurant analogy: You (the client) look at a menu (the API) and tell the waiter (the API endpoint) what you want. The waiter takes your order to the kitchen (the server), which prepares the food (the response) and gives it back to you.' 
    },
    { 
        title: 'Garbage Collection', 
        content: 'A form of automatic memory management. The garbage collector (GC) attempts to reclaim memory that was allocated by the program, but is no longer referenced. This relieves the programmer from having to perform manual memory management, which can be a source of many bugs like memory leaks or dangling pointers. It is a feature of managed languages like Java, C#, Python, and JavaScript.', 
        interviewTip: 'Mention the trade-off: it simplifies development and prevents certain bugs, but it can introduce unpredictable pauses (stop-the-world GC) in the application, which can be an issue for real-time systems.' 
    },
    { 
        title: 'P vs. NP Problem', 
        content: 'One of the most important open problems in computer science and mathematics. Informally, it asks whether every problem whose solution can be quickly verified by a computer can also be quickly solved by a computer. P (Polynomial time) is a class of problems that can be solved quickly. NP (Nondeterministic Polynomial time) is a class of problems whose solutions can be verified quickly. The question is whether P = NP.', 
        interviewTip: 'You are not expected to solve this! Just show you understand the question. Explain that most computer scientists believe P ≠ NP. Give an example of an NP problem, like the Traveling Salesman Problem: it\'s hard to *find* the shortest route, but easy to *verify* if a given route is shorter than some value.' 
    },
    { 
        title: 'Turing Machine', 
        content: 'A mathematical model of computation that defines an abstract machine which manipulates symbols on a strip of tape according to a table of rules. Despite its simplicity, a Turing machine can be adapted to simulate the logic of any computer algorithm. It provides a theoretical model for what is "computable".', 
        interviewTip: 'This is a deep theoretical topic. Mention it as the theoretical foundation for modern computers and the concept of computability. The Church-Turing thesis states that anything that can be computed can be computed by a Turing machine.' 
    },
    { 
        title: 'Big O Notation', 
        content: 'A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it is used to classify algorithms according to how their run time or space requirements grow as the input size (`n`) grows. It describes the worst-case scenario.', 
        interviewTip: 'You must be fluent in the common complexities: $O(1)$ (Constant), $O(\\log n)$ (Logarithmic), $O(n)$ (Linear), $O(n \\log n)$ (Log-linear), $O(n^2)$ (Quadratic), $O(2^n)$ (Exponential). Be able to identify the complexity of simple code snippets.' 
    },
    { 
        title: 'Design Patterns', 
        content: 'A general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into code, but a description or template for how to solve a problem that can be used in many different situations. Examples include Creational (e.g., Singleton, Factory), Structural (e.g., Adapter, Decorator), and Behavioral (e.g., Observer, Strategy) patterns.', 
        interviewTip: 'Pick one or two patterns and know them well. The Singleton and Factory patterns are common and relatively easy to explain. This shows you think about code structure and reusability beyond just making it work.' 
    },
    { 
        title: 'File Systems', 
        content: 'A method and data structure that an operating system uses to control how data is stored and retrieved. Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stops and the next begins. It organizes data into files and directories (folders).', 
        interviewTip: 'Mention common file systems like NTFS (Windows), APFS (macOS), and ext4 (Linux). A good follow-up point is to mention journaling, a technique used by modern file systems to improve reliability and speed up recovery after a system crash.' 
    },
    { 
        title: 'Virtualization', 
        content: 'The act of creating a virtual (rather than actual) version of something, including virtual computer hardware platforms, storage devices, and computer network resources. A Virtual Machine (VM) is an emulation of a computer system. VMs are based on computer architectures and provide functionality of a physical computer. A hypervisor is the software that creates and runs VMs.', 
        interviewTip: 'This is the technology that powers much of cloud computing. Differentiate it from containerization (Docker), where virtualization happens at the OS level instead of the hardware level.' 
    },
    { 
        title: 'Floating Point Representation', 
        content: 'The standard way computers represent real numbers with fractional parts. It uses a formulaic representation, similar to scientific notation, with a significand (or mantissa), an exponent, and a sign bit. The most common standard is IEEE 754.', 
        interviewTip: 'The key takeaway to mention is its imprecision. Because of the binary representation, simple decimal numbers like 0.1 cannot be represented perfectly, which can lead to small rounding errors. For example, in many languages `0.1 + 0.2` does not exactly equal `0.3`.' 
    },
    { 
        title: 'Character Encodings (ASCII vs. Unicode)', 
        content: 'A character encoding is a system that pairs each character from a given repertoire with something else—such as a sequence of natural numbers, octets, or electrical pulses—in order to facilitate the storage of text in computers and the transmission of text through telecommunication networks. ASCII was an early standard that could only represent 128 characters (English letters, numbers, symbols). Unicode is a modern standard that aims to represent every character from every language. UTF-8 is the most common implementation of Unicode.', 
        interviewTip: 'Show you understand that text is just numbers underneath. Explain that ASCII is a subset of UTF-8 and why Unicode is necessary for a global internet.' 
    },
    { 
        title: 'Blockchain', 
        content: 'A distributed, immutable ledger. It is a growing list of records, called blocks, that are securely linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. This design makes it resistant to modification of its data because once recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks.', 
        interviewTip: 'You don\'t need to be a crypto expert. Describe it as a "distributed database with a trust protocol." Mention its key properties: decentralization, immutability, and transparency. Bitcoin is the most famous application.' 
    },
    { 
        title: 'Quantum Computing', 
        content: 'A type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. The basic unit of memory is the quantum bit or "qubit". While classical computers store information as bits (0s or 1s), qubits can exist in a superposition of both states simultaneously.', 
        interviewTip: 'This is a forward-looking topic. Explain that it is not meant to replace classical computers but to solve specific types of problems that are intractable for them, such as integer factorization (breaking modern cryptography) and simulating quantum systems.' 
    }
];

const quizData = [
    { category: 'DSA', level: 1, question: 'What is the time complexity of binary search?', options: ['O(n)', '$O(\\log n)$', '$O(n^2)$', 'O(1)'], correct: '$O(\\log n)$', explanation: 'Binary search divides the search space in half each step.' },
    { category: 'DSA', level: 2, question: 'What is the worst-case time complexity of quicksort?', options: ['O(n)', '$O(n \\log n)$', '$O(n^2)$', '$O(\\log n)$'], correct: '$O(n^2)$', explanation: 'Quicksort’s worst case occurs with a bad pivot choice.' },
    { category: 'Web Dev', level: 1, question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Syntax'], correct: 'Cascading Style Sheets', explanation: 'CSS styles web pages.' },
    { category: 'Web Dev', level: 2, question: 'What is the purpose of the z-index property in CSS?', options: ['Set font size', 'Control stacking order', 'Adjust margins', 'Change colors'], correct: 'Control stacking order', explanation: 'z-index controls element layering.' },
    { category: 'CSE', level: 1, question: 'What is an operating system?', options: ['A hardware component', 'A programming language', 'System software', 'A database'], correct: 'System software', explanation: 'It manages hardware and software resources.' },
    { category: 'CSE', level: 2, question: 'What is virtual memory?', options: ['Physical RAM', 'CPU cache', 'Memory abstraction using disk', 'GPU memory'], correct: 'Memory abstraction using disk', explanation: 'It uses disk space as an extension of RAM.' },
    { category: 'DSA', level: 1, question: 'Which data structure uses LIFO?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], correct: 'Stack', explanation: 'LIFO stands for Last-In, First-Out, which is the defining characteristic of a Stack.' },
    { category: 'DSA', level: 1, question: 'What is the time complexity to access an element in an array by its index?', options: ['O(n)', 'O(1)', '$O(\\log n)$', '$O(n^2)$'], correct: 'O(1)', explanation: 'Accessing an array element by index is a constant time operation.' },
    { category: 'DSA', level: 2, question: 'Which data structure is ideal for implementing a priority queue?', options: ['Stack', 'Linked List', 'Heap', 'Queue'], correct: 'Heap', explanation: 'A binary heap allows for efficient retrieval and removal of the highest-priority element.' },
    { category: 'DSA', level: 2, question: 'A graph with no cycles is called a(n)...', options: ['Complete Graph', 'Acyclic Graph', 'Bipartite Graph', 'Planar Graph'], correct: 'Acyclic Graph', explanation: 'A graph without cycles is known as an acyclic graph. A directed acyclic graph is a DAG.' },
    { category: 'DSA', level: 3, question: 'What is the main advantage of an Adjacency List over an Adjacency Matrix for representing a sparse graph?', options: ['Faster edge lookup', 'Space efficiency', 'Simpler to implement', 'Faster to traverse'], correct: 'Space efficiency', explanation: 'For a sparse graph (few edges), an adjacency list uses much less space ($O(V+E)$) than a matrix ($O(V^2)$).' },
    { category: 'DSA', level: 3, question: 'Which algorithm is used to find the shortest path in an unweighted graph?', options: ['Dijkstra\'s Algorithm', 'BFS', 'DFS', 'Bellman-Ford'], correct: 'BFS', explanation: 'Breadth-First Search (BFS) explores level by level, guaranteeing it finds the shortest path in terms of number of edges.' },
    { category: 'Web Dev', level: 1, question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyperlink and Text Markup Language', 'High-Level Text Markup Language', 'Home Tool Markup Language'], correct: 'HyperText Markup Language', explanation: 'HTML is the standard markup language for creating web pages.' },
    { category: 'Web Dev', level: 1, question: 'Which HTML tag is used to define an internal style sheet?', options: ['<css>', '<script>', '<style>', '<link>'], correct: '<style>', explanation: 'The <style> tag is used to embed CSS directly within an HTML document, usually in the <head>.' },
    { category: 'Web Dev', level: 2, question: 'What is the CSS `box-sizing: border-box;` property used for?', options: ['To create a border', 'To include padding and border in the element\'s total width and height', 'To make the box a flexible container', 'To hide the box'], correct: 'To include padding and border in the element\'s total width and height', explanation: 'This makes layout calculations more intuitive.' },
    { category: 'Web Dev', level: 2, question: 'In JavaScript, what does `===` check for?', options: ['Value only', 'Reference only', 'Value and type', 'Type only'], correct: 'Value and type', explanation: 'The strict equality operator (`===`) checks for both value and type equality without performing type coercion.' },
    { category: 'Web Dev', level: 3, question: 'What is a closure in JavaScript?', options: ['A way to close a browser window', 'A function bundled with its lexical environment', 'A built-in JavaScript method', 'A type of CSS selector'], correct: 'A function bundled with its lexical environment', explanation: 'A closure gives you access to an outer function’s scope from an inner function.' },
    { category: 'Web Dev', level: 3, question: 'What problem does `async/await` solve?', options: ['Slow internet connections', 'Browser incompatibility', 'Callback Hell / Pyramid of Doom', 'CSS specificity issues'], correct: 'Callback Hell / Pyramid of Doom', explanation: 'It provides syntactic sugar over Promises to make asynchronous code appear more synchronous and readable.' },
    { category: 'CSE', level: 1, question: 'Which of the following is NOT a pillar of Object-Oriented Programming?', options: ['Inheritance', 'Polymorphism', 'Redundancy', 'Encapsulation'], correct: 'Redundancy', explanation: 'The four pillars are Encapsulation, Abstraction, Inheritance, and Polymorphism.' },
    { category: 'CSE', level: 1, question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Unit', 'Computer Processor Unit'], correct: 'Central Processing Unit', explanation: 'The CPU is the primary component of a computer that executes instructions.' },
    { category: 'CSE', level: 2, question: 'Which protocol is stateless?', options: ['TCP', 'FTP', 'HTTP', 'POP3'], correct: 'HTTP', explanation: 'HTTP is a stateless protocol, meaning each request from a client to a server is treated as an independent transaction.' },
    { category: 'CSE', level: 2, question: 'What are the four necessary conditions for a deadlock?', options: ['Starvation, Aging, Race Condition, Livelock', 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait', 'Atomicity, Consistency, Isolation, Durability', 'Input, Output, CPU, Memory'], correct: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait', explanation: 'All four of these conditions must be met for a deadlock to occur.' },
    { category: 'CSE', level: 3, question: 'What is the primary purpose of database normalization?', options: ['To speed up all queries', 'To reduce data redundancy and improve data integrity', 'To make the database larger', 'To use less complex queries'], correct: 'To reduce data redundancy and improve data integrity', explanation: 'Normalization organizes data to avoid redundancy and prevent issues like insertion, update, and deletion anomalies.' },
    { category: 'CSE', level: 3, question: 'According to the CAP theorem, a distributed system can only provide two of which three guarantees?', options: ['Speed, Accuracy, Price', 'Consistency, Availability, Partition Tolerance', 'Security, Performance, Scalability', 'Atomicity, Concurrency, Persistence'], correct: 'Consistency, Availability, Partition Tolerance', explanation: 'The CAP theorem states that a distributed data store cannot simultaneously be consistent, available, and partition tolerant.' },
    { category: 'DSA', level: 2, question: 'Which sorting algorithm is NOT stable?', options: ['Merge Sort', 'Insertion Sort', 'Bubble Sort', 'Quicksort'], correct: 'Quicksort', explanation: 'Standard implementations of Quicksort are not stable, meaning the relative order of equal elements might change.' },
    { category: 'DSA', level: 3, question: 'The height of a balanced binary search tree with N nodes is...', options: ['$O(N)$', '$O(N^2)$', '$O(\\log N)$', '$O(N \\log N)$'], correct: '$O(\\log N)$', explanation: 'A balanced BST ensures the height remains logarithmic with respect to the number of nodes, guaranteeing efficient operations.' },
    { category: 'Web Dev', level: 2, question: 'What is the role of a "Service Worker" in a PWA?', options: ['To style the web page', 'To handle user authentication', 'To act as a proxy server, enabling offline functionality and push notifications', 'To optimize images'], correct: 'To act as a proxy server, enabling offline functionality and push notifications', explanation: 'Service workers run in the background and are key to the app-like features of a PWA.' },
    { category: 'Web Dev', level: 3, question: 'Which of the following is a way to prevent Cross-Site Scripting (XSS)?', options: ['Using HTTPS', 'Using strong passwords', 'Sanitizing and escaping user input', 'Using a firewall'], correct: 'Sanitizing and escaping user input', explanation: 'By treating all user input as untrusted and properly escaping it before rendering, you can prevent malicious scripts from executing.' },
    { category: 'CSE', level: 2, question: 'What is the difference between a compiler and an interpreter?', options: ['There is no difference', 'A compiler is for hardware, an interpreter for software', 'A compiler converts the entire program to machine code at once; an interpreter converts it line-by-line', 'A compiler is faster, an interpreter is more secure'], correct: 'A compiler converts the entire program to machine code at once; an interpreter converts it line-by-line', explanation: 'This fundamental difference affects performance and error reporting.' },
    { category: 'CSE', level: 3, question: 'What is "thrashing" in the context of an Operating System?', options: ['A security attack', 'When a process spends more time paging than executing', 'A type of CPU scheduling', 'A file system error'], correct: 'When a process spends more time paging than executing', explanation: 'Thrashing occurs when the system is in a constant state of swapping pages between memory and disk, leading to severe performance degradation.' },
    { category: 'DSA', level: 1, question: 'An array is a collection of items stored at...', options: ['Random memory locations', 'Contiguous memory locations', 'A linked list', 'The heap'], correct: 'Contiguous memory locations', explanation: 'This property allows for O(1) random access.' },
    { category: 'Web Dev', level: 1, question: 'Which HTTP status code means "Not Found"?', options: ['200', '301', '404', '500'], correct: '404', explanation: '404 is the standard HTTP status code indicating that the server could not find the requested resource.' },
    { category: 'CSE', level: 2, question: 'What is the main function of the TCP protocol?', options: ['To provide reliable, ordered data delivery', 'To resolve domain names', 'To route packets across networks', 'To display web pages'], correct: 'To provide reliable, ordered data delivery', explanation: 'TCP uses a three-way handshake and sequence numbers to ensure data arrives correctly.' },

    { category: 'DSA', level: 2, question: 'What is a "greedy" algorithm?', options: ['An algorithm that uses a lot of memory', 'An algorithm that makes the locally optimal choice at each stage', 'An algorithm that is always slow', 'An algorithm that explores all possible solutions'], correct: 'An algorithm that makes the locally optimal choice at each stage', explanation: 'Greedy algorithms hope that local optimums will lead to a global optimum.' },
    { category: 'Web Dev', level: 2, question: 'What is the purpose of the `alt` attribute on an `<img>` tag?', options: ['To provide alternative text for an image if it cannot be displayed', 'To set the alignment of the image', 'To link the image to another page', 'To set the image\'s title'], correct: 'To provide alternative text for an image if it cannot be displayed', explanation: 'This is crucial for web accessibility (for screen readers) and for SEO.' },
    { category: 'CSE', level: 1, question: 'What does "API" stand for?', options: ['Advanced Programming Interface', 'Application Programming Interface', 'Applied Program Interaction', 'Application Protocol Interface'], correct: 'Application Programming Interface', explanation: 'An API is a contract that allows different software components to communicate.' },
    { category: 'DSA', level: 3, question: 'Dijkstra\'s algorithm may not work correctly if the graph has...', options: ['Cycles', 'More than 100 nodes', 'Negative edge weights', 'Multiple connected components'], correct: 'Negative edge weights', explanation: 'The greedy approach of Dijkstra\'s fails with negative edge weights; Bellman-Ford should be used instead.' },
    { category: 'Web Dev', level: 3, question: 'What is tree shaking in the context of module bundlers like Webpack?', options: ['A debugging technique', 'A method of eliminating dead (unused) code', 'A way to structure React components', 'A CSS animation effect'], correct: 'A method of eliminating dead (unused) code', explanation: 'Tree shaking helps reduce the final bundle size by only including code that is actually used.' },
    { category: 'CSE', level: 2, question: 'What is a "race condition"?', options: ['When two processes are competing for the CPU', 'A bug where the output is unexpectedly dependent on the sequence or timing of other events', 'A network error', 'A type of sorting algorithm'], correct: 'A bug where the output is unexpectedly dependent on the sequence or timing of other events', explanation: 'Race conditions often occur in multi-threaded applications when accessing shared resources without proper synchronization.' },
    { category: 'DSA', level: 1, question: 'What does FIFO stand for?', options: ['First-In, First-Out', 'Fast-In, Fast-Out', 'First-In, Final-Out', 'File-Input, File-Output'], correct: 'First-In, First-Out', explanation: 'FIFO is the principle used by the Queue data structure.' },
    { category: 'Web Dev', level: 2, question: 'Which of the following is NOT a valid JavaScript variable type?', options: ['Number', 'String', 'Boolean', 'Decimal'], correct: 'Decimal', explanation: 'JavaScript uses the `Number` type to represent both integers and floating-point numbers.' },
    // Added 20 More Entries
    { category: 'DSA', level: 2, question: 'What is the primary use case for a Trie data structure?', options: ['Sorting numbers', 'Efficient prefix-based searching (autocomplete)', 'Finding the shortest path in a graph', 'Implementing a FIFO queue'], correct: 'Efficient prefix-based searching (autocomplete)', explanation: 'Tries are optimized for string operations based on prefixes.' },
    { category: 'DSA', level: 3, question: 'Which algorithm design paradigm is used by Merge Sort?', options: ['Greedy', 'Backtracking', 'Divide and Conquer', 'Dynamic Programming'], correct: 'Divide and Conquer', explanation: 'Merge Sort works by dividing the array, conquering the subproblems recursively, and then combining the results.' },
    { category: 'Web Dev', level: 1, question: 'Which tag is used to create a numbered list in HTML?', options: ['<ul>', '<dl>', '<li>', '<ol>'], correct: '<ol>', explanation: '<ol> stands for "ordered list". <ul> is for unordered (bulleted) lists.' },
    { category: 'Web Dev', alevel: 2, question: 'What does the term "stateless" mean in the context of HTTP?', options: ['The server has a slow connection', 'The server does not store any client context between requests', 'The client does not have JavaScript enabled', 'The server cannot handle requests'], correct: 'The server does not store any client context between requests', explanation: 'Each HTTP request is independent, and the server does not remember previous requests from the same client.' },
    { category: 'Web Dev', level: 3, question: 'What is the purpose of the `useMemo` hook in React?', options: ['To create a new state variable', 'To perform side effects in a component', 'To memoize a value, recomputing it only when its dependencies change', 'To define a component'], correct: 'To memoize a value, recomputing it only when its dependencies change', explanation: '`useMemo` is an optimization hook used to prevent expensive calculations on every render.' },
    { category: 'CSE', level: 1, question: 'What is the binary representation of the decimal number 10?', options: ['1010', '0011', '1110', '1001'], correct: '1010', explanation: '(1 * 8) + (0 * 4) + (1 * 2) + (0 * 1) = 10.' },
    { category: 'CSE', level: 2, question: 'What is a "hypervisor" used for?', options: ['To manage database transactions', 'To translate domain names to IP addresses', 'To create and run virtual machines (VMs)', 'To balance network load'], correct: 'To create and run virtual machines (VMs)', explanation: 'A hypervisor is the software that enables virtualization by managing the host system\'s resources for guest VMs.' },
    { category: 'CSE', level: 3, question: 'In the context of caching, what does LRU stand for?', options: ['Last Right Update', 'Least Recently Used', 'Longest Running Unit', 'Latency Reduction Utility'], correct: 'Least Recently Used', explanation: 'LRU is a common cache eviction policy where the least recently used item is discarded first to make space for new data.' },
    { category: 'DSA', level: 2, question: 'A Binary Search Tree becomes inefficient (O(n) search) when it is...', options: ['Full and complete', 'Perfectly balanced', 'Skewed (unbalanced)', 'Very large'], correct: 'Skewed (unbalanced)', explanation: 'A skewed BST degenerates into a linked list, causing search time to become linear.' },
    { category: 'DSA', level: 3, question: 'Topological Sort can be applied to which type of graph?', options: ['Undirected Acyclic Graph', 'Directed Acyclic Graph (DAG)', 'Directed Cyclic Graph', 'Any graph'], correct: 'Directed Acyclic Graph (DAG)', explanation: 'Topological sort requires a graph to be directed and have no cycles to produce a valid linear ordering.' },
    { category: 'Web Dev', level: 2, question: 'What is a JWT (JSON Web Token)?', options: ['A JavaScript framework', 'A CSS preprocessor', 'A standard for creating access tokens that assert some number of claims', 'A type of database'], correct: 'A standard for creating access tokens that assert some number of claims', explanation: 'JWTs are commonly used for stateless authentication in APIs.' },
    { category: 'Web Dev', level: 3, question: 'What is the main advantage of a build tool like Vite over older bundlers like Webpack during development?', options: ['It supports more JavaScript frameworks', 'It creates smaller production bundles', 'It uses native ES modules for extremely fast server starts and hot module replacement', 'It has better documentation'], correct: 'It uses native ES modules for extremely fast server starts and hot module replacement', explanation: 'Vite avoids bundling the entire application during development, leading to a significantly faster developer experience.' },
    { category: 'CSE', level: 2, question: 'Which of the following is a primary goal of a load balancer?', options: ['To encrypt network traffic', 'To distribute incoming requests across multiple servers', 'To store user passwords securely', 'To execute JavaScript code'], correct: 'To distribute incoming requests across multiple servers', explanation: 'Load balancing prevents any single server from becoming a bottleneck, thus improving availability and reliability.' },
    { category: 'CSE', level: 3, question: 'Which SOLID principle states that a class should have only one reason to change?', options: ['Open/Closed Principle', 'Liskov Substitution Principle', 'Single Responsibility Principle', 'Dependency Inversion Principle'], correct: 'Single Responsibility Principle', explanation: 'The Single Responsibility Principle (SRP) argues that a class should have only one job or responsibility.' },
    { category: 'DSA', level: 1, question: 'Which data structure would be best to simulate a line of people?', options: ['Stack', 'Array', 'Tree', 'Queue'], correct: 'Queue', explanation: 'A queue follows the First-In, First-Out (FIFO) principle, just like a line of people.' },
    { category: 'Web Dev', level: 1, question: 'What is the correct HTML element for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correct: '<h1>', explanation: 'HTML provides six levels of headings, <h1> through <h6>, with <h1> being the most important or largest.' },
    { category: 'CSE', level: 2, question: 'Which of the following is a key property of a blockchain?', options: ['Mutability', 'Centralization', 'Immutability', 'Privacy by default'], correct: 'Immutability', explanation: 'Once data is recorded on a blockchain, it is extremely difficult to alter, making the ledger immutable.' },
    { category: 'DSA', level: 3, question: 'The Sliding Window technique is most useful for which type of problem?', options: ['Sorting a list of numbers', 'Finding a property of a contiguous subarray/substring', 'Searching in a tree', 'Reversing a linked list'], correct: 'Finding a property of a contiguous subarray/substring', explanation: 'Sliding Window is an optimization for problems that involve analyzing contiguous blocks of a linear data structure.' },
    { category: 'Web Dev', level: 2, question: 'What is the purpose of TypeScript?', options: ['To create 3D graphics in the browser', 'To add static typing to JavaScript', 'To manage backend servers', 'To replace HTML'], correct: 'To add static typing to JavaScript', explanation: 'TypeScript helps catch errors during development by adding a type system on top of JavaScript.' },
    { category: 'CSE', level: 3, question: 'What does it mean for an API operation to be "idempotent"?', options: ['It is extremely fast', 'It requires authentication', 'Making the same request multiple times has the same effect as making it once', 'It can only be called once'], correct: 'Making the same request multiple times has the same effect as making it once', explanation: 'Idempotency is a crucial property for building reliable systems, especially when handling network retries. For example, `DELETE /item/123` is idempotent.' }
];

const achievementData = [
    { id: 'first_task', name: 'First Mission', description: 'Added your first mission!', icon: '🚀' },
    { id: 'perfect_day', name: 'Perfect Day', description: 'Completed all tasks in a day!', icon: '🌟' },
    { id: 'streak_5', name: 'Streak Starter', description: 'Achieved a 5-day streak!', icon: '🔥' },
    { id: 'focus_hour', name: 'Focus Master', description: 'Focused for an hour!', icon: '⏱️' },
    { id: 'quiz_level_1', name: 'Quiz Novice', description: 'Reached quiz level 1!', icon: '🧠' },
    { id: 'quiz_level_2', name: 'Quiz Adept', description: 'Reached quiz level 2!', icon: '🌟' },
    { id: 'quiz_ace', name: 'Quiz Master', description: 'Answered a quiz question correctly!', icon: '🏆' },
    { id: 'task_10', name: 'Task Tackler', description: 'Completed 10 tasks!', icon: '✅' },
    { id: 'task_50', name: 'Mission Accomplished', description: 'Completed 50 tasks!', icon: '🎖️' },
    { id: 'task_100', name: 'Centurion', description: 'Completed 100 tasks!', icon: '💯' },
    { id: 'streak_10', name: 'Committed Coder', description: 'Achieved a 10-day streak!', icon: '🧡' },
    { id: 'streak_30', name: 'Habit Builder', description: 'Achieved a 30-day streak!', icon: '💪' },
    { id: 'streak_50', name: 'Unstoppable', description: 'Achieved a 50-day streak!', icon: '☄️' },
    { id: 'streak_100', name: 'Legendary', description: 'Achieved a 100-day streak!', icon: '👑' },
    { id: 'focus_total_5', name: 'Deep Diver', description: 'Logged 5 total hours of focus!', icon: '🤿' },
    { id: 'focus_total_10', name: 'Time Bender', description: 'Logged 10 total hours of focus!', icon: '⏳' },
    { id: 'focus_session_2', name: 'Zone In', description: 'Completed a 2-hour continuous focus session!', icon: '🧘' },
    { id: 'dsa_topic_1', name: 'DSA Explorer', description: 'Read your first DSA topic!', icon: '🗺️' },
    { id: 'dsa_topic_10', name: 'Algorithm Ace', description: 'Read 10 DSA topics!', icon: '👨‍💻' },
    { id: 'dsa_topic_all', name: 'Data Dominator', description: 'Read all DSA topics!', icon: '🌌' },
    { id: 'web_dev_topic_1', name: 'Web Weaver', description: 'Read your first Web Dev topic!', icon: '🕸️' },
    { id: 'web_dev_topic_10', name: 'Full-Stack Thinker', description: 'Read 10 Web Dev topics!', icon: '🏗️' },
    { id: 'web_dev_topic_all', name: 'Digital Architect', description: 'Read all Web Dev topics!', icon: '🏙️' },
    { id: 'cse_topic_1', name: 'CS Scholar', description: 'Read your first CSE topic!', icon: '🎓' },
    { id: 'cse_topic_10', name: 'Theory Titan', description: 'Read 10 CSE topics!', icon: '📚' },
    { id: 'cse_topic_all', name: 'Computer Scientist', description: 'Read all CSE topics!', icon: '🧑‍🔬' },
    { id: 'quiz_streak_3', name: 'Quiz Whiz', description: 'Answered 3 quiz questions correctly in a row!', icon: '🎯' },
    { id: 'quiz_streak_10', name: 'Brainiac', description: 'Answered 10 quiz questions correctly in a row!', icon: '💡' },
    { id: 'quiz_total_10', name: 'Question Queller', description: 'Answered 10 total quiz questions!', icon: '❓' },
    { id: 'quiz_total_50', name: 'Knowledgeable', description: 'Answered 50 total quiz questions!', icon: '🧐' },
    { id: 'quiz_master_dsa', name: 'DSA Quiz Master', description: 'Answered 10 DSA questions correctly!', icon: '👾' },
    { id: 'quiz_master_web', name: 'Web Dev Quiz Master', description: 'Answered 10 Web Dev questions correctly!', icon: '🌐' },
    { id: 'quiz_master_cse', name: 'CSE Quiz Master', description: 'Answered 10 CSE questions correctly!', icon: '💻' },
    { id: 'quiz_level_3', name: 'Quiz Expert', description: 'Reached quiz level 3!', icon: '🌠' },
    { id: 'perfect_week', name: 'Perfect Week', description: 'Completed all tasks every day for 7 days!', icon: '📅' },
    { id: 'early_bird', name: 'Early Bird', description: 'Completed a task before 7 AM!', icon: '☀️' },
    { id: 'night_owl', name: 'Night Owl', description: 'Completed a task after midnight!', icon: '🦉' },
    { id: 'weekend_warrior', name: 'Weekend Warrior', description: 'Completed a task on a Saturday or Sunday!', icon: '🤺' },
    { id: 'polymath', name: 'Polymath', description: 'Completed tasks in all categories (DSA, Web, CSE) in one day!', icon: '🎨' },
    { id: 'bookworm', name: 'Bookworm', description: 'Viewed 5 different book quotes!', icon: '📖' },
    { id: 'motivator', name: 'Motivator', description: 'Viewed 10 different motivational quotes!', icon: '📣' },
    { id: 'first_week', name: 'First Week Done', description: 'Used the app for 7 days!', icon: '🎉' },
    { id: 'task_variety', name: 'Variety Pack', description: 'Completed 5 different types of tasks!', icon: '🎲' },
    { id: 'quick_learner', name: 'Quick Learner', description: 'Read 3 topics in one day!', icon: '⚡' },
    { id: 'consistency_king', name: 'Consistency King', description: 'Maintained a streak through a weekend!', icon: '🗓️' },
    { id: 'first_achievement', name: 'Achiever', description: 'Unlocked your first achievement!', icon: '🏅' },
    // Added 20 More Entries
    { id: 'streak_150', name: 'Relentless', description: 'Achieved a 150-day streak!', icon: '🦾' },
    { id: 'streak_365', name: 'One Year Strong', description: 'Achieved a 365-day streak!', icon: '🎇' },
    { id: 'focus_total_25', name: 'Flow State', description: 'Logged 25 total hours of focus!', icon: '🧠' },
    { id: 'focus_total_50', name: 'Productivity Pro', description: 'Logged 50 total hours of focus!', icon: '📈' },
    { id: 'quiz_perfect_score', name: 'Perfectionist', description: 'Scored 100% on a quiz!', icon: '🎯' },
    { id: 'quiz_flawless_streak', name: 'Flawless', description: 'Answered 20 quiz questions correctly in a row!', icon: '💎' },
    { id: 'dsa_mastery', name: 'Graph Guru', description: 'Read all graph-related DSA topics!', icon: ' G' },
    { id: 'dp_dynamo', name: 'DP Dynamo', description: 'Read all Dynamic Programming topics!', icon: '🧩' },
    { id: 'web_security_specialist', name: 'Security Specialist', description: 'Read all web security topics!', icon: '🛡️' },
    { id: 'react_connoisseur', name: 'React Connoisseur', description: 'Read all React-related topics!', icon: '⚛️' },
    { id: 'cse_theorist', name: 'Theorist', description: 'Read P vs. NP and Turing Machine topics!', icon: '🤔' },
    { id: 'systems_architect', name: 'Systems Architect', description: 'Read all distributed systems topics in CSE!', icon: '🏛️' },
    { id: 'task_marathon', name: 'Task Marathon', description: 'Completed 10 tasks in a single day!', icon: '🏃‍♂️' },
    { id: 'planner', name: 'Planner', description: 'Had 10+ tasks scheduled for a day!', icon: '🗒️' },
    { id: 'overachiever', name: 'Overachiever', description: 'Completed all tasks for a day before noon!', icon: '💨' },
    { id: 'five_a_day', name: 'Five a Day', description: 'Read 5 topics from any category in a single day!', icon: '🍎' },
    { id: 'curious_mind', name: 'Curious Mind', description: 'Used the app every day for a month!', icon: '🧐' },
    { id: 'knowledge_seeker', name: 'Knowledge Seeker', description: 'Viewed 50 different topic cards!', icon: '💡' },
    { id: 'collector', name: 'Collector', description: 'Unlocked 25 achievements!', icon: ' M' },
    { id: 'app_veteran', name: 'App Veteran', description: 'Used the app for 100 days total!', icon: ' V' }
];


  //.......

//...................
     
    
let skillCores = {
    'dsa': { xp: 0, level: 1 },
    'dev': { xp: 0, level: 1 },
    'cse': { xp: 0, level: 1 }
};
        // --- Core App State ---
        let tasks = [], completionHistory = {}, timeLog = {}, currentStreak = 0, discoveredStreaks = [], achievements = [], userLevel = 1;
        let timerInterval = null, timerSeconds = 0, activeTimerTaskId = null;
        let completionChartInstance = null, categoryChartInstance = null;

        // --- Dynamic Starfield Canvas ---
        const canvas = document.getElementById('starfield-canvas');
        const ctx = canvas.getContext('2d');
        let stars = [];
        let rotation = 0;

        function initStarfield() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: (Math.random() - 0.5) * canvas.width * 2,
                    y: (Math.random() - 0.5) * canvas.height * 2,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 1.5 + 0.5,
                });
            }
        }

        function animateStarfield() {
            rotation += 0.00005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(rotation);
            stars.forEach(star => {
                let k = 128 / star.z;
                let px = star.x * k;
                let py = star.y * k;
                let size = (1 - star.z / canvas.width) * star.size;
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / canvas.width})`;
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();
                star.z -= 0.2;
                if (star.z <= 0) star.z = canvas.width;
            });
            ctx.restore();
            requestAnimationFrame(animateStarfield);
        }

        // Initialize starfield on load
        window.addEventListener('load', () => {
            initStarfield();
            animateStarfield();
            document.getElementById('welcomeOverlay').classList.add('hidden');
        });

        window.addEventListener('resize', initStarfield);



        // --- Core App Logic ---

// Utility to get the day of the year
function getDayOfYear() {
    return Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
}



// Add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categorySelect = document.getElementById('categorySelect');
    const prioritySelect = document.getElementById('prioritySelect');
    if (!taskInput.value.trim()) {
        showNotification('Please enter a mission name.');
        return;
    }
    showLoading();
    const task = {
        id: Date.now(),
        name: taskInput.value.trim(),
        category: categorySelect.value,
        priority: prioritySelect.value,
        completed: false,
        timeSpent: 0,
        createdAt: new Date().toDateString()
    };
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
    updateStats();
    saveData();
    if (!achievements.some(a => a.id === 'first_task')) unlockAchievement('first_task');
    showNotification(`Mission "${task.name}" added!`);
    hideLoading();
}

// REPLACE your old completeTask function with this one
function completeTask(taskId) {
    showLoading();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        // --- New logic to enforce time requirement ---
        // This check runs when the user tries to mark an incomplete task as complete
        if (!task.completed) {
            if (task.priority === 'high' && task.timeSpent < 7200) {
                const remainingTime = Math.ceil((7200 - task.timeSpent) / 60);
                showNotification(`High-priority missions require 2 hours of focus. ${remainingTime} minutes remaining.`);
                hideLoading();
                return; // Stop the function here, preventing completion
            }
        }
        // --- End of new logic ---

        task.completed = !task.completed;
        
        const today = new Date().toDateString();
        const todayTasks = tasks.filter(t => t.createdAt === today);
        const allComplete = todayTasks.every(t => t.completed);

        if (todayTasks.some(t => t.completed)) {
            completionHistory[today] = { completed: true, perfect: allComplete };
            if (allComplete && !achievements.some(a => a.id === 'perfect_day')) {
                unlockAchievement('perfect_day');
            }
        } else {
            delete completionHistory[today];
        }

        renderTasks();
        updateStats();
        renderCalendar();
        saveData();
        showNotification(task.completed ? `Mission "${task.name}" completed!` : `Mission "${task.name}" reopened.`);
    }
    hideLoading();
}
// Delete a task
function deleteTask(taskId) {
    showLoading();
    const task = tasks.find(t => t.id === taskId);
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
    updateStats();
    renderCalendar();
    saveData();
    showNotification(`Mission "${task.name}" deleted.`);
    hideLoading();
}

// Render tasks for the current day
// REPLACE your old renderTasks function with this one
function renderTasks() {
    const taskList = document.getElementById('taskList');
    const todayTasks = tasks.filter(t => t.createdAt === new Date().toDateString());
    todayTasks.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    taskList.innerHTML = todayTasks.map(task => {
        // --- Logic to determine button state ---
        const isHighPriority = task.priority === 'high';
        const timeRequirementMet = task.timeSpent >= 7200; // 7200 seconds = 2 hours
        const canComplete = !isHighPriority || timeRequirementMet || task.completed;
        
        let completeButtonHTML = '';
        if (task.completed) {
            completeButtonHTML = `<button class="btn-small btn-complete" onclick="completeTask(${task.id})">Done</button>`;
        } else if (canComplete) {
            completeButtonHTML = `<button class="btn-small btn-complete" onclick="completeTask(${task.id})">Complete</button>`;
        } else {
            const remainingTime = Math.ceil((7200 - task.timeSpent) / 60);
            // Add the onclick event to the button to show the notification
completeButtonHTML = `<button class="btn-small btn-complete disabled" title="${remainingTime} more minutes of focus required." onclick="showNotification('${remainingTime} more minutes of focus required.')">Complete</button>`;
        }
        // --- End of new logic ---

        return `
        <div class="task-item ${task.completed ? 'task-completed completed' : 'added'}">
            <div class="task-info">
                ${planetIcons[task.category] || planetIcons['other']}
                <span class="task-name">${task.name}</span>
                <span class="priority-label priority-${task.priority}">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="btn-small btn-complete" onclick="startTimer(${task.id})">Engage</button>
                ${completeButtonHTML} 

                <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        </div>`;
    }).join('');
}

// Update stats (total tasks, completed today, streak, completion rate)
function updateStats() {
    const today = new Date().toDateString();
    const todayTasks = tasks.filter(t => t.createdAt === today);
    const completedToday = todayTasks.filter(t => t.completed).length;
    const totalTasksCount = tasks.length;
    const completionRate = totalTasksCount ? Math.round((tasks.filter(t => t.completed).length / totalTasksCount) * 100) : 0;

    let streak = 0;
    let date = new Date();
    while (completionHistory[date.toDateString()]?.completed) {
        streak++;
        date.setDate(date.getDate() - 1);
    }
    currentStreak = streak;
    if (streak >= 5 && !achievements.some(a => a.id === 'streak_5')) {
        unlockAchievement('streak_5');
    }
    if (streak > 0 && !discoveredStreaks.includes(streak)) {
        discoveredStreaks.push(streak);
        showNotification(`🌌 Streak Milestone: ${streak} days! Earned "${constellationData[streak % constellationData.length].name}" badge!`);
    }

    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0);
    if (totalTime >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
        unlockAchievement('focus_hour');
    }

    userLevel = Math.floor(tasks.filter(t => t.completed).length / 5) + 1;

    document.getElementById('totalTasks').textContent = totalTasksCount;
    document.getElementById('completedTasks').textContent = completedToday;
    document.getElementById('currentStreak').textContent = currentStreak;
    document.getElementById('completionRate').textContent = `${completionRate}%`;
    document.getElementById('streakDisplay').textContent = currentStreak;
    document.getElementById('fireIcon').classList.toggle('active', currentStreak > 0);
    document.getElementById('progressFill').style.width = `${completionRate}%`;

    renderTimeAnalysis();
    updateMissionInsight();
}

// Render calendar with completion history
function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const svg = document.getElementById('constellation-svg');
    calendar.innerHTML = '';
    svg.innerHTML = '';
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day header';
        dayEl.textContent = day;
        calendar.appendChild(dayEl);
    });

    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day inactive';
        calendar.appendChild(emptyDay);
    }

    const activeDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(today.getFullYear(), today.getMonth(), i);
        const dateString = date.toDateString();
        const dayEl = document.createElement('div');
        dayEl.className = `calendar-day ${completionHistory[dateString]?.completed ? 'active' : 'inactive'}`;
        if (completionHistory[dateString]?.perfect) dayEl.classList.add('perfect-day');
        dayEl.innerHTML = `<span class="day-number">${i}</span>`;
        if (completionHistory[dateString]?.completed) {
            const star = document.createElement('div');
            star.className = 'day-star';
            dayEl.appendChild(star);
            activeDays.push({ x: (calendar.children.length % 7) * 50 + 25, y: Math.floor(calendar.children.length / 7) * 50 + 25 });
        }
        calendar.appendChild(dayEl);
    }

    if (activeDays.length > 1) {
        for (let i = 1; i < activeDays.length; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('class', 'constellation-line');
            line.setAttribute('x1', activeDays[i - 1].x);
            line.setAttribute('y1', activeDays[i - 1].y);
            line.setAttribute('x2', activeDays[i].x);
            line.setAttribute('y2', activeDays[i].y);
            svg.appendChild(line);
        }
    }
}

// Render time analysis for focus distribution
function renderTimeAnalysis() {
    const timeAnalysis = document.getElementById('timeAnalysis');
    const categories = [ 'DSA', 'Development', 'project', 'Other',];
    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0) || 1;
    timeAnalysis.innerHTML = categories.map(category => {
        const time = timeLog[category] || 0;
        const percentage = ((time / totalTime) * 100).toFixed(1);
        return `
            <div class="category-time-bar">
                <div class="category-time-label">${category}</div>
                <div class="category-time-progress">
                    <div class="category-time-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="category-time-value">${Math.floor(time / 60)} min</div>
            </div>`;
    }).join('');
}

// Update mission insights
function updateMissionInsight() {
    const insightEl = document.getElementById('missionInsight');
    const todayTasks = tasks.filter(t => t.createdAt === new Date().toDateString());
    let insight = "No missions yet today. Start by adding a new mission!";
    if (todayTasks.length > 0) {
        const completed = todayTasks.filter(t => t.completed).length;
        const highPriority = todayTasks.filter(t => t.priority === 'high').length;
        if (completed === todayTasks.length && todayTasks.length > 0) {
            insight = "All missions completed today! You're a productivity superstar!";
        } else if (highPriority > 0) {
            insight = `You have ${highPriority} high-priority mission${highPriority > 1 ? 's' : ''} left. Tackle them first!`;
        } else {
            insight = `You've completed ${completed}/${todayTasks.length} missions today. Keep pushing forward!`;
        }
    }
    insightEl.classList.add('fade-out');
    setTimeout(() => {
        insightEl.textContent = insight;
        insightEl.classList.remove('fade-out');
    }, 500);
}

// Timer logic for focus mode
function startTimer(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    activeTimerTaskId = taskId;
    timerSeconds = task.timeSpent;
    document.getElementById('timerMissionName').textContent = task.name;
    document.getElementById('focus-timer-modal').classList.remove('hidden');
    updateTimerDisplay();
    const timerControlBtn = document.getElementById('timerControlBtn');
    timerControlBtn.textContent = 'Pause';
    timerControlBtn.onclick = toggleTimer;
    document.getElementById('stopTimerBtn').onclick = stopTimer;
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
            task.timeSpent = timerSeconds;
            timeLog[task.category] = (timeLog[task.category] || 0) + 1;
            saveData();
            if (timerSeconds >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
                unlockAchievement('focus_hour');
            }
        }, 1000);
    }
}


// Forge Functions ---

function renderForge() {
    renderInventory();
    renderRecipes();
    showModal('forgeModal');
}

function renderInventory() {
    const inventoryDisplay = document.getElementById('inventoryDisplay');
    inventoryDisplay.innerHTML = Object.keys(inventory).map(key => `
        <div class="inventory-item">
            ${components[key].icon} ${components[key].name}: ${inventory[key]}
        </div>
    `).join('');
}

function renderRecipes() {
    const recipeGrid = document.getElementById('recipeGrid');
    recipeGrid.innerHTML = ''; // Clear old recipes

    for (const id in craftingRecipes) {
        const recipe = craftingRecipes[id];
        const isCrafted = craftedItems.includes(id);
        let canCraft = true;
        let requirementsHTML = '';

        for (const componentId in recipe.cost) {
            const requiredAmount = recipe.cost[componentId];
            const hasAmount = inventory[componentId];
            if (hasAmount < requiredAmount) {
                canCraft = false;
            }
            // Use colors to show if the user has enough materials
            const hasEnoughClass = hasAmount >= requiredAmount ? 'has-enough' : 'not-enough';
            requirementsHTML += `<span class="${hasEnoughClass}">${components[componentId].icon} ${requiredAmount} ${components[componentId].name} (You have ${hasAmount})</span>`;
        }

        const recipeEl = document.createElement('div');
        recipeEl.className = 'recipe-card';
        
        let buttonHTML = '';
        if (isCrafted) {
            buttonHTML = `<button class="btn crafted" disabled>Crafted</button>`;
        } else {
            buttonHTML = `<button class="btn ${!canCraft ? 'disabled' : ''}" onclick="craftItem('${id}')">Craft</button>`;
        }

        recipeEl.innerHTML = `
            <h4>${recipe.name}</h4>
            <div class="requirements">${requirementsHTML}</div>
            ${buttonHTML}
        `;
        recipeGrid.appendChild(recipeEl);
    }
}

function craftItem(itemId) {
    if (craftedItems.includes(itemId)) {
        showNotification("You've already crafted this item!");
        return;
    }

    const recipe = craftingRecipes[itemId];
    let canCraft = true;
    for (const componentId in recipe.cost) {
        if (inventory[componentId] < recipe.cost[componentId]) {
            canCraft = false;
            break;
        }
    }

    if (canCraft) {
        for (const componentId in recipe.cost) {
            inventory[componentId] -= recipe.cost[componentId];
        }

        craftedItems.push(itemId); // Add to the list of crafted items
        showNotification(`Crafted: ${recipe.name}!`);
        saveData();
        renderForge(); // Re-render the forge to update everything
    } else {
        showNotification("You don't have the required components!");
    }
}
function toggleTimer() {
    const timerControlBtn = document.getElementById('timerControlBtn');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerControlBtn.textContent = 'Resume';
    } else {
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
            const task = tasks.find(t => t.id === activeTimerTaskId);
            if (task) {
                task.timeSpent = timerSeconds;
                timeLog[task.category] = (timeLog[task.category] || 0) + 1;
                saveData();
                if (timerSeconds >= 3600 && !achievements.some(a => a.id === 'focus_hour')) {
                    unlockAchievement('focus_hour');
                }
            }
        }, 1000);
        timerControlBtn.textContent = 'Pause';
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const task = tasks.find(t => t.id === activeTimerTaskId);
    if (task) {
        task.timeSpent = timerSeconds;
        timeLog[task.category] = (timeLog[task.category] || 0) + timerSeconds;
        saveData();
        showNotification(`Focus time logged for "${task.name}": ${Math.floor(timerSeconds / 60)} minutes.`);
    }
    activeTimerTaskId = null;
    timerSeconds = 0;
    document.getElementById('focus-timer-modal').classList.add('hidden');
    renderTimeAnalysis();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerText').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const totalDuration = 25 * 60; // 25-minute Pomodoro session
    const progress = timerSeconds / totalDuration;
    const dashOffset = 339.292 * (1 - Math.min(progress, 1));
    document.getElementById('timerRing').setAttribute('stroke-dashoffset', dashOffset);
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completionHistory', JSON.stringify(completionHistory));
    localStorage.setItem('timeLog', JSON.stringify(timeLog));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('discoveredStreaks', JSON.stringify(discoveredStreaks));
    localStorage.setItem('userLevel', userLevel);
    localStorage.setItem('inventory', JSON.stringify(inventory));
    localStorage.setItem('craftedItems', JSON.stringify(craftedItems));
     craftedItems = JSON.parse(localStorage.getItem('craftedItems') || '[]');
      localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
    localStorage.setItem('skillCores', JSON.stringify(skillCores));


}



// Load data from localStorage
function loadData() {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    completionHistory = JSON.parse(localStorage.getItem('completionHistory') || '{}');
    timeLog = JSON.parse(localStorage.getItem('timeLog') || '{}');
    achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    discoveredStreaks = JSON.parse(localStorage.getItem('discoveredStreaks') || '[]');
    userLevel = parseInt(localStorage.getItem('userLevel') || '1');

    inventory = JSON.parse(localStorage.getItem('inventory') || '{"scrap": 0, "crystal": 0, "datachip": 0}');

      completedChallenges = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    // ADD THIS line, with a default value
    skillCores = JSON.parse(localStorage.getItem('skillCores') || '{"dsa":{"xp":0,"level":1},"dev":{"xp":0,"level":1},"cse":{"xp":0,"level":1}}');

}
    renderTasks();
    updateStats();
    renderCalendar();


// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Inside your DOMContentLoaded block
    loadData();
});



// --- Notification and Loading Utilities ---
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showLoading() {
    document.getElementById('loadingSpinner').classList.add('show');
}

function hideLoading() {
    setTimeout(() => document.getElementById('loadingSpinner').classList.remove('show'), 500);
}

// --- Achievement Logic ---
function unlockAchievement(achievementId) {
    const achievement = achievementData.find(a => a.id === achievementId);
    if (achievement && !achievements.some(a => a.id === achievementId)) {
        achievements.push(achievement);
        saveData();
        showNotification(`Achievement Unlocked: ${achievement.name}!`);
        renderAchievements();
    }
}

// --- Skill Core Functions ---

function addXP(core, amount) {
    skillCores[core].xp += amount;
    const xpForNextLevel = skillCores[core].level * 100; // e.g., Level 1 -> 100 XP, Level 2 -> 200 XP

    if (skillCores[core].xp >= xpForNextLevel) {
        skillCores[core].level++;
        skillCores[core].xp -= xpForNextLevel; // Reset XP for the new level
        showNotification(`${core.toUpperCase()} Core leveled up to ${skillCores[core].level}!`);
    }
    renderSkillCores(); // Update the UI
    saveData();
}

function renderSkillCores() {
    for (const core in skillCores) {
        const coreData = skillCores[core];
        const xpForNextLevel = coreData.level * 100;
        const progressPercent = (coreData.xp / xpForNextLevel) * 100;

        const container = document.getElementById(`core-${core}`);
        container.querySelector('.core-level').textContent = `Lvl ${coreData.level}`;
        container.querySelector('.core-progress-fill').style.width = `${progressPercent}%`;
    }
}

function renderAchievements() {
    const achievementsModalBody = document.getElementById('achievementsModalBody');
    achievementsModalBody.innerHTML = achievements.length > 0 ? achievements.map(a => `
        <div class="achievement-item">
            <span class="achievement-icon">${a.icon}</span>
            <div class="achievement-text"> 
                <div class="achievement-name">${a.name}</div>
                <div class="achievement-desc">${a.description}</div>
            </div>
        </div>
    `).join('') : '<p>No achievements unlocked yet. Keep pushing!</p>';
}

// --- Modal Handlers ---
function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Lessons Modal with Quiz
function renderLessonsModal() {
    const category = ['DSA', 'Web Dev', 'CSE'][Math.floor(Math.random() * 3)];
    const topics = { 'DSA': dsaTopics, 'Web Dev': webDevTopics, 'CSE': cseTopics }[category];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const modalBody = document.getElementById('lessonsModalBody');
    modalBody.innerHTML = `
        <div class="lesson-category">
            <h3>${category}: ${topic.title}</h3>
            <p>${topic.content}</p>
            ${topic.code ? `<pre class="code-snippet"><code class="${category === 'Web Dev' && topic.title.includes('CSS') ? 'language-css' : 'language-javascript'}">${topic.code}</code></pre>` : ''}
            <p><strong>Interview Tip:</strong> ${topic.interviewTip}</p>
            <a href="https://en.wikipedia.org/wiki/${topic.title.replace(/ /g, '_')}" target="_blank" class="learn-more-link">Learn More</a>
        </div>
    `;
    Prism.highlightAll();
    renderQuiz(category);
    showModal('lessonsModal');
}

// Quiz Logic
function renderQuiz(category) {
    const quizContainer = document.getElementById('quizContainer');
    const quiz = quizData.filter(q => q.category === category)[Math.floor(Math.random() * quizData.filter(q => q.category === category).length)];
    quizContainer.innerHTML = `
        <div class="quiz-question">${quiz.question}</div>
        <div class="quiz-options">
            ${quiz.options.map((option, i) => `<div class="quiz-option" data-index="${i}">${option}</div>`).join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
    `;
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => handleQuizAnswer(quiz, option.dataset.index));
    });
}

function handleQuizAnswer(quiz, selectedIndex) {
    const feedbackEl = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('.quiz-option');
    const correctIndex = quiz.options.indexOf(quiz.correct);
    options.forEach((opt, i) => {
        opt.classList.add(i == correctIndex ? 'correct' : 'incorrect');
        opt.style.pointerEvents = 'none';
    });
    feedbackEl.textContent = selectedIndex == correctIndex ? 'Correct! Great job!' : `Incorrect. ${quiz.explanation}`;
    if (selectedIndex == correctIndex && !achievements.some(a => a.id === 'quiz_ace')) {
        unlockAchievement('quiz_ace');
    }
    setTimeout(() => {
        renderLessonsModal();
    }, 2000);
}

// Book Quote Modal
function renderBookQuoteModal() {
    const quote = bookQuotes[Math.floor(Math.random() * bookQuotes.length)];
    document.getElementById('bookQuoteModalBody').innerHTML = `
        <div class="lesson-category">
            <h3>${quote.title}</h3>
            <p>"${quote.quote}"</p>
            <p class="source">— ${quote.author}</p>
        </div>
    `;
    showModal('bookQuoteModal');
}




// Weekly Report Modal
function renderWeeklyReportModal() {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    const weekTasks = tasks.filter(t => new Date(t.createdAt) >= weekStart);
    const completedTasks = weekTasks.filter(t => t.completed).length;
    const totalTime = Object.values(timeLog).reduce((sum, cat) => sum + cat, 0);
    const categoryBreakdown = Object.entries(timeLog).map(([cat, time]) => `${cat}: ${Math.floor(time / 60)} min`).join(', ');
    const report = `
        <h3>Weekly Mission Report</h3>
        <p><strong>Tasks Logged:</strong> ${weekTasks.length}</p>
        <p><strong>Tasks Completed:</strong> ${completedTasks}</p>
        <p><strong>Total Focus Time:</strong> ${Math.floor(totalTime / 60)} minutes</p>
        <p><strong>Category Breakdown:</strong> ${categoryBreakdown || 'None'}</p>
        <p><strong>Insight:</strong> ${completedTasks === weekTasks.length && weekTasks.length > 0 ? 'Perfect week! All missions accomplished!' : 'Keep pushing to complete all missions!'}</p>
    `;
    document.getElementById('weeklyReportBody').innerHTML = report;
    showModal('weeklyReportModal');
}

// --- Mission Archives (Last 7 Days) ---
function renderPastTasks() {
    const archiveBody = document.getElementById('archiveModalBody');
    archiveBody.innerHTML = '';

    const today = new Date();
    let tasksFound = false;

    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toDateString();

        const dailyTasks = tasks.filter(t => t.createdAt === dateString);

        if (dailyTasks.length > 0) {
            tasksFound = true;
            const dayContainer = document.createElement('div');
            dayContainer.className = 'archive-day-container';

            const dayHeader = document.createElement('h4');
            dayHeader.textContent = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            dayContainer.appendChild(dayHeader);

            dailyTasks.forEach(task => {
                const taskEl = document.createElement('div');
                taskEl.className = 'task-item ' + (task.completed ? 'task-completed' : '');
                taskEl.innerHTML = `
                    <div class="task-info">
                        ${task.completed ? '✅' : '❌'}
                        <span class="task-name">${task.name}</span>
                        <span class="priority-label priority-${task.priority}">${task.category}</span>
                    </div>
                `;
                dayContainer.appendChild(taskEl);
            });
            archiveBody.appendChild(dayContainer);
        }
    }

    if (!tasksFound) {
        archiveBody.innerHTML = '<p>No missions logged in the last 7 days.</p>';
    }

    showModal('archiveModal');
}

// Analytics Dashboard
function renderAnalyticsDashboard() {
    if (completionChartInstance) completionChartInstance.destroy();
    if (categoryChartInstance) categoryChartInstance.destroy();

    const completionData = [];
    const labels = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateString = date.toDateString();
        const dailyTasks = tasks.filter(t => t.createdAt === dateString);
        const completed = dailyTasks.filter(t => t.completed).length;
        const total = dailyTasks.length || 1;
        completionData.push((completed / total) * 100);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
    }

    const ctx1 = document.getElementById('completionChart').getContext('2d');
    completionChartInstance = new Chart(ctx1, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Completion Rate (%)',
                data: completionData,
                borderColor: 'rgba(100, 255, 218, 0.8)',
                backgroundColor: 'rgba(100, 255, 218, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true, max: 100 } },
            plugins: { legend: { labels: { color: 'var(--text-color)' } } }
        }
    });

    const categoryData = Object.entries(timeLog).map(([cat, time]) => Math.floor(time / 60));
    const categoryLabels = Object.keys(timeLog);
    const ctx2 = document.getElementById('categoryChart').getContext('2d');
    categoryChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: categoryLabels,
            datasets: [{
                label: 'Focus Time (min)',
                data: categoryData,
                backgroundColor: 'rgba(100, 255, 218, 0.5)',
                borderColor: 'rgba(100, 255, 218, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } },
            plugins: { legend: { labels: { color: 'var(--text-color)' } } }
        }
    });

    showModal('analyticsModal');
}


// --- Monthly Report ---
function renderMonthlyReport() {
    const reportBody = document.getElementById('monthlyReportBody');
    const today = new Date();
    const monthAgo = new Date(today);
    monthAgo.setDate(today.getDate() - 30);

    const monthTasks = tasks.filter(t => new Date(t.createdAt) >= monthAgo);
    const completedTasks = monthTasks.filter(t => t.completed).length;
    const completionRate = monthTasks.length > 0 ? Math.round((completedTasks / monthTasks.length) * 100) : 0;
    
    // Calculate focus time this month
    const monthlyTimeLog = {};
    monthTasks.forEach(task => {
        if(task.timeSpent > 0) {
            monthlyTimeLog[task.category] = (monthlyTimeLog[task.category] || 0) + task.timeSpent;
        }
    });

    const totalFocusTime = Object.values(monthlyTimeLog).reduce((a, b) => a + b, 0);
    const focusBreakdown = Object.entries(monthlyTimeLog).map(([cat, time]) => `<li>${cat}: ${Math.floor(time / 60)} min</li>`).join('');

    const report = `
        <h3>Mission Performance (Last 30 Days)</h3>
        <p><strong>Total Missions Logged:</strong> ${monthTasks.length}</p>
        <p><strong>Missions Completed:</strong> ${completedTasks}</p>
        <p><strong>Overall Success Rate:</strong> ${completionRate}%</p>
        <hr>
        <h3>Focus Analysis</h3>
        <p><strong>Total Focus Time:</strong> ${Math.floor(totalFocusTime / 60)} minutes</p>
        <ul>${focusBreakdown || '<li>No focus time logged.</li>'}</ul>
        <hr>
        <p><strong>Insight:</strong> ${completionRate > 75 ? 'Excellent performance this month! Your discipline is paying off.' : 'Good effort! Focus on consistency to boost your success rate next month.'}</p>
    `;
    reportBody.innerHTML = report;
    showModal('monthlyReportModal');
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const isDark = body.dataset.theme === 'dark';
    body.dataset.theme = isDark ? 'light' : 'dark';
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
}

// Motivational Quote Rotation
function rotateMotivationalQuote() {
    const quoteEl = document.getElementById('motivationalQuote');
    quoteEl.classList.add('fade');
    setTimeout(() => {
        quoteEl.textContent = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        quoteEl.classList.remove('fade');
    }, 500);
}

// Event Listeners
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('lessonsTrigger').addEventListener('click', renderLessonsModal);
document.getElementById('bookQuoteTrigger').addEventListener('click', renderBookQuoteModal);

document.getElementById('achievementsTrigger').addEventListener('click', () => {
    renderAchievements();
    showModal('achievementsModal');
});
document.getElementById('weeklyReportTrigger').addEventListener('click', renderWeeklyReportModal);
document.getElementById('analyticsTrigger').addEventListener('click', renderAnalyticsDashboard);
document.getElementById('closeLessonsModal').addEventListener('click', () => hideModal('lessonsModal'));
document.getElementById('closeBookQuoteModal').addEventListener('click', () => hideModal('bookQuoteModal'));
document.getElementById('closeTimerModal').addEventListener('click', () => {
    stopTimer();
    hideModal('focus-timer-modal');
});
document.getElementById('closeWeeklyReportModal').addEventListener('click', () => hideModal('weeklyReportModal'));
document.getElementById('closeAnalyticsModal').addEventListener('click', () => hideModal('analyticsModal'));
document.getElementById('closeAchievementsModal').addEventListener('click', () => hideModal('achievementsModal'));

// Periodic Updates
setInterval(rotateMotivationalQuote, 10000);
setInterval(() => {
    if (new Date().getHours() === 0 && new Date().getMinutes() === 0) {
        renderTasks();
        updateStats();
        renderCalendar();
    }
}, 60000);

// Initialize Achievements on Load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderSkillCores();
    renderAchievements();
});



document.querySelectorAll('.info-card, .stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * -15; // Controls vertical tilt
        const rotateY = (x / rect.width - 0.5) * 15;   // Controls horizontal tilt

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'; // Resets the tilt
    });
});


document.getElementById('archiveTrigger').addEventListener('click', renderPastTasks);
document.getElementById('closeArchiveModal').addEventListener('click', () => hideModal('archiveModal'));

document.getElementById('monthlyReportTrigger').addEventListener('click', renderMonthlyReport);
document.getElementById('closeMonthlyReportModal').addEventListener('click', () => hideModal('monthlyReportModal'));

// Add with your other listeners
document.getElementById('forgeTrigger').addEventListener('click', renderForge);
document.getElementById('closeForgeModal').addEventListener('click', () => hideModal('forgeModal'));
