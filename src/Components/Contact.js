import React, { useState, useEffect } from 'react';
import './css/Contact.css';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import posthog from 'posthog-js';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔥 Track typing in inputs
  const handleTyping = (fieldName) => {
    posthog.capture('contact_typing', { field: fieldName });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // 🔥 Track submit click
    posthog.capture('contact_submit_attempt');

    const formData = new FormData(event.target);
    formData.append("access_key", "fe248b2b-8715-414f-95a7-b3a1bc35154b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // 🔥 Track success
        posthog.capture('contact_submit_success', {
          email: formData.get("email"),
        });

        Swal.fire({
          title: "Succès!",
          text: "Message envoyé avec succès!",
          icon: "success",
        });
        event.target.reset();
      } else {
        // 🔥 Track server-side failure
        posthog.capture('contact_submit_error', {
          reason: data.message || "Unknown error"
        });

        Swal.fire({
          title: "Erreur!",
          text: "Une erreur est survenue. Veuillez réessayer.",
          icon: "error",
        });
      }
    } catch (error) {
      // 🔥 Track network error
      posthog.capture('contact_submit_error', {
        reason: "Network error",
        detail: error.toString(),
      });

      Swal.fire({
        title: "Erreur!",
        text: "Impossible de contacter le serveur.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="Contact">
      <h1 data-aos="fade-up">Contact</h1>
      <form onSubmit={onSubmit} data-aos="fade-up">

        <label htmlFor="name" className="block text-sm font-medium text-white-900">
          Name
        </label>
        <input
          type="text"
          name="name"
          onFocus={() => handleTyping("name")}
          onChange={() => handleTyping("name")}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-white-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
          required
        />

        <label htmlFor="email" className="block text-sm font-medium text-white-900">
          Email
        </label>
        <input
          type="email"
          name="email"
          onFocus={() => handleTyping("email")}
          onChange={() => handleTyping("email")}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-white-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
          required
        />

        <label htmlFor="message" className="block text-sm font-medium text-white-900">
          Message
        </label>
        <textarea
          name="message"
          rows={3}
          onFocus={() => handleTyping("message")}
          onChange={() => handleTyping("message")}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-white-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
          required
        ></textarea>

        <button
          type="submit"
          className="rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
