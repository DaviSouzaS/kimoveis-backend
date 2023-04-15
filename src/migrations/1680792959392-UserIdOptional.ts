import { MigrationInterface, QueryRunner } from "typeorm";

export class UserIdOptional1680792959392 implements MigrationInterface {
    name = 'UserIdOptional1680792959392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_7c2b12dcd565a40333dfd136518"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "usersId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_7c2b12dcd565a40333dfd136518" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_7c2b12dcd565a40333dfd136518"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ALTER COLUMN "usersId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_7c2b12dcd565a40333dfd136518" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
