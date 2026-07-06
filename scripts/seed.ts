import { db } from "../src/lib/db";

const departments = [
  {
    slug: "computer-engineering",
    name: "Computer Engineering",
    nameBn: "কম্পিউটার ইঞ্জিনিয়ারিং",
    shortName: "CMT",
    icon: "Cpu",
    image: "https://sfile.chatglm.cn/images-ppt/da461f865832.jpg",
    tagline: "Code the future — software, networks & AI systems.",
    description:
      "The Computer Engineering department prepares students for the fast-moving world of software, hardware and networking. The curriculum covers programming, data structures, database systems, web & mobile development, computer networks, microprocessors and an introduction to artificial intelligence. Students graduate job-ready for the IT industry.",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    establishedYear: 2001,
    careerOptions: "Software Developer, Network Engineer, Web Developer, IT Support Specialist, System Administrator, Database Administrator",
    highlights: "Modern computer labs, High-speed fiber internet, Programming clubs, Hackathons & IT internships",
    order: 1,
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    nameBn: "সিভিল ইঞ্জিনিয়ারিং",
    shortName: "CIV",
    icon: "Building2",
    image: "https://sfile.chatglm.cn/images-ppt/64f30b356ecd.jpg",
    tagline: "Build the nation — structures, roads & infrastructure.",
    description:
      "Civil Engineering is one of the oldest and most significant branches of engineering, dealing with the design, construction and maintenance of the physical and naturally built environment — roads, bridges, canals, dams and buildings. Students gain comprehensive skills in structural, geotechnical, transportation, environmental and water-resources engineering.",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    establishedYear: 2001,
    careerOptions: "Site Engineer, Structural Designer, Surveyor, Project Supervisor, Estimation Engineer, Govt. PWD Contractor",
    highlights: "Surveying lab, AutoCAD & STAAD-Pro training, Material testing lab, Regular field visits",
    order: 2,
  },
  {
    slug: "electrical-engineering",
    name: "Electrical Engineering",
    nameBn: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",
    shortName: "ELECT",
    icon: "Zap",
    image: "https://sfile.chatglm.cn/images-ppt/e7a42da5287c.jpg",
    tagline: "Power the world — generation, transmission & automation.",
    description:
      "Electrical Engineering deals with the study and application of electricity, electronics and electromagnetism. The department trains students in electrical machines, power systems, circuit design, PLC & industrial automation, renewable energy and electrical safety — producing engineers ready for the power sector and manufacturing industry.",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    establishedYear: 2001,
    careerOptions: "Electrical Engineer, Substation Operator, Automation Technician, Maintenance Engineer, Solar Plant Engineer",
    highlights: "PLC & automation lab, Electrical machine lab, Wiring & winding workshop, Industrial tours",
    order: 3,
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    nameBn: "মেকানিক্যাল ইঞ্জিনিয়ারিং",
    shortName: "MECH",
    icon: "Cog",
    image: "https://sfile.chatglm.cn/images-ppt/e4eda96e1017.jpg",
    tagline: "Design & drive machines that move the world.",
    description:
      "Mechanical Engineering is the discipline that applies engineering physics, mathematics and materials science to design, analyze, manufacture and maintain mechanical systems. Students learn thermodynamics, fluid mechanics, machine design, manufacturing processes, CAD/CAM and quality control.",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    establishedYear: 2001,
    careerOptions: "Maintenance Engineer, Production Supervisor, CAD Designer, QC Engineer, HVAC Technician",
    highlights: "Machine shop, Welding & fitting shop, CNC & CAD lab, Hands-on fabrication projects",
    order: 4,
  },
  {
    slug: "food-engineering",
    name: "Food Engineering",
    nameBn: "ফুড ইঞ্জিনিয়ারিং",
    shortName: "FOOD",
    icon: "Wheat",
    image: "https://sfile.chatglm.cn/images-ppt/f16e8833c0eb.jpg",
    tagline: "Engineer safe, nutritious food for millions.",
    description:
      "Food Engineering applies engineering principles to the storage, processing and distribution of food materials. The department covers food chemistry, microbiology, preservation, packaging, quality assurance and food plant management — preparing graduates for Bangladesh's growing agro-processing and food industry.",
    duration: "4 Years (8 Semesters)",
    seats: 50,
    establishedYear: 2001,
    careerOptions: "Food Production Supervisor, QA/QC Officer, Food Safety Inspector, Packaging Engineer",
    highlights: "Food processing lab, Microbiology lab, Sensory evaluation, Industry internships",
    order: 5,
  },
  {
    slug: "textile-engineering",
    name: "Textile Engineering",
    nameBn: "টেক্সটাইল ইঞ্জিনিয়ারিং",
    shortName: "TEXT",
    icon: "Shirt",
    image: "https://sfile.chatglm.cn/images-ppt/98a46b0a0484.jpg",
    tagline: "Weave success in Bangladesh's largest export sector.",
    description:
      "Textile Engineering prepares students for the ready-made garment and textile sector — the backbone of Bangladesh's economy. The curriculum spans yarn manufacturing, weaving, knitting, wet processing, garment manufacturing and textile quality control, with strong industry linkage.",
    duration: "4 Years (8 Semesters)",
    seats: 50,
    establishedYear: 2001,
    careerOptions: "Production Officer, Textile QA Engineer, Garment Merchandiser, Color & Dyeing Engineer, RMG Manager",
    highlights: "Spinning & weaving lab, Dyeing lab, Garment construction floor, Factory placement",
    order: 6,
  },
  {
    slug: "architecture-engineering",
    name: "Architecture Engineering",
    nameBn: "আর্কিটেকচার ইঞ্জিনিয়ারিং",
    shortName: "ARCH",
    icon: "Compass",
    image: "https://sfile.chatglm.cn/images-ppt/88a39cf65c07.jpg",
    tagline: "Shape spaces — design that inspires.",
    description:
      "Architecture Engineering blends artistic design with engineering fundamentals. Students learn architectural drawing, building materials, construction methods, urban planning, interior design and 3D modeling — graduating as professionals who can design functional, sustainable and beautiful built environments.",
    duration: "4 Years (8 Semesters)",
    seats: 40,
    establishedYear: 2001,
    careerOptions: "Architectural Designer, Draftsman, Interior Designer, Site Architect, Urban Planning Assistant",
    highlights: "Design studio, Model-making lab, AutoCAD & SketchUp, Site analysis trips",
    order: 7,
  },
  {
    slug: "automobile-engineering",
    name: "Automobile Engineering",
    nameBn: "অটোমোবাইল ইঞ্জিনিয়ারিং",
    shortName: "AUTO",
    icon: "Car",
    image: "https://sfile.chatglm.cn/images-ppt/7c3d8f99e8ce.jpg",
    tagline: "Keep the nation moving — vehicles & mobility tech.",
    description:
      "Automobile Engineering deals with the design, manufacturing, maintenance and repair of automobiles. Students study automotive engines, transmission systems, electrical & electronic vehicle systems, vehicle maintenance and emerging EV technology — meeting the rising demand for skilled automotive professionals.",
    duration: "4 Years (8 Semesters)",
    seats: 50,
    establishedYear: 2001,
    careerOptions: "Automobile Service Engineer, Workshop Manager, EV Technician, Quality Engineer, Fleet Supervisor",
    highlights: "Engine & chassis lab, Diagnostic tools, EV intro module, Brand service-center visits",
    order: 8,
  },
];

