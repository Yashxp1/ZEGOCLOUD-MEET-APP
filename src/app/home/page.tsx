import DateTime from '@/components/DateTime';
import Link from 'next/link';
import MeetingBox from '@/components/MeetingBox';
import { ModeToggle } from '@/components/ModeToggle';
import { authOptions } from '@/lib/auth';
import { Target } from 'lucide-react';
import { getServerSession } from 'next-auth';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import UserLogOut from '@/components/UserLogOut';

const page = async () => {
  return (
    <div className="border">
      <div className="border px-4 py-2 h-fit w-full flex justify-between items-center">
        <div className="bg-purple-600">SESSION: USERNAME</div>
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
      <div className="">
        <MeetingBox />
      </div>
      <div>
        {/* <Link>
        </Link> */}
      </div>
    </div>
  );
};

export default page;
