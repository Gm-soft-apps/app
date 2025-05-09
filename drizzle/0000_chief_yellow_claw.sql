CREATE TABLE `users` (
	`id` integer NOT NULL,
	`countryCode` text DEFAULT '+91' NOT NULL,
	`phoneNumber` text(10) NOT NULL,
	`password` text NOT NULL,
	`role` text DEFAULT 'user' NOT NULL,
	`referralCode` text NOT NULL,
	`invitedBy` text NOT NULL,
	`verifiedAccount` integer DEFAULT false,
	`lastVerified` integer,
	`registeredOn` integer NOT NULL,
	`lastUpdated` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_phoneNumber_unique` ON `users` (`phoneNumber`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_referralCode_unique` ON `users` (`referralCode`);--> statement-breakpoint
CREATE TABLE `offer_paths` (
	`sl_no` integer PRIMARY KEY NOT NULL,
	`offer_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`path` text NOT NULL,
	`created_on` integer,
	`user_ip` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `offer_paths_path_unique` ON `offer_paths` (`path`);--> statement-breakpoint
CREATE TABLE `offers` (
	`id` integer NOT NULL,
	`offerPriority` integer,
	`offerName` text NOT NULL,
	`offerTitle` text NOT NULL,
	`offerPayout` integer NOT NULL,
	`offerLink` text NOT NULL,
	`offerDetails` text,
	`offerSteps` text,
	`offerTerms` text,
	`offerDocs` text,
	`offerPayoutRules` text,
	`offerCategory` text NOT NULL,
	`offerStatus` integer NOT NULL,
	`affNetwork` text,
	`offerLogo` text NOT NULL,
	`offerBanner` text NOT NULL,
	`offerCreatedOn` integer NOT NULL,
	`offerLastModifiedOn` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `offers_id_unique` ON `offers` (`id`);