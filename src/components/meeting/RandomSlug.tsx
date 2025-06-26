'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/button';

const RandomSlug = () => {
  const router = useRouter();

  const createRandomStr = () => {
    const randomSlug = uuidv4();
    router.push(`/home/${randomSlug}`);
  };

  return (
    <div className="border flex flex-col gap-4 p-4 justify-center items-center">
      <Button
        onClick={createRandomStr}
        className="bg-green-600 text-white hover:bg-blue-500"
      >
        <p>New Session</p> <Plus />
      </Button>
    </div>
  );
};

export default RandomSlug;
