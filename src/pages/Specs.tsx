import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// Import the markdown file as a raw string
import specContent from '../../specs.md?raw';

const Specs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-start mb-6">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
        <div
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: specContent }}
        />
        <div className="flex justify-start mt-8">
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Specs;