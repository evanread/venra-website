import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownProps {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

export function Dropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-white/90 hover:text-white flex items-center gap-1 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform",
          isOpen && "transform rotate-180"
        )} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}