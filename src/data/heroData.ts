import type { HeroSectionData } from "@data/types";
import image1 from "@assets/images/hero-carusel/img-1.webp";
import image2 from "@assets/images/hero-carusel/img-2.webp";
import image3 from "@assets/images/hero-carusel/img-3.webp";
import image4 from "@assets/images/hero-carusel/img-4.webp";
import image5 from "@assets/images/hero-carusel/img-5.webp";

export const heroData: HeroSectionData = {
  brandName: "D.Meyer's",
  brandDescription: "דותן מאיר - יועץ איטום מקצועי ומומחה לבדק בית",
  title: "שירותים מקצועיים באיטום ובדק בית",
  description:
    "דותן מאיר מספק שירותי ייעוץ איטום מקצועיים ובדק בית, תוך שימוש בטכנולוגיות מתקדמות ושיטות מוכחות.<br/><br/> השירותים כוללים: ייעוץ איטום מקצועי, תכנון מערכות איטום, פיקוח על פרויקטים, בדיקות בדק בית מקיפות, וייעוץ ציפויים.",
  button: {
    text: "תיאום פגישת ייעוץ",
    href: "/contact"
  },
  learnMore: {
    text: "הפרויקטים שלנו",
    href: "/projects"
  },
  images: [
    { img: image1, title: "ייעוץ איטום", description: "פתרונות איטום מתקדמים" },
    { img: image2, title: "איטום גגות", description: "מערכות איטום מתקדמות לגגות" },
    { img: image3, title: "בדק בית", description: "בדיקות מקיפות לאיתור ליקויי בנייה" },
    { img: image4, title: "ייעוץ מקצועי", description: "ליווי מקצועי בפרויקטי איטום" },
    { img: image5, title: "ייעוץ ציפויים", description: "פתרונות ציפוי מתקדמים" }
  ]
};
