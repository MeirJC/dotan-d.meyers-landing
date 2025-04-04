import type { ProjectSectionData } from "@data/types";
// consulting / waterproofing
import consulting1 from "@assets/images/consulting/image-1.webp";
import consulting2 from "@assets/images/consulting/image-2.webp";
import consulting3 from "@assets/images/consulting/image-3.webp";
import consulting4 from "@assets/images/consulting/image-4.webp";
import consulting5 from "@assets/images/consulting/image-5.webp";
// building inspection
import inspection1 from "@assets/images/consulting/image-1.webp"; // Placeholder - should be replaced with actual inspection images
import inspection2 from "@assets/images/consulting/image-2.webp"; // Placeholder - should be replaced with actual inspection images
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
  title: "הפרויקטים שלנו | דותן מאיר - יועץ איטום",
  description:
    "פרויקטים נבחרים בתחום ייעוץ האיטום ובדק בית. כל פרויקט מדגים את המומחיות והניסיון העשיר שלנו בתחומי האיטום ובדיקות מבנה.",
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
      projectPrice: "₪120,000",
      featured: true
    },
    {
      id: 2,
      title: "איטום גג בבניין מגורים",
      subTitle: "פתרון איטום מקיף לגג שטוח",
      description:
        "ייעוץ ופיקוח על ביצוע איטום מקיף לגג שטוח עם בעיות רטיבות חוזרות. כולל התקנת שיפועים חדשים ומערכת איטום ביטומנית משוכללת",
      tags: ["איטום גגות", "ייעוץ מקצועי", "פיקוח"],
      images: [
        {
          img: consulting3,
          title: "איטום גג",
          description: "לפני ביצוע האיטום"
        },
        {
          img: consulting4,
          title: "איטום גג",
          description: "במהלך עבודות האיטום"
        },
        {
          img: consulting5,
          title: "איטום גג",
          description: "לאחר השלמת עבודות האיטום"
        }
      ],
      location: "רמת גן",
      date: "2023",
      projectPrice: "₪45,000",
      featured: true
    },
    {
      id: 3,
      title: "בדק בית לדירה חדשה",
      subTitle: "ביקורת מקיפה לדירה לפני מסירה מקבלן",
      description:
        "ביצוע בדיקה מקיפה של דירה חדשה לפני קבלתה מהקבלן. איתור ליקויי בנייה והכנת דוח מפורט לצורך תיקון הליקויים",
      tags: ["בדק בית", "ביקורת איכות", "ליקויי בנייה"],
      images: [
        {
          img: inspection1,
          title: "בדק בית",
          description: "בדיקת איכות הבנייה"
        },
        {
          img: inspection2,
          title: "בדק בית",
          description: "בדיקת איטום בחדרים רטובים"
        }
      ],
      location: "תל אביב",
      date: "2024",
      projectPrice: "₪3,500",
      featured: false
    },
    {
      id: 4,
      title: "איטום מרתף עם בעיות רטיבות",
      subTitle: "פתרון לרטיבות כרונית במרתף",
      description:
        "ייעוץ וליווי פרויקט שיקום איטום במרתף עם בעיות רטיבות כרוניות. יישום שיטות איטום מתקדמות ופתרונות ניקוז לפתרון ארוך טווח",
      tags: ["איטום מרתפים", "טיפול ברטיבות", "שיקום מבנים"],
      images: [
        {
          img: consulting1,
          title: "איטום מרתף",
          description: "נזקי רטיבות במרתף"
        },
        {
          img: consulting2,
          title: "איטום מרתף",
          description: "ביצוע עבודות האיטום"
        },
        {
          img: consulting5,
          title: "איטום מרתף",
          description: "לאחר השלמת האיטום"
        }
      ],
      location: "הרצליה",
      date: "2023",
      projectPrice: "₪75,000",
      featured: true
    },
    {
      id: 5,
      title: "ייעוץ איטום למבנה ציבור",
      subTitle: "תכנון מערכות איטום למבנה חדש",
      description:
        "ייעוץ מקצועי לתכנון מערכות איטום במבנה ציבורי חדש, כולל פרטי איטום מיוחדים, מפרטים טכניים ופיקוח עליון במהלך הביצוע",
      tags: ["ייעוץ איטום", "מבני ציבור", "תכנון מערכות איטום"],
      images: [
        {
          img: consulting3,
          title: "ייעוץ איטום",
          description: "תכניות איטום למבנה ציבור"
        },
        {
          img: consulting4,
          title: "ייעוץ איטום",
          description: "ביקור באתר במהלך הביצוע"
        }
      ],
      location: "חיפה",
      date: "2023",
      projectPrice: "₪38,000",
      featured: false
    }
  ]
};
