// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import FindYourPlaceLogo from "./images/findyourplaceLogo.svg";
import EcoTradeLogo from "./images/ecotradeLogo.svg"

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "hizkia-natanael";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Mahasiswa semester 6 Teknik Informatika dengan pengalaman dalam pengembangan web menggunakan stack MERN (MongoDB, Express.js, React.js, Node.js). Memiliki kemampuan pemrograman yang solid dalam JavaScript dan kerangka kerja terkait pengembangan web modern. Berkomitmen dalam pengembangan diri dan memiliki keahlian dalam kerja sama tim serta komunikasi yang efektif. Mencari kesempatan berkarir sebagai Full Stack Developer untuk berkontribusi dalam mengembangkan solusi teknologi yang inovatif.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },  
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "ReactJS",
  },
  {
    id: 15,
    skill: <Icon icon="simple-icons:nodedotjs" className="display-4" />,
    name: "NodeJS",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "ExpressJS",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:laravel" className="display-4" />,
    name: "Laravel",
  },
  {
    id: 13,
    skill: <Icon icon="simple-icons:tailwindcss" className="display-4" />,
    name: "Tailwind CSS",
  },
  {
    id: 14,
    skill: <Icon icon="simple-icons:chakraui" className="display-4" />,
    name: "Chakra UI",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:figma" className="display-4" />,
    name: "Figma",
  },
  {
    id: 12,
    skill: <Icon icon="simple-icons:canva" className="display-4" />,
    name: "Canva",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1HVTK74nXn0x1AfSR62KrKKBvqogAojcv/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["FindYourPlace", "EcoTrade"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "FindYourPlace",
    image: FindYourPlaceLogo,
  },
  {
    name: "EcoTrade",
    image: EcoTradeLogo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xgvoyrgl";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
