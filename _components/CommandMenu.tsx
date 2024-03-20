'use client';
import React, { useState, useEffect } from 'react';
import { Command, CommandInput, CommandList, CommandOption } from 'superkey';

import { Book, Stack, Blocks, History } from '@/_icons';

const CommandPalette = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === 'k' && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault();
        setOpen(!open);
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [open]);

  const data = [
    {
      id: 1,
      name: 'Docs',
      href: '/docs',
      icon: <Book />,
    },
    {
      id: 2,
      name: 'History',
      href: '/dash',
      icon: <History />,
    },
    {
      id: 3,
      name: 'Templates',
      href: '/slug',
      icon: <Stack />,
    },
    {
      id: 4,
      name: 'Blog',
      href: '/slug',
      icon: <Blocks />,
    },
  ];

  const filteredData = data.filter((doc) => {
    return doc.name?.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <Command
      open={open}
      onClose={() => {
        setOpen(!open);
      }}
      commandFunction={(action) => {
        setOpen(false);
        // router.push(`${action}`);
      }}
      className="border border-yellow-800 bg-midnight text-white"
      overlayClassName="bg-midnight/50"
    >
      <CommandInput
        placeholder="Search..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="border-b border-neutral-800 bg-midnight text-white"
      />
      {/* <CommandList className="border-none"> */}
      <CommandList>
        {filteredData.map((action) => (
          <CommandOption
            key={action.id}
            value={action.href || ''}
            activeClassName="bg-gray-100 dark:bg-zinc-700/25"
          >
            <div className="flex items-center space-x-3 py-1 px-1 gap-2">
              <div className="icon-size-8 flex-shrink-0 md:mr-4">
                {action.icon}
              </div>
              <h1 className="text-gray-100">{action.name}</h1>
            </div>
          </CommandOption>
        ))}
      </CommandList>
    </Command>
  );
};

export default CommandPalette;
