export const menuList = [
  {
    name: "Dashboard",
    link: "#dashboard",
  },
  {
    name: "My Jobs",
    link: "#my-jobs",
    children: [
      {
        name: "Job 1",
        link: "#job-1",
      },
      {
        name: "Job 2",
        link: "#job-2",
      },
      {
        name: "Job 3",
        link: "#job-3",
      },
    ],
  },
  {
    name: "CV Search",
    link: "/",
  },
  {
    name: "Report",
    link: "#report",
  },
  {
    name: "Billing",
    link: "#billing",
  },
];

export const user = {
  name: "John Doe",
  email: "GpO3q@example.com",
  address: "Nasrcity , Cairo , Egypt",
  experience: 10,
  image:
    "https://i.pinimg.com/736x/e8/83/ba/e883ba30bbf3da6ce6b0e22d042128c5.jpg",
  about: `I’m a Medical Ambassador + I am dedicated to transforming
    healthcare access and education in underserved communities. My
    passion for promoting health equity drives me to bridge the gap
    between medical professionals and those in need. Through
    community outreach, education, and advocacy, I strive to empower
    individuals with the knowledge and resources they require for
    better health outcomes. Together, we can build a future where
    quality healthcare is a right, not a privilege.`,

  workExperience: [
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title:
        "Consultant Medical Doctor, Doctor of Integrative Natural at kasr ALainy Hospital",
      start: "2016",
      end: "current",
    },
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title: "Doctor of  Natural at XS  Hospital",
      start: "2014",
      end: "2016",
    },
  ],
  education: [
    {
      logo: "https://media.designrush.com/inspiration_images/131656/conversions/_1523460223_965_Harvard-Wreath-Logo_ab2ece9fbd52-desktop.jpg",
      title: "Harvard University",
      degree: "Postgraduate degree, Applied Psychology",
      start: "2010",
      end: "2014",
    },
    {
      logo: "https://scontent.faly8-1.fna.fbcdn.net/v/t39.30808-6/352474030_1361330644447589_834877496780485495_n.png?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rtPee4lrhREQ7kNvgGnzOE3&_nc_zt=23&_nc_ht=scontent.faly8-1.fna&_nc_gid=AgyV1dLU0PCTihEhAsZiTtQ&oh=00_AYCbhdwoHm9JhKctnG1JH_4ChyaepdEf42InLA2AlrqLtg&oe=67529A27",
      title: "University of Toronto",
      degree: "Bachelor of Arts, Visual Communication",
      start: "2010",
      end: "2010",
    },
  ],
  skills: ["Communication", "Analytics", "Facebook Ads", "Content Planning"],
};
