import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.PUBLIC_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC;

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" dir="rtl">
      <div>
        <label className="text-text-secondary mb-2 block text-sm font-medium" htmlFor="name">
          שם מלא <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:border-border-focus focus:ring-ring w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
          placeholder="הכנס את שמך המלא"
        />
      </div>

      <input type="hidden" name="date" value={new Date().toISOString()} />
      <input type="hidden" name="time" value={new Date().toLocaleTimeString()} />

      <div>
        <label className="text-text-secondary mb-2 block text-sm font-medium" htmlFor="email">
          דוא״ל <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:border-border-focus focus:ring-ring w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
          placeholder="הכנס את כתובת הדוא״ל שלך"
        />
      </div>

      <div>
        <label className="text-text-secondary mb-2 block text-sm font-medium" htmlFor="phone">
          טלפון <span className="text-destructive">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:border-border-focus focus:ring-ring w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
          placeholder="הכנס את מספר הטלפון שלך"
        />
      </div>

      <div>
        <label className="text-text-secondary mb-2 block text-sm font-medium" htmlFor="subject">
          נושא
        </label>
        <select
          id="subject"
          name="subject"
          className="border-border bg-surface text-text-primary focus:border-border-focus focus:ring-ring w-full rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none">
          <option value="ייעוץ איטום">ייעוץ איטום</option>
          <option value="בדק בית">בדק בית</option>
          <option value="ייעוץ ציפויים">ייעוץ ציפויים</option>
          <option value="אחר">אחר</option>
        </select>
      </div>

      <div>
        <label className="text-text-secondary mb-2 block text-sm font-medium" htmlFor="message">
          הודעה <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="border-border bg-surface text-text-primary placeholder:text-text-tertiary focus:border-border-focus focus:ring-ring w-full resize-none rounded-lg border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
          placeholder="כתוב את הודעתך כאן..."></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-ring w-full rounded-lg px-6 py-3 font-medium transition-all focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>שולח...</span>
            </span>
          ) : (
            "שליחה"
          )}
        </button>
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div
          className="bg-success-light text-success-foreground mt-4 rounded-lg px-4 py-3 text-center text-sm font-medium"
          role="alert">
          ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
        </div>
      )}

      {status === "error" && (
        <div
          className="bg-destructive-light text-destructive-foreground mt-4 rounded-lg px-4 py-3 text-center text-sm font-medium"
          role="alert">
          אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
