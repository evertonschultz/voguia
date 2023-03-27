import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLikeOrDislike1605809336011 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'likes',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'like',
                    type: 'boolean',
                },
                {
                    name: 'dislike',
                    type: 'boolean',
                },
                {
                    name: 'place_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'IdPlace',
                    columnNames: ['place_id'],
                    referencedTableName: 'places',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('likes');
    }

}