const teachers = [
  {
    name: "Md. Shamsur Rahman",
    designation: "Chairman",
    department: "Governing Body",
    email: "chairman@npimanikganj.edu.bd",
    phone: "01735782829",
    image: "https://npimanikganj.edu.bd/wp-content/uploads/2024/07/Md.-Shamsur-Rahman.jpg",
    bio: "A dedicated educationist and philanthropist committed to making quality technical education accessible to the youth of Manikganj and greater Dhaka.",
    expertise: "Institutional Leadership, Technical Education Policy",
    order: 1,
  },
  {
    name: "Dr. Engr. Faruque Hossain",
    designation: "Director",
    department: "Administration",
    email: "director@npimanikganj.edu.bd",
    phone: "01711349947",
    image: "https://npimanikganj.edu.bd/wp-content/uploads/2024/07/Dr.-Engr.-Faruque-Hossain.jpg",
    bio: "An experienced engineer and academic leader guiding NPI Manikganj toward academic excellence, industry partnership and student success.",
    expertise: "Engineering Education, Curriculum Development, Industry Linkage",
    order: 2,
  },
  {
    name: "Engr. Md. Rakibul Hasan",
    designation: "Head of Department",
    department: "Computer Engineering",
    email: "rakibul@npimanikganj.edu.bd",
    phone: "01711000001",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Software engineer turned academic with 10+ years of experience in full-stack development and CS education.",
    expertise: "Software Engineering, Web Development, Databases",
    order: 3,
  },
  {
    name: "Engr. Sadia Afrin",
    designation: "Senior Instructor",
    department: "Electrical Engineering",
    email: "sadia@npimanikganj.edu.bd",
    phone: "01711000002",
    image: "https://i.pravatar.cc/300?img=45",
    bio: "Specialist in industrial automation and PLC programming with hands-on experience in manufacturing setups.",
    expertise: "PLC Automation, Power Systems, Control Engineering",
    order: 4,
  },
  {
    name: "Engr. Tanvir Ahmed",
    designation: "Head of Department",
    department: "Civil Engineering",
    email: "tanvir@npimanikganj.edu.bd",
    phone: "01711000003",
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Structural engineer passionate about sustainable construction and field-based learning.",
    expertise: "Structural Design, Surveying, Estimation",
    order: 5,
  },
  {
    name: "Engr. Nasrin Sultana",
    designation: "Senior Instructor",
    department: "Textile Engineering",
    email: "nasrin@npimanikganj.edu.bd",
    phone: "01711000004",
    image: "https://i.pravatar.cc/300?img=44",
    bio: "Textile professional with deep experience in RMG quality assurance and wet processing.",
    expertise: "Garment Manufacturing, Wet Processing, QA",
    order: 6,
  },
  {
    name: "Engr. Mahmudul Karim",
    designation: "Instructor",
    department: "Mechanical Engineering",
    email: "mahmudul@npimanikganj.edu.bd",
    phone: "01711000005",
    image: "https://i.pravatar.cc/300?img=15",
    bio: "Mechanical design enthusiast focused on CAD/CAM and manufacturing process optimization.",
    expertise: "Machine Design, CAD/CAM, Thermodynamics",
    order: 7,
  },
  {
    name: "Engr. Fahmida Yeasmin",
    designation: "Instructor",
    department: "Architecture Engineering",
    email: "fahmida@npimanikganj.edu.bd",
    phone: "01711000006",
    image: "https://i.pravatar.cc/300?img=32",
    bio: "Architect blending traditional Bangladeshi design with modern sustainable practices.",
    expertise: "Architectural Design, 3D Modeling, Urban Planning",
    order: 8,
  },
];

