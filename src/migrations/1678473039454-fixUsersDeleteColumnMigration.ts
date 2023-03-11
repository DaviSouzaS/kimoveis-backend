import { MigrationInterface, QueryRunner } from "typeorm";

export class fixUsersDeleteColumnMigration1678473039454 implements MigrationInterface {
    name = 'fixUsersDeleteColumnMigration1678473039454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
