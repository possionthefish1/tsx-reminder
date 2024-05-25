// import React from "react";
// import styles from "./ReminderList.module.css";

import type Reminder from "../../models/reminder";

interface ReminderListProps {
	items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.title}</li>
			))}
		</ul>
	);
}

export { ReminderList };