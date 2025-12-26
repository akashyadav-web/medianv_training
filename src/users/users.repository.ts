import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersRepository {
  constructor(private db: DatabaseService) {}

  findAll() {
    return this.db.query('SELECT * FROM users');
  }

  findOne(id: number) {
    return this.db.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    ).then(r => r[0]);
  }

  create(email: string) {
    return this.db.query(
      'INSERT INTO users (email) VALUES ($1) RETURNING *',
      [email]
    ).then(r => r[0]);
  }

  update(id: number, email: string) {
  console.log('UPDATE INPUT:', { id, email });

  return this.db.query(
    'UPDATE users SET email = $1 WHERE id = $2 RETURNING *',
    [email, id]
  ).then(r => {
    console.log('UPDATED ROW FROM DB:', r);
    return r[0];
  });
}


  delete(id: number) {
    return this.db.query(
      'DELETE FROM users WHERE id = $1',
      [id]
    );
  }
}
