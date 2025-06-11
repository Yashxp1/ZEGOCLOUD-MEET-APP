import { ModeToggle } from '@/components/ModeToggle';
import { Target } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="border rounded-md">
      <div className="border px-4 py-2 rounded-md h-fit w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Target size={32} />
          <span className="font-semibold">Chat Wave</span>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>

      <div className="bg-gray-700 border ">
        <div className="bg-blue-950 py-20  items-center justify-center flex">
          <h1 className='text-4xl font-bold text-yello-300 text-shadow-2xs font-edu'>Good Morning, James!</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
