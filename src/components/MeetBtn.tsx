'use client';
import React, { useRef } from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';

const MeetBtn = () => {
  const joinRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleJoin = () => {
    console.log(joinRef);
    router.push(`/home/${joinRef.current?.value.trim()}`);
  };

  return (
    <div className="border flex flex-col gap-4 p-4 justify-center items-center">
      <div className="flex gap-3">
        <Input ref={joinRef} placeholder="Enter session code" className="" />
        <Button onClick={handleJoin}>Join</Button>
      </div>
    </div>
  );
};

export default MeetBtn;