const notices = [
  {
    title: "Diploma in Engineering — Admission Open for 2024-25 Session",
    category: "Admission",
    date: new Date("2024-07-01"),
    isPinned: true,
    excerpt: "Applications are now open for the Diploma in Engineering program across all 8 departments. Scholarships available for meritorious students.",
    body: "The National Polytechnic Institute Manikganj invites applications for the Diploma in Engineering program for the 2024-25 academic session. SSC-passed students may apply to any of our 8 departments. Merit-based scholarships and special waivers are available every semester. Limited seats — apply early to secure your place.",
  },
  {
    title: "Diploma in Engineering Practical Exam — Internal Examiner List (Jun-24)",
    category: "Exam",
    date: new Date("2024-06-20"),
    isPinned: true,
    excerpt: "List of appointed internal examiners for the practical examinations held at the Rajdhani Polytechnic Centre.",
    body: "As per BTEB guidelines, the list of internal examiners for the Diploma in Engineering practical examinations (June-2024) has been published. All appointed examiners are requested to collect their assignment letters from the academic office and report on the scheduled dates.",
  },
  {
    title: "Class Routine Published for 3rd, 5th & 7th Semester",
    category: "Routine",
    date: new Date("2024-07-05"),
    isPinned: false,
    excerpt: "Updated class routines for the running semesters have been published. Students are advised to check the academic portal.",
    body: "The class routines for the 3rd, 5th and 7th semesters of all departments have been updated and published. Students should download their routine from the Academic > Class Routine section and report to their respective classes accordingly.",
  },
  {
    title: "PLC Practical Classes in Progress — Electrical Dept.",
    category: "Academic",
    date: new Date("2024-07-10"),
    isPinned: false,
    excerpt: "Hands-on PLC (Programmable Logic Controller) practical sessions are ongoing for Electrical Engineering students.",
    body: "The Electrical Engineering department is conducting hands-on PLC programming and industrial automation practical classes in the automation lab. Students are getting real-world exposure to ladder logic, HMI design and sensor integration.",
  },
  {
    title: "Merit Scholarship Award Ceremony — Spring Semester",
    category: "Event",
    date: new Date("2024-05-15"),
    isPinned: false,
    excerpt: "Scholarships awarded to top-performing students of the previous semester in a ceremony attended by guardians.",
    body: "NPI Manikganj held its merit scholarship award ceremony for the spring semester, distributing scholarships and special waivers to 60+ meritorious students across all departments. The Chairman and Director congratulated the recipients and encouraged continued excellence.",
  },
  {
    title: "Office Application Form — Updated for Online Submission",
    category: "General",
    date: new Date("2024-04-28"),
    isPinned: false,
    excerpt: "Students can now submit office applications (leave, certificate, transcript) through the online Smart Support portal.",
    body: "The academic office has launched an online submission system for routine office applications including leave requests, certificate issuance and transcript applications. This reduces paperwork and turnaround time for students.",
  },
  {
    title: "Industry Visit to Local Textile & RMG Factory",
    category: "Event",
    date: new Date("2024-03-12"),
    isPinned: false,
    excerpt: "Textile Engineering students visited a leading RMG factory to observe real production lines and QA processes.",
    body: "As part of industry linkage, Textile Engineering students visited a leading ready-made garment factory to observe production planning, sewing lines, finishing and quality assurance in real time. Such visits bridge classroom theory with shop-floor reality.",
  },
  {
    title: "BTEB Semester Final Results Published",
    category: "Results",
    date: new Date("2024-02-20"),
    isPinned: false,
    excerpt: "Results for the previous semester final exams are now available. Use the Result Checker on the website.",
    body: "The Bangladesh Technical Education Board (BTEB) has published the results of the last semester final examinations. Students may check their individual results using the online Result Checker on our website by entering their roll number.",
  },
  {
    title: "New Computer Lab Inaugurated with 40 Workstations",
    category: "General",
    date: new Date("2024-01-15"),
    isPinned: false,
    excerpt: "A new high-performance computer lab was inaugurated to support programming and CAD training.",
    body: "A state-of-the-art computer lab with 40 high-performance workstations, fiber internet and modern software has been inaugurated to support programming, networking and CAD/CAM training for Computer, Civil and Architecture students.",
  },
  {
    title: "Smart Support Helpdesk — 24/7 Online Assistance",
    category: "General",
    date: new Date("2023-12-05"),
    isPinned: false,
    excerpt: "A new smart support helpdesk offers students online assistance for academic and administrative queries.",
    body: "NPI Manikganj has launched a Smart Support helpdesk where students can raise academic and administrative queries online and track resolution status. The helpdesk operates during official working hours with a target response time of 24 hours.",
  },
];

