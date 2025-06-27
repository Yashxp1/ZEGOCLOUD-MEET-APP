'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  return (
    <div className="flex gap-4 flex-col justify-center items-center">
      This is the meeting id:{' '}
      <span className="px-2 bg-slate-500 rounded">{slug}</span>
      <div className="flex gap-4">
        <Button>Mute</Button>
        <Button className="bg-red-600 text-white hover:bg-red-800">
          Leave
        </Button>
        <Button>User button</Button>
      </div>
      <div className="flex gap-4">
        <div className="border-2 rounded-full p-10">
          <User size={64} />
          <span>userID: 123</span>
        </div>
        <div className="border-2 rounded-full p-10">
          <User size={64} />
          <span>user: 123</span>
        </div>
      </div>
    </div>
  );
};

export default page;
