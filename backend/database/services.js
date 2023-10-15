const fs = require('fs');
const {connection} = require('./connection')

const serviceData =[
  {
    label:"Make Up",
    name: 'makeup',
    category: 'women_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Nail Extensions",
    name: 'nail_extensions',
    category: 'women_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Threading",
    name: 'threading',
    category: 'women_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Facial",
    name: 'women_facial',
    category: 'women_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Hair Styling",
    name: 'women_hairstyling',
    category: 'women_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Beard Grooming",
    name: 'beard_grooming',
    category: 'men_salon',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"AC Repair",
    name: 'ac_repair',
    category: 'electrician',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Termite Control",
    name: 'termite',
    category: 'cleaning',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  },
  {
    label:"Chair Making",
    name: 'chair_making',
    category: 'carpenter',
    cost: Math.round(Math.random()*500),
    rating: Math.round(Math.random()*5),   
  }

]





const insertProduct = (productData) => {
  

    const sql = `
      INSERT INTO services (label,name, category, cost, rating, image)
      VALUES (?, ?, ?, ?, ?,?)
    `;
  
    const values = [
      productData.label,
      productData.name,
      productData.category,
      productData.cost,
      productData.rating,
      productData.image,
    ];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting product:', err);
        return;
      }
      console.log(`Product ${productData.name} inserted successfully!`);
     
    });
  };


  
  

  

  serviceData.map(service=>insertProduct(service));
  
  //createNewTableByCategory('Decor','Decor')