// Seed Turso directly using libsql client (bypasses Prisma env loading issues)
import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN;

if (!url || !url.startsWith("libsql://")) {
  console.error("Need TURSO_DATABASE_URL (libsql://...) env var");
  process.exit(1);
}

const client = createClient({ url, authToken });

// Use a simple cuid-like id generator
function id() {
  return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

async function exec(sql: string, args: unknown[] = []) {
  try {
    await client.execute({ sql, args });
  } catch (e) {
    console.error("SQL error:", (e as Error).message, "\n  SQL:", sql.slice(0, 80));
  }
}

async function count(table: string) {
  const r = await client.execute(`SELECT COUNT(*) as c FROM "${table}"`);
  return (r.rows[0] as { c: number }).c;
}

async function clearAll() {
  for (const t of ["Notice", "Result", "Application", "Feedback", "GalleryItem", "Blog", "Teacher", "Department"]) {
    await exec(`DELETE FROM "${t}"`);
  }
}

// Import the seed data from the existing seed.ts (re-declare here for direct insert)
const departments = [
  ["computer-engineering", "Computer Engineering", "কম্পিউটার ইঞ্জিনিয়ারিং", "CMT", "Cpu", "https://sfile.chatglm.cn/images-ppt/da461f865832.jpg", "Code the future — software, networks & AI systems.", "The Computer Engineering department prepares students for the fast-moving world of software, hardware and networking. The curriculum covers programming, data structures, database systems, web & mobile development, computer networks, microprocessors and an introduction to artificial intelligence. Students graduate job-ready for the IT industry.", "4 Years (8 Semesters)", 60, 2001, "Software Developer, Network Engineer, Web Developer, IT Support Specialist, System Administrator, Database Administrator", "Modern computer labs, High-speed fiber internet, Programming clubs, Hackathons & IT internships", 1],
  ["civil-engineering", "Civil Engineering", "সিভিল ইঞ্জিনিয়ারিং", "CIV", "Building2", "https://sfile.chatglm.cn/images-ppt/64f30b356ecd.jpg", "Build the nation — structures, roads & infrastructure.", "Civil Engineering is one of the oldest and most significant branches of engineering, dealing with the design, construction and maintenance of the physical and naturally built environment — roads, bridges, canals, dams and buildings. Students gain comprehensive skills in structural, geotechnical, transportation, environmental and water-resources engineering.", "4 Years (8 Semesters)", 60, 2001, "Site Engineer, Structural Designer, Surveyor, Project Supervisor, Estimation Engineer, Govt. PWD Contractor", "Surveying lab, AutoCAD & STAAD-Pro training, Material testing lab, Regular field visits", 2],
  ["electrical-engineering", "Electrical Engineering", "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং", "ELECT", "Zap", "https://sfile.chatglm.cn/images-ppt/e7a42da5287c.jpg", "Power the world — generation, transmission & automation.", "Electrical Engineering deals with the study and application of electricity, electronics and electromagnetism. The department trains students in electrical machines, power systems, circuit design, PLC & industrial automation, renewable energy and electrical safety — producing engineers ready for the power sector and manufacturing industry.", "4 Years (8 Semesters)", 60, 2001, "Electrical Engineer, Substation Operator, Automation Technician, Maintenance Engineer, Solar Plant Engineer", "PLC & automation lab, Electrical machine lab, Wiring & winding workshop, Industrial tours", 3],
  ["mechanical-engineering", "Mechanical Engineering", "মেকানিক্যাল ইঞ্জিনিয়ারিং", "MECH", "Cog", "https://sfile.chatglm.cn/images-ppt/e4eda96e1017.jpg", "Design & drive machines that move the world.", "Mechanical Engineering is the discipline that applies engineering physics, mathematics and materials science to design, analyze, manufacture and maintain mechanical systems. Students learn thermodynamics, fluid mechanics, machine design, manufacturing processes, CAD/CAM and quality control.", "4 Years (8 Semesters)", 60, 2001, "Maintenance Engineer, Production Supervisor, CAD Designer, QC Engineer, HVAC Technician", "Machine shop, Welding & fitting shop, CNC & CAD lab, Hands-on fabrication projects", 4],
  ["food-engineering", "Food Engineering", "ফুড ইঞ্জিনিয়ারিং", "FOOD", "Wheat", "https://sfile.chatglm.cn/images-ppt/f16e8833c0eb.jpg", "Engineer safe, nutritious food for millions.", "Food Engineering applies engineering principles to the storage, processing and distribution of food materials. The department covers food chemistry, microbiology, preservation, packaging, quality assurance and food plant management — preparing graduates for Bangladesh's growing agro-processing and food industry.", "4 Years (8 Semesters)", 50, 2001, "Food Production Supervisor, QA/QC Officer, Food Safety Inspector, Packaging Engineer", "Food processing lab, Microbiology lab, Sensory evaluation, Industry internships", 5],
  ["textile-engineering", "Textile Engineering", "টেক্সটাইল ইঞ্জিনিয়ারিং", "TEXT", "Shirt", "https://sfile.chatglm.cn/images-ppt/98a46b0a0484.jpg", "Weave success in Bangladesh's largest export sector.", "Textile Engineering prepares students for the ready-made garment and textile sector — the backbone of Bangladesh's economy. The curriculum spans yarn manufacturing, weaving, knitting, wet processing, garment manufacturing and textile quality control, with strong industry linkage.", "4 Years (8 Semesters)", 50, 2001, "Production Officer, Textile QA Engineer, Garment Merchandiser, Color & Dyeing Engineer, RMG Manager", "Spinning & weaving lab, Dyeing lab, Garment construction floor, Factory placement", 6],
  ["architecture-engineering", "Architecture Engineering", "আর্কিটেকচার ইঞ্জিনিয়ারিং", "ARCH", "Compass", "https://sfile.chatglm.cn/images-ppt/09bed4ef9112.jpg", "Shape spaces — design that inspires.", "Architecture Engineering blends artistic design with engineering fundamentals. Students learn architectural drawing, building materials, construction methods, urban planning, interior design and 3D modeling — graduating as professionals who can design functional, sustainable and beautiful built environments.", "4 Years (8 Semesters)", 40, 2001, "Architectural Designer, Draftsman, Interior Designer, Site Architect, Urban Planning Assistant", "Design studio, Model-making lab, AutoCAD & SketchUp, Site analysis trips", 7],
  ["automobile-engineering", "Automobile Engineering", "অটোমোবাইল ইঞ্জিনিয়ারিং", "AUTO", "Car", "https://sfile.chatglm.cn/images-ppt/7c3d8f99e8ce.jpg", "Keep the nation moving — vehicles & mobility tech.", "Automobile Engineering deals with the design, manufacturing, maintenance and repair of automobiles. Students study automotive engines, transmission systems, electrical & electronic vehicle systems, vehicle maintenance and emerging EV technology — meeting the rising demand for skilled automotive professionals.", "4 Years (8 Semesters)", 50, 2001, "Automobile Service Engineer, Workshop Manager, EV Technician, Quality Engineer, Fleet Supervisor", "Engine & chassis lab, Diagnostic tools, EV intro module, Brand service-center visits", 8],
] as const;

console.log("Clearing existing data...");
await clearAll();

console.log("Inserting departments...");
for (const d of departments) {
  await exec(
    `INSERT INTO "Department" (id, slug, name, "nameBn", "shortName", icon, image, tagline, description, duration, seats, "establishedYear", "careerOptions", highlights, "order", "createdAt") VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,datetime('now'))`,
    [id(), ...d]
  );
}
console.log(`  ✓ ${departments.length} departments`);

// Gallery items (the most important for visual)
const galleryItems = [
  ["Annual Award Ceremony", "/campus/event-award-ceremony.jpg"],
  ["Award Ceremony on Stage", "/campus/event-award-stage.jpg"],
  ["Award Ceremony with Banner", "/campus/event-award-banner.jpg"],
  ["Inter-Polytechnic Race — Medal Winners", "/campus/event-race-team.jpg"],
  ["Memorial Wreath Laying Ceremony", "/campus/event-memorial.jpg"],
  ["Trophy & Awards Distribution", "/campus/event-trophy.jpg"],
  ["CST Department Celebration", "/campus/event-cst-dept.jpg"],
  ["Project Exhibition — Water Saving Tech", "/campus/event-project-exhibition.jpg"],
  ["Event Inauguration with Officials", "/campus/event-inauguration.jpg"],
  ["Event Backdrop Photography", "/campus/event-backdrop.jpg"],
  ["Students in Classroom Session", "/campus/students-classroom-flowers.jpg"],
  ["Principal with Students", "/campus/students-principal.jpg"],
  ["Rover Scout Group Activity", "/campus/students-scout-group.jpg"],
  ["Semester Final Examination", "/campus/students-exam-hall.jpg"],
  ["Classroom Interactive Activity", "/campus/students-classroom-papers.jpg"],
  ["Student Seminar in Hall", "/campus/students-seminar.jpg"],
  ["Students Group Photo Outdoors", "/campus/students-outdoor-group.jpg"],
  ["Surveying Field Training", "/campus/lab-survey-training.jpg"],
  ["Civil Construction Site Visit", "/campus/lab-civil-site.jpg"],
  ["Python Security System Project", "/campus/lab-python-project.jpg"],
  ["Electrical Project Demonstration", "/campus/lab-electrical-demo.jpg"],
  ["Student Group on Campus Steps", "/campus/campus-group-steps.jpg"],
  ["Campus Lawn Gathering", "/campus/campus-group-lawn.jpg"],
  ["Students at College Main Gate", "/campus/fb-college-gate.jpg"],
  ["Innovation Competition Booth", "/campus/fb-innovation.jpg"],
] as const;

console.log("Inserting gallery items...");
const cats = ["Events","Events","Events","Events","Events","Events","Events","Events","Events","Events","Students","Students","Students","Students","Students","Students","Students","Labs","Labs","Labs","Labs","Campus","Campus","Campus","Campus"];
galleryItems.forEach((g, i) => {
  // (insert handled below in loop)
});
for (let i = 0; i < galleryItems.length; i++) {
  const [title, image] = galleryItems[i];
  await exec(
    `INSERT INTO "GalleryItem" (id, title, image, category, "createdAt") VALUES (?,?,?,?,datetime('now'))`,
    [id(), title, image, cats[i]]
  );
}
console.log(`  ✓ ${galleryItems.length} gallery items`);

// Results (for result checker)
const results = [
  ["240101", "Abdullah Al Mamun", "Computer Engineering", "3rd Semester", 3.85, "Passed", "2024"],
  ["240102", "Tasnim Rahman", "Computer Engineering", "3rd Semester", 3.92, "Passed", "2024"],
  ["240205", "Sabbir Hossain", "Civil Engineering", "3rd Semester", 3.45, "Passed", "2024"],
  ["240308", "Nusrat Jahan", "Electrical Engineering", "5th Semester", 4.0, "Passed", "2024"],
  ["240410", "Imran Khan", "Mechanical Engineering", "5th Semester", 3.6, "Passed", "2024"],
  ["240512", "Farzana Akter", "Food Engineering", "1st Semester", 3.78, "Passed", "2024"],
  ["240615", "Rakibul Islam", "Textile Engineering", "5th Semester", 3.2, "Passed", "2024"],
  ["240720", "Sumaiya Akter", "Architecture Engineering", "3rd Semester", 3.88, "Passed", "2024"],
  ["240825", "Jahid Hasan", "Automobile Engineering", "3rd Semester", 2.85, "Passed", "2024"],
  ["220101", "Mehedi Hasan", "Computer Engineering", "7th Semester", 3.95, "Passed", "2024"],
  ["220305", "Arif Hossain", "Electrical Engineering", "7th Semester", 3.55, "Passed", "2024"],
  ["220410", "Lamia Akhter", "Mechanical Engineering", "7th Semester", 3.7, "Passed", "2024"],
] as const;

console.log("Inserting results...");
for (const r of results) {
  await exec(
    `INSERT INTO "Result" (id, "rollNo", "studentName", department, semester, gpa, status, year, "createdAt") VALUES (?,?,?,?,?,?,?,?,datetime('now'))`,
    [id(), ...r]
  );
}
console.log(`  ✓ ${results.length} results`);

// Notices
const notices = [
  ["Diploma in Engineering — Admission Open for 2024-25 Session", "Admission", "2024-07-01", 1, "Applications are now open for the Diploma in Engineering program across all 8 departments. Scholarships available for meritorious students.", "The National Polytechnic Institute Manikganj invites applications for the Diploma in Engineering program for the 2024-25 academic session. SSC-passed students may apply to any of our 8 departments. Merit-based scholarships and special waivers are available every semester. Limited seats — apply early to secure your place."],
  ["Diploma in Engineering Practical Exam — Internal Examiner List (Jun-24)", "Exam", "2024-06-20", 1, "List of appointed internal examiners for the practical examinations held at the Rajdhani Polytechnic Centre.", "As per BTEB guidelines, the list of internal examiners for the Diploma in Engineering practical examinations (June-2024) has been published. All appointed examiners are requested to collect their assignment letters from the academic office and report on the scheduled dates."],
  ["Class Routine Published for 3rd, 5th & 7th Semester", "Routine", "2024-07-05", 0, "Updated class routines for the running semesters have been published. Students are advised to check the academic portal.", "The class routines for the 3rd, 5th and 7th semesters of all departments have been updated and published. Students should download their routine from the Academic > Class Routine section and report to their respective classes accordingly."],
  ["PLC Practical Classes in Progress — Electrical Dept.", "Academic", "2024-07-10", 0, "Hands-on PLC (Programmable Logic Controller) practical sessions are ongoing for Electrical Engineering students.", "The Electrical Engineering department is conducting hands-on PLC programming and industrial automation practical classes in the automation lab. Students are getting real-world exposure to ladder logic, HMI design and sensor integration."],
  ["Merit Scholarship Award Ceremony — Spring Semester", "Event", "2024-05-15", 0, "Scholarships awarded to top-performing students of the previous semester in a ceremony attended by guardians.", "NPI Manikganj held its merit scholarship award ceremony for the spring semester, distributing scholarships and special waivers to 60+ meritorious students across all departments. The Chairman and Director congratulated the recipients and encouraged continued excellence."],
  ["Office Application Form — Updated for Online Submission", "General", "2024-04-28", 0, "Students can now submit office applications (leave, certificate, transcript) through the online Smart Support portal.", "The academic office has launched an online submission system for routine office applications including leave requests, certificate issuance and transcript applications. This reduces paperwork and turnaround time for students."],
  ["Industry Visit to Local Textile & RMG Factory", "Event", "2024-03-12", 0, "Textile Engineering students visited a leading RMG factory to observe real production lines and QA processes.", "As part of industry linkage, Textile Engineering students visited a leading ready-made garment factory to observe production planning, sewing lines, finishing and quality assurance in real time. Such visits bridge classroom theory with shop-floor reality."],
  ["BTEB Semester Final Results Published", "Results", "2024-02-20", 0, "Results for the previous semester final exams are now available. Use the Result Checker on the website.", "The Bangladesh Technical Education Board (BTEB) has published the results of the last semester final examinations. Students may check their individual results using the online Result Checker on our website by entering their roll number."],
  ["New Computer Lab Inaugurated with 40 Workstations", "General", "2024-01-15", 0, "A new high-performance computer lab was inaugurated to support programming and CAD training.", "A state-of-the-art computer lab with 40 high-performance workstations, fiber internet and modern software has been inaugurated to support programming, networking and CAD/CAM training for Computer, Civil and Architecture students."],
  ["Smart Support Helpdesk — 24/7 Online Assistance", "General", "2023-12-05", 0, "A new smart support helpdesk offers students online assistance for academic and administrative queries.", "NPI Manikganj has launched a Smart Support helpdesk where students can raise academic and administrative queries online and track resolution status. The helpdesk operates during official working hours with a target response time of 24 hours."],
] as const;

console.log("Inserting notices...");
for (const n of notices) {
  await exec(
    `INSERT INTO "Notice" (id, title, category, date, "isPinned", excerpt, body, "createdAt") VALUES (?,?,?,?,?,?,?,datetime('now'))`,
    [id(), n[0], n[1], n[2], n[3] ? 1 : 0, n[4], n[5]]
  );
}
console.log(`  ✓ ${notices.length} notices`);

// Teachers
const teachers = [
  ["Md. Shamsur Rahman", "Chairman", "Governing Body", "chairman@npimanikganj.edu.bd", "01735782829", "https://npimanikganj.edu.bd/wp-content/uploads/2024/07/Md.-Shamsur-Rahman.jpg", "A dedicated educationist and philanthropist committed to making quality technical education accessible to the youth of Manikganj and greater Dhaka.", "Institutional Leadership, Technical Education Policy", 1],
  ["Dr. Engr. Faruque Hossain", "Director", "Administration", "director@npimanikganj.edu.bd", "01711349947", "https://npimanikganj.edu.bd/wp-content/uploads/2024/07/Dr.-Engr.-Faruque-Hossain.jpg", "An experienced engineer and academic leader guiding NPI Manikganj toward academic excellence, industry partnership and student success.", "Engineering Education, Curriculum Development, Industry Linkage", 2],
  ["Engr. Md. Rakibul Hasan", "Head of Department", "Computer Engineering", "rakibul@npimanikganj.edu.bd", "01711000001", "https://i.pravatar.cc/300?img=12", "Software engineer turned academic with 10+ years of experience in full-stack development and CS education.", "Software Engineering, Web Development, Databases", 3],
  ["Engr. Sadia Afrin", "Senior Instructor", "Electrical Engineering", "sadia@npimanikganj.edu.bd", "01711000002", "https://i.pravatar.cc/300?img=45", "Specialist in industrial automation and PLC programming with hands-on experience in manufacturing setups.", "PLC Automation, Power Systems, Control Engineering", 4],
  ["Engr. Tanvir Ahmed", "Head of Department", "Civil Engineering", "tanvir@npimanikganj.edu.bd", "01711000003", "https://i.pravatar.cc/300?img=13", "Structural engineer passionate about sustainable construction and field-based learning.", "Structural Design, Surveying, Estimation", 5],
  ["Engr. Nasrin Sultana", "Senior Instructor", "Textile Engineering", "nasrin@npimanikganj.edu.bd", "01711000004", "https://i.pravatar.cc/300?img=44", "Textile professional with deep experience in RMG quality assurance and wet processing.", "Garment Manufacturing, Wet Processing, QA", 6],
  ["Engr. Mahmudul Karim", "Instructor", "Mechanical Engineering", "mahmudul@npimanikganj.edu.bd", "01711000005", "https://i.pravatar.cc/300?img=15", "Mechanical design enthusiast focused on CAD/CAM and manufacturing process optimization.", "Machine Design, CAD/CAM, Thermodynamics", 7],
  ["Engr. Fahmida Yeasmin", "Instructor", "Architecture Engineering", "fahmida@npimanikganj.edu.bd", "01711000006", "https://i.pravatar.cc/300?img=32", "Architect blending traditional Bangladeshi design with modern sustainable practices.", "Architectural Design, 3D Modeling, Urban Planning", 8],
] as const;

console.log("Inserting teachers...");
for (const t of teachers) {
  await exec(
    `INSERT INTO "Teacher" (id, name, designation, department, email, phone, image, bio, expertise, "order", "createdAt") VALUES (?,?,?,?,?,?,?,?,?,?,datetime('now'))`,
    [id(), ...t]
  );
}
console.log(`  ✓ ${teachers.length} faculty members`);

// Blogs
const blogs = [
  ["The Vital Role of Electrical Engineering in Modern Industry", "vital-role-of-electrical-engineering", "From power generation to industrial automation, electrical engineering powers every layer of modern civilization. Discover how NPI Manikganj prepares students for this essential field.", "Electrical engineering is the backbone of modern industry. Every factory, hospital, office and home depends on a reliable supply of electricity and the machines that use it. At NPI Manikganj, the Electrical Engineering department goes beyond textbook theory — students work hands-on with motors, transformers, switchgear and programmable logic controllers. With the rise of renewable energy and smart grids, the demand for skilled electrical engineers has never been higher. Graduates leave prepared for careers in power plants, manufacturing, building services and the growing EV sector.", "/campus/lab-electrical-demo.jpg", "NPI Academic Team", "Engineering", "2024-07-08"],
  ["Civil Engineering at National Polytechnic Institute Manikganj", "civil-engineering-at-npi-manikganj", "Civil engineering shapes the world we live in — roads, bridges, dams and buildings. Learn about the scope and opportunities for civil students at NPI.", "Civil engineering is one of the oldest and most significant branches of engineering, dealing with the design, construction and maintenance of the physical and naturally built environment. At NPI Manikganj, students gain comprehensive knowledge in structural, geotechnical, transportation, environmental and water-resources engineering. From surveying a plot of land to estimating the cost of a multi-storey building, graduates are equipped to contribute to the infrastructure development that drives economic growth.", "/campus/lab-civil-site.jpg", "NPI Academic Team", "Engineering", "2024-07-05"],
  ["Computer Science & Engineering (CSE): Skills for the Digital Age", "computer-science-engineering-skills-digital-age", "Software is eating the world. Explore the in-demand skills CSE students develop and the careers waiting after graduation.", "Computer Science & Engineering is the passport to the digital economy. At NPI Manikganj, CSE students learn programming, data structures, databases, networking, web and mobile development — with an introduction to artificial intelligence. The department emphasizes project-based learning, hackathons and IT internships so graduates are job-ready. From software development to network administration and IT support, the career pathways are broad and lucrative, both at home and abroad.", "/campus/lab-python-project.jpg", "NPI Academic Team", "Engineering", "2024-06-28"],
] as const;

console.log("Inserting blogs...");
for (const b of blogs) {
  await exec(
    `INSERT INTO "Blog" (id, title, slug, excerpt, content, image, author, category, date, "createdAt") VALUES (?,?,?,?,?,?,?,?,?,datetime('now'))`,
    [id(), ...b]
  );
}
console.log(`  ✓ ${blogs.length} blog posts`);

console.log("\n=== Turso seed complete! ===");
console.log("  Departments:", await count("Department"));
console.log("  Teachers:", await count("Teacher"));
console.log("  Notices:", await count("Notice"));
console.log("  Results:", await count("Result"));
console.log("  Gallery:", await count("GalleryItem"));
console.log("  Blogs:", await count("Blog"));
process.exit(0);
