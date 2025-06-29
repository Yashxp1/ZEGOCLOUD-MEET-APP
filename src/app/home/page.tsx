import SignOut from '@/components/auth/SignOut';
import MeetBtn from '@/components/MeetBtn';
import RandomSlug from '@/components/meeting/RandomSlug';
import { ModeToggle } from '@/components/ModeToggle';
import { auth } from '@/lib/auth';
import { Spline } from 'lucide-react';
import React from 'react';

const page = async () => {
  

  const session = await auth();
  console.log(session);
  return (
    <div className="">
      <div className="gap-2  border flex items-center justify-between px-4 py-2">
        <span className="font-semibold flex justify-center items-center gap-3">
          {' '}
          <Spline size={32} className="text-pink-600" />
          ZEGO-MEET
        </span>
        <div className="flex gap-4">
          <ModeToggle />
          <SignOut />
        </div>
      </div>
      <div>
        <MeetBtn />
        <RandomSlug />
      </div>
    </div>
  );
};

export default page;
