CREATE TABLE `servers_meli`.`messages` (
  `idmessages` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NULL,
  PRIMARY KEY (`idmessages`));


ALTER TABLE `servers_meli`.`messages` 
ADD COLUMN `id_server` INT NULL AFTER `idmessages`;


ALTER TABLE `servers_meli`.`messages` 
CHANGE COLUMN `idmessages` `id` INT NOT NULL AUTO_INCREMENT ;
