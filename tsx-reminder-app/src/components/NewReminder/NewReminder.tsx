import type React from 'react';
import { useEffect, useRef, useState } from 'react';
// import styles from './NewReminder.module.css';

interface NewReminderProps {
  // items: Reminder[];
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): React.JSX.Element {
  const [label, setLabel] = useState('');
  const inputRef = useRef();

  // useEffect(() => {
  //   (inputRef.current as HTMLInputElement).focus();
  // });

  return (
    <form
      className='container mx-auto mb-6 grid w-full grid-cols-[2fr_1fr] items-center'
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        onAddReminder(label);
        setLabel('');
      }}
    >
      <div className='flex items-center justify-around gap-4'>
        <label
          htmlFor='new-reminder'
          className='rounded-sm bg-slate-800 px-8 py-2 text-white'
        >
          New to do
        </label>
        <input
          ref={(input) => input?.focus()}
          // ref={inputRef}
          id='new-reminder'
          placeholder='Please enter new reminder here'
          required={true}
          className='grow rounded-lg border-2 border-slate-800 border-solid p-2 valid:border-slate-800 focus:ring-8 invalid:ring-red-300'
          type='text'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button
        type={'submit'}
        className='mx-4 rounded-full border-2 border-blue-500 border-solid bg-blue-500 px-3 py-2 text-white ring-blue-300 hover:bg-blue-700 hover:text-white focus:outline-none active:ring-8 focus:ring-8 focus:ring-blue-300'
      >
        Add Reminder
      </button>
    </form>
  );
}

export { NewReminder };
