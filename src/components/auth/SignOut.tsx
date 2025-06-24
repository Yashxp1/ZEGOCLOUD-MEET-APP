'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

const SignOut = () => {
  const handleLogOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <div>
      <Button variant="destructive" onClick={handleLogOut}>
        Logout     <LogOut />
      </Button>
    </div>
  );
};

export default SignOut;
