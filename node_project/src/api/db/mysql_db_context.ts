import { Connection, ConnectionConfig, createConnection, Query } from 'mysql'

let dbConfig: ConnectionConfig = require('../../config/my_sql_db.config.json');

export class MySqlDbContext {
    private mySqlConnectionConfig: ConnectionConfig = dbConfig;
    private connection: Connection;

    constructor() {
        this.connect();
        console.log(this.mySqlConnectionConfig)
    }

    private connect() {
        if (!this.connection) {
            this.connection = createConnection(this.mySqlConnectionConfig);
        }
    }

    public fireQuery<T>(queryString: string): Promise<T> {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, (error, result, fields) => {
                if (error) {
                    reject(error);
                }
                else{
                    resolve(result);
                }
            });
        })
    }
}