const results = [
  { rollNo: "240101", studentName: "Abdullah Al Mamun", department: "Computer Engineering", semester: "3rd Semester", gpa: 3.85, status: "Passed", year: "2024" },
  { rollNo: "240102", studentName: "Tasnim Rahman", department: "Computer Engineering", semester: "3rd Semester", gpa: 3.92, status: "Passed", year: "2024" },
  { rollNo: "240205", studentName: "Sabbir Hossain", department: "Civil Engineering", semester: "3rd Semester", gpa: 3.45, status: "Passed", year: "2024" },
  { rollNo: "240308", studentName: "Nusrat Jahan", department: "Electrical Engineering", semester: "5th Semester", gpa: 4.0, status: "Passed", year: "2024" },
  { rollNo: "240410", studentName: "Imran Khan", department: "Mechanical Engineering", semester: "5th Semester", gpa: 3.6, status: "Passed", year: "2024" },
  { rollNo: "240512", studentName: "Farzana Akter", department: "Food Engineering", semester: "1st Semester", gpa: 3.78, status: "Passed", year: "2024" },
  { rollNo: "240615", studentName: "Rakibul Islam", department: "Textile Engineering", semester: "5th Semester", gpa: 3.2, status: "Passed", year: "2024" },
  { rollNo: "240720", studentName: "Sumaiya Akter", department: "Architecture Engineering", semester: "3rd Semester", gpa: 3.88, status: "Passed", year: "2024" },
  { rollNo: "240825", studentName: "Jahid Hasan", department: "Automobile Engineering", semester: "3rd Semester", gpa: 2.85, status: "Passed", year: "2024" },
  { rollNo: "220101", studentName: "Mehedi Hasan", department: "Computer Engineering", semester: "7th Semester", gpa: 3.95, status: "Passed", year: "2024" },
  { rollNo: "220305", studentName: "Arif Hossain", department: "Electrical Engineering", semester: "7th Semester", gpa: 3.55, status: "Passed", year: "2024" },
  { rollNo: "220410", studentName: "Lamia Akhter", department: "Mechanical Engineering", semester: "7th Semester", gpa: 3.7, status: "Passed", year: "2024" },
];

