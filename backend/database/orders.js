const {connection}= require('./connection')
// const {insertProducts} = require('./services')
const createOrdersTable = () => {
    const sql = `
      CREATE TABLE IF NOT EXISTS orders (
        id  VARCHAR(255) NOT NULL ,
        username VARCHAR(255) NOT NULL,
        service_name VARCHAR(255) NOT NULL,
        label VARCHAR(255) NOT NULL,
        price FLOAT(10, 2) NOT NULL,
        quantity INT(11) NOT NULL,
        order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        order_status VARCHAR(50),
        address VARCHAR(255),
        category VARCHAR(255)
      )
    `;
    
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating orders table:', err);
        return;
      }
      console.log('Orders table created successfully!');
    });
  };

createOrdersTable()



  const insertOrder = (id,username, productName, price, quantity, address, label, category) => {
    const sql = `
      INSERT INTO orders (id,username, service_name, price, quantity, order_status, address, label, category)
      VALUES (?, ?, ?, ?, ?, ?,?,?,?)
    `;
    
    const values = [id,username, productName, price, quantity, "new",address, label, category];
    
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting order:', err);
        return;
      }
      console.log('Order inserted successfully!');
    });
  };
  
  const updateOrderStatus = (orderId, newStatus, product_name) => {
    const sql = `UPDATE orders SET order_status = ? WHERE id = ? `;
    console.log(orderId, newStatus, product_name);
    connection.query(sql, [newStatus, orderId, product_name], (err, result) => {
      if (err) {
        console.error('Error updating order status:', err);
        return;
      }
  
      console.log(`Order ${orderId} status updated to ${newStatus}`);
    });
  };
  
  const getOrder = async (orderId) => {
    const sql = `SELECT * FROM orders WHERE id = ? ORDER BY order_date DESC`;
    try {
      const result =  connection.query(sql, [orderId]);
      return result;
    } catch (err) {
      console.error('Error fetching order:', err);
      throw err;
    }
  };
  
  const getOrdersByUsername= async(username)=>{
    const sql = `SELECT * FROM orders WHERE username = ? ORDER BY order_date DESC`;
    
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  const getAllOrders= async()=>{
    const sql = `SELECT * FROM orders ORDER BY order_date DESC`;
    
    
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  const getOrdersByCategory= async(category)=>{
    const sql = `SELECT * FROM orders WHERE category = ? ORDER BY order_date DESC`;
    
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [category], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  
  
  module.exports = {createOrdersTable, insertOrder, getOrder, updateOrderStatus, getOrdersByUsername, getAllOrders, getOrdersByCategory}
  