import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="text-8xl">
      LANDING PAGE
      <Link href="/home">
        <div>
          <Button className="bg-green-500">Go to home</Button>
        </div>
      </Link>
    </div>
  );
};

export default page;
