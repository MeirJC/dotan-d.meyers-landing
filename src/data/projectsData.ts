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
  title: "הפרויקטים שלנו",
  description:
    "אנו גאים להציג מבחר מהפרויקטים המובילים שביצענו. כל פרויקט מדגים את המומחיות והניסיון העשיר שלנו בתחומי האיטום, הציפוי והבנייה.",
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
          title: "נגרות - תמונה 1",
          description: "קטגוריה: דלפקי שירות מעוצבים"
        },
        {
          img: carpentery2,
          title: "נגרות - תמונה 2",
          description: "קטגוריה: פתרונות אחסון יעודיים"
        },
        {
          img: carpentery3,
          title: "נגרות - תמונה 3",
          description: "קטגוריה: חיפויי קיר דקורטיביים"
        },
        {
          img: carpentery4,
          title: "נגרות - תמונה 4",
          description: "קטגוריה: גימורים מיוחדים"
        },
        {
          img: carpentery5,
          title: "נגרות - תמונה 5",
          description: "קטגוריה: גימורים מיוחדים"
        },
        {
          img: carpentery6,
          title: "נגרות - תמונה 6",
          description: "קטגוריה: גימורים מיוחדים"
        },
        {
          img: carpentery7,
          title: "נגרות - תמונה 7",
          description: "קטגוריה: גימורים מיוחדים"
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
          title: "משטחי מטבח - תמונה 1",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface2,
          title: "משטחי מטבח - תמונה 2",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface3,
          title: "משטחי מטבח - תמונה 3",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface4,
          title: "משטחי מטבח - תמונה 4",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface5,
          title: "משטחי מטבח - תמונה 5",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface6,
          title: "משטחי מטבח - תמונה 6",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface7,
          title: "משטחי מטבח - תמונה 7",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface8,
          title: "משטחי מטבח - תמונה 8",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface9,
          title: "משטחי מטבח - תמונה 9",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface10,
          title: "משטחי מטבח - תמונה 10",
          description: "קטגוריה: משטחי מטבח"
        },
        {
          img: surface11,
          title: "משטחי מטבח - תמונה 11",
          description: "קטגוריה: משטחי מטבח"
        }
      ],
      location: "מגוון פרויקטים ארצי",
      date: "2022",
      projectPrice: "₪4,500,000"
    }
  ]
};
