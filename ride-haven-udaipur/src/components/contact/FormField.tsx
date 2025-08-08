
import React from 'react';

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

const FormField = ({ 
  id, 
  name, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  placeholder,
  rows
}: FormFieldProps) => {
  const isTextarea = type === 'textarea';
  
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-900">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows || 5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-colors"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lake-500 focus:border-transparent transition-colors"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField;
