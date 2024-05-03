-- create task table
CREATE TABLE IF NOT EXISTS `tasks` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `summary` varchar(100) DEFAULT NULL,
    `description` varchar(1000) DEFAULT NULL,
    `status` varchar(100) DEFAULT NULL,
    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
