// import React from "react";
// import styles from "./ReminderList.module.css";

import type Reminder from "../../models/reminder";

interface ReminderListProps {
	items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
	return (
		<ul className="rounded-md">
			{items.map((item) => (
				<li
					className="p-2 ring-2 rounded-md flex justify-between"
					key={item.id}
				>
					{item.title}
					<button
						type="button"
						className="px-2 py-1 rounded bg-red-500 text-white"
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}

export { ReminderList };
