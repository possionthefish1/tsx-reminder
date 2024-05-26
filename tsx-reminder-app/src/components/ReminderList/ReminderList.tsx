// import React from "react";
// import styles from "./ReminderList.module.css";

import type React from 'react';
import type Reminder from '../../models/reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({
  items,
  onRemoveReminder,
}: ReminderListProps): React.JSX.Element {
  return (
    <ul className='rounded-md'>
      {items.map((item) => (
        <li
          className='flex items-baseline rounded-md p-2 ring-2'
          key={item.id}
        >
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            type='button'
            className='mx-4 rounded-full border-2 border-red-500 border-solid px-3 py-2 text-red-500 ring-red-300 focus:bg-red-500 hover:bg-red-500 focus:text-white hover:text-white focus:outline-none active:ring-8 focus:ring-8 focus:ring-red-300'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ReminderList };
