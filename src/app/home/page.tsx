import SignOut from '@/components/auth/SignOut';
import MeetBtn from '@/components/MeetBtn';
import { ModeToggle } from '@/components/ModeToggle';
import { auth } from '@/lib/auth';
import { Target } from 'lucide-react';
import React from 'react';

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="">
      <div className="gap-2   border flex items-center justify-between px-4 py-2">
        <Target size={32} />
        <span className="font-semibold">Chat Wave</span>
        <div className="flex gap-4">
          <ModeToggle />
          <SignOut />
        </div>
      </div>
      <div>
        <MeetBtn />
      </div>
    </div>
  );
};

export default page;
