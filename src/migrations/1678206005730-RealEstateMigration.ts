import { MigrationInterface, QueryRunner } from "typeorm";

export class RealEstateMigration1678206005730 implements MigrationInterface {
    name = 'RealEstateMigration1678206005730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "real_estate" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "addressesId" integer, "categoriesId" integer, CONSTRAINT "REL_a4c0f0067e7e6294ef4e02e2c9" UNIQUE ("addressesId"), CONSTRAINT "PK_8735a23fd5adc2afb18242894ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a"`);
        await queryRunner.query(`DROP TABLE "real_estate"`);
    }

}
