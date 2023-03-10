import { MigrationInterface, QueryRunner } from "typeorm";

export class fixAddressesMigration1678457865585 implements MigrationInterface {
    name = 'fixAddressesMigration1678457865585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
