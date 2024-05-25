import type React from 'react';
import { useState } from 'react';
// import styles from './NewReminder.module.css';

interface NewReminderProps {
  // items: Reminder[];
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): React.JSX.Element {
  const [label, setLabel] = useState('');

  return (
    <form
      className='container mx-auto mb-6 grid w-full grid-cols-2 items-center'
      onSubmit={() => onAddReminder}
    >
      <div className='flex items-center justify-around gap-4'>
        <label
          htmlFor='new-reminder'
          className='rounded-sm bg-slate-800 px-8 py-2 text-white'
        >
          New to do
        </label>
        <input
          id='new-reminder'
          className='grow border-2 border-slate-800 border-solid p-2'
          type='text'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button
        type={'submit'}
        className='mx-4 px-3 py-2 rounded-full text-white hover:bg-blue-700 bg-blue-500 hover:text-white border-solid border-2 border-blue-500 active:ring-8 active: ring-red-300'
      >
        Add
      </button>
    </form>
  );
}

export { NewReminder };
