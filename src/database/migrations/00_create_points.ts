import Knex from 'knex';
import { createInferTypeNode } from 'typescript';

export async function up(knex: Knex) {
// CRIAR A TABELA    
    knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('ame').notNullable();
    table.string('mail').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    });
}


export async function down(knex: Knex) {
// DELETA A TABELA
return knex.schema.dropTable('point');
}


