import type { HeroSectionData } from "@data/types";
import image2 from "@assets/images/hero-carusel/img-2.webp";
import image3 from "@assets/images/hero-carusel/img-3.webp";
import image7 from "@assets/images/hero-carusel/img-7.webp";
import image8 from "@assets/images/hero-carusel/img-8.webp";

export const heroData: HeroSectionData = {
  brandName: "D.Meyer's",
  brandDescription: "מומחים לבדק בית מבנים, יועצי איטום ואפיון ציפויים לתעשייה",
  // title: "בדק בית ושירותי הנדסה",
  description:
    "D.Meyer's היא מהחברות המובילות בישראל בתחום בדק הבית, ייעוץ איטום ואפיון ציפויים לתעשייה. אנו מספקים שירותי בדק בית מקצועיים לדירות ובתים מקבלן או יד שניה, מבנים משותפים, מבני תעשיה, מבנים ציבוריים ופיקוח עליון על העבודה.<br/><br/> המומחים שלנו מפיקים חוות דעת מקצועיות המפרטות ליקויים שנמצאו, בגיבוי התקן הישראלי או על פי כללי המקצוע, כולל צילום הליקויים והערכה כספית לתיקונם. חוות הדעת שלנו קבילות בבתי המשפט, ואנו מעניקים ליווי מקצועי גם לאחר השלמת הבדיקה.",
  button: {
    text: "תיאום פגישת ייעוץ",
    href: "/contact"
  },
  learnMore: {
    text: "הפרויקטים שלנו",
    href: "/projects"
  },
  images: [
    { img: image2, title: "איטום גגות", description: "מערכות איטום מתקדמות לגגות" },
    { img: image3, title: "בדק בית", description: "בדיקות מקיפות לאיתור ליקויי בנייה" },
    { img: image7, title: "ייעוץ ציפויים", description: "פתרונות ציפוי מתקדמים" },
    { img: image8, title: "ייעוץ ציפויים", description: "פתרונות ציפוי מתקדמים" }
  ]
};
