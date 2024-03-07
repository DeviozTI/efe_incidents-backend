import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "sebas2001",
  database: "efe_incidents",
  entities: ["src/entity/*.ts"],
  logging: false,
  synchronize: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
