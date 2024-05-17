<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230815085702 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE immigration_office_bookings');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE immigration_office_bookings (id INT AUTO_INCREMENT NOT NULL, client_id INT DEFAULT NULL, date DATE DEFAULT NULL, time INT DEFAULT NULL, INDEX IDX_A548A59619EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE immigration_office_bookings ADD CONSTRAINT FK_A548A59619EB6921 FOREIGN KEY (client_id) REFERENCES user (id)');
    }
}
