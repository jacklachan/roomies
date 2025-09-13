import json
import random
from datetime import datetime, timedelta

# Generate comprehensive sample data for Abba Accounts

# Sample NGOs
ngos = [
    {"id": "akshaya_patra", "name": "Akshaya Patra Foundation", "type": "Education & Nutrition"},
    {"id": "smile_foundation", "name": "Smile Foundation", "type": "Education & Healthcare"},
    {"id": "cry_foundation", "name": "Child Rights and You (CRY)", "type": "Child Rights"},
    {"id": "goonj", "name": "Goonj", "type": "Rural Development"},
    {"id": "teach_india", "name": "Teach for India", "type": "Education"}
]

# Sample Government Projects
govt_projects = [
    {"id": "swachh_bharat", "name": "Swachh Bharat Mission", "type": "Sanitation & Cleanliness"},
    {"id": "pm_jan_dhan", "name": "PM Jan Dhan Yojana", "type": "Financial Inclusion"},
    {"id": "digital_india", "name": "Digital India Initiative", "type": "Technology & Governance"},
    {"id": "skill_india", "name": "Skill India Mission", "type": "Employment & Training"},
    {"id": "ayushman_bharat", "name": "Ayushman Bharat", "type": "Healthcare"}
]

# Sample Colleges
colleges = [
    {"id": "iit_bangalore", "name": "Indian Institute of Technology Bangalore", "type": "Engineering"},
    {"id": "du", "name": "Delhi University", "type": "Multi-Disciplinary"},
    {"id": "iisc", "name": "Indian Institute of Science", "type": "Research"},
    {"id": "jnu", "name": "Jawaharlal Nehru University", "type": "Liberal Arts"},
    {"id": "rvce", "name": "RV College of Engineering", "type": "Engineering"}
]

# Generate financial data for each organization
def generate_financial_data(org_name, org_type):
    # Base amounts vary by organization type
    base_income = random.randint(50000000, 500000000)  # 5 crores to 50 crores
    
    income_data = {
        "total_income": base_income,
        "donations": int(base_income * 0.6),
        "government_grants": int(base_income * 0.25),
        "program_revenue": int(base_income * 0.10),
        "investment_income": int(base_income * 0.05)
    }
    
    expense_data = {
        "total_expenses": int(base_income * 0.85),
        "program_expenses": int(base_income * 0.70),
        "administrative_expenses": int(base_income * 0.10),
        "fundraising_expenses": int(base_income * 0.05)
    }
    
    # Monthly data for charts
    monthly_data = []
    for i in range(12):
        month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]
        monthly_data.append({
            "month": month_name,
            "income": random.randint(int(income_data["total_income"] * 0.05), 
                                   int(income_data["total_income"] * 0.15)),
            "expenses": random.randint(int(expense_data["total_expenses"] * 0.05), 
                                     int(expense_data["total_expenses"] * 0.15))
        })
    
    return {
        "income": income_data,
        "expenses": expense_data,
        "monthly_data": monthly_data
    }

