CREATE TABLE `link_clicks` (
	`click_id` text NOT NULL,
	`link` text NOT NULL,
	`link_path` text NOT NULL,
	`link_user_id` integer NOT NULL,
	`link_offer_id` integer NOT NULL,
	`offer_amount` integer NOT NULL,
	`aff_link` text NOT NULL,
	`link_type` text NOT NULL,
	`user_browser` text,
	`user_operating_system` text,
	`user_device` text,
	`click_time` integer NOT NULL,
	`click_ip` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `link_clicks_click_id_unique` ON `link_clicks` (`click_id`);