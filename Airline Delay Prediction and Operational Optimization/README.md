# Airline Delay Prediction and Operational Optimization

**DSC 680 – Applied Data Science | Bellevue University**

## 📌 Project Overview

This project applies data science and machine learning to analyze historical U.S. airline flight delays and identify opportunities for improving airline operational efficiency.

Using a sampled dataset of 150,000 flight records from 2009–2020, the project investigates historical delay patterns, evaluates factors associated with flight delays, and develops predictive models to estimate arrival delay risk and duration.

The analysis compares two prediction scenarios:

- **Predeparture Prediction:** Predicting arrival delays using flight schedules, routes, airlines, and calendar information.
- **Departure-Informed Prediction:** Predicting arrival delays using additional information about actual departure delays.

The goal is to provide interpretable insights that can support airline operations, resource planning, and passenger communication.

## 🎯 Business Problem

Flight delays create significant operational and financial challenges for airlines, including:

- Increased operating costs.
- Crew and aircraft scheduling disruptions.
- Missed passenger connections.
- Reduced customer satisfaction.
- Inefficient allocation of operational resources.

Predictive analytics can help airlines identify potential disruptions and support better operational decisions.

### Research Questions

1. How accurately can machine learning models predict whether a flight will arrive at least 15 minutes late?
2. Does including actual departure-delay information improve arrival-delay predictions?
3. Which operational, temporal, and route-related factors are associated with flight delays?
4. How accurately can regression models estimate arrival delay duration in minutes?

## 📊 Dataset

**Source:** [Airline Delay Analysis – Kaggle](https://www.kaggle.com/datasets/sherrytp/airline-delay-analysis/data)

**Original coverage:** 2009–2020

**Sample size:** 150,000 flight records

**Sampling approach:** Approximately 12,500 randomly selected eligible flight records per year.

The dataset includes information about:

| Feature | Description |
|---|---|
| FL_DATE | Flight date |
| OP_CARRIER / OP_UNIQUE_CARRIER | Operating airline |
| ORIGIN | Departure airport |
| DEST | Destination airport |
| DEP_DELAY | Departure delay in minutes |
| ARR_DELAY | Arrival delay in minutes |
| DISTANCE | Flight distance |
| CRS_DEP_TIME | Scheduled departure time, where available |
| CARRIER_DELAY | Airline-related delay |
| WEATHER_DELAY | Weather-related delay |
| NAS_DELAY | National Airspace System delay |

The combined dataset contains some differences in column availability across years.

**Data quality note:** The 2020 records were excluded from the current modeling analysis because of apparent column-alignment inconsistencies. The original 150,000-row sample is retained for reproducibility.

## 🛠️ Technologies and Tools

- Python
- Jupyter Notebook
- Pandas and NumPy
- Matplotlib
- Scikit-learn
- GitHub

## 🔍 Methodology

### 1. Data Preparation

The analysis includes:

- Combining sampled flight records from multiple years.
- Identifying missing values and duplicate records.
- Standardizing carrier identifiers.
- Converting flight dates and numerical fields.
- Creating a binary delayed-flight classification target.
- Engineering month, day-of-week, and scheduled departure-hour features.
- Excluding inappropriate predictors to prevent data leakage.

A flight is classified as delayed when its arrival delay is **15 minutes or greater**.

### 2. Exploratory Data Analysis

Exploratory analysis examines:

- Annual flight delay patterns.
- Distribution of arrival delays.
- Differences in delay rates across airlines.
- Delay patterns by scheduled departure hour.
- Relationships between available flight information and delay risk.

### 3. Machine Learning

**Classification models:**

- Logistic Regression
- Random Forest Classifier

**Regression model:**

- Ridge Regression

Classification models predict whether a flight will be delayed, while regression estimates arrival delay duration.

### 4. Model Validation

The project uses chronological training, validation, and testing periods to evaluate performance on later flight records.

Classification evaluation includes:

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC
- Precision-Recall AUC
- Confusion matrices

Regression evaluation includes:

- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)

## 📈 Model Results

### Classification Results

| Model | Accuracy | Recall | ROC-AUC |
|---|---:|---:|---:|
| Predeparture – Logistic Regression | 58.4% | 59.0% | 0.620 |
| Predeparture – Random Forest | 55.7% | 66.4% | 0.628 |
| Departure-Informed – Logistic Regression | 93.4% | 75.5% | Approximately 0.93 |

The predeparture models demonstrate limited predictive performance using scheduling and route information alone.

