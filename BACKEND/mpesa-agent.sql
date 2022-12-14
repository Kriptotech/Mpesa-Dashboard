-- phpMyAdmin SQL Dump
-- version 5.2.0-dev+20211106.a99fb0255a
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 14-Dez-2022 às 19:50
-- Versão do servidor: 5.5.68-MariaDB
-- versão do PHP: 8.0.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mpesa-agent`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `city`
--

CREATE TABLE `city` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Nampula');

-- --------------------------------------------------------

--
-- Estrutura da tabela `company_account`
--

CREATE TABLE `company_account` (
  `id` int(255) NOT NULL,
  `wallet` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `company_account`
--

INSERT INTO `company_account` (`id`, `wallet`) VALUES
(1, 1859);

-- --------------------------------------------------------

--
-- Estrutura da tabela `country`
--

CREATE TABLE `country` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `country`
--

INSERT INTO `country` (`id`, `name`) VALUES
(1, 'Mozambique');

-- --------------------------------------------------------

--
-- Estrutura da tabela `floatype`
--

CREATE TABLE `floatype` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `floatype`
--

INSERT INTO `floatype` (`id`, `name`) VALUES
(1, 'Mpesa'),
(2, 'Emola');

-- --------------------------------------------------------

--
-- Estrutura da tabela `investment`
--

CREATE TABLE `investment` (
  `id` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `balance` text NOT NULL,
  `invested` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `investment`
--

INSERT INTO `investment` (`id`, `id_user`, `balance`, `invested`) VALUES
(8, 75, '5000', ''),
(9, 76, '1000', ''),
(10, 77, '20000', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `requestfloat`
--

CREATE TABLE `requestfloat` (
  `id` int(255) NOT NULL,
  `iduser` int(255) NOT NULL,
  `floatype_id` int(255) NOT NULL,
  `quantity` float NOT NULL,
  `date` datetime NOT NULL,
  `isconfirm` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `requestfloat`
--

INSERT INTO `requestfloat` (`id`, `iduser`, `floatype_id`, `quantity`, `date`, `isconfirm`) VALUES
(17, 76, 1, 500, '2022-12-02 20:18:44', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL,
  `agent_name` text NOT NULL,
  `email` text NOT NULL,
  `bi` text NOT NULL,
  `number` int(255) NOT NULL,
  `agent_number` text NOT NULL,
  `country` int(11) NOT NULL,
  `city` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `date_created` datetime NOT NULL,
  `agent_code` int(11) NOT NULL,
  `password` text NOT NULL,
  `pin_agent` text NOT NULL,
  `isadmin` tinyint(1) NOT NULL DEFAULT '0',
  `isupervisor` tinyint(1) NOT NULL DEFAULT '0',
  `balance` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `name`, `agent_name`, `email`, `bi`, `number`, `agent_number`, `country`, `city`, `birthday`, `date_created`, `agent_code`, `password`, `pin_agent`, `isadmin`, `isupervisor`, `balance`) VALUES
(14, 'Fazbem Francisco', '', 'fazbemfrancisco@gmail.com', '', 842201091, '', 1, 1, '2022-11-01', '2022-11-02 16:15:20', 587745, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMzQ1Ig.qxFBOGU9y9884_OdCcH3yRPObniJOF6-ZOnSJv0cmCk', '', 1, 0, 0),
(75, 'Banca Bulande ', 'Mauricio', 'mauricio@gmail.com', '040111115443', 846308369, '846308369', 1, 1, '2022-12-02', '2022-12-02 18:35:20', 633158, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMzQ1Ig.qxFBOGU9y9884_OdCcH3yRPObniJOF6-ZOnSJv0cmCk', '1234', 0, 0, 0),
(76, 'Agente Fahamo', 'Daniel Cesar ', 'fazbemfrancisco@gmail.com', '04053366543C', 872201091, '822201091', 1, 1, '2022-12-07', '2022-12-02 20:16:12', 12345, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMzQ1Ig.qxFBOGU9y9884_OdCcH3yRPObniJOF6-ZOnSJv0cmCk', '0976', 0, 0, 0),
(77, 'Banca Alexandre Martins ', 'Agide Issufo ', 'agide@gmail.com', '0503347425', 857404346, '857404346', 1, 1, '2022-12-02', '2022-12-02 20:35:52', 68888, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMzQ1Ig.qxFBOGU9y9884_OdCcH3yRPObniJOF6-ZOnSJv0cmCk', '1234', 0, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `weeklyearnings`
--

CREATE TABLE `weeklyearnings` (
  `id` int(255) NOT NULL,
  `date` date NOT NULL,
  `date_valid` date NOT NULL,
  `earnings` float NOT NULL,
  `author` int(255) NOT NULL,
  `author_earning` float NOT NULL,
  `isconfirm` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `weeklyearnings`
--

INSERT INTO `weeklyearnings` (`id`, `date`, `date_valid`, `earnings`, `author`, `author_earning`, `isconfirm`) VALUES
(88, '2022-12-02', '2023-01-01', 240, 76, 108, 0),
(89, '2022-12-02', '2023-01-01', 120, 76, 54, 0),
(90, '2022-12-02', '2023-01-01', 320, 76, 144, 0),
(91, '2022-12-02', '2023-01-01', 100, 76, 45, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `weeklyearningsnotdelete`
--

CREATE TABLE `weeklyearningsnotdelete` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `date_valid` date NOT NULL,
  `earnings` float NOT NULL,
  `author` int(11) NOT NULL,
  `author_earning` float NOT NULL,
  `isconfirm` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `weeklyearningsnotdelete`
--

INSERT INTO `weeklyearningsnotdelete` (`id`, `date`, `date_valid`, `earnings`, `author`, `author_earning`, `isconfirm`) VALUES
(19, '2022-12-02', '2023-01-01', 240, 76, 108, 0),
(20, '2022-12-02', '2023-01-01', 120, 76, 54, 0),
(21, '2022-12-02', '2023-01-01', 320, 76, 144, 0),
(22, '2022-12-02', '2023-01-01', 100, 76, 45, 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `company_account`
--
ALTER TABLE `company_account`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `floatype`
--
ALTER TABLE `floatype`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `investment`
--
ALTER TABLE `investment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Índices para tabela `requestfloat`
--
ALTER TABLE `requestfloat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`),
  ADD KEY `floatype_id` (`floatype_id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_ibfk_1` (`country`),
  ADD KEY `city` (`city`);

--
-- Índices para tabela `weeklyearnings`
--
ALTER TABLE `weeklyearnings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- Índices para tabela `weeklyearningsnotdelete`
--
ALTER TABLE `weeklyearningsnotdelete`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author` (`author`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `city`
--
ALTER TABLE `city`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `company_account`
--
ALTER TABLE `company_account`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `country`
--
ALTER TABLE `country`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `floatype`
--
ALTER TABLE `floatype`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `investment`
--
ALTER TABLE `investment`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `requestfloat`
--
ALTER TABLE `requestfloat`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de tabela `weeklyearnings`
--
ALTER TABLE `weeklyearnings`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de tabela `weeklyearningsnotdelete`
--
ALTER TABLE `weeklyearningsnotdelete`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `investment`
--
ALTER TABLE `investment`
  ADD CONSTRAINT `investment_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `requestfloat`
--
ALTER TABLE `requestfloat`
  ADD CONSTRAINT `requestfloat_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requestfloat_ibfk_2` FOREIGN KEY (`floatype_id`) REFERENCES `floatype` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`country`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`city`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `weeklyearnings`
--
ALTER TABLE `weeklyearnings`
  ADD CONSTRAINT `weeklyearnings_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `weeklyearningsnotdelete`
--
ALTER TABLE `weeklyearningsnotdelete`
  ADD CONSTRAINT `weeklyearningsnotdelete_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
