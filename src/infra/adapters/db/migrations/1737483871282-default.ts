import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1737483871282 implements MigrationInterface {
    name = 'Default1737483871282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_db" ("id" SERIAL NOT NULL, "id_publico" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_abfa22e2b441e2d98427d1bf173" UNIQUE ("email"), CONSTRAINT "PK_b1c9aed1cbe98f7939a6a8c8440" PRIMARY KEY ("id", "id_publico"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_db"`);
    }

}
