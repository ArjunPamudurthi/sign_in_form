'use client';

import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  name, 
  placeholder, 
  error, 
  ...props 
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={type === 'password' ? 'current-password' : type === 'email' ? 'email' : 'off'}
        className={`
          block w-full px-4 py-3 rounded-lg bg-white border 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          transition duration-150 ease-in-out
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
