const hackathonData = [
  {
    id: 1,
    date: "May 13th - present",
    name: "AI Smile Analyzer",
    projectType: "Alright Tech Private Limited",
    description: "Worked as part of a team to develop backend features for an AI-driven smile analysis app, including API integration, data handling, and backend support for real-time inference.",
    logoUrl: "https://images.scalebranding.com/smile-wordmark-logo-07503c9b-b482-4790-b743-4f3928c937d4.jpg",
    logoAlt: "Hack Western 5 Logo",
    color: "bg-purple-500"
  },
  {
    id: 2,
    date: "May 2nd - 12th, 2025",
    name: "Beared Friend",
    projectType: "Alright Tech Private Limited",
    description: "Collaborated on a full-stack application tailored for barbershops, aimed at streamlining customer bookings and service management. Contributed to building user interfaces, integrating backend APIs, and supporting real-time features to enhance the client and barber experience.",
    logoUrl: "https://img.freepik.com/premium-vector/sign-beard-logo-vector-icon-illustration_683738-4653.jpg",
    logoAlt: "Hack The North Logo",
    color: "bg-blue-500"
  },
  {
    id: 3,
    date: "April 20th - 28th, 2025",
    name: "Sub Tracker",
    projectType: "Alright Tech Private Limited",
    description: "Contributed to the backend development of a Flutter-based subscription management app that allows users to browse, purchase, and manage subscriptions across multiple platforms. Worked on building secure APIs, managing user data, and integrating payment-related functionalities.",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/5234/5234307.png",
    logoAlt: "FirstNet Public Safety Hackathon Logo",
    color: "bg-green-500"
  },
  {
    id: 4,
    date: "April 12th - 22nd, 2025",
    name: "Twin Sting",
    projectType: "Alright Tech Private Limited",
    description: "Collaborated on a full-stack web application connecting dance artists with clients for buying and selling services online. Contributed to both frontend and backend development, building user-friendly interfaces and robust APIs to facilitate smooth transactions and service management.",
    logoUrl: "https://static.vecteezy.com/system/resources/previews/004/890/538/non_2x/twin-success-people-jumping-in-circle-shape-free-vector.jpg",
    logoAlt: "DeltaHacks Logo",
    color: "bg-red-300"
  },
  {
    id: 5,
    date: "April 7th, 2025 - present",
    name: "Tabeer",
    projectType: "Alright Tech Private Limited",
    description: "Contributed to the development of a web platform that connects scholarship aspirants with mentors. The platform allows users to browse and apply for scholarships, attend live mentorship sessions, and communicate through real-time chat features.",
    logoUrl: "https://t3.ftcdn.net/jpg/01/60/30/18/360_F_160301896_NyJSNpLkwoRZsaDprKIXWOxuMZCeMdoa.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-amber-300"
  },
  {
    id: 6,
    date: "February 22nd - April 3rd, 2025",
    name: "Computer Nostalgia Heaven",
    projectType: "Software Forge",
    description: "Built the frontend of an e-commerce web application focused on selling digital products such as mobile phones, laptops, and gaming consoles. Designed a responsive and intuitive user interface to enhance product discovery and shopping experience.",
    logoUrl: "https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-desktop-computer-icon-in-line-style-png-image_1728122.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-teal-600"
  },
  {
    id: 7,
    date: "October 12th, 2024 - January 5th, 2025",
    name: "Handicraft Store",
    projectType: "Free Lance",
    description: "Designed and developed a full-stack e-commerce platform for handcrafted products, enabling sellers to manage shops and products, and allowing customers to browse, place orders, and make secure online payments. The platform streamlines the buying and selling process while supporting independent artisans.",
    logoUrl: "https://static.vecteezy.com/system/resources/previews/008/479/303/non_2x/abstract-logo-handicraft-design-vector.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-indigo-500"
  },
  {
    id: 8,
    date: "August 12th - December 7th, 2024",
    name: "Style Loom",
    projectType: "Free Lance",
    description: "Developed a full-stack e-commerce platform, featuring secure payments, user account management, order tracking, and sizing tools to enhance the shopping experience focused on selling stitched and unstitched women’s clothing. Built for ease of use and efficient store management.",
    logoUrl: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-red-dress-clothing-image_1249062.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-violet-500"
  },
    {
    id: 9,
    date: "March 5th, 2024 - Januray 16th, 2025",
    name: "Poultry Pal",
    projectType: "Final Year Project",
    description: "As part of my Final Year Project (FYP), contributed to the development of a comprehensive poultry farm management system alongside team members. Participated in both frontend and backend development, implementing essential features such as employee management, order processing, and real-time flock monitoring. Focused on improving system functionality and ensuring smooth integration across modules to support efficient farm operations.",
    logoUrl: "https://img.freepik.com/free-vector/vector-rooster-illustration-design_779267-2402.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-teal-500"
  },
  {
    id: 10,
    date: "November 2nd, 2023 - February 12th, 2024",
    name: "The Shoe Shop",
    projectType: "Free Lance",
    description: "Designed and developed a comprehensive e-commerce platform for footwear products that enables administrators to manage inventory and provides customers with an intuitive interface to browse collections, place orders, and complete secure online payments.",
    logoUrl: "https://png.pngtree.com/template/20200809/ourmid/pngtree-modern-sneaker-shoe-logo-image_401564.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-cyan-500"
  },
  {
    id: 11,
    date: "June 21st - September 12th, 2023",
    name: "Multimedia Platform Backend API",
    projectType: "Educational Project",
    description: "Developed a feature-rich backend API for a multimedia platform as part of self-led challenge issued  by Hitesh Choudhary in his youtube tutorials. The project includes core features such as user management, video and tweet handling, playlists, comments, subscriptions, and administrative dashboards. Designed to support scalable, real-world applications, this project reflects disciplined, hands-on learning and the successful execution of an advanced development challenge.",
    logoUrl: "https://png.pngtree.com/png-clipart/20200710/original/pngtree-multimedia-logo-png-image_4136450.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-lime-500"
  },

  {
    id: 12,
    date: "April 6th - May 24th, 2023",
    name: "Task Flow",
    projectType: "Self-Initiated Project",
    description: "Developed a task management application enabling users to manage tasks. Focused on creating an intuitive and responsive interface along with reliable data management to ensure smooth user experience.",
    logoUrl: "https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-task-icon-for-your-project-png-image_1520262.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-yellow-500"
  },
  {
    id: 13,
    date: "December 18th, 2022 - Febraury 12th, 2023",
    name: "Promo Wave",
    projectType: "Self-Initiated Project",
    description: "Developed the frontend of a marketing ads project using basic HTML, CSS, JavaScript, and Bootstrap as part of a learning exercise to strengthen foundational web development skills and create responsive user interfaces.",
    logoUrl: "https://as1.ftcdn.net/jpg/02/85/20/56/1000_F_285205654_Ur0ndwobc1Uxk8yUVm8o0L4PZRpAob28.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-green-500"
  },
  {
    id: 14,
    date: "August 4th - October 3rd, 2022",
    name: "PhotoGallery Website",
    projectType: "Self-Initiated Project",
    description: "Developed a photography website using HTML, CSS, and JavaScript as a learning project to practice building responsive layouts and interactive user interfaces.",
    logoUrl: "https://st.depositphotos.com/1877361/1877/v/950/depositphotos_18771611-stock-illustration-photography-logo-with-colorful-leaves.jpg",
    logoAlt: "HackHarvard Logo",
    color: "bg-cyan-500"
  },
];

export default hackathonData;