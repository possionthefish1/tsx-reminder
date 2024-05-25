// import React from "react";
// import styles from "./ReminderList.module.css";

import type Reminder from "../../models/reminder";

interface ReminderListProps {
	items: Reminder[];
	onRemoveReminder: (id: number) => void;
}

function ReminderList({
	items,
	onRemoveReminder,
}: ReminderListProps): JSX.Element {
	return (
		<ul className="rounded-md">
			{items.map((item) => (
				<li className="p-2 ring-2 rounded-md flex items-baseline" key={item.id}>
					{item.title}
					<button
						onClick={() => onRemoveReminder(item.id)}
						type="button"
						className="mx-4 px-3 py-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white border-solid border-2 border-red-500 active:ring-8 active: ring-red-300"
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}

export { ReminderList };
