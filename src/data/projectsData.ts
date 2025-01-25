import type { ProjectSectionData } from "@data/types";
// consulting
import consulting1 from "@assets/images/consulting/image-1.webp";
import consulting2 from "@assets/images/consulting/image-2.webp";
import consulting3 from "@assets/images/consulting/image-3.webp";
import consulting4 from "@assets/images/consulting/image-4.webp";
import consulting5 from "@assets/images/consulting/image-5.webp";
// carpentery
import carpentery1 from "@assets/images/carpentery/image-1.webp";
import carpentery2 from "@assets/images/carpentery/image-2.webp";
import carpentery3 from "@assets/images/carpentery/image-3.webp";
import carpentery4 from "@assets/images/carpentery/image-4.webp";
import carpentery5 from "@assets/images/carpentery/image-5.webp";
import carpentery6 from "@assets/images/carpentery/image-6.webp";
import carpentery7 from "@assets/images/carpentery/image-7.webp";
// surfaces
import surface1 from "@assets/images/kitchen-surfaces/image-1.webp";
import surface2 from "@assets/images/kitchen-surfaces/image-2.webp";
import surface3 from "@assets/images/kitchen-surfaces/image-3.webp";
import surface4 from "@assets/images/kitchen-surfaces/image-4.webp";
import surface5 from "@assets/images/kitchen-surfaces/image-5.webp";
import surface6 from "@assets/images/kitchen-surfaces/image-6.webp";
import surface7 from "@assets/images/kitchen-surfaces/image-7.webp";
import surface8 from "@assets/images/kitchen-surfaces/image-8.webp";
import surface9 from "@assets/images/kitchen-surfaces/image-9.webp";
import surface10 from "@assets/images/kitchen-surfaces/image-10.webp";
import surface11 from "@assets/images/kitchen-surfaces/image-11.webp";
// floor coating
import floorCoating1 from "@assets/images/floor-coatings/image-1.webp";
import floorCoating2 from "@assets/images/floor-coatings/image-2.webp";
import floorCoating3 from "@assets/images/floor-coatings/image-3.webp";
import floorCoating4 from "@assets/images/floor-coatings/image-4.webp";
import floorCoating5 from "@assets/images/floor-coatings/image-5.webp";
import floorCoating6 from "@assets/images/floor-coatings/image-6.webp";
import floorCoating7 from "@assets/images/floor-coatings/image-7.webp";

