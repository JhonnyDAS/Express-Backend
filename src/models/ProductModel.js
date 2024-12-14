const connection = require('../database/mysql');

const ProductModel = {
    create: (data) => {
        return new Promise((resolve, reject) => {
            const columns = Object.keys(data).join(', ');
            const values = Object.values(data);
            const placeholders = values.map(() => '?').join(', ');

            const query = `INSERT INTO products (${columns}) VALUES (${placeholders})`;

            connection.query(query, values, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve({ id: result.insertId, ...data });
            });
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM products', (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM products WHERE id = ?`, [id], (error, result) => {
                return error ? reject(error) : resolve(result[0] || null);
            });
        });
    },
    update: (id, changes) => {
        return new Promise((resolve, reject) => {
            const fields = Object.keys(changes)
                .map((field) => `${field} = ?`)
                .join(', ');
            const values = Object.values(changes);

            if (fields.length === 0) {
                return resolve(null);
            }

            const query = `UPDATE products SET ${fields} WHERE id = ?`;
            connection.query(query, [...values, id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result.affectedRows > 0 ? { id, ...changes } : null);
            });
        });
    },
    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM products WHERE id = ?`, [id], (error, result) => {
                return error ? reject(error) : resolve(result[0] || null);
            });
        });
    }
};

module.exports = ProductModel;
