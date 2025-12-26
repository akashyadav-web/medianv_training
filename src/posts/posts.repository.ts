import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PostsRepository {
  constructor(private db: DatabaseService) {}

  // CREATE
  create(title: string, userId: number) {
    return this.db.query(
      'INSERT INTO posts (title, user_id) VALUES ($1, $2) RETURNING *',
      [title, userId],
    ).then(r => r[0]);
  }

  // READ: all posts
  findAll() {
    return this.db.query('SELECT * FROM posts');
  }

  // READ: one post
  findOne(id: number) {
    return this.db.query(
      'SELECT * FROM posts WHERE id = $1',
      [id],
    ).then(r => r[0]);
  }

  // READ: posts by user
  findByUser(userId: number) {
    return this.db.query(
      'SELECT * FROM posts WHERE user_id = $1',
      [userId],
    );
  }

  // UPDATE
  update(id: number, title: string) {
    return this.db.query(
      'UPDATE posts SET title = $1 WHERE id = $2 RETURNING *',
      [title, id],
    ).then(r => r[0]);
  }

  // DELETE
  delete(id: number) {
    return this.db.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id],
    ).then(r => r[0]);
  }
}
