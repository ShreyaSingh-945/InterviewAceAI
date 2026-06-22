const questionBank = {
  frontend: {
    easy: [
      "What is React?",
      "What is JSX?",
      "Difference between state and props?",
      "What is Virtual DOM?",
      "What is useState?",
      "What is useEffect?",
      "What are React Hooks?",
      "What is component reusability?"
    ],

    medium: [
      "Explain reconciliation.",
      "What is Context API?",
      "What are custom hooks?",
      "Difference between useMemo and useCallback?",
      "Explain React.memo."
    ],

    hard: [
      "Explain Fiber architecture.",
      "How does concurrent rendering work?",
      "How would you optimize a large React application?"
    ]
  },

  backend: {
    easy: [
      "What is Express.js?",
      "What is middleware?",
      "Difference between GET and POST?"
    ],

    medium: [
      "How does JWT authentication work?",
      "What is rate limiting?",
      "What are database indexes?"
    ],

    hard: [
      "Explain database transactions.",
      "How would you scale a Node.js API?"
    ]
  },

  dsa: {
    easy: [
      "What is an array?",
      "What is a linked list?"
    ],

    medium: [
      "How do you detect a cycle in a linked list?",
      "Explain binary search."
    ],

    hard: [
      "Explain dynamic programming.",
      "How would you detect cycles in a graph?"
    ]
  }
};

module.exports = questionBank;