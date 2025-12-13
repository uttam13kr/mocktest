/* ============================================================
   START OF ALLOWED SECTION — YOU MAY EDIT BELOW THIS LINE
============================================================ */

// Test Title
const TEST_TITLE = "Growth & Development — Chapter Exercise Test (31 Questions)";

// Subtitle
const SUBTITLE_TEXT = "CTET Book Chapter Exercise — With Detailed Explanations";

// Topic name (appears above questions)
const TOPIC_NAME = "Growth & Development and Learning Concept";

// Time limit (in minutes)
const TIME_LIMIT_MINUTES = 20;

// QUESTIONS (Same as book — No numbering inside the question text)
const quizData = [

  {
    q: "Development is associated with which of the following?",
    a: [
      "Growth is physical state",
      "Growth is unmental state",
      "Growth is emotional state",
      "All of these"
    ],
    correct: 3,
    explanation:
      "Development includes physical, emotional, mental, and social changes. All given aspects are different forms of development, so 'All of these' is correct."
  },

  {
    q: "Which of the following highlights the process of development?",
    a: [
      "Formation of new abilities",
      "Development of new characteristics",
      "Progressive change in behaviour",
      "All of these"
    ],
    correct: 3,
    explanation:
      "Development is progressive and results in new characteristics, skills, and behaviours. All the options represent elements of development."
  },

  {
    q: "Which of the following statements is not correct about development?",
    a: [
      "Each phase of development has its own characteristics",
      "Development is not aided by stimulation",
      "Development is affected by cultural changes",
      "Each phase of development has its own characteristic behaviour"
    ],
    correct: 1,
    explanation:
      "Development is positively influenced by stimulation (learning, environment). Therefore, saying development is not aided by stimulation is incorrect."
  },

  {
    q: "Which of the following characteristics of development is an incorrect one?",
    a: [
      "There are individual differences in development",
      "Development is the result of coincidences",
      "It is a continuous process",
      "It is predictable"
    ],
    correct: 1,
    explanation:
      "Development does not happen by chance. It follows predictable patterns and is influenced by heredity and environment."
  },

  {
    q: "Which of the following statements about development is correct?",
    a: [
      "The rate of development differs from individual to individual",
      "The rate of development differs at every stage in an individual",
      "Development is a continuous process",
      "All of the above"
    ],
    correct: 3,
    explanation:
      "All statements accurately describe development: it varies among individuals, varies across stages, and is continuous."
  },

  {
    q: "Cognitive development is influenced by which of the following except:",
    a: [
      "Reasoning",
      "Perception",
      "Verbal facilities",
      "Languages"
    ],
    correct: 3,
    explanation:
      "Cognitive development is driven by mental processes like reasoning and perception. Language is a tool for communication, not a core cognitive process."
  },

  {
    q: "Under which of the following conditions does emotional and social development of the child occur in a positive manner?",
    a: [
      "When the child is considered important and his feelings are respected",
      "When the child is told to learn more",
      "When the child gets good marks",
      "When the teacher teaches according to intellectual level"
    ],
    correct: 0,
    explanation:
      "Emotional–social development thrives when a child feels valued and respected. This builds confidence and emotional security."
  },

  {
    q: "Language development of children depends on",
    a: [
      "Better socio-economic environment",
      "Better schooling",
      "Freedom of expression given to the child",
      "All of the above"
    ],
    correct: 3,
    explanation:
      "Language grows through environment, schooling quality, and opportunities to express."
  },

  {
    q: "Assertion (A): Environment encourages the development of the child’s heredity potentials. Reason (R): A stimulating environment encourages good physical and mental development.",
    a: [
      "Both A and R are true",
      "A is true but R is false",
      "A is false but R is true",
      "Both A and R are false"
    ],
    correct: 0,
    explanation:
      "Both A and R are correct: heredity provides potential, and environment enables its expression."
  },

  {
    q: "Which psychologist refers to growth as ‘big and heavy’?",
    a: ["Jean Piaget", "Kohlberg", "Herbert Sevanson", "Montessori"],
    correct: 2,
    explanation:
      "Herbert Sevanson described growth as ‘big and heavy’ because growth refers to enlargement of body size."
  },

  {
    q: "Which statement about growth is correct?",
    a: [
      "Sharp growth rate is seen at the time of spurts in height",
      "Retarded physical development retards social development too",
      "The rate of growth during infancy and pre-adolescence is very high",
      "All of the above"
    ],
    correct: 3,
    explanation:
      "All statements describe accurate features of physical growth and its influence on overall development."
  },

  {
    q: "The feeling of shame and pride develops in which stage?",
    a: ["Infancy", "Childhood", "Adolescence", "Adulthood"],
    correct: 1,
    explanation:
      "Shame and pride appear in early childhood when children become aware of social rules and external judgment."
  },

  {
    q: "The major difference about the concept of development between JE Anderson and E Hurlock is that Anderson considers it as __________ and Hurlock considers it as __________.",
    a: [
      "Growth and behavioural changes; processes for maturing an organism",
      "Growth and behavioural changes; growth and changes relating to maturity",
      "Growth and changes relating to maturity; processes for maturing an organism",
      "None of the above"
    ],
    correct: 2,
    explanation:
      "Anderson focuses on maturity-related changes, while Hurlock emphasizes the processes enabling maturity."
  },

  {
    q: "Which one of the following is not a difference between growth and development?",
    a: [
      "Growth is only physical whereas development means overall changes in quality and character",
      "Growth is easier to be measured than development",
      "Development enables growth but growth does not enable development",
      "Development is lifelong whereas growth stops after attaining maturity"
    ],
    correct: 2,
    explanation:
      "Development does not enable growth. They are related but one does not directly cause the other."
  },

  {
    q: "Human development is based on certain principles. Which of the following is not a principle of human development?",
    a: [
      "Sequentially",
      "General to specific",
      "Reversible",
      "Continuity"
    ],
    correct: 2,
    explanation:
      "Development is not reversible; growth and development progress forward."
  },

  {
    q: "Development starts from",
    a: [
      "Post-childhood stage",
      "Pre-natal stage",
      "The stage of infancy",
      "Pre-childhood stage"
    ],
    correct: 1,
    explanation:
      "Development begins at conception, which is the prenatal stage."
  },

  {
    q: "Which statement best sums up the relationship between development and learning?",
    a: [
      "Development is independent of learning",
      "Learning trails behind development",
      "Learning and development are synonymous",
      "Learning and development are interrelated in a complex manner"
    ],
    correct: 3,
    explanation:
      "Learning and development influence each other continuously and cannot be separated."
  },

  {
    q: "Which of the following statements about principles of development is incorrect?",
    a: [
      "Development takes place due to a continuous interaction between maturation and experience",
      "Development follows a sequential pattern",
      "The rate of growth and development is uniform among children",
      "Development is a quantitative process which can be measured precisely"
    ],
    correct: 2,
    explanation:
      "Rate of development is *not* uniform; it varies among children due to heredity and environment."
  },

  {
    q: "Which of the following characterises the period of ‘middle childhood’?",
    a: [
      "Physical growth and development occur at a very rapid pace",
      "Ability to think abstractly and use scientific reasoning develops",
      "Children begin to think logically but concretely",
      "Learning occurs primarily through sensory and motor activities"
    ],
    correct: 2,
    explanation:
      "In middle childhood (6–12 yrs), logical but concrete thinking develops according to Piaget."
  },

  {
    q: "Which of the following is a major hallmark of the period of middle childhood?",
    a: [
      "Rapid development of motor skills and overall physical growth",
      "Development of scientific reasoning and ability to think abstractly",
      "Emergence of make-believe play",
      "Development of logical thought which is concrete in nature"
    ],
    correct: 3,
    explanation:
      "Middle childhood is marked by concrete logical thinking, not abstract thinking."
  },

  {
    q: "During the period of childhood, development",
    a: [
      "Consists only of quantitative changes",
      "Is disorderly and disjointed",
      "Is slow and cannot be measured",
      "Is multi-layered and complex"
    ],
    correct: 3,
    explanation:
      "Childhood development includes physical, cognitive, emotional and social layers—making it complex."
  },

  {
    q: "Thought becomes abstract and idealistic during which period?",
    a: ["Infancy", "Early childhood", "Middle childhood", "Adolescence"],
    correct: 3,
    explanation:
      "Abstract reasoning appears in adolescence when children reach Piaget’s formal operational stage."
  },

  {
    q: "What is meant by ‘sensitive period’ in child development?",
    a: [
      "Period concerning a rapid advances only in cognition and learning",
      "Optimal period for development of specific capabilities",
      "Period after which development of abilities cannot be accelerated",
      "Period when physical growth is at its peak"
    ],
    correct: 1,
    explanation:
      "A sensitive period is when the child is biologically most ready to learn certain skills (e.g., language)."
  },

  {
    q: "Improved athletic abilities, participation in games with rules, and logical thought that is concrete in nature are hallmarks of the period:",
    a: ["Infancy", "Early childhood", "Middle childhood", "Adolescence"],
    correct: 2,
    explanation:
      "Middle childhood features rule-based games, improved motor skills, and concrete logical thinking."
  },

  {
    q: "Assertion (A): Children are unable to learn optimally when they are undernourished or unwell. Reason (R): All domains of development are inter-related—physical development has an impact on cognitive development.",
    a: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation",
      "A is true but R is false",
      "Both A and R are false"
    ],
    correct: 0,
    explanation:
      "Physical weakness affects attention, memory and learning; R correctly explains A."
  }

];

/* ============================================================
   END OF ALLOWED SECTION — ENGINE CODE IS SKIPPED AS REQUESTED
============================================================ */






