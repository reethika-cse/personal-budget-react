const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs'); 
const cors = require('cors');

app.use(cors());

const budget = {
    myBudget: [
      {
        title: 'Eat out',
        budget: 25
      },
      {
        title: 'Rent',
        budget: 275
      },
      {
        title: 'Grocery',
        budget: 110
      },
    ]
  };

  //const budgetData = JSON.parse(fs.readFileSync('budget-data.json')); 

app.get('/budget', (req, res) => {
  res.json(budget);
});

// app.get('/api/budgetData', (req, res) => {
//   res.json(budgetData);
// });

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