const galleryItems = [
  // Real NPI campus photos — Events
  { title: "Annual Award Ceremony", image: "/campus/event-award-ceremony.jpg", category: "Events" },
  { title: "Award Ceremony on Stage", image: "/campus/event-award-stage.jpg", category: "Events" },
  { title: "Award Ceremony with Banner", image: "/campus/event-award-banner.jpg", category: "Events" },
  { title: "Inter-Polytechnic Race — Medal Winners", image: "/campus/event-race-team.jpg", category: "Events" },
  { title: "Memorial Wreath Laying Ceremony", image: "/campus/event-memorial.jpg", category: "Events" },
  { title: "Trophy & Awards Distribution", image: "/campus/event-trophy.jpg", category: "Events" },
  { title: "CST Department Celebration", image: "/campus/event-cst-dept.jpg", category: "Events" },
  { title: "Project Exhibition — Water Saving Tech", image: "/campus/event-project-exhibition.jpg", category: "Events" },
  { title: "Event Inauguration with Officials", image: "/campus/event-inauguration.jpg", category: "Events" },
  { title: "Event Backdrop Photography", image: "/campus/event-backdrop.jpg", category: "Events" },
  // Real NPI campus photos — Students
  { title: "Students in Classroom Session", image: "/campus/students-classroom-flowers.jpg", category: "Students" },
  { title: "Principal with Students", image: "/campus/students-principal.jpg", category: "Students" },
  { title: "Rover Scout Group Activity", image: "/campus/students-scout-group.jpg", category: "Students" },
  { title: "Semester Final Examination", image: "/campus/students-exam-hall.jpg", category: "Students" },
  { title: "Classroom Interactive Activity", image: "/campus/students-classroom-papers.jpg", category: "Students" },
  { title: "Student Seminar in Hall", image: "/campus/students-seminar.jpg", category: "Students" },
  { title: "Students Group Photo Outdoors", image: "/campus/students-outdoor-group.jpg", category: "Students" },
  // Real NPI campus photos — Labs
  { title: "Surveying Field Training", image: "/campus/lab-survey-training.jpg", category: "Labs" },
  { title: "Civil Construction Site Visit", image: "/campus/lab-civil-site.jpg", category: "Labs" },
  { title: "Python Security System Project", image: "/campus/lab-python-project.jpg", category: "Labs" },
  { title: "Electrical Project Demonstration", image: "/campus/lab-electrical-demo.jpg", category: "Labs" },
  // Real NPI campus photos — Campus
  { title: "Student Group on Campus Steps", image: "/campus/campus-group-steps.jpg", category: "Campus" },
  { title: "Campus Lawn Gathering", image: "/campus/campus-group-lawn.jpg", category: "Campus" },
  { title: "Students at College Main Gate", image: "/campus/fb-college-gate.jpg", category: "Campus" },
  { title: "Innovation Competition Booth", image: "/campus/fb-innovation.jpg", category: "Campus" },
];

