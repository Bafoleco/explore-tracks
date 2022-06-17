import {TrackInfo} from '../types'
export const security: TrackInfo = {"requirements": [{"numRequired": "5", "courseOptions": [{"title": "Operating Systems and Systems Programming", "description": "Covers key concepts in computer systems through the lens of operatingnsystem design and implementation.  Topics include threads, scheduling,nprocesses, virtual memory, synchronization, multi-core architectures,nmemory consistency, hardware atomics, memory allocators, linking, I/O,nfile systems, and virtual machines.  Concepts are reinforced with fournkernel programming projects in the Pintos operating system.  This classnmay be taken as an accelerated single-class alternative to the CS111,nCS112 sequence; conversely, the class should not be taken by studentsnwho have already taken CS111 or CS112", "code": "CS 140", "min_units": 3, "max_units": 5}, {"title": "Introduction to Computer Networking", "description": "Principles and practice. Structure and components of computer networks, with focus on the Internet. Packet switching, layering, and routing. Transport and TCP: reliable delivery over an unreliable network, flow control, congestion control. Network names, addresses and ethernet switching.  Includes significant programming component in C/C++; students build portions of the internet TCP/IP software.  Prerequisite: CS110.", "code": "CS 144", "min_units": 3, "max_units": 4}, {"title": "Computer and Network Security", "description": "For juniors, seniors, and first-year graduate students. Principles of computer systems security. Attack techniques and how to defend against them. Topics include: network attacks and defenses, operating system security, application security (web, apps, databases), malware, privacy, and security for mobile devices. Course projects focus on building reliable software. Prerequisite: 110. Recommended: basic Unix.", "code": "CS 155", "min_units": 3, "max_units": 3}, {"title": "Advanced Topics in Networking", "description": "Classic papers, new ideas, and research papers in networking. Architectural principles: why the Internet was designed this way? Congestion control. Wireless and mobility; software-defined networks (SDN) and network virtualization; content distribution networks; packet switching; data-center networks. Prerequisite: 144 or equivalent.", "code": "CS 244", "min_units": 3, "max_units": 4}, {"title": "Introduction to Cryptography", "description": "For advanced undergraduates and graduate students. Theory and practice of cryptographic techniques used in computer security. Topics: encryption (symmetric and public key), digital signatures, data integrity, authentication, key management, PKI, zero-knowledge protocols, and real-world applications. Prerequisite: basic probability theory.", "code": "CS 255", "min_units": 3, "max_units": 3}]}, {"numRequired": "3", "courseOptions": [{"title": "Web Applications", "description": "Concepts and techniques used in constructing interactive web applications. Browser-side web facilities such as HTML, cascading stylesheets, the document object model, and JavaScript frameworks and Server-side technologies such as server-side JavaScript, sessions, and object-oriented databases. Issues in web security and application scalability. New models of web application deployment. Prerequisite: CS 107.", "code": "CS 142", "min_units": 3, "max_units": 3}, {"title": "Software Design Studio", "description": "This course teaches the art of software design: how to decompose large complex systems into classes that can be implemented and maintained easily. Topics include the causes of complexity, modular design, techniques for creating deep classes, minimizing the complexity associated with exceptions, in-code documentation, and name selection. The class involves significant system software implementation and uses an iterative approach consisting of implementation, review, and revision. The course is taught in a studio format with in-class discussions and code reviews in addition to lectures. Prerequisite: CS 140 or equivalent. Apply at: https://web.stanford.edu/class/cs190", "code": "CS 190", "min_units": 3, "max_units": 4}, {"title": "Advanced Topics in Operating Systems", "description": "Recent research. Classic and new papers. Topics: virtual memory management, synchronization and communication, file systems, protection and security, operating system extension techniques, fault tolerance, and the history and experience of systems programming. Prerequisite: 140 or equivalent.", "code": "CS 240", "min_units": 3, "max_units": 3}, {"title": "Advanced Topics in Networking", "description": "Classic papers, new ideas, and research papers in networking. Architectural principles: why the Internet was designed this way? Congestion control. Wireless and mobility; software-defined networks (SDN) and network virtualization; content distribution networks; packet switching; data-center networks. Prerequisite: 144 or equivalent.", "code": "CS 244", "min_units": 3, "max_units": 4}, {"title": "Distributed Systems", "description": "Distributed operating systems and applications issues, emphasizing high-level protocols and distributed state sharing as the key technologies. Topics: distributed shared memory, object-oriented distributed system design, distributed directory services, atomic transactions and time synchronization, application-sufficient consistency, file access, process scheduling, process migration, and storage/communication abstractions on distribution, scale, robustness in the face of failure, and security.  Prerequisites: CS 144.", "code": "CS 244B", "min_units": 3, "max_units": 3}, {"title": "The Modern Internet", "description": "Advanced networking course that covers how the Internet has evolved and operates today. Topics include modern Internet topology and routing practices, recently introduced network protocols, popular content delivery strategies, and pressing privacy, security, and abuse challenges. The course consists of a mixture of lecture, guest talks, and investigative projects where students will analyze how Internet operates in practice. Prerequisite: CS 144, EE 284, or equivalent.", "code": "CS 249I", "min_units": 3, "max_units": 3}, {"title": "Web Security", "description": "Principles of web security. The fundamentals and state-of-the-art in web security. Attacks and countermeasures. Topics include: the browser security model, web app vulnerabilities, injection, denial-of-service, TLS attacks, privacy, fingerprinting, same-origin policy, cross site scripting, authentication, JavaScript security, emerging threats, defense-in-depth, and techniques for writing secure code. Course projects include writing security exploits, defending insecure web apps, and implementing emerging web standards. Prerequisite: CS 142 or equivalent web development experience.", "code": "CS 253", "min_units": 3, "max_units": 3}, {"title": "Optimization and Algorithmic Paradigms", "description": "Algorithms for network optimization: max-flow, min-cost flow, matching, assignment, and min-cut problems. Introduction to linear programming. Use of LP duality for design and analysis of algorithms. Approximation algorithms for NP-complete problems such as Steiner Trees, Traveling Salesman, and scheduling problems. Randomized algorithms. Introduction to sub-linear algorithms and decision making under uncertainty. Prerequisite: 161 or equivalent.", "code": "CS 261", "min_units": 3, "max_units": 3}, {"title": "Randomized Algorithms and Probabilistic Analysis (CME 309)", "description": "Randomness pervades the natural processes around us, from the formation of networks, to genetic recombination, to quantum physics. Randomness is also a powerful tool that can be leveraged to create algorithms and data structures which, in many cases, are more efficient and simpler than their deterministic counterparts. This course covers the key tools of probabilistic analysis, and application of these tools to understand the behaviors of random processes and algorithms. Emphasis is on theoretical foundations, though we will apply this theory broadly, discussing applications in machine learning and data analysis, networking, and systems. Topics include tail bounds, the probabilistic method, Markov chains, and martingales, with applications to analyzing random graphs, metric embeddings, random walks, and a host of powerful and elegant randomized algorithms. Prerequisites: CS 161 and STAT 116, or equivalents and instructor consent.", "code": "CS 265", "min_units": 3, "max_units": 3}, {"title": "Topics in Computer Systems", "description": "Topics vary every quarter, and may include advanced material being taught for the first time. May be repeated for credit.", "code": "CS 340", "min_units": 3, "max_units": 4}, {"title": "Topics in Computer Networks", "description": "This class could also be called &quot;Build an Internet Router&quot;: Students work in teams of two to build a fully functioning Internet router, gaining hands-on experience building the hardware and software of a high-performance network system.  Students design the control plane in C on a linux host and design the data plane in the new P4 language on both a software switch and a high-speed hardware switch (e.g., Intel Tofino). For the midterm milestone, teams must demonstrate that their routers can interoperate with the other teams by building a small scale datacenter topology. In the final 3-4 weeks of the class, teams will participate in an open-ended design challenge. Prerequisites: At least one student in each team must have taken CS144 at Stanford and completed Lab 3 (static router). No Verilog or FPGA programming experience is required. May be repeated for credit.", "code": "CS 344", "min_units": 3, "max_units": 3}, {"title": "Advanced Topics in Cryptography", "description": "Topics: Pseudo randomness, multiparty computation, pairing-based and lattice-based cryptography, zero knowledge protocols, and new encryption and integrity paradigms. May be repeated for credit. Prerequisite: CS255.", "code": "CS 355", "min_units": 3, "max_units": 3}]}, {"numRequired": "x", "courseOptions": [{"title": "Principles of Data-Intensive Systems", "description": "Most important computer applications have to reliably manage and manipulate datasets. This course covers the architecture of modern data storage and processing systems, including relational databases, cluster computing frameworks, streaming systems and machine learning systems. Topics include storage management, query optimization, transactions, concurrency, fault recovery, and parallel processing, with a focus on the key design ideas shared across many types of data-intensive systems. Prerequisites: CS 145, 161.", "code": "CS 245", "min_units": 3, "max_units": 4}, {"title": "Cryptocurrencies and blockchain technologies", "description": "For advanced undergraduates and for graduate students. The potential applications for Bitcoin-like technologies is enormous. The course will cover the technical aspects of cryptocurrencies, blockchain technologies, and distributed consensus. Students will learn how these systems work, and how to engineer secure software that interacts with Blockchains like Bitcoin, Ethereum, and others. Prerequisite: CS110. Recommended: CS255.", "code": "CS 251", "min_units": 3, "max_units": 3}, {"title": "Info Not Found", "description": "Could not retrieve description from Explore Courses", "code": "CS 264", "min_units": 0, "max_units": 0}, {"title": "Research Project in Software Systems and Security", "description": "Topics vary. Focus is on emerging research themes such as programmable open mobile Internet that spans multiple system topics such as human-computer interaction, programming systems, operating systems, networking, and security. May be repeated for credit. Prerequisites: CS 103 and 107.", "code": "CS 294S", "min_units": 3, "max_units": 3}, {"title": "Project in Mining Massive Data Sets", "description": "Students work in teams of three to solve a problem involving the analysis of a massive dataset.  A proposal, early in March is required. There will be an information session (announced in CS246) explaining the datasets available in early March and this information will also be on the CS341 course website in late February.  Each accepted team will be assigned a mentor who will work with them regularly throughout the quarter.  Teams will also be provided access to significant computing resources on a commercial public cloud.", "code": "CS 341", "min_units": 3, "max_units": 3}, {"title": "Info Not Found", "description": "Could not retrieve description from Explore Courses", "code": "CS 345", "min_units": 0, "max_units": 0}, {"title": "Computer Laboratory", "description": "For CS graduate students. A substantial computer program is designed and implemented; written report required. Recommended as a preparation for dissertation research. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 393", "min_units": 1, "max_units": 9}, {"title": "Independent Database Project", "description": "For graduate students in Computer Science. Use of database management or file systems for a substantial application or implementation of components of database management system. Written analysis and evaluation required. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 395", "min_units": 1, "max_units": 6}, {"title": "Independent Project", "description": "Letter grade only. This course is for masters students only. Undergraduate students should enroll in CS199; PhD students should enroll in CS499. Letter grade; if not appropriate, enroll in CS399P. Register using the section number associated with the instructor. Prerequisite: consent of instructor.", "code": "CS 399", "min_units": 1, "max_units": 9}, {"title": "Internet Routing Protocols and Standards", "description": "Local area networks addressing and switching; IEEE 802.1 bridging protocols (transparent bridging, virtual LANs). Internet routing protocols:  interior gateways (RIP, OSPF) and exterior gateways (BGP); multicast routing; multiprotocol label switching (MPLS). Routing in mobile networks: Mobile IP, Mobile Ad Hoc Networks (MANET), Wireless Mesh Networks. Prerequisite: EE 284 or CS 144.", "code": "EE 384A", "min_units": 3, "max_units": 3}, {"title": "Wireless Local and Wide Area Networks", "description": "Characteristics of wireless communication: multipath, noise, and interference. Communications techniques: spread-spectrum, CDMA, and OFDM. IEEE 802.11 physical layer specifications: FHSS, DSSS, IEEE 802.11b (CCK), and 802.11a/g (OFDM). IEEE 802.11 media access control protocols: carrier sense multiple access with collision avoidance (CSMA/CA), point coordination function (PCF), IEEE802.11e for differentiated services. IEEE 802.11 network architecture: ad hoc and infrastructure modes, access point functionality. Management functions: synchronization, power management and association. IEEE 802.11s Mesh Networks. IEEE 802.16 (WiMAX) network architecture and protocols: Physical Layer (OFDMA) and Media Access Control Layer. Current research papers in the open literature. Prerequisite: EE 284 or CS 244A.", "code": "EE 384C", "min_units": 3, "max_units": 3}, {"title": "Performance Engineering of Computer Systems & Networks", "description": "Modeling and control methodologies for high-performance network engineering, including: Markov chains and stochastic modeling, queueing networks and congestion management, dynamic programming and task/processor scheduling, network dimensioning and optimization, and simulation methods. Applications for design of high-performance architectures for wireline/wireless networks and the Internet, including: traffic modeling, admission and congestion control, quality of service support, power control in wireless networks, packet scheduling in switches, video streaming over wireless links, and virus/worm propagation dynamics and countermeasures. Enrollment limited to 30. Prerequisites: basic networking technologies and probability.", "code": "EE 384S", "min_units": 3, "max_units": 3}]}]}