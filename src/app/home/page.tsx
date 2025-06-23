import { ModeToggle } from '@/components/ModeToggle';
import { auth } from '@/lib/auth';
import { Target } from 'lucide-react';
import React from 'react';

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className="border flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <Target size={32} />
        <span className="font-semibold">Chat Wave</span>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default page;
