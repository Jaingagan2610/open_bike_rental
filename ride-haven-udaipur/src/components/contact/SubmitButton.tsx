
import React from 'react';
import { cn } from '@/lib/utils';
import { Send } from 'lucide-react';

type SubmitButtonProps = {
  isSubmitting: boolean;
};

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <button
      onClick={()=>{console.log("hello",isSubmitting)}}
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "px-8 py-3 flex items-center justify-center gap-2 rounded-md text-white font-medium transition-colors",
        isSubmitting 
          ? "bg-gray-400 cursor-not-allowed" 
          : "bg-lake-600 hover:bg-lake-700"
      )}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </>
      ) : (
        <>
          Send Message <Send className="h-4 w-4" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
