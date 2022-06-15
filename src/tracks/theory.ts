import {TrackInfo} from '../types'
export const theory: TrackInfo = {"requirements": [{"numRequired": "1", "courseOptions": [{"title": "Introduction to the Theory of Computation", "description": "This course provides a mathematical introduction to the following questions: What is computation? Given a computational model, what problems can we hope to solve in principle with this model? Besides those solvable in principle, what problems can we hope to efficiently solve? In many cases we can give completely rigorous answers; in other cases, these questions have become major open problems in computer science and mathematics. By the end of this course, students will be able to classify computational problems in terms of their computational complexity (Is the problem regular? Not regular? Decidable? Recognizable? Neither? Solvable in P? NP-complete? PSPACE-complete?, etc.). Students will gain a deeper appreciation for some of the fundamental issues in computing that are independent of trends of technology, such as the Church-Turing Thesis and the P versus NP problem. Prerequisites: CS 103 or 103B.", "code": "CS 154"}]}, {"numRequired": "1", "courseOptions": [{"title": "Optimization and Algorithmic Paradigms", "description": "Algorithms for network optimization: max-flow, min-cost flow, matching, assignment, and min-cut problems. Introduction to linear programming. Use of LP duality for design and analysis of algorithms. Approximation algorithms for NP-complete problems such as Steiner Trees, Traveling Salesman, and scheduling problems. Randomized algorithms. Introduction to sub-linear algorithms and decision making under uncertainty. Prerequisite: 161 or equivalent.", "code": "CS 261"}]}, {"numRequired": "x", "courseOptions": [{"title": "Logic Programming", "description": "Logic Programming is a style of programming based on symbolic logic. In writing a logic program, the programmer describes the application area of the program (as a set of logical sentences) without reference to the internal data structures or operations of the system executing the program. In this regard, a logic program is more of a specification than an implementation; and logic programs are often called runnable specifications. This course introduces basic logic programming theory, current technology, and examples of common applications, notably deductive databases, logical spreadsheets, enterprise management, computational law, and game playing. Work in the course takes the form of readings and exercises, weekly programming assignments, and a term-long project. Prerequisite: CS 106B or equivalent.", "code": "CS 151"}, {"title": "The Practice of Theory Research", "description": "(Previously numbered CS 353). Introduction to research in the Theory of Computing, with an emphasis on research methods (the practice of research), rather than on any particular body of knowledge. The students will participate in a highly structured research project: starting from reading research papers from a critical point of view and conducting bibliography searches, through suggesting new research directions, identifying relevant technical areas, and finally producing and communicating new insights. The course will accompany the projects with basic insights on the main ingredients of research. Research experience is not required, but basic theory knowledge and mathematical maturity are expected. The target participants are advanced undergrads as well as MS students with interest in CS theory. Prerequisites: CS161 and CS154. Limited class size.", "code": "CS 163"}, {"title": "Data Structures", "description": "This course is a deep dive into the design, analysis, implementation,nand theory of data structures. Over the course of the quarter, we'llnexplore fundamental techniques in data structure design (isometries,namortization, randomization, etc.) and explore perspectives andnintuitions useful for developing new data structures. We'll do so bynsurveying classic data structures like Fibonacci heaps and suffix trees,nas well as more modern data structures like count-min sketches and rangenminimum queries. By the time we've finished, we'll have seen some trulynbeautiful strategies for solving problems efficiently. Prerequisites:nCS107 and CS161.", "code": "CS 166"}, {"title": "The Modern Algorithmic Toolbox", "description": "This course will provide a rigorous and hands-on introduction to the central ideas and algorithms that constitute the core of the modern algorithms toolkit. Emphasis will be on understanding the high-level theoretical intuitions and principles underlying the algorithms we discuss, as well as developing a concrete understanding of when and how to implement and apply the algorithms. The course will be structured as a sequence of one-week investigations; each week will introduce one algorithmic idea, and discuss the motivation, theoretical underpinning, and practical applications of that algorithmic idea. Each topic will be accompanied by a mini-project in which students will be guided through a practical application of the ideas of the week. Topics include hashing, dimension reduction and LSH, boosting, linear programming, gradient descent,  sampling and estimation, and an introduction to spectral techniques. Prerequisites: CS107 and CS161, or permission from the instructor.", "code": "CS 168"}, {"title": "Probabilistic Graphical Models: Principles and Techniques", "description": "Probabilistic graphical modeling languages for representing complex domains, algorithms for reasoning using these representations, and learning these representations from data. Topics include: Bayesian and Markov networks, extensions to temporal modeling such as hidden Markov models and dynamic Bayesian networks, exact and approximate probabilistic inference algorithms, and methods for learning models from data. Also included are sample applications to various domains including speech recognition, biological modeling and discovery, medical diagnosis, message encoding, vision, and robot motion planning. Prerequisites: basic probability theory and algorithm design and analysis.", "code": "CS 228"}, {"title": "Geometric and Topological Data Analysis (CME 251)", "description": "Mathematical and computational tools for the analysis of data with geometric content, such images, videos, 3D scans, GPS traces -- as well as for other data embedded into geometric spaces. Linear and non-linear dimensionality reduction techniques. Graph representations of data and spectral methods. The rudiments of computational topology and persistent homology on sampled spaces, with applications. Global and local geometry descriptors allowing for various kinds of invariances. Alignment, matching, and map/correspondence computation between geometric data sets. Annotation tools for geometric data. Geometric deep learning on graphs and sets. Function spaces and functional maps. Networks of data sets and joint learning for segmentation and labeling. Prerequisites: discrete algorithms at the level of CS161; linear algebra at the level of Math51 or CME103.", "code": "CS 233"}, {"title": "Deep Generative Models", "description": "Generative models are widely used in many subfields of AI and Machine Learning. Recent advances in parameterizing these models using neural networks, combined with progress in stochastic optimization methods, have enabled scalable modeling of complex, high-dimensional data including images, text, and speech. In this course, we will study the probabilistic foundations and learning algorithms for deep generative models, including Variational Autoencoders (VAE), Generative Adversarial Networks (GAN), and flow models. The course will also discuss application areas that have benefitted from deep generative models, including computer vision, speech and natural language processing, and reinforcement learning. Prerequisites: Basic knowledge about machine learning from at least one of CS 221, 228, 229 or 230. Students will work with computational and mathematical models and should have a basic knowledge of probabilities and calculus. Proficiency in some programming language, preferably Python, required.", "code": "CS 236"}, {"title": "Mining Massive Data Sets", "description": "The availability of massive datasets is revolutionizing science and industry. This course discusses data mining and machine learning algorithms for analyzing very large amounts of data. Topics include: Big data systems (Hadoop, Spark); Link Analysis (PageRank, spam detection); Similarity search (locality-sensitive hashing, shingling, min-hashing); Stream data processing; Recommender Systems; Analysis of social-network graphs; Association rules; Dimensionality reduction (UV, SVD, and CUR decompositions); Algorithms for large-scale mining (clustering, nearest-neighbor search); Large-scale machine learning (decision tree ensembles); Multi-armed bandit; Computational advertising. Prerequisites: At least one of CS107 or CS145.", "code": "CS 246"}, {"title": "Algebraic Error Correcting Codes (EE 387)", "description": "Introduction to the theory of error correcting codes, emphasizing algebraic constructions, and diverse applications throughout computer science and engineering. Topics include basic bounds on error correcting codes; Reed-Solomon and Reed-Muller codes; list-decoding, list-recovery and locality. Applications may include communication, storage, complexity theory, pseudorandomness, cryptography, streaming algorithms, group testing, and compressed sensing. Prerequisites: Linear algebra, basic probability (at the level of, say, CS109, CME106 or EE178) and &quot;mathematical maturity&quot; (students will be asked to write proofs).  Familiarity with finite fields will be helpful but not required.", "code": "CS 250"}, {"title": "Cryptocurrencies and blockchain technologies", "description": "For advanced undergraduates and for graduate students.&nbsp; The potential applications for Bitcoin-like technologies is enormous.&nbsp; The course will cover the technical aspects of cryptocurrencies, blockchain technologies, and distributed consensus. Students will learn how these systems work, and how to engineer secure software that interacts with Blockchains like Bitcoin, Ethereum, and others. Prerequisite: CS110. Recommended: CS255.", "code": "CS 251"}, {"title": "Analysis of Boolean Functions", "description": "Boolean functions are among the most basic objects of study in theoretical computer science. This course is about the study of boolean functions from a complexity-theoretic perspective, with an emphasis on analytic methods. We will cover fundamental concepts and techniques in this area, including influence and noise sensitivity, polynomial approximation, hypercontractivity, probabilistic invariance principles, and Gaussian analysis. We will see connections to various areas of theoretical computer science, including circuit complexity, pseudorandomness, classical and quantum query complexity, learning theory, and property testing. Prerequisites: CS 103 and CS 109 or equivalents. CS 154 and CS 161 recommended.", "code": "CS 252"}, {"title": "Computational Complexity", "description": "An introduction to computational complexity theory. Topics include the P versus NP problem and other major challenges of complexity theory; Space complexity: Savitch's theorem and the Immerman-Szelepsc&eacute;nyi theorem; P, NP, coNP, and the polynomial hierarchy; The power of randomness in computation; Non-uniform computation and circuit complexity; Interactive proofs. Prerequisites: 154 or equivalent; mathematical maturity.", "code": "CS 254"}, {"title": "Computational Complexity II", "description": "A continuation of CS254 (Computational Complexity). Topics include Barriers to P versus NP; The relationship between time and space, and time-space tradeoffs for SAT; The hardness versus randomness paradigm; Average-case complexity; Fine-grained complexity; Current and new areas of complexity theory research.  Prerequisite: CS254.", "code": "CS 254B"}, {"title": "Introduction to Cryptography", "description": "For advanced undergraduates and graduate students. Theory and practice of cryptographic techniques used in computer security. Topics: encryption (symmetric and public key), digital signatures, data integrity, authentication, key management, PKI, zero-knowledge protocols, and real-world applications. Prerequisite: basic probability theory.", "code": "CS 255"}, {"title": "Randomized Algorithms and Probabilistic Analysis (CME 309)", "description": "Randomness pervades the natural processes around us, from the formation of networks, to genetic recombination, to quantum physics. Randomness is also a powerful tool that can be leveraged to create algorithms and data structures which, in many cases, are more efficient and simpler than their deterministic counterparts. This course covers the key tools of probabilistic analysis, and application of these tools to understand the behaviors of random processes and algorithms. Emphasis is on theoretical foundations, though we will apply this theory broadly, discussing applications in machine learning and data analysis, networking, and systems. Topics include tail bounds, the probabilistic method, Markov chains, and martingales, with applications to analyzing random graphs, metric embeddings, random walks, and a host of powerful and elegant randomized algorithms. Prerequisites: CS 161 and STAT 116, or equivalents and instructor consent.", "code": "CS 265"}, {"title": "Geometric Algorithms", "description": "Techniques for design and analysis of efficient geometric algorithms for objects in 2-, 3-, and higher dimensions. Topics: convexity, triangulations and simplicial complexes, sweeping, partitioning, and point location. Voronoi/Delaunay diagrams and their properties. Arrangements of curves and surfaces. Intersection and visibility problems. Geometric searching and optimization. Random sampling methods. Range searching. Impact of numerical issues in geometric computation. Example applications to robotic motion planning, visibility preprocessing and rendering in graphics, and model-based recognition in computer vision. Prerequisite: discrete algorithms at the level of CS161. Recommended: CS164.", "code": "CS 268"}, {"title": "Almost Linear Time Graph Algorithms (MS&E 313)", "description": "Over the past decade there has been an explosion in activity in designing new provably efficient fast graph algorithms. Leveraging techniques from disparate areas of computer science and optimization researchers have made great strides on improving upon the best known running times for fundamental optimization problems on graphs, in many cases breaking long-standing barriers to efficient algorithm design. In this course we will survey these results and cover the key algorithmic tools they leverage to achieve these breakthroughs. Possible topics include but are not limited to, spectral graph theory, sparsification, oblivious routing, local partitioning, Laplacian system solving, and maximum flow. Prerequisites: calculus and linear algebra.", "code": "CS 269G"}, {"title": "Incentives in Computer Science", "description": "Many 21st-century computer science applications require the design of software or systems that interact with multiple self-interested participants.  This course will provide students with the vocabulary and modeling tools to reason about such design problems.  Emphasis will be on understanding basic economic and game theoretic concepts that are relevant across many application domains, and on case studies that demonstrate how to apply these concepts to real-world design problems.  Topics include auction and contest design, equilibrium analysis, cryptocurrencies, design of networks and network protocols, reputation systems, social choice, and social network analysis.  Case studies include BGP routing, Bitcoin, eBay's reputation system, Facebook's advertising mechanism, Mechanical Turk, and dynamic pricing in Uber/Lyft. Prerequisites: CS106B/X and CS161, or permission from the instructor.", "code": "CS 269I"}, {"title": "Introduction to Optimization Theory (MS&E 213)", "description": "Introduction of core algorithmic techniques and proof strategies that underlie the best known provable guarantees for minimizing high dimensional convex functions. Focus on broad canonical optimization problems and survey results for efficiently solving them, ultimately providing the theoretical foundation for further study in optimization. In particular, focus will be on first-order methods for both smooth and non-smooth convex function minimization as well as methods for structured convex function minimization, discussing algorithms such as gradient descent, accelerated gradient descent, mirror descent, Newton's method, interior point methods, and more. Prerequisite: multivariable calculus and linear algebra.", "code": "CS 269O"}, {"title": "Open Problems in Coding Theory", "description": "Coding theory is the study of how to encode data to protect it from noise. Coding theory touches CS, EE, math, and many other areas, and there are exciting open problems at all of these frontiers. In this class, we will explore these open problems by reading recent research papers and thinking about some open problems together. Required work will involve reading and presenting research papers, as well as working in small groups at these open problems and presenting progress. (Solving an open problem is not required!) Topics will depend on student interest and may include locality, coded computation, index coding, interactive communication, and group testing. Prerequisites: CS250 / EE387 or EE388; or linear algebra and permission of the instructor.", "code": "CS 351"}, {"title": "Pseudo-Randomness", "description": "Pseudorandomness is the widely applicable theory of efficiently generating objects that look random, despite being constructed using little or no randomness. Since psudorandom objects can replace uniformly distributed ones (in a well-defined sense), one may view pseudorandomness as an extension of our understanding of randomness through the computational lens. We will study the basic tools pseudorandomness, such as limited independence, randomness extractors, expander graphs, and pseudorandom generators. We will also discuss the applications of pseudrandomness to derandomization, cryptography and more. We will cover classic result as well as cutting-edge techniques. Prerequisites: CS 154 and CS 161, or equivalents.", "code": "CS 352"}, {"title": "Topics in Intractability: Unfulfilled Algorithmic Fantasies", "description": "Over the past 45 years, understanding NP-hardness has been an amazingly useful tool for algorithm designers. This course will expose students to additional ways to reason about obstacles for designing efficient algorithms. Topics will include unconditional lower bounds (query- and communication-complexity), total problems, Unique Games, average-case complexity, and fine-grained complexity. Prerequisites: CS 161 or equivalent. CS 254 recommended but not required.", "code": "CS 354"}, {"title": "Advanced Topics in Cryptography", "description": "Topics: Pseudo randomness, multiparty computation, pairing-based and lattice-based cryptography, zero knowledge protocols, and new encryption and integrity paradigms. May be repeated for credit. Prerequisite: CS255.", "code": "CS 355"}, {"title": "Topics in Programming Language Theory", "description": "Advanced material is often taught for the first time as a topics course, perhaps by a faculty member visiting from another institution. May be repeated for credit.", "code": "CS 358"}, {"title": "Topics in the Theory of Computation", "description": "Advanced material is often taught for the first time as a topics course, perhaps by a faculty member visiting from another institution. May be repeated for credit.", "code": "CS 359"}, {"title": "Algorithmic Techniques for Big Data", "description": "(Previously numbered CS 369G.) Designing algorithms for efficient processing of large data sets poses unique challenges. This course will discuss algorithmic paradigms that have been developed to efficiently process data sets that are much larger than available memory. We will cover streaming algorithms and sketching methods that produce compact datanstructures, dimension reduction methods that preserve geometric structure, efficient algorithms for numerical linear algebra, graph sparsification methods, as well as impossibility results for these techniques.", "code": "CS 368"}, {"title": "Topics in Analysis of Algorithms", "description": "Advanced material is often taught for the first time as a topics course, perhaps by a faculty member visiting from another institution. May be repeated for credit.", "code": "CS 369"}, {"title": "Optimization Algorithms", "description": "Fundamental theory for solving continuous optimization problems with provablenefficiency guarantees. Coverage of both canonical optimization methods and techniques, e.g. gradientndescent, mirror descent, stochastic methods, acceleration, higher-order methods, etc. and canonicalnoptimization problems, critical point computation for non-convex functions, smooth-convex functionnminimization, regression, linear programming, etc. Focus on provable rates for solving broad classes ofnprevalent problems including both classic problems and those motivated by large-scale computationalnconcerns. Discussion of computational ramifications, fundamental information-theoretic limits, andnproblem structure. Prerequisite: linear algebra, multivariable calculus, probability, and proofs.", "code": "CS 369O"}, {"title": "Computer Laboratory", "description": "For CS graduate students. A substantial computer program is designed and implemented; written report required. Recommended as a preparation for dissertation research. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 393"}, {"title": "Independent Database Project", "description": "For graduate students in Computer Science. Use of database management or file systems for a substantial application or implementation of components of database management system. Written analysis and evaluation required. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 395"}, {"title": "Independent Project", "description": "Letter grade only. This course is for masters students only. Undergraduate students should enroll in CS199; PhD students should enroll in CS499. Letter grade; if not appropriate, enroll in CS399P. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 399"}, {"title": "Topics in Geometric Algorithms: Non-Euclidean Methods in Machine Learning", "description": "Contents of this course vary with each offering. Past offerings have included geometric matching, surface reconstruction, collision detection, computational topology, differential geometry for computer scientists, computational symmetry and regularity, data-driven shape analysis, and non-Euclidean methods in machine learning.", "code": "CS 468"}, {"title": "Linear Programming", "description": "Formulation of standard linear programming models. Theory of polyhedral convex sets, linear inequalities, alternative theorems, and duality. Variants of the simplex method and the state of art interior-point algorithms. Sensitivity analyses, economic interpretations, and primal-dual methods. Relaxations of harder optimization problems and recent convex conic linear programs. Applications include game equilibrium facility location. Prerequisite: MATH 113 or consent of instructor.", "code": "MS&E 310"}, {"title": "Topics in Digital Systems", "description": "Advanced material is often taught for the first time as a topics course, perhaps by a faculty member visiting from another institution. May be repeated for credit.", "code": "CS 319"}]}]}