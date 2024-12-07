import img1 from "@assets/images/temp/img-1.webp"; // Keep temp images until real ones provided
import img2 from "@assets/images/temp/img-2.webp";
import img3 from "@assets/images/temp/img-3.webp";
import img4 from "@assets/images/temp/img-4.webp";
import type { HeroSectionData } from "@data/types";

export const heroData: HeroSectionData = {
  brandName: "D.meyer's",
  brandDescription: "מובילים בפתרונות מתקדמים לתעשיית הבניה",
  title: "פתרונות מתקדמים לתעשיית הבניה",
  description:
    "החברה מציעה מגוון פתרונות, החל משלב תכנון המבנה ועד להשלמתו, בהתאם לצרכים הספציפיים של כל לקוח. בין הפתרונות שמספקת החברה ניתן למצוא: ייעוץ בתחום האיטום, ביצוע ציפוי רצפות תעשייתיות ודקורטיביות, אספקת לוחות פורצלן ושיש טבעי וכן אספקת ריהוט לפרויקטים ציבוריים.",
  button: {
    text: "תיאום פגישת ייעוץ",
    href: "#contact"
  },
  learnMore: {
    text: "הפרויקטים שלנו",
    href: "#projects"
  },
  images: [
    { img: img1, title: "ייעוץ איטום", description: "פתרונות איטום מתקדמים" },
    { img: img2, title: "ציפויי רצפה", description: "ציפויי רצפה תעשייתיים ודקורטיביים" },
    { img: img3, title: "חיפויי גרניט", description: "פתרונות חיפוי מתקדמים" },
    { img: img4, title: "נגרות אומן", description: "נגרות מותאמת אישית" }
  ]
};
