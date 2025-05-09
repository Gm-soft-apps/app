CREATE TABLE `offer_paths` (
	`sl_no` integer PRIMARY KEY NOT NULL,
	`offer_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`path` text NOT NULL,
	`created_on` integer,
	`user_ip` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `offer_paths_path_unique` ON `offer_paths` (`path`);