# 🛒 Predicting Retail Demand Using Random Forest: Inventory and Pricing Insight

**Leveraging AI for Demand Forecasting, Inventory Intelligence, and Pricing Strategy**

---

## 📌 Project Overview

Retail businesses constantly balance demand uncertainty, inventory constraints, and pricing decisions. Poor forecasting leads to overstocking, stockouts, and lost revenue opportunities.

This project develops an **AI-driven predictive analytics framework** to:

- Forecast product demand  
- Analyze inventory risk  
- Evaluate promotional impact  
- Understand pricing–sales relationships  

The goal is to enable **data-driven retail decision-making** that improves profitability and operational efficiency.

---

## 🎯 Business Problem

Retailers face challenges such as:

- Seasonal demand fluctuations  
- Promotion-driven volatility  
- Overstock and stockout risks  
- Inefficient pricing strategies  

Traditional forecasting methods often fail to capture nonlinear relationships between pricing, promotions, and demand.

This project answers:

- What factors most influence product demand?  
- How do promotions impact sales lift?  
- Where are inventory risks occurring?  
- How does pricing affect sales volume?  

---

## 📊 Dataset

The project integrates multiple retail data sources:

- Historical sales transactions  
- Promotional campaign indicators  
- Inventory stock levels  
- Reorder thresholds  
- Product pricing data  

### Data Preprocessing

- Handling missing values  
- Feature engineering  
- Creating seasonal indicators  
- Generating lag-based features  
- Train-test splitting  

---

## 🧠 Modeling Approach

### Demand Forecasting (Regression)

- **Model:** Random Forest Regressor  
- **Objective:** Predict product sales demand  
- **Evaluation Metrics:** MAE, RMSE, R², MAPE  

**Why Random Forest?**

- Captures nonlinear relationships  
- Handles mixed retail features  
- Models interaction effects effectively  

---

## 📈 Model Performance

| Metric | Value |
|------|------|
| MAE | 125.55 |
| RMSE | 146.30 |
| R² | -0.036 |
| MAPE | 260.44% |

This model serves as a **baseline forecasting approach** and highlights opportunities for improvement using boosting algorithms or advanced time-series models.

---

## 🔍 Key Insights and Limitations


- The exploratory analysis examined relationships among sales demand, promotional activity, seasonal patterns, inventory levels, and pricing.

- Promotional activity: Promotions were explored as a potential contributor to changes in sales demand. Further statistical analysis is required to establish the magnitude and reliability of their effects.

- Seasonality: Calendar-based features were included to investigate potential seasonal demand patterns.

- Inventory monitoring: Comparing available stock with observed demand can help identify possible overstock and stockout risks.

- Pricing: Price-related features were analyzed for possible relationships with sales quantities. The current results do not establish a reliable pricing effect.

- Model limitations: The Random Forest baseline achieved an R² of -0.036 and a MAPE of 260.44%, indicating poor predictive performance on the evaluation dataset.

Interpretation

The project demonstrates an exploratory data science workflow rather than a production-ready forecasting solution. Its primary contribution is integrating retail data, developing predictive features, evaluating a baseline model, and identifying areas for further investigation.

Future work should focus on improving data quality, testing additional forecasting methods, and validating insights before using them for operational decisions.

---

## 🛠 Tools & Technologies

- Python  
- Pandas  
- NumPy  
- Scikit-learn  
- Matplotlib  
- Seaborn  
- Jupyter Notebook  

---

## 📂 Project Structure

```
AIRetailOptimization/
│
├── appendix/
├── data/
├── Predicting Retail Demand Using Random Forest.ipynb
└── README.md
```

---

## 🚀 Business Impact

✔ Improved visibility into sales drivers  
✔ Early identification of inventory risks  
✔ Quantified promotional effectiveness  
✔ Foundation for automated replenishment systems  

---

## 🔮 Future Improvements

- Implement Gradient Boosting / XGBoost  
- Incorporate holiday and weather signals  
- Build automated reorder recommendation engine  
- Develop dynamic pricing optimization module  

---

## Data Sources

This project uses three CSV datasets for retail demand forecasting, inventory monitoring, and pricing analysis:

- `demand_forecasting.csv`
- `inventory_monitoring.csv`
- `pricing_optimization.csv`

These datasets were used for academic analysis and machine learning experimentation. 

For background research on retail inventory optimization, the project references the following publicly available resource:

Kaggle. (n.d.). *Inventory optimization for retail*. https://www.kaggle.com/datasets/suvroo/inventory-optimization-for-retail


---

## How to Run This Project

### Prerequisites

Install the following software:

- Python 3
- Jupyter Notebook or JupyterLab

The project requires these Python libraries:

- pandas
- numpy
- matplotlib
- seaborn
- scikit-learn

### Step 1: Download the Project

Download or clone the GitHub repository:

https://github.com/DilipKumar95/Dilip-Data-Science-Portfolio

Open the `AI-Driven-Retail-Optimization` folder.

### Step 2: Install Required Libraries

Open a terminal or command prompt and execute:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn notebook
```

### Step 3: Verify the Project Files

Ensure the project contains:

- The original Jupyter Notebook (`.ipynb`)
- `data/demand_forecasting.csv`
- `data/inventory_monitoring.csv`
- `data/pricing_optimization.csv`

Create a `figures` folder if one does not already exist.

### Step 4: Check File Paths

The original notebook references datasets using paths such as `../data/demand_forecasting.csv`.

If the notebook is located directly inside the `AI-Driven-Retail-Optimization` folder, change these paths to:

```python
df_demand = pd.read_csv("data/demand_forecasting.csv", parse_dates=["Date"], dayfirst=True)
df_inventory = pd.read_csv("data/inventory_monitoring.csv")
df_pricing = pd.read_csv("data/pricing_optimization.csv")
```

Similarly, change output paths from `../figures/` to `figures/`.

If the notebook is inside a subfolder, the original relative paths may already be correct.

### Step 5: Execute the Notebook

1. Open the `.ipynb` file using Jupyter Notebook or JupyterLab.
2. Select **Run All Cells**.
3. Review the exploratory data analysis visualizations.
4. Review the Random Forest regression model results.
5. Examine the inventory monitoring and stock-risk analysis.

### Step 6: Review Model Performance

The original analysis reported:

| Metric | Result |
|---|---:|
| Mean Absolute Error (MAE) | 125.55 |
| Root Mean Squared Error (RMSE) | 146.30 |
| R² Score | -0.036 |
| Mean Absolute Percentage Error (MAPE) | 260.44% |

These results indicate that the current model is an exploratory baseline and requires further improvement before production use.

**Note:** These instructions are based on the original project code. Successful execution using the current GitHub repository layout has not yet been independently verified.
---

## 👤 Author

**Dilip Kumar Balu**

**Tools:** Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn
