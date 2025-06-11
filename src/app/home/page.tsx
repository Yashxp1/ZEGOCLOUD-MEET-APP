import DateTime from '@/components/DateTime';
import MeetingBox from '@/components/MeetingBox';
import { ModeToggle } from '@/components/ModeToggle';
import { Target } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="border">
      <div className="border px-4 py-2 h-fit w-full flex justify-between items-center">
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
      <div className=''>
        <MeetingBox/>
      </div>
    </div>
  );
};

export default page;
