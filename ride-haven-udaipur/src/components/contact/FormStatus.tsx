
import React from 'react';
import { cn } from '@/lib/utils';

type FormStatusProps = {
  type: 'success' | 'error' | null;
  message: string;
};

const FormStatus = ({ type, message }: FormStatusProps) => {
  if (!type) return null;
  
  return (
    <div className={cn(
      "p-4 rounded-lg",
      type === 'success' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    )}>
      {message}
    </div>
  );
};

export default FormStatus;