# Generate salary data
def generate_salary_data(org_type):
    if org_type == "NGO":
        roles = [
            {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
            {"role": "Program Manager", "count": 5, "avg_salary": 800000},
            {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
            {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
            {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ]
    elif org_type == "Government":
        roles = [
            {"role": "Project Director", "count": 1, "avg_salary": 1500000},
            {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
            {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
            {"role": "Section Officer", "count": 15, "avg_salary": 600000},
            {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ]
    else:  # College
        roles = [
            {"role": "Principal/Director", "count": 1, "avg_salary": 2000000},
            {"role": "Professor", "count": 50, "avg_salary": 1200000},
            {"role": "Associate Professor", "count": 80, "avg_salary": 900000},
            {"role": "Assistant Professor", "count": 120, "avg_salary": 700000},
            {"role": "Administrative Staff", "count": 40, "avg_salary": 450000}
        ]
    
    return roles

# Generate fraud detection alerts
def generate_fraud_alerts():
    return [
        {
            "alert_id": "FD001",
            "type": "Expense Anomaly",
            "description": "Unusual spike in administrative expenses in March 2024",
            "severity": "Medium",
            "amount": "₹2,50,000",
            "status": "Under Review"
        },
        {
            "alert_id": "FD002", 
            "type": "Duplicate Payment",
            "description": "Potential duplicate vendor payment detected",
            "severity": "High",
            "amount": "₹85,000",
            "status": "Resolved"
        },
        {
            "alert_id": "FD003",
            "type": "Ratio Analysis",
            "description": "Program expense ratio below industry standard",
            "severity": "Low", 
            "amount": "₹0",
            "status": "Monitoring"
        }
    ]

# Generate development impact data
def generate_ngo_impact():
    return {
        "meals_served": 15750000,
        "schools_covered": 19500,
        "states_operational": 12,
        "cost_per_meal": 18.50,
        "kitchen_infrastructure": {
            "centralized_kitchens": 64,
            "school_kitchens": 150,
            "total_capacity": "5 million meals/day"
        }
    }

def generate_govt_impact():
    return {
        "beneficiaries_covered": 25000000,
        "districts_operational": 650,
        "states_covered": 28,
        "cost_per_beneficiary": 2500,
        "infrastructure": {
            "service_centers": 12000,
            "digital_platforms": 45,
            "total_reach": "Pan India"
        }
    }

def generate_college_impact():
    return {
        "students_enrolled": 25000,
        "faculty_count": 850,
        "research_projects": 450,
        "cost_per_student": 120000,
        "infrastructure": {
            "buildings": 25,
            "laboratories": 120,
            "library_books": 250000
        }
    }

# Create comprehensive data structure
abba_accounts_data = {
    "organizations": {
        "ngos": [],
        "government_projects": [],
        "colleges": []
    }
}

# Generate data for NGOs
for ngo in ngos:
    financial_data = generate_financial_data(ngo["name"], "NGO")
    salary_data = generate_salary_data("NGO")
    fraud_alerts = generate_fraud_alerts()
    impact_data = generate_ngo_impact()
    
    ngo_data = {
        **ngo,
        "financial": financial_data,
        "salaries": salary_data,
        "fraud_alerts": fraud_alerts,
        "impact": impact_data
    }
    abba_accounts_data["organizations"]["ngos"].append(ngo_data)

# Generate data for Government Projects  
for project in govt_projects:
    financial_data = generate_financial_data(project["name"], "Government")
    salary_data = generate_salary_data("Government") 
    fraud_alerts = generate_fraud_alerts()
    impact_data = generate_govt_impact()
    
    project_data = {
        **project,
        "financial": financial_data,
        "salaries": salary_data,
        "fraud_alerts": fraud_alerts,
        "impact": impact_data
    }
    abba_accounts_data["organizations"]["government_projects"].append(project_data)

# Generate data for Colleges
for college in colleges:
    financial_data = generate_financial_data(college["name"], "College")
    salary_data = generate_salary_data("College")
    fraud_alerts = generate_fraud_alerts()
    impact_data = generate_college_impact()
    
    college_data = {
        **college,
        "financial": financial_data,
        "salaries": salary_data,
        "fraud_alerts": fraud_alerts,
        "impact": impact_data
    }
    abba_accounts_data["organizations"]["colleges"].append(college_data)

# Save data to JSON
with open('abba_accounts_data.json', 'w') as f:
    json.dump(abba_accounts_data, f, indent=2)

print("Sample data generated successfully!")
print(f"NGOs: {len(abba_accounts_data['organizations']['ngos'])}")
print(f"Government Projects: {len(abba_accounts_data['organizations']['government_projects'])}")
print(f"Colleges: {len(abba_accounts_data['organizations']['colleges'])}")

# Display sample structure
print("\nSample NGO Data Structure:")
print(json.dumps(abba_accounts_data["organizations"]["ngos"][0], indent=2)[:1000] + "...")
