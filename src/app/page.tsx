import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      LANDING PAGE
      <Link href="/home">
        <Button>home</Button>
      </Link>
    </div>
  );
};

export default page;
