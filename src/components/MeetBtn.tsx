import React from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { Input } from './ui/input';

const MeetBtn = () => {
  return (
    <div className="border flex flex-col gap-4 p-4 justify-center items-center">
      {/* <Button className="bg-blue-600 text-white hover:bg-blue-500">
        <p>New Session</p> <Plus />
      </Button> */}
      <div className='flex gap-3'>
        <Input placeholder="Enter session code" className="" />
        <Button>Join</Button>
      </div>
    </div>
  );
};

export default MeetBtn;
