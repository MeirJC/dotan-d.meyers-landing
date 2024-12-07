import type { ProjectSectionData } from "@data/types";

import project1 from "@assets/images/temp/project-1.webp";
import project2 from "@assets/images/temp/project-2.webp";
import project3 from "@assets/images/temp/project-3.webp";

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
          img: project1,
          description: "ביצוע ציפוי רצפה מיוחד MMA",
          title: "מערכת ציפוי עמידה לכימיקלים"
        },
        {
          img: project2,
          description: "תהליך היישום המורכב",
          title: "שלבי העבודה"
        },
        {
          img: project3,
          description: "התוצאה הסופית המרשימה",
          title: "לאחר השלמת הפרויקט"
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
          img: project2,
          description: "איטום מתקדם של בורות האיסוף",
          title: "מערכות איטום היברידיות"
        },
        {
          img: project3,
          description: "שיקום בטונים בסביבה קורוזיבית",
          title: "טיפול בתשתית"
        },
        {
          img: project1,
          description: "יישום שכבת הגנה סופית",
          title: "השלמת העבודה"
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
          img: project3,
          description: "דלפקי שירות מעוצבים",
          title: "ריהוט מותאם אישית"
        },
        {
          img: project1,
          description: "פתרונות אחסון יעודיים",
          title: "מערכות אחסון"
        },
        {
          img: project2,
          description: "חיפויי קיר דקורטיביים",
          title: "גימורים מיוחדים"
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
          img: project1,
          description: "מגוון לוחות פורצלן בגימורים שונים",
          title: "תצוגת מוצרים"
        },
        {
          img: project3,
          description: "משטחי שיש טבעי ביבוא אישי",
          title: "קולקציית שיש"
        },
        {
          img: project2,
          description: "יישום בפרויקט יוקרה",
          title: "פרויקט לדוגמה"
        }
      ],
      location: "מגוון פרויקטים ארצי",
      date: "2022",
      projectPrice: "₪4,500,000"
    }
  ]
};
