import DateTime from '@/components/DateTime';
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

      <div>
        <DateTime />
      </div>
    </div>
  );
};

export default page;
