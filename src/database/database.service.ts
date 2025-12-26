import { Injectable, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: Pool;

  onModuleInit() {
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'akash@123',
      database: 'postgres',
    });
  }

  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const db = await this.pool.query(
    'SELECT current_database(), inet_server_addr(), inet_server_port()'
  );
  console.log('CONNECTED TO:', db.rows[0]);

  const result = await this.pool.query(sql, params);
  return result.rows;
}

}
