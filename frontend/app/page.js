"use client";
import { useEffect, useState } from "react";
import { getJobs } from "./api";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Job Portal</h1>
      <a href="/post-job">Post a Job</a>

      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <a href={`/jobs/${job._id}`}>
              {job.title} - {job.company}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-[5rem]">
        <h3>Latest Jobs</h3>
        <div className="flex">
          <div className="w-4/5 p-4 border border-gray-300 rounded-lg shadow-md flex flex-wrap">
            <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md ">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full object-cover mb-4 rounded-md" />
            <div>
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
            <div>
              <p><span>Chennai</span> <span>5hr</span></p>
              <div className="flex"><span className="bg-black text-white rounded-lg p-3">Python</span> <span className="bg-black text-white rounded-lg p-3">aws</span></div>
            </div>
            </div>
             <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md ">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
             <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
             <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md mr-4">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
             <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md mr-4">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
             <div className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-md mr-4">
            <img src="/frontend-developer.jpg" alt="Frontend Developer" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
            <p className="text-gray-600 mb-4">Tech Corp</p>
            </div>
          </div>
          <div className="w-1/5 p-4 border border-gray-300 rounded-lg shadow-md ml-4">
            <h4 className="text-lg font-semibold mb-2">Backend Developer</h4>
            <p className="text-gray-600 mb-4">Data Solutions</p>
            <p className="text-gray-800">Join our backend team to build robust APIs and services...</p>
        </div>
        </div>
        </div>
    </main>
  );
}
