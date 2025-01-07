//import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import React, { ChangeEvent, useState } from "react";
//import emailjs from "emailjs-com";
import "./Contact.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    country: "",
    industry: "",
    services: "",
    referredBy: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    let value: string | boolean;

    if ("checked" in target) {
      value = target.checked;
    } else {
      value = target.value;
    }

    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  //const handleChange = (
  //e: React.ChangeEvent<
  //  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //  >
  //) => {
  //const { name, value, type, checked } = e.target;
  //setFormData({
  //...formData,
  //[name]: type === "checkbox" ? checked : value,
  //});
  //};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  //  // emailjs
  //     .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Form submitted!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
   };

  return (
    <HomeLayout>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="Your Company's Name"
          required
          onChange={handleChange}
        />
        <select name="country" required onChange={handleChange}>
          <option value="">Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          {/* Add more countries as needed */}
        </select>
        <select name="industry" required onChange={handleChange}>
          <option value="">Your Industry</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          {/* Add more industries as needed */}
        </select>
        <select name="services" required onChange={handleChange}>
          <option value="">Services/Technologies interested in</option>
          <option value="AI">AI</option>
          <option value="Cloud">Cloud</option>
          <option value="Data">Data</option>
          {/* Add more services as needed */}
        </select>
        <select name="referredBy" onChange={handleChange}>
          <option value="">Referred by</option>
          <option value="Friend">Friend</option>
          <option value="Colleague">Colleague</option>
          {/* Add more options as needed */}
        </select>
        <textarea
          name="message"
          placeholder="Let us know how we can help you today"
          onChange={handleChange}
        ></textarea>
        <div>
          <input type="checkbox" name="agree" onChange={handleChange} />
          <label>
            I agree to receive marketing communication from LTIMindtree.
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </HomeLayout>
  );
};

export default ContactForm;