export const projectsData: ProjectSectionData = {
  title: "הפרויקטים שלנו | די מאיירס - דותן מאיר",
  description:
    "אנו גאים להציג מבחר מהפרויקטים המובילים שביצענו בתחומי ייעוץ האיטום, ציפויי רצפה, חיפויי קירות ונגרות אומן. כל פרויקט מדגים את המומחיות והניסיון העשיר שלנו בתחומי האיטום, הציפוי והבנייה.",
  cards: [
    {
      id: 1,
      title: "מפעל למחזור נוזלים כימיים",
      subTitle: "ציפוי רצפות תעשייתיות במערכת multilayer MMA",
      description:
        "התקנת מערכת ציפוי MMA + PU Cement עם עמידות בטמפרטורות קיצון ובחומרי ניקוי אגרסיביים",
      tags: ["ציפוי רצפה", "MMA"],
      images: [
        {
          img: floorCoating1,
          title: "ציפויי רצפת חנות",
          description: "מעדניית בשר מערכת מולטירלייר"
        },
        {
          img: floorCoating2,
          title: "ציפויי רצפת מפעל מחזור",
          description: "ציפויי רמפת עלית משאיות מערכת צמנט פוליאוריטני"
        },
        {
          img: floorCoating3,
          title: "ציפויי רצפת מפעל",
          description: "ציפויי רצפת מעבדות מערכת מולטילייר"
        },
        {
          img: floorCoating4,
          title: "ציפויי רצפת מפעל מחזור",
          description: "ציפויי רצפת מפעל מחזור"
        },
        {
          img: floorCoating5,
          title: "ציפויי רצפת מפעל מחזור",
          description: "ציפויי רצפת מפעל מחזור מערכת מולטילייר שחורה"
        },
        {
          img: floorCoating6,
          title: "ציפויי רצפת מפעל",
          description: "ציפויי רצפת מפעל מולטילייר שחורה"
        },
        {
          img: floorCoating7,
          title: "ציפויי רצפת מעבדות",
          description: "ציפויי במערכת מולטילייר אנטי סטטי"
        }
      ],
      location: "מפעל למחזור נוזלים כימיים",
      date: "2023",
      projectPrice: "₪300,000"
    },
    {
      id: 2,
      title: "מפעל כרמוכרום כרמיאל",
      subTitle: "פתרונות איטום מתקדמים",
      description:
        "איטום מקיף של בורות האיסוף וקווי הייצור כולל יישום מערכות איטום היברידיות מתקדמות ושיקום בטון אגרסיבי",
      tags: ["איטום", "שיקום בטון"],
      images: [
        {
          img: consulting1,
          title: "מפעל למחזור נוזלים",
          description: "איטום בור ספיגת נוזלים"
        },
        {
          img: consulting2,
          title: "מפעל למחזור נוזלים",
          description: "איטום תעלת הולכת נוזלים"
        },
        {
          img: consulting3,
          title: "מפעל למחזור נוזלים",
          description: "איטום תעלת הולכת נוזלים"
        },
        {
          img: consulting4,
          title: "מפעל ציפויים",
          description: "איטום וציפויי בור איסוף"
        },
        {
          img: consulting5,
          title: "מפעל ציפויים",
          description: "איטום וציפויי בור איסוף"
        }
      ],
      location: "כרמיאל",
      date: "2024",
      projectPrice: "₪120,000"
    },
    {
      id: 3,
      title: "נגרות אומן - סניף בנק",
      subTitle: "ביצוע מגוון פרטי נגרות",
      description:
        "ייצור ריהוט מותאם לדרישות משרד הבריאות, כולל פתרונות אחסון חכמים וריהוט מותאם לצרכים מיוחדים",
      tags: ["נגרות אומן", "ריהוט מותאם"],
      images: [
        {
          img: carpentery1,
          title: "נגרות",
          description: "דלפקי שירות מעוצבים"
        },
        {
          img: carpentery2,
          title: "נגרות",
          description: "פתרונות אחסון יעודיים"
        },
        {
          img: carpentery3,
          title: "נגרות",
          description: "חיפויי קיר דקורטיביים"
        },
        {
          img: carpentery4,
          title: "נגרות",
          description: "גימורים מיוחדים"
        },
        {
          img: carpentery5,
          title: "נגרות",
          description: "גימורים מיוחדים"
        },
        {
          img: carpentery6,
          title: "נגרות",
          description: "גימורים מיוחדים"
        },
        {
          img: carpentery7,
          title: "נגרות",
          description: "גימורים מיוחדים"
        }
      ],
      location: "סניף בנק",
      date: "2023",
      projectPrice: "₪1,900,000"
    },
    {
      id: 4,
      title: "אספקת משטחי גרניט פורצלן ושיש טבעי",
      subTitle: "יבוא ומכירה של לוחות גרניט פורצלן במגוון גימורים ועוביים",
      description:
        'אספקת לוחות באיכות גבוהה לפרויקטים מובילים, כולל מגוון רחב של גימורים, מרקמים וגדלים. התמחות מיוחדת בפורצלן בעובי 20 מ"מ לריצוף חוץ ומשטחי עבודה.',
      tags: ["גרניט פורצלן", "שיש טבעי", "יבוא ישיר"],
      images: [
        {
          img: surface1,
          title: "לוח אבן קוורצית",
          description: "לומיקס אייסברג"
        },
        {
          img: surface2,
          title: "לוח אבן טבעי",
          description: "קוליאן גריי"
        },
        {
          img: surface3,
          title: "לוח אבן טבעי",
          description: "פטגוניה קפוצ'ינו"
        },
        {
          img: surface4,
          title: "לוח אבן טבעי",
          description: "טיטניום גולד"
        },
        {
          img: surface5,
          title: "לוח אבן טבעי",
          description: "רומא אימפריאל"
        },
        {
          img: surface6,
          title: "לוח אבן טבעי",
          description: "סהרה פאנטזי"
        },
        {
          img: surface7,
          title: "לוח קוורצית",
          description: "לומיקס"
        },
        {
          img: surface8,
          title: "לוח אבן טבעי",
          description: "אושין בלו"
        },
        {
          img: surface9,
          title: "לוח אבן טבעי",
          description: "מונבלאן"
        },
        {
          img: surface10,
          title: "לוח רניט פורצלן",
          description: "מאגמה גולד"
        },
        {
          img: surface11,
          title: "לוח אבן טבעי",
          description: "צ'אנטילי"
        }
      ],
      location: "מגוון פרויקטים ארצי",
      date: "2022",
      projectPrice: "₪4,500,000"
    }
  ]
};
