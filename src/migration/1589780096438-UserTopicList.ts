import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTopicList1589780096438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.query(`ALTER TABLE "Topic" RENAME COLUMN "name" TO "title" `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    	await queryRunner.query(`ALTER TABLE "Topic" RENAME COLUMN "title" TO "name" `)
    }

}
