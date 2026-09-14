export const navigation = [
  {
    title: "What We Do",
    href: "/what-we-do",
    image: "/navigation/what-we-do.jpg",
    children: [
      {
        title: "Solutions",
        href: "/solutions",
        items: [
          { title: "Connectivity", href: "/solutions/connectivity" },
          { title: "Cloud & Data Center", href: "/solutions/cloud-data-center" },
          {
            title: "Network & Infrastructure",
            href: "/solutions/network-infrastructure",
          },
          { title: "Cybersecurity", href: "/solutions/cybersecurity" },
          { title: "Software & Data", href: "/solutions/software-data" },
          { title: "Collaboration", href: "/solutions/collaboration" },
          { title: "Energy", href: "/solutions/energy" },
        ],
      },
      {
        title: "Services",
        href: "/services",
        items: [
          {
            title: "Professional Services",
            href: "/services/professional-services",
          },
          {
            title: "Managed Services",
            href: "/services/managed-services",
          },
        ],
      },
    ],
  },

  {
    title: "Industries",
    href: "/industries",
    image: "/navigation/industries.jpg",
    children: [
      { title: "Enterprise", href: "/industries/enterprise" },
      { title: "SME", href: "/industries/sme" },
      {
        title: "Telecom & Carriers",
        href: "/industries/telecom-carriers",
      },
      { title: "Public Sector", href: "/industries/public-sector" },
    ],
  },

  {
    title: "Insights",
    href: "/insights",
    children: [
      { title: "News", href: "/insights?category=news" },
      { title: "Articles", href: "/insights?category=articles" },
      {
        title: "Case Studies",
        href: "/insights?category=case-studies",
      },
      { title: "Events", href: "/insights?category=events" },
      { title: "Downloads", href: "/insights?category=downloads" },
    ],
  },

  {
    title: "About",
    href: "/about",
    image: "/navigation/about.jpg",
    children: [
      { title: "Company Profile", href: "/about/company-profile" },
      { title: "Leadership", href: "/about/leadership" },
      { title: "Partners", href: "/about/partners" },
      { title: "CSR", href: "/about/csr" },
    ],
  },
];