const blogs = [
  {
    title: "The Vital Role of Electrical Engineering in Modern Industry",
    slug: "vital-role-of-electrical-engineering",
    excerpt: "From power generation to industrial automation, electrical engineering powers every layer of modern civilization. Discover how NPI Manikganj prepares students for this essential field.",
    content: "Electrical engineering is the backbone of modern industry. Every factory, hospital, office and home depends on a reliable supply of electricity and the machines that use it. At NPI Manikganj, the Electrical Engineering department goes beyond textbook theory — students work hands-on with motors, transformers, switchgear and programmable logic controllers. With the rise of renewable energy and smart grids, the demand for skilled electrical engineers has never been higher. Graduates leave prepared for careers in power plants, manufacturing, building services and the growing EV sector.",
    image: "/campus/lab-electrical-demo.jpg",
    author: "NPI Academic Team",
    category: "Engineering",
    date: new Date("2024-07-08"),
  },
  {
    title: "Civil Engineering at National Polytechnic Institute Manikganj",
    slug: "civil-engineering-at-npi-manikganj",
    excerpt: "Civil engineering shapes the world we live in — roads, bridges, dams and buildings. Learn about the scope and opportunities for civil students at NPI.",
    content: "Civil engineering is one of the oldest and most significant branches of engineering, dealing with the design, construction and maintenance of the physical and naturally built environment. At NPI Manikganj, students gain comprehensive knowledge in structural, geotechnical, transportation, environmental and water-resources engineering. From surveying a plot of land to estimating the cost of a multi-storey building, graduates are equipped to contribute to the infrastructure development that drives economic growth.",
    image: "/campus/lab-civil-site.jpg",
    author: "NPI Academic Team",
    category: "Engineering",
    date: new Date("2024-07-05"),
  },
  {
    title: "Computer Science & Engineering (CSE): Skills for the Digital Age",
    slug: "computer-science-engineering-skills-digital-age",
    excerpt: "Software is eating the world. Explore the in-demand skills CSE students develop and the careers waiting after graduation.",
    content: "Computer Science & Engineering is the passport to the digital economy. At NPI Manikganj, CSE students learn programming, data structures, databases, networking, web and mobile development — with an introduction to artificial intelligence. The department emphasizes project-based learning, hackathons and IT internships so graduates are job-ready. From software development to network administration and IT support, the career pathways are broad and lucrative, both at home and abroad.",
    image: "/campus/lab-python-project.jpg",
    author: "NPI Academic Team",
    category: "Engineering",
    date: new Date("2024-06-28"),
  },
];

async function main() {
  console.log("Seeding database...");

  await db.notice.deleteMany();
  await db.result.deleteMany();
  await db.application.deleteMany();
  await db.feedback.deleteMany();
  await db.galleryItem.deleteMany();
  await db.blog.deleteMany();
  await db.teacher.deleteMany();
  await db.department.deleteMany();

  for (const d of departments) await db.department.create({ data: d });
  console.log(`  ✓ ${departments.length} departments`);

  for (const t of teachers) await db.teacher.create({ data: t });
  console.log(`  ✓ ${teachers.length} faculty members`);

  for (const n of notices) await db.notice.create({ data: n });
  console.log(`  ✓ ${notices.length} notices`);

  for (const r of results) await db.result.create({ data: r });
  console.log(`  ✓ ${results.length} results`);

  for (const g of galleryItems) await db.galleryItem.create({ data: g });
  console.log(`  ✓ ${galleryItems.length} gallery items`);

  for (const b of blogs) await db.blog.create({ data: b });
  console.log(`  ✓ ${blogs.length} blog posts`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