The departure-informed model performs substantially better when actual departure delay is included.

However, these scenarios were evaluated on different test years, so their performance should not be interpreted as a strictly controlled comparison.

### Regression Results

| Model | MAE | RMSE |
|---|---:|---:|
| Training Mean Baseline | 24.74 minutes | 50.43 minutes |
| Ridge Regression | 9.53 minutes | 13.49 minutes |

Ridge Regression substantially outperformed the baseline when estimating arrival delay duration using departure-informed features.

## 📉 Visualizations

The project generates five visualizations:

1. Flight delay rates by year.
2. Distribution of arrival delay duration.
3. Delay rates by airline.
4. Delay rates by scheduled departure hour.
5. Classification model recall comparison.

These visualizations support interpretation of historical trends and predictive performance.

## 💡 Key Findings

- Flight delay prediction is challenging when only predeparture scheduling information is available.
- Actual departure delay is a valuable predictor of arrival delay.
- Logistic regression and random forest provide different trade-offs between classification accuracy and delayed-flight detection.
- Departure-informed regression substantially improves delay-duration estimates compared with a simple baseline.
- Historical flight data can provide useful descriptive insights, but predictive performance depends on data availability and prediction timing.

## ⚠️ Ethical Considerations

This project considers several ethical concerns.

**Data Privacy:** The dataset contains operational flight information rather than passenger-level personal information.

**Fairness:** Airline and airport comparisons may be misleading without accounting for route characteristics, weather, and other operational differences.

**Data Quality:** Missing fields, schema inconsistencies, and sampling decisions can affect results.

**Model Transparency:** Predictions should be interpreted with appropriate uncertainty and should not be treated as guarantees.

**Responsible Use:** Predictive models should support human operational decisions rather than automatically penalize airlines, airports, or employees.

## 🚧 Limitations

- The dataset is sampled rather than a complete representation of all flights.
- Equal annual sampling does not represent differences in actual flight volume across years.
- The 2020 records were excluded from modeling pending data correction.
- Historical patterns may not fully represent future airline operations.
- Real-time weather and air traffic conditions are not included as independent predictors.
- Predeparture and departure-informed models use different chronological test periods.
- The models have not been validated in a live airline operating environment.

## 🚀 Future Improvements

Future work could include:

- Incorporating real-time weather information.
- Adding airport congestion and air traffic data.
- Testing gradient boosting and additional machine learning algorithms.
- Evaluating both prediction scenarios on identical test periods.
- Improving classification thresholds and probability calibration.
- Developing an interactive flight delay dashboard.
- Testing model performance on newer flight records.

## 📁 Project Files

The project contains:

- `airline_sample_150k.csv` — sampled flight dataset.
- `Airline_Delay_Milestone2_Analysis.ipynb` — data preparation, analysis, modeling, and evaluation.
- `Milestone2_WhitePaper.pdf` — project white paper, if uploaded.
- Generated figures and evaluation results, where included.

## ▶️ How to Run the Project

### Step 1: Download the repository

Clone the repository or download it as a ZIP file.

### Step 2: Install dependencies

```bash
pip install pandas numpy matplotlib scikit-learn jupyter
```

### Step 3: Prepare the dataset

Ensure `airline_sample_150k.csv` is available in the location expected by the notebook.

### Step 4: Open Jupyter Notebook

```bash
jupyter notebook
```

### Step 5: Execute the analysis

Open `Airline_Delay_Milestone2_Analysis.ipynb` and select **Run All Cells**.

The notebook performs data preparation, exploratory analysis, model training, evaluation, and visualization generation.

**Reproducibility note:** Confirm the dataset path in the notebook matches your local folder structure before running.

## 📚 References

Federal Aviation Administration. (n.d.). *ASPM: Analysis of delayed flights*. U.S. Department of Transportation. https://www.aspm.faa.gov/aspmhelp/index/ASPM__Analysis__Delayed_Flights.html

Kaggle. (n.d.). *Airline delay analysis* [Data set]. https://www.kaggle.com/datasets/sherrytp/airline-delay-analysis/data

Scikit-learn developers. (n.d.). *Scikit-learn: Machine learning in Python*. https://scikit-learn.org/stable/

## 👨‍💻 Author

**Dilip Kumar Balu**

Master of Science in Data Science  
Bellevue University


**Project:** Airline Delay Prediction and Operational Optimization

---

*This project was developed for academic purposes to demonstrate data preparation, exploratory analysis, predictive modeling, model evaluation, and responsible interpretation of data science results.*
