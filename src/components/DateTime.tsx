'use client';

import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const dayName = time
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toUpperCase();

  return (
    <div className="bg-blue-600 text-shadow-2xs text-white border py-4  gap-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-shadow-2xs font-edu">
        Good Morning, James!
      </h1>
      <div className=" flex flex-col font-osw gap-4 justify-center items-center">
        <p className="text-7xl md:text-9xl ">
          {' '}
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        <p className="text-2xl">{formattedDate}</p>
        <p className="text-5xl">{dayName}</p>
      </div>
    </div>
  );
};

export default DateTime;
