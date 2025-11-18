"use client";
import { useState } from "react";
import { addJob } from "../api";

export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await addJob(job);
    alert("Job posted!");
  };

  return (
    <form onSubmit={submit} style={{ padding: 20 }}>
      <h1>Post a Job</h1>

      <input placeholder="Job Title" onChange={(e) => setJob({ ...job, title: e.target.value })} />
      <input placeholder="Company" onChange={(e) => setJob({ ...job, company: e.target.value })} />
      <input placeholder="Location" onChange={(e) => setJob({ ...job, location: e.target.value })} />
      <input placeholder="Salary" onChange={(e) => setJob({ ...job, salary: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setJob({ ...job, description: e.target.value })} />
      
      <button type="submit">Submit</button>
    </form>
  );
}
