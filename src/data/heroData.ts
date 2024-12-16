import type { HeroSectionData } from "@data/types";
import image1 from "@assets/images/hero-carusel/img-1.webp";
import image2 from "@assets/images/hero-carusel/img-2.webp";
import image3 from "@assets/images/hero-carusel/img-3.webp";
import image4 from "@assets/images/hero-carusel/img-4.webp";
import image5 from "@assets/images/hero-carusel/img-5.webp";
import image6 from "@assets/images/hero-carusel/img-6.webp";
import image7 from "@assets/images/hero-carusel/img-7.webp";
import image8 from "@assets/images/hero-carusel/img-8.webp";

export const heroData: HeroSectionData = {
  brandName: "D.meyer's",
  brandDescription: "מובילים במתן פתרונות מתקדמים לתעשיית הבניה",
  title: "הפתרונות שלנו לתעשיית הבניה",
  description:
    "החברה מציעה מגוון פתרונות החל משלב תכנון הפרוייקט ועד להשלמתו, בהתאם לצרכים הספציפיים של כל לקוח.<br/><br/> בין הפתרונות שמספקת החברה ניתן למצוא: ייעוץ איטום, ביצוע ציפוי רצפות תעשייתיות ודקורטיביות, אספקת לוחות פורצלן ושיש טבעי למגזר הפרטי וכן ריהוט בהתאמה אישית לפרויקטים ציבוריים.",
  button: {
    text: "תיאום פגישת ייעוץ",
    href: "#contact"
  },
  learnMore: {
    text: "הפרויקטים שלנו",
    href: "#projects"
  },
  images: [
    { img: image1, title: "ייעוץ איטום", description: "פתרונות איטום מתקדמים" },
    { img: image2, title: "ציפויי רצפה", description: "ציפויי רצפה תעשייתיים ודקורטיביים" },
    { img: image3, title: "חיפויי גרניט", description: "פתרונות חיפוי מתקדמים" },
    { img: image4, title: "נגרות אומן", description: "נגרות מותאמת אישית" },
    { img: image5, title: "ריהוט ציבורי", description: "ריהוט ציבורי מותאמת אישית" },
    { img: image6, title: "ריהוט פרטי", description: "ריהוט פרטי מותאמת אישית" },
    { img: image7, title: "ריהוט ציבורי", description: "ריהוט ציבורי מותאמת אישית" },
    { img: image8, title: "ריהוט פרטי", description: "ריהוט פרטי מותאמת אישית" }
  ]
};
