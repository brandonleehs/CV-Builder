import { useState } from "react";
import Photo from "./Photo";
export default function Profile() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const inputStyle =
    "rounded-md border-0 bg-gray-100 px-3 py-2 focus:outline-2 focus:outline-gray-400";
  return (
    <div className="bg-gray-50 min-[600px]:p-6">
      <section className="m-auto grid max-w-[600px] gap-2 rounded-md bg-white p-4 text-[0.875rem] shadow-md md:p-6 lg:max-w-[1000px] lg:grid-cols-2 lg:*:not-first:col-start-2 [&_label]:text-sm">
        <Photo />
        <div className="grid gap-2">
          <label
            className="after:ml-1 after:text-orange-500 after:content-['*']"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder="Enter your full name"
            className={inputStyle}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label
            className="after:ml-1 after:text-orange-500 after:content-['*']"
            htmlFor="title"
          >
            Professional Title
          </label>
          <input
            required
            type="text"
            id="title"
            placeholder="e.g. Frontend Developer"
            className={inputStyle}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="email"
            className="after:ml-1 after:text-orange-500 after:content-['*']"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="your@email.com"
            className={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="tel"
            className="after:ml-1 after:text-orange-500 after:content-['*']"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="tel"
            required
            placeholder="+1 (555) 000-0000"
            className={inputStyle}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="City, Country"
            className={inputStyle}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="summary"
            className="after:ml-1 after:text-orange-500 after:content-['*']"
          >
            Professional Summary
          </label>
          <div>
            <textarea
              required
              name="summary"
              id="summary"
              placeholder="Write a short summary about yourself..."
              className="w-full rounded-sm bg-gray-100 p-2 outline-0 focus:outline-2 focus:outline-gray-400"
              rows={4}
              maxLength={500}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
            <p className="text-end text-xs text-gray-400">
              {summary.length}/500
            </p>
          </div>
        </div>
        <button className="cursor-pointer rounded-md bg-orange-600 p-2 text-white transition hover:bg-orange-700 active:bg-orange-800">
          Preview CV
        </button>
        <input
          value="Continue"
          type="submit"
          className="cursor-pointer rounded-md p-2 text-orange-600 outline-1 outline-orange-600 transition hover:bg-orange-600 hover:text-white active:bg-orange-700 active:text-white"
        />
      </section>
    </div>
  );
}
