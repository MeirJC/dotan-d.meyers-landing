import type { ProjectSectionData } from "@data/types";
// מפעל כרמוכרום כרמיאל
import consulting1 from "@assets/images/carmochrome/image-1.webp";
import consulting2 from "@assets/images/carmochrome/image-2.webp";
import consulting3 from "@assets/images/carmochrome/image-3.webp";
import consulting4 from "@assets/images/carmochrome/image-4.webp";
import consulting5 from "@assets/images/carmochrome/image-5.webp";
// ייעוץ איטום - מבני אגודה בית יצחק
import itzhak1 from "@assets/images/beit-itzhak/image-1.webp";
import itzhak2 from "@assets/images/beit-itzhak/image-2.webp";
import itzhak3 from "@assets/images/beit-itzhak/image-3.webp";
import itzhak4 from "@assets/images/beit-itzhak/image-4.webp";
import itzhak5 from "@assets/images/beit-itzhak/image-5.webp";
import itzhak6 from "@assets/images/beit-itzhak/image-6.webp";
import itzhak7 from "@assets/images/beit-itzhak/image-7.webp";
import itzhak8 from "@assets/images/beit-itzhak/image-8.webp";
import itzhak9 from "@assets/images/beit-itzhak/image-9.webp";
import itzhak10 from "@assets/images/beit-itzhak/image-10.webp";
// מפעל י.מ.א"
import yma1 from "@assets/images/yma/image-1.webp";
import yma2 from "@assets/images/yma/image-2.webp";
import yma3 from "@assets/images/yma/image-3.webp";
import yma4 from "@assets/images/yma/image-4.webp";
import yma5 from "@assets/images/yma/image-5.webp";
import yma6 from "@assets/images/yma/image-6.webp";
import yma7 from "@assets/images/yma/image-7.webp";
// מפעל למחזור נוזלים
import recycle1 from "@assets/images/liq-recycle/image-1.webp";
import recycle2 from "@assets/images/liq-recycle/image-2.webp";
import recycle3 from "@assets/images/liq-recycle/image-3.webp";
import recycle4 from "@assets/images/liq-recycle/image-4.webp";
import recycle5 from "@assets/images/liq-recycle/image-5.webp";
// בריכת אפק
import afek1 from "@assets/images/afek/image-1.webp";
import afek2 from "@assets/images/afek/image-2.webp";
import afek3 from "@assets/images/afek/image-3.webp";
import afek4 from "@assets/images/afek/image-4.webp";
import afek5 from "@assets/images/afek/image-5.webp";

