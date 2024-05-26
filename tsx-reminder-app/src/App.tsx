import React from 'react';
import { NewReminder } from './components/NewReminder';
import { ReminderList } from './components/ReminderList';
import type Reminder from './models/reminder';
import reminderService from './services/reminder';

function App() {
  const [reminders, setReminder] = React.useState<Reminder[]>([]);

  React.useEffect(() => {
    // Effect Here
    loadReminders();
    // Effect Clean up function here
    // return () => {
    // 	second;
    // };
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminder(reminders);
  };

  const removeReminders = async (id: number) => {
    console.log(id);
    setReminder(reminders.filter((reminder) => reminder.id !== id));
  };
  // Add reminder
  const addReminders = (title: string) => {
    const nextReminders = [{ id: Date.now(), title }, ...reminders];
    setReminder(nextReminders);
  };

  return (
    <div className='App'>
      <NewReminder onAddReminder={addReminders} />
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminders}
      />
    </div>
  );
}

export { App };
