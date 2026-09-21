/**
 * Everything you are likely to edit lives in this file:
 * your details, projects, screenshots, certificates and skills.
 */

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  name: 'Ilham Shehzadi Jamil',
  role: 'Full Stack Developer',
  location: 'Gujranwala, Pakistan',
  github: 'https://github.com/jameel99117-web',
  linkedin: 'https://www.linkedin.com/in/ilham-shehzadi-jamil-7203a528a',
  email: 'jameel99117@gmail.com',

  // Where the "Hire me" link in the header points.
  // Change this to your Upwork profile URL when it is ready.
  hireUrl: 'mailto:jameel99117@gmail.com',
}

export const contact = {
  href: `mailto:${profile.email}`,
  label: profile.email,
}

// ---------------------------------------------------------------------------
// Screenshots
// ---------------------------------------------------------------------------
// By default the screenshots are loaded straight from your GitHub repos.
// If you would rather host them yourself, run `npm run screenshots`
// (downloads them into public/screenshots) and set SELF_HOST to true.
const RAW = 'https://raw.githubusercontent.com/jameel99117-web'
const SELF_HOST = false

export const shot = (repo, path) =>
  SELF_HOST
    ? `/screenshots/${repo}/${path.split('/').pop()}`
    : `${RAW}/${repo}/main/${path}`

// Used by scripts/download-screenshots.mjs
export const SCREENSHOT_RAW_BASE = RAW

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
const gh = (repoName) => `https://github.com/jameel99117-web/${repoName}`

export const projects = (
  [
    {
      id: 'blood-donor-finder',
      title: 'Blood Donor Finder',
      kind: 'Mobile app',
      description:
        'A mobile app that connects blood donors with people and hospitals in urgent need. Users search by blood group and location, register as a donor or recipient, and contact donors directly.',
      stack: ['React Native', 'Expo', 'TypeScript'],
      live: 'https://blood-donor-app-six.vercel.app',
      repoName: 'blood-donor-app',
      repoUrl: gh('blood-donor-app'),
      shots: [
        { caption: 'Welcome', file: '1.png' },
        { caption: 'Login', file: '2.png' },
        { caption: 'Donor home', file: '3.png' },
      ],
    },
    {
      id: 'airline-reservation',
      title: 'Airline Reservation Management System',
      kind: 'Full-stack web app',
      description:
        'A full-stack platform for flights, reservations, and passengers. It has separate dashboards for passengers, agents, managers, and admins, plus a loyalty program and analytics.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      live: 'https://airplane-reservation-management-sys.vercel.app',
      repoName: 'Airplane-Reservation-Management-System',
      repoUrl: gh('Airplane-Reservation-Management-System'),
      shots: [
        { caption: 'Home', file: 'images/home-page.png' },
        { caption: 'Flight results', file: 'images/flights-results.png' },
        { caption: 'Agent dashboard', file: 'images/agent-dashboard.png' },
        { caption: 'Manager analytics', file: 'images/manager-analytics.png' },
      ],
    },
    {
      id: 'virtual-wardrobe',
      title: 'Virtual Wardrobe',
      kind: 'Web app',
      description:
        'A web app that digitizes your closet. Users catalog clothes, build outfits, plan them on a calendar, and get weather-based outfit suggestions.',
      stack: ['React', 'React Router', 'Node.js', 'Express', 'Weather API'],
      live: 'https://wardrobe-j46j-vert.vercel.app',
      repoName: 'Virtual-Wardrobe-Web-App',
      repoUrl: gh('Virtual-Wardrobe-Web-App'),
      shots: [
        { caption: 'Home', file: 'screenshots/vestir-home.png' },
        { caption: 'Dashboard', file: 'screenshots/vestir-dashboard.png' },
        { caption: 'Add a piece', file: 'screenshots/vestir-add-piece.png' },
        { caption: 'Lookbook', file: 'screenshots/vestir-lookbook.png' },
      ],
    },
    {
      id: 'glamour-gallery',
      title: 'Glamour Gallery',
      kind: 'E-commerce store',
      description:
        'A beauty and fashion online store with category browsing, search, cart and checkout, user accounts, reviews, and order tracking. It includes an admin dashboard for products, orders, and users.',
      stack: ['HTML', 'CSS', 'PHP', 'MySQL'],
      live: 'https://ecommerce-website-green-three.vercel.app',
      repoName: 'ecommerce-website',
      repoUrl: gh('ecommerce-website'),
      shots: [
        { caption: 'Home', file: 'screenshots/glamour_gallery_home_hero.png' },
        { caption: 'Featured products', file: 'screenshots/glamour_gallery_featured_products.png' },
        { caption: 'Perfumes', file: 'screenshots/glamour_gallery_perfumes.png' },
        { caption: 'Inventory', file: 'screenshots/glamour_gallery_inventory.png' },
      ],
    },
  ]
).map((p) => ({
  ...p,
  shotUrls: p.shots.map((s) => ({ caption: s.caption, src: shot(p.repoName, s.file) })),
}))

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------
// Shown in this order in the About section (details read from your certificates).
export const certificates = [
  {
    title: '1 Million Prompters',
    detail: 'Dubai Future Foundation',
  },
  {
    title: 'Mobile App Development',
    detail: 'GIFT University · 2026',
  },
  {
    title: 'InnovateX Hackathon',
    detail: 'Brackets × GIFT University · 2024',
  },
  {
    title: 'NASA Space Apps Challenge',
    detail: 'Galactic Problem Solver · 2025',
  },
]

// ---------------------------------------------------------------------------
// Skills (the three big tiles in the About section)
// ---------------------------------------------------------------------------
export const skills = [
  { label: 'React', notes: ['React Native · Expo', 'React Router'] },
  { label: 'DB', notes: ['MySQL', 'MongoDB'] },
  { label: 'Node', notes: ['Express', 'PHP'] },
]