export const projectsData: ProjectSectionData = {
  title: "הפרויקטים שלנו",
  description: "פרויקטים נבחרים בתחום ייעוץ האיטום, בדק בית ואפיון ציפויים לתעשיה.",
  cards: [
    {
      id: 1,
      title: "מפעל כרמוכרום כרמיאל",
      subTitle: "פתרונות איטום מתקדמים",
      description:
        "איטום מקיף של בורות האיסוף וקווי הייצור כולל יישום מערכות איטום היברידיות מתקדמות ושיקום בטון אגרסיבי",
      tags: ["איטום", "שיקום בטון"],
      images: [
        {
          img: consulting1,
          title: "מפעל כרמוכרום כרמיאל"
        },
        {
          img: consulting2,
          title: "מפעל כרמוכרום כרמיאל"
        },
        {
          img: consulting3,
          title: "מפעל כרמוכרום כרמיאל"
        },
        {
          img: consulting4,
          title: "מפעל כרמוכרום כרמיאל"
        },
        {
          img: consulting5,
          title: "מפעל כרמוכרום כרמיאל"
        }
      ],
      location: "כרמיאל",
      date: "2024"
    },
    {
      id: 2,
      title: "ייעוץ איטום - מבני אגודה בית יצחק",
      subTitle: "פתרון איטום מקיף לגגות המבנה",
      description:
        "ייעוץ ופיקוח על ביצוע איטום מקיף לגגות עם בעיות רטיבות חוזרות. כולל התקנת שיפועים חדשים ומערכות איטום מתקדמות",
      tags: ["איטום גגות", "ייעוץ מקצועי", "פיקוח"],
      images: [
        {
          img: itzhak1,
          title: "איטום גג"
        },
        {
          img: itzhak2,
          title: "איטום גג"
        },
        {
          img: itzhak3,
          title: "איטום גג"
        },
        {
          img: itzhak4,
          title: "איטום גג"
        },
        {
          img: itzhak5,
          title: "איטום גג"
        },
        {
          img: itzhak6,
          title: "איטום גג"
        },
        {
          img: itzhak7,
          title: "איטום גג"
        },
        {
          img: itzhak8,
          title: "איטום גג"
        },
        {
          img: itzhak9,
          title: "איטום גג"
        },
        {
          img: itzhak10,
          title: "איטום גג"
        }
      ],
      location: "בית יצחק",
      date: "2025"
    },
    {
      id: 3,
      title: "מפעל י.מ.א",
      subTitle: "אפיון מערכת איטום לגג אסכורית כהכנה למערכות סולאריות",
      description:
        "ייעוץ מקצועי ופיקוח על ביצוע איטום גג אסכורית במפעל י.מ.א כהכנה להתקנת מערכות סולאריות. כולל אפיון מערכת האיטום, הכנת מפרטים טכניים ופיקוח על היישום להבטחת עמידות לאורך זמן",
      tags: ["איטום גגות", "ייעוץ מקצועי", "פיקוח"],
      images: [
        {
          img: yma1,
          title: "בדק בית"
        },
        {
          img: yma2,
          title: "בדק בית"
        },
        {
          img: yma3,
          title: "בדק בית"
        },
        {
          img: yma4,
          title: "בדק בית"
        },
        {
          img: yma5,
          title: "בדק בית"
        },
        {
          img: yma6,
          title: "בדק בית"
        },
        {
          img: yma7,
          title: "בדק בית"
        }
      ],
      location: "עין המפרץ",
      date: "2025"
    },
    {
      id: 4,
      title: "מפעל למחזור נוזלים",
      subTitle: "אפיון ציפויים לרצפות המפעל",
      description:
        "אפיון וייעוץ מקצועי לבחירת ציפויי רצפה עמידים לכימיקלים במפעל למחזור נוזלים. כולל בדיקות מעבדה, הכנת מפרטים טכניים ופיקוח על היישום להבטחת עמידות לאורך זמן",
      tags: ["איטום בורות", "טיפול בבטון", "אפיון ציפויים"],
      images: [
        {
          img: recycle1,
          title: "ציפוי רצפה תעשייתי עמיד לכימיקלים"
        },
        {
          img: recycle2,
          title: "בדיקת עמידות ציפוי במפעל מחזור"
        },
        {
          img: recycle3,
          title: "יישום ציפוי אפוקסי מיוחד לרצפת מפעל"
        },
        {
          img: recycle4,
          title: "פיקוח על עבודות ציפוי במפעל מחזור נוזלים"
        },
        {
          img: recycle5,
          title: "בדיקת איכות ציפוי רצפה תעשייתי"
        }
      ],
      location: "כרמיאל",
      date: "2023"
    },
    {
      id: 5,
      title: "בריכת אפק",
      subTitle: "אפיון איטום לתעלות הגלישה בגג הבריכה",
      description:
        "ייעוץ מקצועי לתכנון מערכות איטום לתעלות הגלישה בגג בריכת השחייה, כולל פתרונות מותאמים לתנאי לחות גבוהים, בחירת חומרים עמידים למים וכלור, והכנת מפרטים טכניים מפורטים לביצוע. הפרויקט כלל גם פיקוח עליון במהלך העבודות להבטחת יישום נכון של מערכות האיטום",
      tags: ["ייעוץ איטום", "מבני ציבור", "תכנון מערכות איטום"],
      images: [
        {
          img: afek1,
          title: "ייעוץ איטום"
        },
        {
          img: afek2,
          title: "ייעוץ איטום"
        },
        {
          img: afek3,
          title: "ייעוץ איטום"
        },
        {
          img: afek4,
          title: "ייעוץ איטום"
        },
        {
          img: afek5,
          title: "ייעוץ איטום"
        }
      ],
      location: "קריית ביאליק",
      date: "2024"
    }
  ]
};
