const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Strategy", imgPath: "/images/strategy.svg" },
  { text: "Innovation", imgPath: "/images/innovation.svg" },
  { text: "Transformation", imgPath: "/images/transformation.svg" },
  { text: "Vision", imgPath: "/images/vision.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
];

const counterItems = [
  {
    // Box 1: Career arc with two stacked stats
    stacked: [
      { value: 20, suffix: "+", label: "Years Full-Stack Software Development" },
      { value: 10, suffix: "+", label: "Years of Engineering Leadership" }
    ]
  },

  // Box 2: Revenue impact
  { value: 300, prefix: "$", suffix: "M+", label: "Platforms Supporting Enterprise Revenue Growth" },

  // Box 3: Team scale
  { value: 100, suffix: "+", label: "Engineers Scaled and Mentored Across Global Teams" },

  // Box 4: Compliance achievements
  { value: 6, label: "Major Compliance Standards Achieved (SOC2, PCI-DSS, HIPAA, GDPR, NAIC, ISO-27001)" }
];



const logoIconsList = [
  {
    imgPath: "/images/logos/atlassian-logo.png",
  },
  {
    imgPath: "/images/logos/microsoft-logo.png",
  },
  {
    imgPath: "/images/logos/android-logo.png",
  },
  {
    imgPath: "/images/logos/docker-logo.png",
  },
  {
    imgPath: "/images/logos/aws-logo.png",
  },
  {
    imgPath: "/images/logos/apple-developer-logo.png",
  },
  {
    imgPath: "/images/logos/kubernetes-logo.png",
  },
  {
    imgPath: "/images/logos/gcp-logo.png",
  },
  {
    imgPath: "/images/logos/orion180-logo.png",
  },
  {
    imgPath: "/images/logos/satcom-direct-logo.png",
  },
  {
    imgPath: "/images/logos/inmarsat-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/execution.png",
    title: "Engineering Excellence",
    desc: "Driving scalable, compliant platforms with precision, performance, and measurable business impact.",
  },
  {
    imgPath: "/images/innovation.png",
    title: "Innovation & Transformation",
    desc: "Driving digital transformation through AI, automation, and cloud-native platforms—accelerating growth, reducing costs, and modernizing legacy systems.",
  },
  {
    imgPath: "/images/leadership.png",
    title: "Technical Leadership",
    desc: "Blending hands-on depth with strategic vision to scale engineering teams and transform platforms.",
  },
  {
    imgPath: "/images/communication.png",
    title: "Strategic Communication",
    desc: "Translating technical complexity into executive clarity—aligning teams, stakeholders, and outcomes.",
  },
  {
    imgPath: "/images/calendar.png",
    title: "Operational Rigor",
    desc: "Delivering on time, every time—with disciplined execution across global teams and critical systems.",
  },
  {
    imgPath: "/images/compliance.png",
    title: "Compliance & Trust",
    desc: "Building secure, audit-ready solutions that meet SOC2, PCI-DSS, HIPAA, and global standards.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
  review:
    "Luis provides fractional executive leadership, guiding organizations through engineering strategy, compliance, and innovation.",
  imgPath: "/images/freelance-small.png",
  logoPath: "/images/freelance-button.png",
  title: "Fractional VP of Engineering",
  date: "August 2024 - Present",
  responsibilities: [
    "Strategic Advisory: Delivered insights on AI-driven underwriting, geospatial risk modeling, and compliance automation through expert networks (ProSapient, AlphaSights).",
    "Compliance & Security: Advised law firm Bradley K. Boyd on secure digital intake workflows, network storage, and compliance posture, improving operational efficiency.",
    "Operational Excellence: Guided executive stakeholders on tool selection, workflow optimization, and SOC2/HIPAA/PCI-DSS compliance, ensuring scalable, audit-ready platforms.",
    "Talent Strategy: Provided direction for hiring elite onshore/offshore full-stack engineers, aligning engineering processes with business goals.",
    "Agile & Delivery: Recommended best practices for Agile development, CI/CD pipelines, and cybersecurity, ensuring secure, high-quality software delivery.",
    "Client Collaboration: Partnered with organizations including Bradley K. Boyd, ProSapient, and AlphaSights to deliver tailored engineering strategies and solutions."
    ],
  },

  {
  review:
    "Luis drove engineering transformation at Orion180, scaling teams and platforms while ensuring compliance and innovation.",
  imgPath: "/images/orion180-small.png",
  logoPath: "/images/orion180-button.png",
  title: "SVP of Technology",
  date: "February 2021 - August 2024",
  responsibilities: [
    "Scaling Teams: Grew engineering org from 4 to 100+, building 6 Agile teams, 10 offshore squads, DevOps, SWAT, and IT Helpdesk units.",
    "Innovation: Launched AI-driven mobile app for homeowner self-inspection, boosting engagement by 30% and accelerating market expansion.",
    "Compliance: Achieved NAIC, SEC, SOC2, and PCI-DSS audits with zero critical findings, reducing risk exposure.",
    "Operational Excellence: Reduced release rollback incidents by 90% through CI/CD and observability practices.",
    "Leadership Development: Mentored managers and senior ICs, resulting in three internal promotions and stronger succession planning.",
    "Security: Strengthened application security posture, reducing critical vulnerabilities by 70% via secure coding and automated scanning.",
    "User Experience: Modernized UI/UX with component libraries, cutting UI bugs by 40% and improving NPS by 15%.",
    "Strategic Alignment: Established OKRs and delivery dashboards, improving transparency and stakeholder confidence."
   ],
  },
  {
    review:
      "Luis advanced from Manager to VP at Satcom Direct, modernizing mission-critical aerospace systems and scaling engineering operations.",
    imgPath: "/images/satcom-direct-small.png",
    logoPath: "/images/satcom-direct-button.png",
    title: "VP of Software Engineering",
    date: "November 2014 - February 2021",
    responsibilities: [
      "Scaling Teams: Grew engineering org to 70+ members, managing a $10M budget aligned with strategic goals.",
      "Innovation: Directed full-stack development with C#, .NET Core, Angular, SQL, and RESTful APIs, enhancing customer-facing solutions.",
      "Compliance: Strengthened aviation industry compliance with structured issue tracking and audit-ready workflows.",
      "Operational Excellence: Modernized legacy systems into cloud-native architectures, reducing technical debt by 40% and improving reliability by 30%.",
      "Agile Transformation: Implemented CI/CD pipelines and delivery best practices, boosting team productivity by 25%.",
      "Quality Assurance: Integrated automated testing and compliance controls, reducing defects by 15%.",
      "Leadership Development: Mentored engineering leaders, building a talent pipeline and fostering continuous improvement."
    ],
  },
  {
    review:
      "Luis contributed to Inmarsat/Globe Wireless by designing mission-critical maritime software and pioneering early Agile practices.",
    imgPath: "/images/inmarsat-small.png",
    logoPath: "/images/inmarsat-button.png",
    title: "Senior Software Engineer",
    date: "October 1998 - November 2014",
    responsibilities: [
      "Innovation: Designed maritime software solutions for vessel tracking, secure mail servers, and electronic forms with workflow automation.",
      "Technical Delivery: Architected scalable full-stack applications with C#, .NET, MVC, SQL, and JavaScript.",
      "Agile Transformation: Pioneered Agile methodologies, accelerating delivery cycles by 20% and improving collaboration.",
      "Operational Excellence: Implemented security features and database optimizations, reducing latency by 15%.",
      "Leadership Development: Mentored junior developers, conducted evaluations, and onboarded talent for software and QA roles.",
      "Strategic Impact: Contributed to distributed systems enabling real-time vessel tracking and communication, precursors to cloud-based maritime architectures."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Darlene Ciarcia",
    mentions: "@darleneciarcia",
    review:
      '"Luis is a competent, innovative and diligent software engineer and leader who consistently performs with great professionalism. His excellent organization and planning lead to superior software designs and implementations that translate directly to the timely completion of products and project goals. Luis is a very dedicated, loyal and skilled professional which I would highly recommend."',
    imgPath: "/images/rec1.png",
  },
  {
    name: "Frank Coles",
    mentions: "@frankcoles",
    review:
      '"Luis is one of those employees who you would always want on your team. Low maintenance, gets the job done, supportive, thoughtful in work and towards colleagues. Extremely competent and hardworking. During my tenure as CEO Luis was a senior member of the software team at Globe Wireless for many years. It was a pleasure to have him on the team and I would always be interested in his input on a project. As many attest, Luis is an all round great human and hard working individual."',
    imgPath: "/images/rec2.png",
  },
  {
    name: "Alex Dellinger",
    mentions: "@alexdellinger",
    review:
      `"I had the privilege of working with Luis during his tenure as SVP of Engineering, and I can confidently say he is one of the most well-rounded and thoughtful leaders I've encountered. His background as a software engineer gives him a deep understanding of the technical challenges teams face and allows him to approach the software development lifecycle (SDLC) with both empathy and precision.
      Luis is not only well-versed in Agile and SAFe methodologies but also excels at optimizing processes to deliver high-quality outcomes. His logical and considerate leadership style creates an environment where teams are empowered to perform at their best, driving both innovation and operational excellence.
      What truly sets Luis apart is his ability to balance strategic vision with technical expertise. He consistently focuses on achieving the most optimal solutions while fostering collaboration and maintaining clear communication across all levels of the organization.
      I highly recommend Luis for any leadership role where technical depth, strategic insight, and a people-first approach are critical."`,
    imgPath: "/images/rec4.png",
  },
  {
    name: "Elena Carpenter",
    mentions: "@elenacarpenter",
    review:
      `"I had the pleasure of working closely with Luis twice in my career and can confidently say that he is an outstanding leader in the technology/engineering space. He consistently demonstrated a strong ability to lead cross-functional teams, drive innovation, and deliver complex projects on time. What sets Luis apart is his collaborative approach, technical expertise, and ability to solve problems with creative solutions.
      Luis is not only highly skilled in engineering but also excels at fostering an inclusive and supportive team environment. I've seen firsthand how his leadership inspires teams to perform at their best and tackle challenges head-on.
      It's rare to find someone with such a great balance of technical acumen and people leadership. I highly recommend Luis to any organization looking for a strategic and visionary leader who brings value to every project they touch."`,
    imgPath: "/images/rec5.png",
  },
  {
    name: "Michael Amoah",
    mentions: "@michaelamoah",
    review:
      `"I have had the opportunity to work with Luis Velazquez during his time as Senior Vice President of Technology at Orion180. Luis was instrumental in aligning technical strategy with organizational goals, ensuring that teams were equipped to deliver results effectively and efficiently.
      As a Product Owner, I appreciated Luis’s structured approach to problem-solving and his ability to provide clear direction while fostering collaboration among team members. His focus on driving operational improvements and innovation left a lasting impact on the team’s performance and the organization as a whole.
      Luis's leadership style emphasized accountability and practical execution, creating an environment where team members could thrive and deliver their best work. It was a valuable experience to work alongside him and learn from his leadership approach."`,
    imgPath: "/images/rec6.png",
  },
  {
    name: "Scott Crozier",
    mentions: "@scottcrozier",
    review:
      `"I had the privilege of working with Luis during our time together at Orion180, where he served as the Senior Vice President of Technology. Throughout our collaboration, I was consistently impressed by his leadership, expertise, and ability to deliver under pressure.
      Luis is an outstanding technology leader, combining a deep understanding of software development with a truly thoughtful, logical, and innovative approach to problem-solving. He led his team through some of the most complex and fast-paced projects, consistently driving success with remarkable clarity and direction. His strategic thinking and ability to break down complicated challenges made him an invaluable asset to both the team and the organization as a whole.
      One of Luis's greatest strengths is his solid communication skills. Whether working with stakeholders or guiding his team, he was always clear, informative, and transparent. His ability to adeptly distill complex technical concepts into understandable insights ensured alignment across departments and helped keep everyone on track.
      What truly stood out to me, though, was his ability to deliver exceptional software solutions under tight deadlines. Despite the pressure of working in a fast-paced environment, Luis consistently delivered high-quality results—timely, responsive, and thorough—demonstrating not only his technical acumen but also his commitment to excellence.
      Luis' leadership style is one that inspires confidence and fosters a collaborative environment. He was always willing to provide guidance and support to team members, helping them grow and thrive in their roles. His personable nature and dedication to his team's success made him a highly respected leader."`,
    imgPath: "/images/rec3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};