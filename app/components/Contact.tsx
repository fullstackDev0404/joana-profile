"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const mailtoLink = `mailto:joanak_dev@outlook.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id = 'contact'>
        <h2 className="section-title">Contact</h2>

        <div className="contact-wrapper">
            {/* LEFT INFO */}
            <div className="contact-info-card">
                <div className="info-item">
                        <div className="icon-box">
                        <MapPin size={20} />
                        </div>
                        <div>
                        <h4>Address</h4>
                        <p>Turku, Finland</p>
                    </div>
                </div>

                {/* <div className="info-item">
                    <div className="icon-box">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h4>Call Us</h4>
                        <p>+1 123 456 7890</p>
                    </div>
                </div> */}

                <div className="info-item">
                    <div className="icon-box">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4>Email Us</h4>
                        <p>joanak_dev@outlook.com</p>
                    </div>
                </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-card">

                <div className="form-row">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Your Email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Subject"
                        onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                        }
                    />
                    {errors.subject && <span className="error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                    <textarea
                        placeholder="Message"
                        onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                        }
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <div className="button-wrapper">
                    <button type="button" onClick={handleSubmit}>
                        Send Message
                    </button>
                </div>

            </div>
        </div>
    </section>
  );
}