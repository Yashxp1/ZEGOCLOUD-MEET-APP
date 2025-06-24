import React from 'react';
import { Button } from './ui/button';
import { Video } from 'lucide-react';

const MeetBtn = () => {
  return (
    <div>
      <Button className="bg-blue-600 text-white hover:bg-blue-500">
        <p>New meeting</p> <Video />
      </Button>
    </div>
  );
};

export default MeetBtn;
