
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `products` (
  `sku` varchar(255) COLLATE utf8_bin NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` float NOT NULL,
  `type` int(11) NOT NULL,
  `attribute` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


INSERT INTO `products` (`sku`, `name`, `price`, `type`, `attribute`) VALUES
('BOOK', 'Harry Potter and the Cursed Child', 50, 1, '2 KG'),
('DISC', 'DVD', 10, 0, '120 MB'),
('FURNITURE', 'Blue chair', 20, 2, '30x10x10');

ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`);
COMMIT;