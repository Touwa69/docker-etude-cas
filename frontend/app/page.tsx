'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

export default function Home() {
  const [devOpsData, setDevOpsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/api/devops');
        const data = await response.json();
        setDevOpsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main className="container mx-auto my-8 p-4 bg-white shadow-xl rounded-lg">
      <h1 className="text-4xl font-bold text-center  mt-10  text-gray-800 mb-6">DEVOPS</h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div>
              {devOpsData.map((item) => (
                <div key={item.id} className="mb-4 p-4 bg-gray-100 rounded-md">
                  <h2 className="text-2xl font-semibold text-gray-700">{item.topic}</h2>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
            <Image src="/devops.png" alt="Image" width={450} height={250} className=" mx-auto mb-6" />
      </main>
    </>

  );
}
