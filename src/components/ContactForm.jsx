import React, { useRef, useState } from "react";
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
          setStatus("ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.");
          formRef.current.reset();
        },
        (error) => {
          setStatus("אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" dir="rtl">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="name">
          שם מלא *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="הכנס את שמך המלא"
        />
      </div>
      <input type="hidden" name="date" value={new Date().toISOString()} />
      <input type="hidden" name="time" value={new Date().toLocaleTimeString()} />
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="email">
          דוא״ל *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="הכנס את כתובת הדוא״ל שלך"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="phone">
          טלפון *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="הכנס את מספר הטלפון שלך"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="subject">
          נושא
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option value="ייעוץ איטום">ייעוץ איטום</option>
          <option value="בדק בית">בדק בית</option>
          <option value="ייעוץ ציפויים">ייעוץ ציפויים</option>
          <option value="אחר">אחר</option>
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="message">
          הודעה *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-white transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="כתוב את הודעתך כאן..."></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24">
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
              שולח...
            </span>
          ) : (
            "שליחה"
          )}
        </button>
      </div>
      {status && (
        <div
          className={`mt-4 rounded-lg px-4 py-3 text-center text-sm font-medium ${
            status.includes("בהצלחה")
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}>
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
