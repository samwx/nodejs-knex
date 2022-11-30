import knex from "knex";
import knexConfigs from "../knexfile.js";

export const db = knex(knexConfigs.development);