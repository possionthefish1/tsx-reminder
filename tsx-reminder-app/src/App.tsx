import React from "react";
import { ReminderList } from "./components/ReminderList";
import type Reminder from "./models/reminder";
import reminderService from "./services/reminder";

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

	return <ReminderList items={reminders} />;
}

export default App;
