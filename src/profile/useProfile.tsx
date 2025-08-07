import { useState } from "react";

export default function useProfile() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");

  const getFields = () => [name, title, email, tel, summary];

  return {
    name,
    setName,
    title,
    setTitle,
    email,
    setEmail,
    tel,
    setTel,
    location,
    setLocation,
    summary,
    setSummary,
    getFields,
  };
}
