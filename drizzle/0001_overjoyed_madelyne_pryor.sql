CREATE TABLE `offer_links` (
	`sl_no` integer PRIMARY KEY NOT NULL,
	`offer_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`self_path` text NOT NULL,
	`share_path` text NOT NULL,
	`created_on` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `offer_links_self_path_unique` ON `offer_links` (`self_path`);--> statement-breakpoint
CREATE UNIQUE INDEX `offer_links_share_path_unique` ON `offer_links` (`share_path`);