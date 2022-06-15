import {TrackInfo} from '../types'
export const realworld: TrackInfo = {"requirements": [{"numRequired": "3", "courseOptions": [{"title": "Introduction to Computer Graphics and Imaging", "description": "This is the introductory, prerequisite course in the computer graphics sequence that introduces students to the technical concepts behind creating computer generated images. Through this course, students will gain a firm working knowledge of the underlying mathematical concepts of synthetic imagery (including triangles, meshes, normals, interpolation, world spaces, texture mapping, etc.) Students will also explore the fundamentals of light and color and how they interact with the environment through lighting, shading, and material models varying in realism and complexity. Ultimately, students will come to an understanding of rasterization and ray tracing technology for creating visually-compelling synthetic images, and briefly examine how they extend to animation and inverse rendering. Students will additionally be exposed to a high-level survey of topics in computer graphics, such as acceleration structures, anti-aliasing, and depth of field. Starter code will be provided to guide students through development and give them familiarity with industry-level tools. The class will conclude with a final project in which students pursue in-depth a specific topic of interest.nPrerequisites: Linear Algebra and familiarity with Python and debugging.", "code": "CS 148"}, {"title": "Introduction to Robotics (ME 320)", "description": "Robotics foundations in modeling, design, planning, and control. Class covers relevant results from geometry, kinematics, statics, dynamics, motion planning, and control, providing the basic methodologies and tools in robotics research and applications. Concepts and models are illustrated through physical robot platforms, interactive robot simulations, and video segments relevant to historical research developments or to emerging application areas in the field. Recommended: matrix algebra.", "code": "CS 223A"}, {"title": "Computer Vision: From 3D Reconstruction to Recognition", "description": "(Formerly 223B) An introduction to the concepts and applications in computer vision. Topics include: cameras and projection models, low-level image processing methods such as filtering and edge detection; mid-level vision topics such as segmentation and clustering; shape reconstruction from stereo, as well as high-level vision tasks such as object recognition, scene recognition, face detection and human motion categorization. Prerequisites: linear algebra, basic probability and statistics.", "code": "CS 231A"}, {"title": "Interactive Computer Graphics", "description": "This course provides a comprehensive introduction to interactive computer graphics, focusing on fundamental concepts and techniques, as well as their cross-cutting relationship to multiple problem domains in interactive graphics (such as rendering, animation, geometry, image processing). Topics include: 2D and 3D drawing, sampling theory, interpolation, rasterization, image compositing, the real-time GPU graphics pipeline (and parallel rendering), VR rendering, geometric transformations, curves and surfaces, geometric data structures, subdivision, meshing, spatial hierarchies, image processing, time integration, physically-based animation, and inverse kinematics.  The course will involve several in-depth programming assignments and a self-selected final project that explores concepts covered in the class. Prerequisite: CS 107, MATH 51.", "code": "CS 248"}]}, {"numRequired": "3", "courseOptions": [{"title": "Continuous Mathematical Methods with an Emphasis on Machine Learning", "description": "A survey of numerical approaches to the continuous mathematics used throughout computer science with an emphasis on machine and deep learning. Although motivated from the standpoint of machine learning, the course will focus on the underlying mathematical methods including computational linear algebra and optimization, as well as special topics such as automatic differentiation via backward propagation, momentum methods from ordinary differential equations, CNNs, RNNs, etc. Written homework assignments and (straightforward) quizzes focus on various concepts; additionally, students can opt in to a series of programming assignments geared towards neural network creation, training, and inference. (Replaces CS205A, and satisfies all similar requirements.) Prerequisites: Math 51; Math104 or MATH113 or equivalent or comfort with the associated material.", "code": "CS 205L"}, {"title": "Geometric and Topological Data Analysis (CME 251)", "description": "Mathematical and computational tools for the analysis of data with geometric content, such images, videos, 3D scans, GPS traces -- as well as for other data embedded into geometric spaces. Linear and non-linear dimensionality reduction techniques. Graph representations of data and spectral methods. The rudiments of computational topology and persistent homology on sampled spaces, with applications. Global and local geometry descriptors allowing for various kinds of invariances. Alignment, matching, and map/correspondence computation between geometric data sets. Annotation tools for geometric data. Geometric deep learning on graphs and sets. Function spaces and functional maps. Networks of data sets and joint learning for segmentation and labeling. Prerequisites: discrete algorithms at the level of CS161; linear algebra at the level of Math51 or CME103.", "code": "CS 233"}, {"title": "Geometric Algorithms", "description": "Techniques for design and analysis of efficient geometric algorithms for objects in 2-, 3-, and higher dimensions. Topics: convexity, triangulations and simplicial complexes, sweeping, partitioning, and point location. Voronoi/Delaunay diagrams and their properties. Arrangements of curves and surfaces. Intersection and visibility problems. Geometric searching and optimization. Random sampling methods. Range searching. Impact of numerical issues in geometric computation. Example applications to robotic motion planning, visibility preprocessing and rendering in graphics, and model-based recognition in computer vision. Prerequisite: discrete algorithms at the level of CS161. Recommended: CS164.", "code": "CS 268"}, {"title": "Computer Graphics: Geometric Modeling & Processing", "description": "The mathematical tools needed for the geometrical aspects of computer graphics and especially for modeling smooth shapes. The course covers classical computer-aided design, geometry processing, and data-driven approaches for shape generation. Fundamentals: homogeneous coordinates and transformation. Theory of parametric and implicit curve and surface models: polar forms, B&eacute;zier arcs and de Casteljau subdivision, continuity constraints, B-splines, tensor product, and triangular patch surfaces. Subdivision surfaces and multi-resolution representations of geometry. Surface reconstruction from scattered data points. Geometry processing on meshes, including simplification and parametrization. Deep neural generative models for 3D geometry: parametric and implicit approaches, VAEs and GANs.  Prerequisite: linear algebra at the level of CME103. Recommended: CS248.", "code": "CS 348A"}, {"title": "Computer Graphics: Image Synthesis Techniques", "description": "Intermediate level, emphasizing high-quality image synthesis algorithms and systems issues in rendering. Topics include: Reyes and advanced rasterization, including motion blur and depth of field; ray tracing and physically based rendering; Monte Carlo algorithms for rendering, including direct illumination and global illumination; path tracing and photon mapping; surface reflection and light source models; volume rendering and subsurface scattering; SIMD and multi-core parallelism for rendering. Written assignments and programming projects. Prerequisite: 248 or equivalent. Recommended: Fourier analysis or digital signal processing.", "code": "CS 348B"}, {"title": "Computer Graphics: Animation and Simulation", "description": "Core mathematics and methods for computer animation and motion simulation. Traditional animation techniques. Physics-based simulation methods for modeling shape and motion: particle systems, constraints, rigid bodies, deformable models, collisions and contact, fluids, and fracture. Animating natural phenomena. Methods for animating virtual characters and crowds. Additional topics selected from data-driven animation methods, realism and perception, animation systems, motion control, real-time and interactive methods, and multi-sensory feedback. Recommended: CS 148 and/or 205A. Prerequisite: linear algebra.", "code": "CS 348C"}, {"title": "Character Animation: Modeling, Simulation, and Control of Human Motion", "description": "This course introduces technologies and mathematical tools for simulating, modeling, and controlling human/animal movements. Students will be exposed to integrated knowledge and techniques across computer graphics, robotics, machine learning and biomechanics. The topics include numerical integration, 3D character modeling, keyframe animation, skinning/rigging, multi-body dynamics, human kinematics, muscle dynamics, trajectory optimization, learning policies for motor skills, and motion capture. Students who successfully complete this course will be able to use and modify physics simulator for character animation or robotic applications, to design/train control policies for locomotion or manipulation tasks on virtual agents, and to leverage motion capture data for synthesizing realistic virtual humans. The evaluation of this course is based on three assignments and an open-ended research project. Recommended Prerequisite: CS148 or CS205A", "code": "CS 348E"}, {"title": "Visual Computing Systems", "description": "Visual computing tasks such as computational photography, image/video understanding, and real-time 3D graphics are key responsibilities of modern computer systems ranging from sensor-rich smart phones, autonomous robots, and large data centers. These workloads demand exceptional system efficiency and this course examines the key ideas, techniques, and challenges associated with the design of parallel, heterogeneous systems that execute and accelerate visual computing applications. This course is intended for graduate and advanced undergraduate-level students interested in architecting efficient graphics, image processing, and computer vision systems (both new hardware architectures and domain-optimized programming frameworks) and for students in graphics, vision, and ML that seek to understand throughput computing concepts so they can develop scalable algorithms for these platforms. Students will perform daily research paper readings, complete simple programming assignments, and compete a self-selected term project. Prerequisites: CS 107 or equivalent. Highly recommended: Parallel Computing (CS149) or Computer Architecture (EE 282).  Students will benefit from some background in deep learning (CS 230, CS 231N), computer vision (CS 231A), digital image processing (CS 232) or computer graphics (CS248).", "code": "CS 348K"}, {"title": "Numerical Linear Algebra", "description": "Solution of linear systems, accuracy, stability, LU, Cholesky, QR, least squares problems, singular value decomposition, eigenvalue computation, iterative methods, Krylov subspace, Lanczos and Arnoldi processes, conjugate gradient, GMRES, direct methods for sparse matrices. Prerequisites: CME 108/Math 114 and one of Math 104 or Math 113.", "code": "CME 302"}, {"title": "Numerical Solution of Partial Differential Equations (MATH 226)", "description": "Hyperbolic partial differential equations: stability, convergence and qualitative properties; nonlinear hyperbolic equations and systems; combined solution methods from elliptic, parabolic, and hyperbolic problems. Examples include: Burger's equation, Euler equations for compressible flow, Navier-Stokes equations for incompressible flow. Prerequisites: MATH 220 or CME 302.nnNOTE: Undergraduates require instructor permission to enroll. Undergraduates interested in taking the course should contact the instructor for permission, providing information about relevant background such as performance in prior coursework, reading, etc.", "code": "CME 306"}]}, {"numRequired": "x", "courseOptions": [{"title": "Introduction to Game Design and Development", "description": "This project-based course provides a survey on designing and engineering video games. Through creating their own games each week, students explore topics including 2D/3D Art, Audio, User Interface design, Production, Narrative Design, Marketing, and Publishing. Speakers from the games industry will provide insights and context during a weekly seminar. Classroom meetings will be used to foster student project discussions, and deepen understanding of material. The course culminates with students forming project teams to create a final video game. Assignments will be completed within the Unity game development engine; prior Unity experience is welcomed but not required. Given class size limitations, an online survey will be used to achieve a diverse class composition. Prerequisite: CS 106 (B or X).", "code": "CS 146"}, {"title": "Experimental Robotics", "description": "Hands-on laboratory course experience in robotic manipulation. Topics include robot kinematics, dynamics, control, compliance, sensor-based collision avoidance, and human-robot interfaces. Second half of class is devoted to final projects using various robotic platforms to build and demonstrate new robot task capabilities. Previous projects include the development of autonomous robot behaviors of drawing, painting, playing air hocket, yoyo, basketball, ping-pong or xylophone. Prerequisites: 223A or equivalent.", "code": "CS 225A"}, {"title": "Probabilistic Graphical Models: Principles and Techniques", "description": "Probabilistic graphical modeling languages for representing complex domains, algorithms for reasoning using these representations, and learning these representations from data. Topics include: Bayesian and Markov networks, extensions to temporal modeling such as hidden Markov models and dynamic Bayesian networks, exact and approximate probabilistic inference algorithms, and methods for learning models from data. Also included are sample applications to various domains including speech recognition, biological modeling and discovery, medical diagnosis, message encoding, vision, and robot motion planning. Prerequisites: basic probability theory and algorithm design and analysis.", "code": "CS 228"}, {"title": "Machine Learning (STATS 229)", "description": "Topics: statistical pattern recognition, linear and non-linear regression, non-parametric methods, exponential family, GLMs, support vector machines, kernel methods, deep learning, model/feature selection, learning theory, ML advice, clustering, density estimation, EM, dimensionality reduction, ICA, PCA, reinforcement learning and adaptive control, Markov decision processes, approximate dynamic programming, and policy search. Prerequisites: knowledge of basic computer science principles and skills at a level sufficient to write a reasonably non-trivial computer program in Python/NumPy to the equivalency of CS106A, CS106B, or CS106X, familiarity with probability theory to the equivalency of CS 109, MATH151, or STATS 116, and familiarity with multivariable calculus and linear algebra to the equivalency of MATH51 or CS205.", "code": "CS 229"}, {"title": "Deep Learning", "description": "Deep Learning is one of the most highly sought after skills in AI. We will help you become good at Deep Learning. In this course, you will learn the foundations of Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects. You will learn about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more. You will work on case studies from healthcare, autonomous driving, sign language reading, music generation, and natural language processing. You will master not only the theory, but also see how it is applied in industry. You will practice all these ideas in Python and in TensorFlow, which we will teach. AI is transforming multiple industries. After this course, you will likely find creative ways to apply it to your work. This class is taught in the flipped-classroom format. You will watch videos and complete in-depth programming assignments and online quizzes at home, then come in to class for advanced discussions and work on projects. This class will culminate in an open-ended final project, which the teaching team will help you on. Prerequisites: Familiarity with programming in Python and Linear Algebra (matrix / vector multiplications). CS 229 may be taken concurrently.", "code": "CS 230"}, {"title": "Digital Image Processing (EE 368)", "description": "Image sampling and quantization color, point operations, segmentation, morphological image processing, linear image filtering and correlation, image transforms, eigenimages, multiresolution image processing, noise reduction and restoration, feature extraction and recognition tasks, image registration. Emphasis is on the general principles of image processing. Students learn to apply material by implementing and investigating image processing algorithms in Matlab and optionally on Android mobile devices. Term project. Recommended: EE261, EE278.", "code": "CS 232"}, {"title": "Digital Image Processing (CS 232)", "description": "Image sampling and quantization color, point operations, segmentation, morphological image processing, linear image filtering and correlation, image transforms, eigenimages, multiresolution image processing, noise reduction and restoration, feature extraction and recognition tasks, image registration. Emphasis is on the general principles of image processing. Students learn to apply material by implementing and investigating image processing algorithms in Matlab and optionally on Android mobile devices. Term project. Recommended: EE261, EE278.", "code": "EE 368"}, {"title": "Modeling Biomedical Systems (BIOMEDIN 210)", "description": "At the core of informatics is the problem of creating computable models of biomedical phenomena.  This course explores methods for modeling biomedical systems with an emphasis on contemporary semantic technology, including knowledge graphs.  Topics: data modeling, knowledge representation, controlled terminologies, ontologies, reusable problem solvers, modeling problems in healthcare information technology and other aspects of informatics.  Students acquire hands-on experience with several systems and tools.  Prerequisites: CS106A.  Basic familiarity with Python programming, biology, probability, and logic are assumed.", "code": "CS 270"}, {"title": "Introduction to Biomedical Informatics Research Methodology (BIOE 212, BIOMEDIN 212, GENE 212)", "description": "Capstone Biomedical Informatics (BMI) experience. Hands-on software building. Student teams conceive, design, specify, implement, evaluate, and report on a software project in the domain of biomedicine. Creating written proposals, peer review, providing status reports, and preparing final reports. Issues related to research reproducibility. Guest lectures from professional biomedical informatics systems builders on issues related to the process of project management. Software engineering basics. Because the team projects start in the first week of class, attendance that week is strongly recommended. Prerequisites: BIOMEDIN 210 or 214 or 215 or 217 or 260. Preference to BMI graduate students. Consent of instructor required.", "code": "CS 272"}, {"title": "The Human Genome Source Code (BIOMEDIN 273A, DBIO 273A)", "description": "A computational primer to &quot;hacking&quot; the most amazing operating system &quot;disk&quot; on the planet: your genome. Handling genomic data is deceptively easy. But that's muscle. You want to be the brain, too. Topics include genome sequencing (assembling source code from code fragments); the human genome functional landscape: variable assignments (genes), control-flow logic (gene regulation) and run-time stack (epigenomics); human disease and personalized genomics (as a hunt for bugs in the human code); genome editing (code injection) to cure the incurable; and the source code modifications behind amazing animal adaptations. The course will introduce ideas from computational genomics, machine learning and natural language processing. Course includes primers on molecular biology, and text processing languages. Prerequisites: CS106A or equivalent. No biological background assumed.", "code": "CS 273A"}, {"title": "Representations and Algorithms for Computational Molecular Biology (BIOE 214, BIOMEDIN 214, GENE 214)", "description": "Topics: This is a graduate level introduction to bioinformatics and computational biology, algorithms for alignment of biological sequences and structures, computing with strings, phylogenetic tree construction, hidden Markov models, basic structural computations on proteins, protein structure prediction, molecular dynamics and energy minimization, statistical analysis of 3D biological data, integration of data sources, knowledge representation and controlled terminologies for molecular biology, microarray analysis, chemoinformatics, pharmacogenetics, network biology.  Note:  For Fall 2021, Dr. Altman will be away on sabbatical and so class will be taught from lecture videos recorded in fall of 2018.  The class will be entirely online, with no scheduled meeting times.  Lectures will be released in batches to encourage pacing.  A team of TAs will manage all class logistics and grading.  Firm prerequisite: CS 106B.", "code": "CS 274"}, {"title": "Research Project in Artificial Intelligence", "description": "Student teams under faculty supervision work on research and implementation of a large project in AI. State-of-the-art methods related to the problem domain. Prerequisites: AI course from 220 series, and consent of instructor.", "code": "CS 294A"}, {"title": "Topics in Advanced Robotic Manipulation", "description": "This course provides a survey of the most important and influential concepts in autonomous robotic manipulation. It includes classical concepts that are still widely used and recent approaches that have changed the way we look autonomous manipulation. We cover approaches towards motion planning and control using visual and tactile perception as well as machine learning. This course is especially concerned with new approaches for overcoming challenges in generalization from experience, exploration of the environment, and learning representation so that these methods can scale to real problems. Students are expected to present one paper in a tutorial, debate a paper once from the Pro and once from the Con side. They are also expected to propose an original research project and work on it towards a research paper. Recommended: CS 131, 223A, 229 or equivalents.", "code": "CS 326"}, {"title": "Advanced Robotic Manipulation", "description": "Advanced control methodologies and novel design techniques for complex human-like robotic and bio mechanical systems. Class covers the fundamentals in operational space dynamics and control, elastic planning, human motion synthesis. Topics include redundancy, inertial properties, haptics, simulation, robot cooperation, mobile manipulation, human-friendly robot design, humanoids and whole-body control. Additional topcs in emerging areas are presented by groups of students at the end-of-quarter mini-symposium. Prerequisites: 223A or equivalent.", "code": "CS 327A"}, {"title": "Topics in Computer Vision", "description": "Fundamental issues of, and mathematical models for, computer vision. Sample topics: camera calibration, texture, stereo, motion, shape representation, image retrieval, experimental techniques. May be repeated for credit. Prerequisites: 205, 223B, or equivalents.", "code": "CS 328"}, {"title": "Interactive Simulation for Robot Learning", "description": "This course provides a research survey of advanced methods for robot learning in simulation, analyzing the simulation techniques and recent research results enabled by advances in physics and virtual sensing simulation. The course covers two main components: agent-environment interactions and domains for multi-agent and human-robot interaction. First, we cover agent-environment interactions by studying novel simulation environments for robotics, imitation and reinforcement learning methods, simulation for navigation and manipulation and `sim2real' techniques. In the second part, we explore models and algorithms for simulation and robot learning in multi-agent domains and human-robot interaction, studying the principles of learning for interactive tasks in which each agent collaborates to accomplish tasks. The topics include domains of social navigation, human-robot collaborative manipulation and multi-agent settings.nnThis a project-based seminar class. Projects will leverage the state-of-the-art simulation environment iGibson, in which students will develop simulations to explore learning and planning methods for diverse domains. We will provide a list of suggested projects but students might also propose an original idea. The course will cover a set of research papers with presentations by students. This is a research field in rapid transformation with exciting research lines. The goal of the class is to provide practical experience and understanding of the main research lines to enable students to conduct innovative research in this field.", "code": "CS 331B"}, {"title": "Algorithms for Interactive Robotics", "description": "AI agents need to collaborate and interact with humans in many different settings such as bots operating on social media and crowdsourcing platforms, AI assistants brokering transactions on electronic marketplaces, autonomous vehicles driving alongside humans, or robots interacting with and assisting humans in homes. Our goal in this class is to learn about and design algorithms that enable robots and AI agents to reason about their actions, interact with one another, the humans, and the environment they live in, as well as plan safe strategies that humans can trust and rely on. This is a project-based graduate course that studies algorithms in robotics, machine learning, and control theory, which can improve the state-of-the-art human-AI systems. nnRecommended: Introductory course in AI (CS 221) and Machine Learning (CS 229).", "code": "CS 333"}, {"title": "Computer Laboratory", "description": "For CS graduate students. A substantial computer program is designed and implemented; written report required. Recommended as a preparation for dissertation research. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 393"}, {"title": "Independent Database Project", "description": "For graduate students in Computer Science. Use of database management or file systems for a substantial application or implementation of components of database management system. Written analysis and evaluation required. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 395"}, {"title": "Independent Project", "description": "Letter grade only. This course is for masters students only. Undergraduate students should enroll in CS199; PhD students should enroll in CS499. Letter grade; if not appropriate, enroll in CS399P. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 399"}, {"title": "Topics in Computer Graphics", "description": "Topic changes each quarter.  Recent topics: computational photography, datanvisualization, character animation, virtual worlds, graphics architectures, advanced rendering.  See http://graphics.stanford.edu/courses for offererings and prerequisites. May be repeated for credit.", "code": "CS 448"}, {"title": "Virtual Reality", "description": "OpenGL, real-time rendering, 3D display systems, display optics &amp; electronics, IMUs and sensors, tracking, haptics, rendering pipeline, multimodal human perception and depth perception, stereo rendering, presence. Emphasis on VR technology. Hands-on programming assignments. The 3-unit version requires a final programming assignment in which you create your own virtual environment. The 4-unit version requires a final course project and written report in lieu of the final assignment. Prerequisites: Strong programming skills, ENGR 108 or equivalent. Helpful: basic computer graphics / OpenGL.", "code": "EE 267"}]}]}