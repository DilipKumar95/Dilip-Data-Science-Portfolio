# 👶 Childcare Costs and Affordability Across the United States

**A data-driven examination of childcare expenses, affordability, and regional disparities in the U.S.**

---

## 📌 Project Overview

This project analyzes childcare costs and affordability across the United States using the **National Database of Childcare Prices (NDCP)**. The dataset contains over **34,000 county-level records (2008–2018)**, capturing weekly childcare costs by:

- Provider type (Center-based, Family-based)  
- Child age group (Infant, Toddler, Preschool, School Age)  

It also includes socioeconomic indicators such as **median household income and poverty rates**, enabling analysis of how childcare expenses impact families across different regions.  

**Goal:** Identify **national trends, regional disparities, and affordability challenges** related to childcare costs.

---

## 🎯 Objectives

- Analyze childcare price trends across U.S. counties  
- Compare childcare costs across age groups and provider types  
- Evaluate affordability by comparing childcare expenses with household income  
- Identify regions where childcare costs burden families the most  
- Present findings using multiple data visualization formats  

---

## 📊 Dataset

**Source:** National Database of Childcare Prices (NDCP)  
**Coverage:** United States county-level data (2008–2018)  

### Key Variables

- Weekly childcare cost by age group  
- Provider type (center-based / family-based)  
- County and state information  
- Median household income  
- Poverty rate  

---

## 🛠 Data Preparation

Data preparation and analysis were performed using **Python and Pandas**.  

Steps included:

- Removing missing and flagged/imputed values  
- Selecting the **most recent year available for each county**  
- Calculating **average weekly childcare costs**  
- Estimating **annual childcare expenses**  
- Comparing childcare costs with **median household income** to measure affordability  

---

## 🔍 Key Findings

- **Infant care is the most expensive childcare category**, especially for center-based providers.  
- Average weekly costs:
  - Infant care: **$120 – $153**  
  - Toddler care: **$109 – $140**  
  - Preschool care: **$105 – $125**  
  - School-age care: **$85 – $106**  
- In high-cost counties (e.g., New York, Minnesota, Washington), **infant care exceeds $350 per week**  
- In low-income areas, families may spend **over 50% of their income on childcare**  

These findings highlight **affordability challenges for working families**.

---

## 📊 Visualization Mediums

### 1️⃣ PowerPoint Presentation
Designed for **policymakers and decision-makers**:

- Key findings summary  
- Clear charts and maps  
- Policy-focused insights  

### 2️⃣ Infographic
Designed for **parents, advocacy groups, and the public**:

- Simplified visuals  
- Key statistics  
- Easy-to-share format  

### 3️⃣ Interactive Dashboard (Tableau)
Allows users to explore the data interactively:

- Filter by **state** and **age group**  
- Compare **provider types**  
- Explore affordability metrics  

Supports deeper analysis for researchers, policy analysts, and grant writers.

---

## 🎨 Dashboard Features

- Interactive filters  
- State-level comparisons  
- Cost trends visualization  
- Affordability indicators  
- Hover tooltips with detailed metrics  

---

## 🖌 Design Decisions

### Color Scheme
- Green-to-red scale for childcare cost levels:  
  - Green = Lower costs  
  - Red = Higher costs  

### Visual Clarity
- Minimal text for readability  
- Clearly labeled charts  
- Clean layouts to avoid clutter  

### Layout
- Organized charts and filters  
- Responsive design for different screen sizes  
- Easy navigation for users  

---

## ⚖ Ethical Considerations

### Data Transformations
- Removed imputed or flagged records  
- Used most recent year per county  

### Privacy Compliance
- Dataset is **public, aggregated, and anonymized**  

### Transparency
- Assumptions clearly documented, including **median household income as a proxy for family income**  

### Risk Mitigation
- Clear labels and disclaimers  
- Analysis focuses on **systemic economic patterns rather than individuals**  

---

## 🏛 Policy Recommendations

- Expand **childcare assistance programs**  
- Increase funding for **high-cost counties**  
- Encourage **employer-supported childcare programs**  
- Invest in the **childcare workforce**  
- Support **family-based and community childcare options**  
- Implement **income-based sliding scale childcare fees**  
- Improve **data collection and monitoring of childcare costs**  

---

## 🛠 Tools & Technologies
 
- Tableau  
- PowerPoint  
- Data Visualization Techniques  

---

## 📂 Project Structure

```

Childcare-Cost-Affordability/
│
├── Tableau          
├── appendix/       
├── data/     
└── README.md

```

### Data Source and Files

**Primary source:** National Database of Childcare Prices (NDCP), U.S. Department of Labor, Women's Bureau.

Official resource: https://www.dol.gov/agencies/wb/topics/childcare

The analysis uses two Excel datasets:

- **Original dataset:** `nationaldatabaseofchildcareprices.xlsx` — contains the original childcare pricing and related socioeconomic data.
- **Cleaned dataset:** `Project_Final_Dataset_Cleaned.xlsx` — contains selected fields used to develop the Tableau visualizations.

The project focuses on historical county-level childcare affordability patterns in the United States from 2008 to 2018.

---
## 🚀 How to Explore This Project

### Prerequisites

- Microsoft Excel or compatible spreadsheet software
- Tableau Desktop or Tableau Public with support for packaged Tableau workbooks (`.twbx`)
- Microsoft PowerPoint or compatible presentation software

### Step 1: Download the Project

Visit the GitHub repository:

https://github.com/DilipKumar95/Dilip-Data-Science-Portfolio

Download the repository as a ZIP file or clone it using Git.

Open the `Childcare-Cost-Affordability` folder.

### Step 2: Review the Data

Open the `data` folder and examine the original and cleaned Excel datasets.

The datasets contain geographic, household income, and childcare cost information used for the visualizations.

### Step 3: Explore Tableau Visualizations

Open the `Tableau` folder.

The project includes three packaged Tableau workbooks:

- `DilipKumarBalu_Medium-1_PPTVisuals.twbx`
- `DilipKumarBalu_Medium-2_InfographicVisuals.twbx`
- `DilipKumarBalu_Medium-3_TableauDashboard.twbx`

Open the workbooks in Tableau to explore the charts and interactive dashboard.

### Step 4: Explore the Dashboard

Use the available dashboard filters to investigate childcare costs and affordability across different geographic areas, provider types, and care types.

### Step 5: Review Supporting Materials

Explore the `appendix` folder for presentation files, supporting documentation, and additional visual materials.

**Note:** This is primarily a Tableau visualization project. There is no Python script or Jupyter notebook required to view the completed dashboards.
---

## 👤 Author

**Dilip Kumar Balu**  
Applied Data Science Projects  

**Tools Used:** Tableau, PowerPoint, Data Visualization Techniques
