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
    // log form data
    console.log(formRef.current);
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
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-gray-900 p-6 shadow"
      dir="rtl">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300" htmlFor="name">
          שם מלא *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* hidden field with date and time */}
      <input type="hidden" name="date" value={new Date().toISOString()} />
      <input type="hidden" name="time" value={new Date().toLocaleTimeString()} />
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300" htmlFor="email">
          דוא״ל *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300" htmlFor="phone">
          טלפון *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300" htmlFor="subject">
          נושא
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="ייעוץ איטום">ייעוץ איטום</option>
          <option value="בדק בית">בדק בית</option>
          <option value="ייעוץ ציפויים">ייעוץ ציפויים</option>
          <option value="אחר">אחר</option>
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-300" htmlFor="message">
          הודעה *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}>
          {loading ? "שולח..." : "שליחה"}
        </button>
      </div>
      {status && (
        <div
          className={`mt-2 rounded-md px-4 py-2 text-center ${
            status.includes("בהצלחה") ? "bg-green-600 text-white" : "bg-red-500 text-white"
          }`}>
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
