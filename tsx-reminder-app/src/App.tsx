import React from "react";
import { ReminderList } from "./components/ReminderList";
import type Reminder from "./models/reminder";

function App() {
	const [reminders, setReminder] = React.useState<Reminder[]>([
		{ id: 1, title: "Play Valorant" },
	]);

	return <ReminderList items={reminders} />;
}

export default App;
