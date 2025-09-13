// SIMPLE SOLUTION: Reload page when ABBA logo is clicked
document.addEventListener('DOMContentLoaded', function() {
    const abbaLogo = document.querySelector('.nav__brand') || 
                     document.querySelector('h1') ||
                     document.querySelector('[class*="brand"]');
    
    if (abbaLogo) {
        abbaLogo.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('ABBA logo clicked - going home...');
            
            // Reload the page to get back to initial state
            window.location.reload();
        });
        
        // Make sure it looks clickable
        if (abbaLogo.tagName !== 'A') {
            abbaLogo.style.cursor = 'pointer';
        }
    }
});
const organizationData = {
  "organizations": {
    "ngos": [
      {
        "id": "akshaya_patra",
        "name": "Akshaya Patra Foundation",
        "type": "Education & Nutrition",
        "financial": {
          "income": {
            "total_income": 379806594,
            "donations": 227883956,
            "government_grants": 94951648,
            "program_revenue": 37980659,
            "investment_income": 18990329
          },
          "expenses": {
            "total_expenses": 322835604,
            "program_expenses": 265864615,
            "administrative_expenses": 37980659,
            "fundraising_expenses": 18990329
          },
          "monthly_data": [
            {"month": "Jan", "income": 48582864, "expenses": 21113388},
            {"month": "Feb", "income": 44283829, "expenses": 31682734},
            {"month": "Mar", "income": 41526473, "expenses": 18299223},
            {"month": "Apr", "income": 23354105, "expenses": 26210253},
            {"month": "May", "income": 48300769, "expenses": 45885509},
            {"month": "Jun", "income": 25524754, "expenses": 17146542},
            {"month": "Jul", "income": 55511469, "expenses": 34338545},
            {"month": "Aug", "income": 40704711, "expenses": 21560794},
            {"month": "Sep", "income": 23370101, "expenses": 19674518},
            {"month": "Oct", "income": 41606350, "expenses": 45128435},
            {"month": "Nov", "income": 22785801, "expenses": 26162374},
            {"month": "Dec", "income": 45331395, "expenses": 29664760}
          ]
        },
        "salaries": [
          {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
          {"role": "Program Manager", "count": 5, "avg_salary": 800000},
          {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
          {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
          {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ],
        "fraud_alerts": [
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
          }
        ],
        "impact": {
          "meals_served": 15750000,
          "schools_covered": 19500,
          "states_operational": 12,
          "cost_per_meal": 18.5,
          "kitchen_infrastructure": {
            "centralized_kitchens": 64,
            "school_kitchens": 150,
            "total_capacity": "5 million meals/day"
          }
        }
      },
      {
        "id": "smile_foundation",
        "name": "Smile Foundation",
        "type": "Education & Healthcare",
        "financial": {
          "income": {
            "total_income": 52381609,
            "donations": 31428965,
            "government_grants": 13095402,
            "program_revenue": 5238160,
            "investment_income": 2619080
          },
          "expenses": {
            "total_expenses": 44524367,
            "program_expenses": 36667126,
            "administrative_expenses": 5238160,
            "fundraising_expenses": 2619080
          },
          "monthly_data": [
            {"month": "Jan", "income": 3408435, "expenses": 5817631},
            {"month": "Feb", "income": 5046587, "expenses": 4337127},
            {"month": "Mar", "income": 3553617, "expenses": 5672529},
            {"month": "Apr", "income": 6065749, "expenses": 6447701},
            {"month": "May", "income": 5672838, "expenses": 6385771},
            {"month": "Jun", "income": 5302200, "expenses": 2540937},
            {"month": "Jul", "income": 7785478, "expenses": 3954623},
            {"month": "Aug", "income": 6227256, "expenses": 4239269},
            {"month": "Sep", "income": 3447088, "expenses": 3413760},
            {"month": "Oct", "income": 7476418, "expenses": 5391080},
            {"month": "Nov", "income": 6625465, "expenses": 5874667},
            {"month": "Dec", "income": 5330540, "expenses": 2503128}
          ]
        },
        "salaries": [
          {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
          {"role": "Program Manager", "count": 5, "avg_salary": 800000},
          {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
          {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
          {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "FD003",
            "type": "Ratio Analysis",
            "description": "Program expense ratio below industry standard",
            "severity": "Low",
            "amount": "₹0",
            "status": "Monitoring"
          }
        ],
        "impact": {
          "beneficiaries_served": 12500000,
          "programs_active": 850,
          "states_operational": 18,
          "cost_per_beneficiary": 22.8,
          "infrastructure": {
            "learning_centers": 350,
            "health_centers": 125,
            "total_reach": "Rural and Urban India"
          }
        }
      },
      
      {
        "id": "cry_foundation",
        "name": "Child Rights and You (CRY)",
        "type": "Child Rights",
        "financial": {
          "income": {
            "total_income": 209435915,
            "donations": 125661549,
            "government_grants": 52358978,
            "program_revenue": 20943591,
            "investment_income": 10471795
          },
          "expenses": {
            "total_expenses": 178020527,
            "program_expenses": 146605140,
            "administrative_expenses": 20943591,
            "fundraising_expenses": 10471795
          },
          "monthly_data": [
            {"month": "Jan", "income": 31356957, "expenses": 18894638},
            {"month": "Feb", "income": 15005019, "expenses": 15601397},
            {"month": "Mar", "income": 11045865, "expenses": 13075056},
            {"month": "Apr", "income": 22979101, "expenses": 15262034},
            {"month": "May", "income": 21674599, "expenses": 13796677},
            {"month": "Jun", "income": 10639536, "expenses": 16928627},
            {"month": "Jul", "income": 26780319, "expenses": 17858216},
            {"month": "Aug", "income": 27412798, "expenses": 22940534},
            {"month": "Sep", "income": 20541220, "expenses": 24953020},
            {"month": "Oct", "income": 25000989, "expenses": 26170801},
            {"month": "Nov", "income": 30627502, "expenses": 17072159},
            {"month": "Dec", "income": 27486031, "expenses": 15996300}
          ]
        },
        "salaries": [
          {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
          {"role": "Program Manager", "count": 5, "avg_salary": 800000},
          {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
          {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
          {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "FD001",
            "type": "Expense Anomaly",
            "description": "Unusual spike in administrative expenses in March 2024",
            "severity": "Medium",
            "amount": "₹2,50,000",
            "status": "Under Review"
          }
        ],
        "impact": {
          "children_reached": 2800000,
          "programs_active": 450,
          "states_operational": 19,
          "cost_per_child": 75.5,
          "infrastructure": {
            "community_centers": 180,
            "learning_centers": 320,
            "total_reach": "Pan India Rural Focus"
          }
        }
      },
      {
        "id": "goonj",
        "name": "Goonj",
        "type": "Rural Development",
        "financial": {
          "income": {
            "total_income": 196037435,
            "donations": 117622461,
            "government_grants": 49009358,
            "program_revenue": 19603743,
            "investment_income": 9801871
          },
          "expenses": {
            "total_expenses": 166631819,
            "program_expenses": 137226204,
            "administrative_expenses": 19603743,
            "fundraising_expenses": 9801871
          },
          "monthly_data": [
            {"month": "Jan", "income": 11017614, "expenses": 13149406},
            {"month": "Feb", "income": 21342289, "expenses": 24439043},
            {"month": "Mar", "income": 19499233, "expenses": 17110071},
            {"month": "Apr", "income": 25461939, "expenses": 23234479},
            {"month": "May", "income": 27042858, "expenses": 16683431},
            {"month": "Jun", "income": 26558688, "expenses": 21485415},
            {"month": "Jul", "income": 17077853, "expenses": 11958977},
            {"month": "Aug", "income": 15507125, "expenses": 21346451},
            {"month": "Sep", "income": 12459080, "expenses": 22418121},
            {"month": "Oct", "income": 23074431, "expenses": 12680619},
            {"month": "Nov", "income": 18919303, "expenses": 11429748},
            {"month": "Dec", "income": 24737158, "expenses": 11634235}
          ]
        },
        "salaries": [
          {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
          {"role": "Program Manager", "count": 5, "avg_salary": 800000},
          {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
          {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
          {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "FD002",
            "type": "Duplicate Payment",
            "description": "Potential duplicate vendor payment detected",
            "severity": "High",
            "amount": "₹85,000",
            "status": "Resolved"
          }
        ],
        "impact": {
          "villages_covered": 8500,
          "people_reached": 3200000,
          "states_operational": 23,
          "cost_per_person": 52.1,
          "infrastructure": {
            "collection_centers": 240,
            "processing_units": 45,
            "total_reach": "Rural India Focus"
          }
        }
      },
      {
        "id": "teach_india",
        "name": "Teach for India",
        "type": "Education",
        "financial": {
          "income": {
            "total_income": 148582854,
            "donations": 89149712,
            "government_grants": 37145713,
            "program_revenue": 14858285,
            "investment_income": 7429142
          },
          "expenses": {
            "total_expenses": 126295425,
            "program_expenses": 104007997,
            "administrative_expenses": 14858285,
            "fundraising_expenses": 7429142
          },
          "monthly_data": [
            {"month": "Jan", "income": 9132614, "expenses": 9031425},
            {"month": "Feb", "income": 17537560, "expenses": 14482038},
            {"month": "Mar", "income": 14002749, "expenses": 15358424},
            {"month": "Apr", "income": 17728899, "expenses": 11773177},
            {"month": "May", "income": 11410029, "expenses": 11992428},
            {"month": "Jun", "income": 16890167, "expenses": 7322033},
            {"month": "Jul", "income": 10318908, "expenses": 8854073},
            {"month": "Aug", "income": 8025717, "expenses": 12226341},
            {"month": "Sep", "income": 9787171, "expenses": 12927914},
            {"month": "Oct", "income": 14742797, "expenses": 10391759},
            {"month": "Nov", "income": 12485477, "expenses": 6583316},
            {"month": "Dec", "income": 20032110, "expenses": 16147074}
          ]
        },
        "salaries": [
          {"role": "Executive Director", "count": 1, "avg_salary": 1200000},
          {"role": "Program Manager", "count": 5, "avg_salary": 800000},
          {"role": "Field Coordinator", "count": 15, "avg_salary": 500000},
          {"role": "Administrative Staff", "count": 8, "avg_salary": 350000},
          {"role": "Support Staff", "count": 20, "avg_salary": 250000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "FD003",
            "type": "Ratio Analysis",
            "description": "Program expense ratio below industry standard",
            "severity": "Low",
            "amount": "₹0",
            "status": "Monitoring"
          }
        ],
        "impact": {
          "students_reached": 850000,
          "teachers_trained": 4500,
          "schools_partnered": 320,
          "cost_per_student": 175,
          "infrastructure": {
            "training_centers": 12,
            "partner_schools": 320,
            "total_reach": "Urban Low-Income Schools"
          }
        }
      }
    ],
    "government_projects": [
      {
        "id": "swachh_bharat",
        "name": "Swachh Bharat Mission",
        "type": "Sanitation & Cleanliness",
        "financial": {
          "income": {
            "total_income": 177681648,
            "central_funding": 106608988,
            "state_funding": 44420412,
            "corporate_csr": 17768164,
            "international_aid": 8884082
          },
          "expenses": {
            "total_expenses": 151029400,
            "program_expenses": 124377153,
            "administrative_expenses": 17768164,
            "monitoring_expenses": 8884082
          },
          "monthly_data": [
            {"month": "Jan", "income": 17871963, "expenses": 17859876},
            {"month": "Feb", "income": 18298660, "expenses": 17456787},
            {"month": "Mar", "income": 20560195, "expenses": 10392510},
            {"month": "Apr", "income": 11029943, "expenses": 7931350},
            {"month": "May", "income": 12363824, "expenses": 22277398},
            {"month": "Jun", "income": 22669793, "expenses": 18349530},
            {"month": "Jul", "income": 12076371, "expenses": 20372923},
            {"month": "Aug", "income": 25983419, "expenses": 14145472},
            {"month": "Sep", "income": 12252112, "expenses": 16919787},
            {"month": "Oct", "income": 24124696, "expenses": 10452237},
            {"month": "Nov", "income": 19258028, "expenses": 15469322},
            {"month": "Dec", "income": 24183163, "expenses": 17839900}
          ]
        },
        "salaries": [
          {"role": "Project Director", "count": 1, "avg_salary": 1500000},
          {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
          {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
          {"role": "Section Officer", "count": 15, "avg_salary": 600000},
          {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "GD001",
            "type": "Procurement Irregularity",
            "description": "Unusual vendor selection pattern in toilet construction contracts",
            "severity": "High",
            "amount": "₹15,00,000",
            "status": "Under Investigation"
          }
        ],
        "impact": {
          "toilets_built": 110000000,
          "districts_covered": 704,
          "states_covered": 36,
          "waste_processed_daily": "70000 tonnes",
          "infrastructure": {
            "solid_waste_plants": 1200,
            "liquid_waste_plants": 800,
            "community_toilets": 650000
          }
        }
      },
      {
        "id": "pm_jan_dhan",
        "name": "PM Jan Dhan Yojana",
        "type": "Financial Inclusion",
        "financial": {
          "income": {
            "total_income": 373533804,
            "central_funding": 224120282,
            "state_funding": 93383451,
            "corporate_csr": 37353380,
            "international_aid": 18676690
          },
          "expenses": {
            "total_expenses": 317503733,
            "program_expenses": 261473662,
            "administrative_expenses": 37353380,
            "monitoring_expenses": 18676690
          },
          "monthly_data": [
            {"month": "Jan", "income": 53741364, "expenses": 20824486},
            {"month": "Feb", "income": 22528583, "expenses": 38305250},
            {"month": "Mar", "income": 27430905, "expenses": 29743306},
            {"month": "Apr", "income": 48931163, "expenses": 22277865},
            {"month": "May", "income": 23459695, "expenses": 34859954},
            {"month": "Jun", "income": 45308755, "expenses": 38496706},
            {"month": "Jul", "income": 29223575, "expenses": 33438849},
            {"month": "Aug", "income": 36020621, "expenses": 41022836},
            {"month": "Sep", "income": 38713542, "expenses": 29433216},
            {"month": "Oct", "income": 37582001, "expenses": 43431752},
            {"month": "Nov", "income": 20216861, "expenses": 33887060},
            {"month": "Dec", "income": 38632827, "expenses": 30558283}
          ]
        },
        "salaries": [
          {"role": "Project Director", "count": 1, "avg_salary": 1500000},
          {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
          {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
          {"role": "Section Officer", "count": 15, "avg_salary": 600000},
          {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "GD002",
            "type": "Account Opening Irregularity",
            "description": "Suspicious pattern in zero-balance account openings",
            "severity": "Medium",
            "amount": "₹5,75,000",
            "status": "Under Review"
          }
        ],
        "impact": {
          "accounts_opened": 487000000,
          "districts_covered": 739,
          "states_covered": 36,
          "deposits_mobilized": "₹1,85,000 crores",
          "infrastructure": {
            "banking_points": 460000,
            "rural_branches": 52000,
            "digital_transactions": "98% of total"
          }
        }
      },
      {
        "id": "digital_india",
        "name": "Digital India Initiative",
        "type": "Technology & Governance",
        "financial": {
          "income": {
            "total_income": 69920072,
            "central_funding": 41952043,
            "state_funding": 17480018,
            "corporate_csr": 6992007,
            "international_aid": 3496003
          },
          "expenses": {
            "total_expenses": 59432061,
            "program_expenses": 48944050,
            "administrative_expenses": 6992007,
            "monitoring_expenses": 3496003
          },
          "monthly_data": [
            {"month": "Jan", "income": 5922578, "expenses": 3889256},
            {"month": "Feb", "income": 9990994, "expenses": 5713047},
            {"month": "Mar", "income": 6446309, "expenses": 4211236},
            {"month": "Apr", "income": 10008118, "expenses": 7478543},
            {"month": "May", "income": 5576097, "expenses": 6106593},
            {"month": "Jun", "income": 10308676, "expenses": 3064404},
            {"month": "Jul", "income": 3555839, "expenses": 8471928},
            {"month": "Aug", "income": 5360146, "expenses": 7386523},
            {"month": "Sep", "income": 8546020, "expenses": 4200547},
            {"month": "Oct", "income": 6445584, "expenses": 5304938},
            {"month": "Nov", "income": 9922525, "expenses": 8378470},
            {"month": "Dec", "income": 6953198, "expenses": 8700136}
          ]
        },
        "salaries": [
          {"role": "Project Director", "count": 1, "avg_salary": 1500000},
          {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
          {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
          {"role": "Section Officer", "count": 15, "avg_salary": 600000},
          {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ],
        "fraud_alerts": [],
        "impact": {
          "digital_services_launched": 450,
          "districts_digitized": 720,
          "states_covered": 36,
          "citizen_transactions_daily": "12 million",
          "infrastructure": {
            "common_service_centers": 400000,
            "wifi_hotspots": 250000,
            "digital_literacy_trained": "50 million citizens"
          }
        }
      },
      {
        "id": "skill_india",
        "name": "Skill India Mission",
        "type": "Employment & Training",
        "financial": {
          "income": {
            "total_income": 477256019,
            "central_funding": 286353611,
            "state_funding": 119314004,
            "corporate_csr": 47725601,
            "international_aid": 23862800
          },
          "expenses": {
            "total_expenses": 405667616,
            "program_expenses": 334079213,
            "administrative_expenses": 47725601,
            "monitoring_expenses": 23862800
          },
          "monthly_data": [
            {"month": "Jan", "income": 67067106, "expenses": 60322469},
            {"month": "Feb", "income": 37228843, "expenses": 49999235},
            {"month": "Mar", "income": 24948659, "expenses": 24514156},
            {"month": "Apr", "income": 44137742, "expenses": 51392563},
            {"month": "May", "income": 36814435, "expenses": 48756940},
            {"month": "Jun", "income": 38397565, "expenses": 25815486},
            {"month": "Jul", "income": 25840570, "expenses": 23645273},
            {"month": "Aug", "income": 63792184, "expenses": 32218818},
            {"month": "Sep", "income": 49545224, "expenses": 24405217},
            {"month": "Oct", "income": 70158444, "expenses": 51962260},
            {"month": "Nov", "income": 25187232, "expenses": 35641382},
            {"month": "Dec", "income": 36780058, "expenses": 56111012}
          ]
        },
        "salaries": [
          {"role": "Project Director", "count": 1, "avg_salary": 1500000},
          {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
          {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
          {"role": "Section Officer", "count": 15, "avg_salary": 600000},
          {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "GD003",
            "type": "Training Certificate Fraud",
            "description": "Irregular certification patterns detected in certain training centers",
            "severity": "High",
            "amount": "₹25,00,000",
            "status": "Under Investigation"
          }
        ],
        "impact": {
          "people_trained": 12500000,
          "districts_covered": 700,
          "states_covered": 36,
          "employment_rate": "68% of trained candidates",
          "infrastructure": {
            "training_centers": 15000,
            "sector_skill_councils": 37,
            "industry_partnerships": 2500
          }
        }
      },
      {
        "id": "ayushman_bharat",
        "name": "Ayushman Bharat",
        "type": "Healthcare",
        "financial": {
          "income": {
            "total_income": 247319799,
            "central_funding": 148391879,
            "state_funding": 61829949,
            "corporate_csr": 24731979,
            "international_aid": 12365989
          },
          "expenses": {
            "total_expenses": 210221829,
            "program_expenses": 173123859,
            "administrative_expenses": 24731979,
            "monitoring_expenses": 12365989
          },
          "monthly_data": [
            {"month": "Jan", "income": 31403244, "expenses": 11105163},
            {"month": "Feb", "income": 25449524, "expenses": 21142125},
            {"month": "Mar", "income": 29814806, "expenses": 21271365},
            {"month": "Apr", "income": 14106950, "expenses": 26462495},
            {"month": "May", "income": 18719044, "expenses": 12293183},
            {"month": "Jun", "income": 23020749, "expenses": 18278781},
            {"month": "Jul", "income": 21327286, "expenses": 28639327},
            {"month": "Aug", "income": 32612031, "expenses": 11427295},
            {"month": "Sep", "income": 26463776, "expenses": 20123726},
            {"month": "Oct", "income": 15548457, "expenses": 17694851},
            {"month": "Nov", "income": 32269211, "expenses": 18469274},
            {"month": "Dec", "income": 21633991, "expenses": 19313536}
          ]
        },
        "salaries": [
          {"role": "Project Director", "count": 1, "avg_salary": 1500000},
          {"role": "Deputy Director", "count": 3, "avg_salary": 1200000},
          {"role": "Assistant Director", "count": 8, "avg_salary": 900000},
          {"role": "Section Officer", "count": 15, "avg_salary": 600000},
          {"role": "Assistant", "count": 25, "avg_salary": 400000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "GD004",
            "type": "Hospital Billing Fraud",
            "description": "Suspicious billing patterns in empaneled hospitals",
            "severity": "High",
            "amount": "₹45,00,000",
            "status": "Under Investigation"
          }
        ],
        "impact": {
          "beneficiaries_covered": 550000000,
          "hospitals_empaneled": 25000,
          "states_covered": 36,
          "treatments_covered": "1400+ procedures",
          "infrastructure": {
            "health_wellness_centers": 150000,
            "ayushman_cards_issued": 230000000,
            "claim_settlements": "₹65,000 crores"
          }
        }
      }
    ],
    "colleges": [
      {
        "id": "iiit_bangalore",
        "name": "Indian Institute  information Technology Bangalore",
        "type": "Engineering",
        "financial": {
          "income": {
            "total_income": 287422626,
            "student_fees": 172453575,
            "government_grants": 71855656,
            "research_funding": 28742262,
            "endowment_income": 14371131
          },
          "expenses": {
            "total_expenses": 244309232,
            "faculty_salaries": 146585539,
            "infrastructure": 73292769,
            "research_expenses": 14665847,
            "administrative_expenses": 9765078
          },
          "monthly_data": [
            {"month": "Jan", "income": 16788324, "expenses": 19036594},
            {"month": "Feb", "income": 36776113, "expenses": 22938193},
            {"month": "Mar", "income": 16696185, "expenses": 35544241},
            {"month": "Apr", "income": 28587198, "expenses": 17204167},
            {"month": "May", "income": 35661956, "expenses": 23724534},
            {"month": "Jun", "income": 37096781, "expenses": 24210419},
            {"month": "Jul", "income": 19635559, "expenses": 30318422},
            {"month": "Aug", "income": 31008218, "expenses": 25845759},
            {"month": "Sep", "income": 22964992, "expenses": 25720052},
            {"month": "Oct", "income": 39009283, "expenses": 15415254},
            {"month": "Nov", "income": 31361660, "expenses": 24248903},
            {"month": "Dec", "income": 28376379, "expenses": 29388053}
          ]
        },
        "salaries": [
          {"role": "Director", "count": 1, "avg_salary": 2500000},
          {"role": "Professor", "count": 450, "avg_salary": 1800000},
          {"role": "Associate Professor", "count": 320, "avg_salary": 1400000},
          {"role": "Assistant Professor", "count": 280, "avg_salary": 1000000},
          {"role": "Administrative Staff", "count": 180, "avg_salary": 650000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "CD001",
            "type": "Equipment Purchase",
            "description": "Inflated prices detected in laboratory equipment procurement",
            "severity": "Medium",
            "amount": "₹8,75,000",
            "status": "Under Review"
          }
        ],
        "impact": {
          "students_enrolled": 12000,
          "faculty_count": 1051,
          "research_projects": 850,
          "cost_per_student": 203576,
          "infrastructure": {
            "buildings": 45,
            "laboratories": 180,
            "library_books": 450000,
            "placement_rate": "98%"
          }
        }
      },
      {
        "id": "du",
        "name": "Delhi University",
        "type": "Multi-Disciplinary",
        "financial": {
          "income": {
            "total_income": 325334485,
            "student_fees": 195200691,
            "government_grants": 81333621,
            "research_funding": 32533448,
            "endowment_income": 16266724
          },
          "expenses": {
            "total_expenses": 276534312,
            "faculty_salaries": 165920587,
            "infrastructure": 82960293,
            "research_expenses": 16600155,
            "administrative_expenses": 11053276
          },
          "monthly_data": [
            {"month": "Jan", "income": 32174863, "expenses": 24211486},
            {"month": "Feb", "income": 45602540, "expenses": 16525233},
            {"month": "Mar", "income": 32930937, "expenses": 38899633},
            {"month": "Apr", "income": 29138771, "expenses": 31421510},
            {"month": "May", "income": 44148031, "expenses": 36593136},
            {"month": "Jun", "income": 46556436, "expenses": 28191480},
            {"month": "Jul", "income": 34299843, "expenses": 35574821},
            {"month": "Aug", "income": 30154634, "expenses": 31023645},
            {"month": "Sep", "income": 22721708, "expenses": 14090112},
            {"month": "Oct", "income": 36950859, "expenses": 33736289},
            {"month": "Nov", "income": 44974504, "expenses": 32205608},
            {"month": "Dec", "income": 19164140, "expenses": 20198141}
          ]
        },
        "salaries": [
          {"role": "Vice Chancellor", "count": 1, "avg_salary": 2200000},
          {"role": "Professor", "count": 850, "avg_salary": 1600000},
          {"role": "Associate Professor", "count": 1200, "avg_salary": 1200000},
          {"role": "Assistant Professor", "count": 1500, "avg_salary": 850000},
          {"role": "Administrative Staff", "count": 420, "avg_salary": 550000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "CD002",
            "type": "Examination Fee Discrepancy",
            "description": "Irregular patterns in examination fee collection",
            "severity": "Low",
            "amount": "₹2,25,000",
            "status": "Monitoring"
          }
        ],
        "impact": {
          "students_enrolled": 132000,
          "faculty_count": 3970,
          "research_projects": 1200,
          "cost_per_student": 20948,
          "infrastructure": {
            "colleges": 91,
            "departments": 86,
            "library_books": 1500000,
            "placement_rate": "85%"
          }
        }
      },
      {
        "id": "iisc",
        "name": "Indian Institute of Science",
        "type": "Research",
        "financial": {
          "income": {
            "total_income": 318755358,
            "research_grants": 191253214,
            "government_funding": 79688839,
            "industry_collaboration": 31875535,
            "endowment_income": 15937767
          },
          "expenses": {
            "total_expenses": 270942054,
            "research_expenses": 162565232,
            "faculty_salaries": 81473587,
            "infrastructure": 16256523,
            "administrative_expenses": 10646711
          },
          "monthly_data": [
            {"month": "Jan", "income": 32759377, "expenses": 37949778},
            {"month": "Feb", "income": 33712076, "expenses": 21752273},
            {"month": "Mar", "income": 21130774, "expenses": 30408093},
            {"month": "Apr", "income": 32261118, "expenses": 21546629},
            {"month": "May", "income": 37969638, "expenses": 30074074},
            {"month": "Jun", "income": 43437694, "expenses": 19041103},
            {"month": "Jul", "income": 41390924, "expenses": 25923970},
            {"month": "Aug", "income": 35438808, "expenses": 30433005},
            {"month": "Sep", "income": 30144888, "expenses": 18326355},
            {"month": "Oct", "income": 30911038, "expenses": 15267414},
            {"month": "Nov", "income": 33650787, "expenses": 26966916},
            {"month": "Dec", "income": 29654945, "expenses": 20050209}
          ]
        },
        "salaries": [
          {"role": "Director", "count": 1, "avg_salary": 2800000},
          {"role": "Professor", "count": 280, "avg_salary": 2200000},
          {"role": "Associate Professor", "count": 180, "avg_salary": 1800000},
          {"role": "Assistant Professor", "count": 150, "avg_salary": 1400000},
          {"role": "Research Staff", "count": 320, "avg_salary": 950000}
        ],
        "fraud_alerts": [],
        "impact": {
          "research_scholars": 3200,
          "faculty_count": 931,
          "research_projects": 2400,
          "cost_per_scholar": 84669,
          "infrastructure": {
            "research_centers": 45,
            "laboratories": 350,
            "patents_filed": "1200+ annually",
            "publications": "4500+ annually"
          }
        }
      },
      {
        "id": "jnu",
        "name": "Jawaharlal Nehru University",
        "type": "Liberal Arts",
        "financial": {
          "income": {
            "total_income": 96303265,
            "government_grants": 57781959,
            "student_fees": 24075816,
            "research_funding": 9630326,
            "other_income": 4815163
          },
          "expenses": {
            "total_expenses": 81857775,
            "faculty_salaries": 49114665,
            "infrastructure": 20464443,
            "research_expenses": 8185777,
            "administrative_expenses": 4092888
          },
          "monthly_data": [
            {"month": "Jan", "income": 10624445, "expenses": 9327066},
            {"month": "Feb", "income": 10116321, "expenses": 7183621},
            {"month": "Mar", "income": 10295378, "expenses": 9821408},
            {"month": "Apr", "income": 5438436, "expenses": 9039171},
            {"month": "May", "income": 12374737, "expenses": 5257356},
            {"month": "Jun", "income": 9592868, "expenses": 9975360},
            {"month": "Jul", "income": 12559478, "expenses": 9053352},
            {"month": "Aug", "income": 10837885, "expenses": 9944454},
            {"month": "Sep", "income": 5808267, "expenses": 5003147},
            {"month": "Oct", "income": 6567563, "expenses": 5411337},
            {"month": "Nov", "income": 13846333, "expenses": 10891037},
            {"month": "Dec", "income": 12439143, "expenses": 6736049}
          ]
        },
        "salaries": [
          {"role": "Vice Chancellor", "count": 1, "avg_salary": 2000000},
          {"role": "Professor", "count": 320, "avg_salary": 1500000},
          {"role": "Associate Professor", "count": 280, "avg_salary": 1100000},
          {"role": "Assistant Professor", "count": 450, "avg_salary": 750000},
          {"role": "Administrative Staff", "count": 180, "avg_salary": 480000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "CD003",
            "type": "Scholarship Disbursement",
            "description": "Delayed scholarship payments affecting student welfare",
            "severity": "Medium",
            "amount": "₹12,50,000",
            "status": "Under Review"
          }
        ],
        "impact": {
          "students_enrolled": 8500,
          "faculty_count": 1231,
          "research_projects": 420,
          "cost_per_student": 96362,
          "infrastructure": {
            "schools": 16,
            "centers": 25,
            "library_books": 650000,
            "placement_rate": "78%"
          }
        }
      },
      {
        "id": "rvce",
        "name": "RV College of Engineering",
        "type": "Engineering",
        "financial": {
          "income": {
            "total_income": 301899280,
            "student_fees": 181139568,
            "government_grants": 75474820,
            "industry_collaboration": 30189928,
            "other_income": 15094964
          },
          "expenses": {
            "total_expenses": 256614388,
            "faculty_salaries": 153968632,
            "infrastructure": 76984316,
            "research_expenses": 15396863,
            "administrative_expenses": 10264576
          },
          "monthly_data": [
            {"month": "Jan", "income": 41181536, "expenses": 26519548},
            {"month": "Feb", "income": 24508184, "expenses": 27093915},
            {"month": "Mar", "income": 34225568, "expenses": 20764904},
            {"month": "Apr", "income": 44017663, "expenses": 28031333},
            {"month": "May", "income": 34821197, "expenses": 16172918},
            {"month": "Jun", "income": 32387466, "expenses": 14147822},
            {"month": "Jul", "income": 42392720, "expenses": 30772285},
            {"month": "Aug", "income": 44479617, "expenses": 33902797},
            {"month": "Sep", "income": 23151260, "expenses": 18348065},
            {"month": "Oct", "income": 33355580, "expenses": 18702219},
            {"month": "Nov", "income": 21510534, "expenses": 23549860},
            {"month": "Dec", "income": 15869565, "expenses": 15884379}
          ]
        },
        "salaries": [
          {"role": "Principal", "count": 1, "avg_salary": 1800000},
          {"role": "Professor", "count": 85, "avg_salary": 1300000},
          {"role": "Associate Professor", "count": 120, "avg_salary": 950000},
          {"role": "Assistant Professor", "count": 180, "avg_salary": 720000},
          {"role": "Administrative Staff", "count": 65, "avg_salary": 450000}
        ],
        "fraud_alerts": [
          {
            "alert_id": "CD004",
            "type": "Infrastructure Billing",
            "description": "Overcharging detected in infrastructure development contracts",
            "severity": "Medium",
            "amount": "₹18,75,000",
            "status": "Under Review"
          }
        ],
        "impact": {
          "students_enrolled": 8000,
          "faculty_count": 451,
          "research_projects": 180,
          "cost_per_student": 320768,
          "infrastructure": {
            "buildings": 12,
            "laboratories": 85,
            "library_books": 125000,
            "placement_rate": "95%"
          }
        }
      }
    ]
  }
};

// Application State
let currentCategory = '';
let currentOrganization = null;
let currentRole = 'public';
let activeCharts = {};

// Chart Colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// DOM Elements
const pages = {
  landing: document.getElementById('landingPage'),
  orgSelection: document.getElementById('orgSelectionPage'),
  roleSelection: document.getElementById('roleSelectionPage'),
  dashboard: document.getElementById('dashboardPage')
};

// Make navigation functions global
window.goToOrgSelection = function(category) {
  currentCategory = category;
  const categoryTitle = {
    'ngos': 'NGOs',
    'government_projects': 'Government Projects',
    'colleges': 'Educational Institutions'
  };
  
  document.getElementById('categoryTitle').textContent = `Select ${categoryTitle[category]}`;
  populateOrganizations(category);
  showPage('orgSelection');
};

window.goToRoleSelection = function(organization) {
  currentOrganization = organization;
  showPage('roleSelection');
};

window.goToDashboard = function(role) {
  currentRole = role;
  showLoading();
  
  setTimeout(() => {
    populateDashboard();
    hideLoading();
    showPage('dashboard');
  }, 1000);
};

// Utility Functions
function formatCurrency(amount) {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  } else {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}

function formatNumber(num) {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)} Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(1)} L`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  } else {
    return num.toLocaleString('en-IN');
  }
}

function showPage(pageName) {
  Object.keys(pages).forEach(key => {
    pages[key].classList.remove('active');
  });
  pages[pageName].classList.add('active');
}

function showLoading() {
  document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.add('hidden');
}

function populateOrganizations(category) {
  const grid = document.getElementById('organizationGrid');
  const organizations = organizationData.organizations[category];
  
  grid.innerHTML = organizations.map(org => `
    <div class="org-card" data-org-id="${org.id}">
      <h3>${org.name}</h3>
      <span class="org-type">${org.type}</span>
      <div class="org-stats">
        <div>Budget: ${formatCurrency(org.financial.income.total_income)}</div>
        <div>Efficiency: ${Math.round((org.financial.expenses.program_expenses / org.financial.expenses.total_expenses) * 100)}%</div>
      </div>
    </div>
  `).join('');

  // Add event listeners to organization cards
  grid.querySelectorAll('.org-card').forEach(card => {
    card.addEventListener('click', function() {
      const orgId = this.getAttribute('data-org-id');
      goToRoleSelection(orgId);
    });
  });
}

function populateDashboard() {
  const org = findOrganization(currentOrganization);
  if (!org) return;

  // Update header
  document.getElementById('currentOrgName').textContent = org.name;
  document.getElementById('currentOrgType').textContent = org.type;
  document.getElementById('currentRole').textContent = currentRole === 'admin' ? 'Administrator' : 'Public View';

  // Populate all tabs
  populateOverviewTab(org);
  populateFinancialsTab(org);
  populateSalariesTab(org);
  populateFraudTab(org);
  populateImpactTab(org);
}

function findOrganization(id) {
  const categories = ['ngos', 'government_projects', 'colleges'];
  for (const category of categories) {
    const org = organizationData.organizations[category].find(o => o.id === id);
    if (org) return org;
  }
  return null;
}

function populateOverviewTab(org) {
  const income = org.financial.income.total_income;
  const expenses = org.financial.expenses.total_expenses;
  const surplus = income - expenses;
  const efficiency = Math.round((org.financial.expenses.program_expenses / expenses) * 100);

  document.getElementById('totalIncome').textContent = formatCurrency(income);
  document.getElementById('totalExpenses').textContent = formatCurrency(expenses);
  document.getElementById('netSurplus').textContent = formatCurrency(surplus);
  document.getElementById('efficiencyRatio').textContent = `${efficiency}%`;

  // Create monthly chart
  createMonthlyChart(org.financial.monthly_data);
}

function populateFinancialsTab(org) {
  createIncomeChart(org.financial.income);
  createExpenseChart(org.financial.expenses);
  populateFinancialDetails(org.financial);
}

function populateSalariesTab(org) {
  const salaryContainer = document.getElementById('salaryTable');
  const isAdmin = currentRole === 'admin';
  
  const tableHTML = `
    <table ${!isAdmin ? 'class="admin-only"' : ''}>
      <thead>
        <tr>
          <th>Role</th>
          <th>Count</th>
          <th>Average Salary</th>
          <th>Total Cost</th>
        </tr>
      </thead>
      <tbody>
        ${org.salaries.map(salary => `
          <tr>
            <td>${salary.role}</td>
            <td>${salary.count}</td>
            <td>${isAdmin ? formatCurrency(salary.avg_salary) : '***'}</td>
            <td>${isAdmin ? formatCurrency(salary.avg_salary * salary.count) : '***'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  salaryContainer.innerHTML = tableHTML;
  
  if (isAdmin) {
    createSalaryChart(org.salaries);
  }
}

function populateFraudTab(org) {
  const alertsContainer = document.getElementById('fraudAlerts');
  
  if (org.fraud_alerts.length === 0) {
    alertsContainer.innerHTML = `
      <div class="fraud-alert low">
        <div class="alert-header">
          <span class="alert-id">No Active Alerts</span>
          <span class="alert-severity low">Clean</span>
        </div>
        <div class="alert-description">No fraud alerts detected for this organization.</div>
      </div>
    `;
  } else {
    alertsContainer.innerHTML = org.fraud_alerts.map(alert => `
      <div class="fraud-alert ${alert.severity.toLowerCase()}">
        <div class="alert-header">
          <span class="alert-id">${alert.alert_id}</span>
          <span class="alert-severity ${alert.severity.toLowerCase()}">${alert.severity}</span>
        </div>
        <div class="alert-description">${alert.description}</div>
        <div class="alert-details">
          <span class="alert-amount">${alert.amount}</span>
          <span class="alert-status">${alert.status}</span>
        </div>
      </div>
    `).join('');
  }

  // Update risk assessment
  const riskLevel = calculateRiskLevel(org.fraud_alerts);
  document.getElementById('riskLevel').textContent = riskLevel;
  updateRiskIndicator(riskLevel);
}

function populateImpactTab(org) {
  const metricsContainer = document.getElementById('impactMetrics');
  const infrastructureContainer = document.getElementById('infrastructureDetails');
  
  // Generate impact metrics based on organization type
  const metrics = generateImpactMetrics(org);
  metricsContainer.innerHTML = metrics.map(metric => `
    <div class="impact-metric">
      <h5>${metric.label}</h5>
      <div class="impact-value">${metric.value}</div>
    </div>
  `).join('');

  // Generate infrastructure details
  const infrastructure = generateInfrastructureDetails(org);
  infrastructureContainer.innerHTML = infrastructure.map(item => `
    <div class="infrastructure-item">
      <h6>${item.label}</h6>
      <p>${item.value}</p>
    </div>
  `).join('');
}

function generateImpactMetrics(org) {
  const impact = org.impact;
  const metrics = [];
  
  Object.keys(impact).forEach(key => {
    if (key !== 'infrastructure' && key !== 'kitchen_infrastructure') {
      const value = impact[key];
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      if (typeof value === 'number') {
        metrics.push({
          label: label,
          value: formatNumber(value)
        });
      } else {
        metrics.push({
          label: label,
          value: value
        });
      }
    }
  });
  
  return metrics;
}

function generateInfrastructureDetails(org) {
  const infrastructure = org.impact.infrastructure || org.impact.kitchen_infrastructure || {};
  const details = [];
  
  Object.keys(infrastructure).forEach(key => {
    const value = infrastructure[key];
    const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    if (typeof value === 'number') {
      details.push({
        label: label,
        value: formatNumber(value)
      });
    } else {
      details.push({
        label: label,
        value: value
      });
    }
  });
  
  return details;
}

function calculateRiskLevel(alerts) {
  if (alerts.length === 0) return 'Low Risk';
  
  const highSeverityCount = alerts.filter(a => a.severity === 'High').length;
  const mediumSeverityCount = alerts.filter(a => a.severity === 'Medium').length;
  
  if (highSeverityCount > 0) return 'High Risk';
  if (mediumSeverityCount > 1) return 'Medium Risk';
  return 'Low Risk';
}

function updateRiskIndicator(riskLevel) {
  const indicator = document.getElementById('riskIndicator');
  const colors = {
    'Low Risk': 'conic-gradient(var(--color-success) 0deg, var(--color-success) 120deg, var(--color-bg-3) 120deg)',
    'Medium Risk': 'conic-gradient(var(--color-warning) 0deg, var(--color-warning) 180deg, var(--color-bg-3) 180deg)',
    'High Risk': 'conic-gradient(var(--color-error) 0deg, var(--color-error) 270deg, var(--color-bg-3) 270deg)'
  };
  
  indicator.style.background = colors[riskLevel];
}

function populateFinancialDetails(financial) {
  const incomeDetails = document.getElementById('incomeDetails');
  const expenseDetails = document.getElementById('expenseDetails');
  
  // Income details
  const incomeItems = Object.keys(financial.income).filter(key => key !== 'total_income');
  incomeDetails.innerHTML = incomeItems.map(key => `
    <div class="detail-item">
      <span class="detail-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
      <span class="detail-value">${formatCurrency(financial.income[key])}</span>
    </div>
  `).join('');

  // Expense details
  const expenseItems = Object.keys(financial.expenses).filter(key => key !== 'total_expenses');
  expenseDetails.innerHTML = expenseItems.map(key => `
    <div class="detail-item">
      <span class="detail-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
      <span class="detail-value">${formatCurrency(financial.expenses[key])}</span>
    </div>
  `).join('');
}

// Chart Creation Functions
function createMonthlyChart(monthlyData) {
  const ctx = document.getElementById('monthlyChart').getContext('2d');
  
  if (activeCharts.monthly) {
    activeCharts.monthly.destroy();
  }
  
  activeCharts.monthly = new Chart(ctx, {
    type: 'line',
    data: {
      labels: monthlyData.map(d => d.month),
      datasets: [
        {
          label: 'Income',
          data: monthlyData.map(d => d.income),
          borderColor: chartColors[0],
          backgroundColor: chartColors[0] + '20',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Expenses',
          data: monthlyData.map(d => d.expenses),
          borderColor: chartColors[2],
          backgroundColor: chartColors[2] + '20',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatCurrency(value);
            }
          }
        }
      },
      interaction: {
        intersect: false
      }
    }
  });
}

function createIncomeChart(income) {
  const ctx = document.getElementById('incomeChart').getContext('2d');
  
  if (activeCharts.income) {
    activeCharts.income.destroy();
  }
  
  const labels = Object.keys(income).filter(key => key !== 'total_income');
  const data = labels.map(key => income[key]);
  
  activeCharts.income = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.map(l => l.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
      datasets: [{
        data: data,
        backgroundColor: chartColors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: '#1f2121'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function createExpenseChart(expenses) {
  const ctx = document.getElementById('expenseChart').getContext('2d');
  
  if (activeCharts.expense) {
    activeCharts.expense.destroy();
  }
  
  const labels = Object.keys(expenses).filter(key => key !== 'total_expenses');
  const data = labels.map(key => expenses[key]);
  
  activeCharts.expense = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.map(l => l.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
      datasets: [{
        data: data,
        backgroundColor: chartColors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: '#1f2121'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function createSalaryChart(salaries) {
  const ctx = document.getElementById('salaryChart').getContext('2d');
  
  if (activeCharts.salary) {
    activeCharts.salary.destroy();
  }
  
  activeCharts.salary = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: salaries.map(s => s.role),
      datasets: [{
        label: 'Average Salary',
        data: salaries.map(s => s.avg_salary),
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return formatCurrency(value);
            }
          }
        }
      }
    }
  });
}

// Search Functionality
function performSearch(query) {
  if (query.length < 2) {
    closeSearchModal();
    return;
  }
  
  const results = [];
  const categories = ['ngos', 'government_projects', 'colleges'];
  
  categories.forEach(category => {
    organizationData.organizations[category].forEach(org => {
      if (org.name.toLowerCase().includes(query.toLowerCase()) ||
          org.type.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          name: org.name,
          type: org.type,
          category: category,
          id: org.id
        });
      }
    });
  });
  
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const modal = document.getElementById('searchModal');
  const container = document.getElementById('searchResults');
  
  if (results.length === 0) {
    container.innerHTML = '<p>No results found.</p>';
  } else {
    container.innerHTML = results.map(result => `
      <div class="search-result" onclick="selectSearchResult('${result.category}', '${result.id}')">
        <h5>${result.name}</h5>
        <p>${result.type} - ${result.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
      </div>
    `).join('');
  }
  
  modal.classList.remove('hidden');
}

function closeSearchModal() {
  document.getElementById('searchModal').classList.add('hidden');
}

window.selectSearchResult = function(category, orgId) {
  closeSearchModal();
  // Clear search input
  document.getElementById('searchInput').value = '';
  goToOrgSelection(category);
  // Small delay to ensure the page is rendered
  setTimeout(() => {
    goToRoleSelection(orgId);
  }, 100);
};

// Theme Management
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-color-scheme', newTheme);
}

// Tab Management
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  // Update tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(`${tabName}Tab`).classList.add('active');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Category cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      goToOrgSelection(this.dataset.category);
    });
  });

  // Role cards
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', function() {
      goToDashboard(this.dataset.role);
    });
  });

  // Back buttons
  document.getElementById('backToLanding').addEventListener('click', () => showPage('landing'));
  document.getElementById('backToOrgs').addEventListener('click', () => showPage('orgSelection'));
  document.getElementById('backToRoles').addEventListener('click', () => showPage('roleSelection'));

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.querySelector('.search-btn');
  
  searchInput.addEventListener('input', function(e) {
    e.stopPropagation();
    if (this.value.length >= 2) {
      performSearch(this.value);
    } else if (this.value.length === 0) {
      closeSearchModal();
    }
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearchModal();
      this.blur();
    }
  });
  
  searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const query = searchInput.value.trim();
    if (query.length >= 2) {
      performSearch(query);
    }
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });

  // Modal close functionality
  const modalCloseBtn = document.querySelector('.modal-close');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeSearchModal();
    });
  }

  // Click outside modal to close
  const searchModal = document.getElementById('searchModal');
  if (searchModal) {
    searchModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeSearchModal();
      }
    });
  }

  // Ensure modal is hidden on load
  document.getElementById('searchModal').classList.add('hidden');
});

// Initialize the application
window.addEventListener('load', function() {
  // Set initial theme based on user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-color-scheme', prefersDark ? 'dark' : 'light');
  
  // Ensure modal is hidden on load
  document.getElementById('searchModal').classList.add('hidden');
});
let currentCurrency = 'INR';
const rates = { 'INR': 1, 'USD': 0.012, 'EUR': 0.011, 'GBP': 0.009 };

function formatMoney(amount) {
    const converted = amount * rates[currentCurrency];
    const symbols = {'INR': '₹', 'USD': '$', 'EUR': '€', 'GBP': '£'};
    
    if (converted >= 10000000) {
        return symbols[currentCurrency] + (converted / 10000000).toFixed(1) + ' Cr';
    } else if (converted >= 100000) {
        return symbols[currentCurrency] + (converted / 100000).toFixed(1) + ' L';
    } else {
        return symbols[currentCurrency] + converted.toFixed(0);
    }
}

function toggleCurrency() {
    const currencies = ['INR', 'USD', 'EUR', 'GBP'];
    const index = currencies.indexOf(currentCurrency);
    currentCurrency = currencies[(index + 1) % currencies.length];
    
    // Update currency button
    const btn = document.getElementById('currencyBtn');
    if (btn) btn.textContent = currentCurrency;
    
    // Update all existing amounts on the page
    updateExistingAmounts();
}

function updateExistingAmounts() {
    // Find and update metric values
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(el => {
        const text = el.textContent;
        
        // Extract number and convert
        if (text.includes('₹') || text.includes('$') || text.includes('€') || text.includes('£')) {
            // Store original INR amount if not already stored
            if (!el.dataset.originalAmount) {
                const numStr = text.replace(/[₹$€£,\s]/g, '');
                let amount = parseFloat(numStr);
                
                // Convert Cr and L back to actual numbers
                if (text.includes('Cr')) amount *= 10000000;
                else if (text.includes('L')) amount *= 100000;
                
                el.dataset.originalAmount = amount;
            }
            
            // Update display
            const originalAmount = parseFloat(el.dataset.originalAmount);
            el.textContent = formatMoney(originalAmount);
        }
    });
    
    // Update any elements with data-amount
    document.querySelectorAll('[data-amount]').forEach(el => {
        const amount = parseFloat(el.dataset.amount);
        el.textContent = formatMoney(amount);
    });
    
    // Update chart labels if they exist
    updateChartLabels();
}

function updateChartLabels() {
    // Update y-axis labels on charts
    const yLabels = document.querySelectorAll('.chartjs-axis-label, .tick');
    yLabels.forEach(label => {
        if (label.textContent.includes('₹') || label.textContent.includes('Cr') || label.textContent.includes('L')) {
            if (!label.dataset.originalAmount) {
                const numStr = label.textContent.replace(/[₹$€£,\s]/g, '');
                let amount = parseFloat(numStr);
                
                if (label.textContent.includes('Cr')) amount *= 10000000;
                else if (label.textContent.includes('L')) amount *= 100000;
                
                label.dataset.originalAmount = amount;
            }
            
            const originalAmount = parseFloat(label.dataset.originalAmount);
            label.textContent = formatMoney(originalAmount);
        }
    });
}

// Initialize amounts when page loads
function initializeAmounts() {
    // Store original amounts for all metric values
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(el => {
        const text = el.textContent;
        if (text.includes('₹')) {
            const numStr = text.replace(/[₹,\s]/g, '');
            let amount = parseFloat(numStr);
            
            if (text.includes('Cr')) amount *= 10000000;
            else if (text.includes('L')) amount *= 100000;
            
            el.dataset.originalAmount = amount;
        }
    });
}

// Enhanced dashboard population to initialize amounts
const originalPopulateDashboard = window.populateDashboard;
if (originalPopulateDashboard) {
    window.populateDashboard = function() {
        originalPopulateDashboard();
        setTimeout(initializeAmounts, 500);
    };
}

// Also initialize when dashboard loads
setTimeout(() => {
    initializeAmounts();
    
    // Add currency button if dashboard exists
    if (document.querySelector('.dashboard-nav') && !document.getElementById('currencyBtn')) {
        const currBtn = document.createElement('button');
        currBtn.id = 'currencyBtn';
        currBtn.textContent = 'INR';
        currBtn.onclick = toggleCurrency;
        currBtn.style.cssText = 'background: #1FB8CD; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-left: 10px;';
        document.querySelector('.dashboard-nav').appendChild(currBtn);
    }
}, 2000);

window.toggleCurrency = toggleCurrency;
 // Feedback System
function showFeedbackModal() {
    let modal = document.getElementById('feedbackModal');
    if (!modal) {
        modal = createFeedbackModal();
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
}

    function createFeedbackModal() {
        const modal = document.createElement('div');
        modal.id = 'feedbackModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Send Feedback</h3>
                    <button class="modal-close" onclick="this.closest('.modal').style.display='none'">×</button>
                </div>
                <div class="modal-body">
                    <form id="feedbackForm">
                        <div class="form-group">
                            <label class="form-label">Feedback Type</label>
                            <select class="form-control" required>
                                <option value="">Select type...</option>
                                <option value="bug">Bug Report</option>
                                <option value="feature">Feature Request</option>
                                <option value="improvement">Improvement</option>
                                <option value="general">General Feedback</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Subject</label>
                            <input type="text" class="form-control" placeholder="Brief description" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Message</label>
                            <textarea class="form-control" rows="5" placeholder="Please provide detailed feedback..." required></textarea>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email (optional)</label>
                            <input type="email" class="form-control" placeholder="your.email@example.com">
                        </div>
                        <div style="display: flex; gap: 10px; justify-content: flex-end;">
                            <button type="button" class="btn btn--secondary" onclick="this.closest('.modal').style.display='none'">Cancel</button>
                            <button type="submit" class="btn btn--primary">Send Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    
        modal.querySelector('#feedbackForm').addEventListener('submit', (e) => {
            e.preventDefault();
            submitFeedback(e.target);
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    
        return modal;
    }

    function submitFeedback(form) {
        const formData = new FormData(form);
        console.log('📧 Feedback submitted:', Object.fromEntries(formData));
    
        const modal = document.getElementById('feedbackModal');
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="color: var(--color-success); font-size: 48px; margin-bottom: 10px;">✓</div>
                <h4 style="color: var(--color-success); margin-bottom: 10px;">Feedback Sent!</h4>
                <p>Thank you for your feedback. We'll review it and get back to you if needed.</p>
                <button class="btn btn--primary" onclick="this.closest('.modal').style.display='none'">Close</button>
            </div>
        `;
    }
    const transactionData = {
    'rvce': [
        {id: 'TXN001', date: '2024-09-10', vendor: 'Academic Publishers Ltd', department: 'Library', amount: 180000, status: 'Completed', description: 'Books and journals purchase'},
        {id: 'TXN002', date: '2024-09-08', vendor: 'Lab Equipment Co', department: 'Research', amount: 750000, status: 'Pending', description: 'Laboratory equipment'},
        {id: 'TXN003', date: '2024-09-06', vendor: 'Construction Services', department: 'Infrastructure', amount: 950000, status: 'Completed', description: 'Building maintenance'},
        {id: 'TXN004', date: '2024-09-03', vendor: 'Faculty Development Co', department: 'HR', amount: 320000, status: 'Completed', description: 'Faculty training programs'},
        {id: 'TXN005', date: '2024-08-30', vendor: 'IT Solutions Pvt Ltd', department: 'Technology', amount: 280000, status: 'Completed', description: 'Network upgrade'},
        {id: 'TXN006', date: '2024-08-28', vendor: 'Office Supplies Inc', department: 'Administration', amount: 45000, status: 'Completed', description: 'Office stationery'},
        {id: 'TXN007', date: '2024-08-25', vendor: 'Cleaning Services', department: 'Maintenance', amount: 85000, status: 'Pending', description: 'Campus cleaning contract'},
        {id: 'TXN008', date: '2024-08-22', vendor: 'Security Systems Ltd', department: 'Security', amount: 165000, status: 'Completed', description: 'Security system upgrade'},
        {id: 'TXN009', date: '2024-08-20', vendor: 'Catering Services', department: 'Student Affairs', amount: 95000, status: 'Completed', description: 'Event catering'},
        {id: 'TXN010', date: '2024-08-18', vendor: 'Transport Co', department: 'Operations', amount: 125000, status: 'Pending', description: 'Student transport services'}
    ],
    'akshaya_patra': [
        {id: 'TXN101', date: '2024-09-10', vendor: 'Food Suppliers Ltd', department: 'Operations', amount: 250000, status: 'Completed', description: 'Meal ingredients'},
        {id: 'TXN102', date: '2024-09-08', vendor: 'Transport Services', department: 'Logistics', amount: 85000, status: 'Pending', description: 'Food delivery'},
        {id: 'TXN103', date: '2024-09-05', vendor: 'Kitchen Equipment Co', department: 'Infrastructure', amount: 450000, status: 'Completed', description: 'Equipment maintenance'},
        {id: 'TXN104', date: '2024-09-01', vendor: 'Cleaning Supplies Inc', department: 'Hygiene', amount: 35000, status: 'Completed', description: 'Cleaning materials'},
        {id: 'TXN105', date: '2024-08-28', vendor: 'Tech Solutions', department: 'IT', amount: 120000, status: 'Completed', description: 'Software licensing'},
        {id: 'TXN106', date: '2024-08-25', vendor: 'Uniform Suppliers', department: 'HR', amount: 75000, status: 'Pending', description: 'Staff uniforms'},
        {id: 'TXN107', date: '2024-08-22', vendor: 'Vehicle Maintenance', department: 'Transport', amount: 95000, status: 'Completed', description: 'Vehicle servicing'},
        {id: 'TXN108', date: '2024-08-20', vendor: 'Training Institute', department: 'HR', amount: 65000, status: 'Completed', description: 'Staff training programs'}
    ]
};

let currentTransactions = [];
let filteredTransactions = [];

// Function to show transactions tab
function showTransactionsTab() {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Hide all panels
    document.querySelectorAll('.tab-panel').forEach(panel => panel.style.display = 'none');
    
    // Add active class to transactions tab
    const transTab = document.querySelector('.tab-btn[onclick*="showTransactionsTab"]');
    if (transTab) transTab.classList.add('active');
    
    // Create or show transactions panel
    let transPanel = document.getElementById('transactionsPanel');
    if (!transPanel) {
        transPanel = createTransactionsPanel();
        document.getElementById('dashboardPage').appendChild(transPanel);
    }
    
    // Load transactions for current organization
    loadTransactionsData();
    transPanel.style.display = 'block';
}

// Function to create transactions panel
function createTransactionsPanel() {
    const panel = document.createElement('div');
    panel.id = 'transactionsPanel';
    panel.className = 'tab-panel';
    panel.style.display = 'none';
    
    panel.innerHTML = `
        <div style="background: var(--color-surface, #1f2121); border-radius: 8px; padding: 24px; margin-bottom: 24px; border: 1px solid #e1e5e9;">
            <h3 style="margin-bottom: 20px; color: var(--color-text, #4c9b9bff);">Transaction Records</h3>
            
            <!-- Search and Filter Section -->
            <div style="display: flex; gap: 16px; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 250px;">
                    <input type="text" 
                           id="transactionSearch" 
                           placeholder="Search by vendor, department, or description..." 
                           style="width: 100%; padding: 12px 16px; border: 2px solid #4c9b9bff; border-radius: 8px; font-size: 14px;">
                </div>
                <select id="departmentFilter" 
                        style="padding: 12px 16px; border: 2px solid ##1f2121; border-radius: 8px; min-width: 150px;">
                    <option value="">All Departments</option>
                </select>
                <button onclick="clearTransactionFilters()" 
                        style="padding: 12px 20px; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Clear Filters
                </button>
            </div>
            
            <!-- Summary Section -->
            <div id="transactionSummary" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
            </div>
            
            <!-- Transactions Table -->
            <div style="overflow-x: auto; border: 1px solid #4c9b9bff; border-radius: 8px;">
                <table id="transactionsTable" style="width: 100%; border-collapse: collapse; background: white;">
                    <thead>
                        <tr style="background: #1f2121; border-bottom: 2px solid #4c9b9bff;">
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; cursor: pointer;" onclick="sortTransactions('id')">
                                Transaction ID ↕
                            </th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; cursor: pointer;" onclick="sortTransactions('date')">
                                Date ↕
                            </th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; cursor: pointer;" onclick="sortTransactions('vendor')">
                                Vendor ↕
                            </th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; cursor: pointer;" onclick="sortTransactions('department')">
                                Department ↕
                            </th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600; cursor: pointer;" onclick="sortTransactions('amount')">
                                Amount ↕
                            </th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600;">Status</th>
                            <th style="padding: 12px 16px; text-align: left; font-weight: 600;">Description</th>
                        </tr>
                    </thead>
                    <tbody id="transactionsTableBody">
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Add search event listener
    setTimeout(() => {
        const searchInput = document.getElementById('transactionSearch');
        const deptFilter = document.getElementById('departmentFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', filterTransactions);
        }
        if (deptFilter) {
            deptFilter.addEventListener('change', filterTransactions);
        }
    }, 100);
    
    return panel;
}

// Function to load transactions data
function loadTransactionsData() {
    const orgId = currentOrganization?.id || 'rvce';
    currentTransactions = transactionData[orgId] || transactionData['rvce'];
    filteredTransactions = [...currentTransactions];
    
    // Populate department filter
    populateDepartmentFilter();
    
    // Display transactions and summary
    displayTransactions();
    updateTransactionSummary();
}

// Function to populate department filter
function populateDepartmentFilter() {
    const deptFilter = document.getElementById('departmentFilter');
    if (!deptFilter) return;
    
    const departments = [...new Set(currentTransactions.map(t => t.department))].sort();
    
    deptFilter.innerHTML = '<option value="">All Departments</option>';
    departments.forEach(dept => {
        deptFilter.innerHTML += `<option value="${dept}">${dept}</option>`;
    });
}

// Function to display transactions
function displayTransactions() {
    const tableBody = document.getElementById('transactionsTableBody');
    if (!tableBody) return;
    
    if (filteredTransactions.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="padding: 40px; text-align: center; color: #6c757d;">
                    No transactions found matching your search criteria.
                </td>
            </tr>
        `;
        return;
    }
    
    tableBody.innerHTML = filteredTransactions.map(transaction => `
        <tr style="border-bottom: 1px solid ##1f2121; cursor: pointer;" 
            onmouseover="this.style.backgroundColor='##1f2121'" 
            onmouseout="this.style.backgroundColor='white'"
            onclick="showTransactionDetails('${transaction.id}')">
            <td style="padding: 12px 16px; font-family: monospace; color: #0066cc; font-weight: 500;">
                ${transaction.id}
            </td>
            <td style="padding: 12px 16px;">
                ${new Date(transaction.date).toLocaleDateString('en-IN')}
            </td>
            <td style="padding: 12px 16px; font-weight: 500;">
                ${transaction.vendor}
            </td>
            <td style="padding: 12px 16px;">
                <span style="background: ##1f2121; color: #1976d2; padding: 4px 8px; border-radius: 12px; font-size: 12px;">
                    ${transaction.department}
                </span>
            </td>
            <td style="padding: 12px 16px; font-weight: 600; text-align: right;" data-amount="${transaction.amount}">
                ${formatMoney ? formatMoney(transaction.amount) : '₹' + transaction.amount.toLocaleString('en-IN')}
            </td>
            <td style="padding: 12px 16px;">
                <span style="padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;
                             background: ${transaction.status === 'Completed' ? '#d4edda' : '#fff3cd'};
                             color: ${transaction.status === 'Completed' ? '#155724' : '#856404'};">
                    ${transaction.status}
                </span>
            </td>
            <td style="padding: 12px 16px; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${transaction.description}
            </td>
        </tr>
    `).join('');
}

// Function to filter transactions
function filterTransactions() {
    const searchTerm = document.getElementById('transactionSearch')?.value.toLowerCase() || '';
    const selectedDept = document.getElementById('departmentFilter')?.value || '';
    
    filteredTransactions = currentTransactions.filter(transaction => {
        const matchesSearch = !searchTerm || 
            transaction.vendor.toLowerCase().includes(searchTerm) ||
            transaction.department.toLowerCase().includes(searchTerm) ||
            transaction.description.toLowerCase().includes(searchTerm) ||
            transaction.id.toLowerCase().includes(searchTerm);
            
        const matchesDept = !selectedDept || transaction.department === selectedDept;
        
        return matchesSearch && matchesDept;
    });
    
    displayTransactions();
    updateTransactionSummary();
}

// Function to clear filters
function clearTransactionFilters() {
    const searchInput = document.getElementById('transactionSearch');
    const deptFilter = document.getElementById('departmentFilter');
    
    if (searchInput) searchInput.value = '';
    if (deptFilter) deptFilter.value = '';
    
    filteredTransactions = [...currentTransactions];
    displayTransactions();
    updateTransactionSummary();
}

// Function to update transaction summary
function updateTransactionSummary() {
    const summaryDiv = document.getElementById('transactionSummary');
    if (!summaryDiv) return;
    
    const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
    const completedCount = filteredTransactions.filter(t => t.status === 'Completed').length;
    const pendingCount = filteredTransactions.filter(t => t.status === 'Pending').length;
    
    summaryDiv.innerHTML = `
        <div style="background: #1f2121; padding: 16px; border-radius: 8px; text-align: center;">
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">Total Transactions</div>
            <div style="font-size: 24px; font-weight: bold; color: #1976d2;">${filteredTransactions.length}</div>
        </div>
        <div style="background: #1f2121; padding: 16px; border-radius: 8px; text-align: center;">
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">Total Amount</div>
            <div style="font-size: 24px; font-weight: bold; color: #2e7d2e;" data-amount="${totalAmount}">
                ${formatMoney ? formatMoney(totalAmount) : '₹' + totalAmount.toLocaleString('en-IN')}
            </div>
        </div>
        <div style="background: #1f2121; padding: 16px; border-radius: 8px; text-align: center;">
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">Completed</div>
            <div style="font-size: 24px; font-weight: bold; color: #f57c00;">${completedCount}</div>
        </div>
        <div style="background: #1f2121; padding: 16px; border-radius: 8px; text-align: center;">
            <div style="font-size: 12px; color: #666; margin-bottom: 4px;">Pending</div>
            <div style="font-size: 24px; font-weight: bold; color: #d32f2f;">${pendingCount}</div>
        </div>
    `;
}

// Function to sort transactions
function sortTransactions(column) {
    filteredTransactions.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (column === 'amount') {
            return bVal - aVal; // Descending for amount
        } else if (column === 'date') {
            return new Date(bVal) - new Date(aVal); // Descending for date
        } else {
            return aVal.toString().localeCompare(bVal.toString());
        }
    });
    
    displayTransactions();
}

// Function to show transaction details (optional)
function showTransactionDetails(transactionId) {
    const transaction = filteredTransactions.find(t => t.id === transactionId);
    if (!transaction) return;
    
    alert(`Transaction Details:\n\nID: ${transaction.id}\nDate: ${transaction.date}\nVendor: ${transaction.vendor}\nDepartment: ${transaction.department}\nAmount: ${formatMoney ? formatMoney(transaction.amount) : '₹' + transaction.amount.toLocaleString('en-IN')}\nStatus: ${transaction.status}\nDescription: ${transaction.description}`);
}

// Add transactions tab button if it doesn't exist
setTimeout(() => {
    if (document.querySelector('.dashboard-tabs') && !document.querySelector('.tab-btn[onclick*="showTransactionsTab"]')) {
        const transBtn = document.createElement('button');
        transBtn.className = 'tab-btn';
        transBtn.textContent = 'Transactions';
        transBtn.onclick = showTransactionsTab;
        document.querySelector('.dashboard-tabs').appendChild(transBtn);
    }
}, 2000);

// Make functions global
window.showTransactionsTab = showTransactionsTab;
window.clearTransactionFilters = clearTransactionFilters;
window.sortTransactions = sortTransactions;
window.showTransactionDetails = showTransactionDetails;
let feedbackData = [];

// Function to create floating feedback button
function createFeedbackButton() {
    // Check if button already exists
    if (document.getElementById('feedbackBtn')) return;
    
    const feedbackBtn = document.createElement('div');
    feedbackBtn.id = 'feedbackBtn';
    feedbackBtn.innerHTML = '💬';
    feedbackBtn.title = 'Leave Feedback';
    
    // Floating button styles
    feedbackBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: #1FB8CD;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 999;
        transition: all 0.3s ease;
        user-select: none;
    `;
    
    // Add hover effect
    feedbackBtn.onmouseover = function() {
        this.style.transform = 'scale(1.1)';
        this.style.background = '#159fb0';
    };
    
    feedbackBtn.onmouseout = function() {
        this.style.transform = 'scale(1)';
        this.style.background = '#1FB8CD';
    };
    
    feedbackBtn.onclick = openFeedbackModal;
    
    document.body.appendChild(feedbackBtn);
}

// Function to open feedback modal
function openFeedbackModal() {
    // Check if modal already exists
    if (document.getElementById('feedbackModal')) return;
    
    const modal = document.createElement('div');
    modal.id = 'feedbackModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: #1f2121; border-radius: 12px; padding: 30px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative; border: 1px solid #444;">
            <button onclick="closeFeedbackModal()" style="position: absolute; top: 15px; right: 20px; background: none; border: none; color: #ccc; font-size: 24px; cursor: pointer; padding: 5px;">×</button>
            
            <h3 style="color: #fff; margin-bottom: 20px; text-align: center;">💬 Share Your Feedback</h3>
            <p style="color: #ccc; margin-bottom: 25px; text-align: center; font-size: 14px;">Help us improve our financial transparency dashboard</p>
            
            <form id="feedbackForm" onsubmit="submitFeedback(event)">
                <!-- Email Input -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Email Address (Optional)</label>
                    <input type="email" 
                           id="feedbackEmail" 
                           placeholder="your.email@example.com"
                           style="width: 100%; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px;">
                </div>
                
                <!-- Star Rating -->
                <div style="margin-bottom: 25px;">
                    <label style="display: block; color: #fff; margin-bottom: 12px; font-weight: 500;">Rate Your Experience</label>
                    <div id="starRating" style="display: flex; gap: 5px; justify-content: center; margin-bottom: 10px;">
                        <span class="star" data-rating="1" onclick="setRating(1)" style="font-size: 30px; cursor: pointer; color: #666; transition: color 0.2s;">⭐</span>
                        <span class="star" data-rating="2" onclick="setRating(2)" style="font-size: 30px; cursor: pointer; color: #666; transition: color 0.2s;">⭐</span>
                        <span class="star" data-rating="3" onclick="setRating(3)" style="font-size: 30px; cursor: pointer; color: #666; transition: color 0.2s;">⭐</span>
                        <span class="star" data-rating="4" onclick="setRating(4)" style="font-size: 30px; cursor: pointer; color: #666; transition: color 0.2s;">⭐</span>
                        <span class="star" data-rating="5" onclick="setRating(5)" style="font-size: 30px; cursor: pointer; color: #666; transition: color 0.2s;">⭐</span>
                    </div>
                    <div id="ratingText" style="text-align: center; color: #ccc; font-size: 12px;">Click stars to rate</div>
                </div>
                
                <!-- Feedback Category -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Feedback Type</label>
                    <select id="feedbackCategory" 
                            style="width: 100%; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px;">
                        <option value="general">General Feedback</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="data">Data Accuracy</option>
                        <option value="ui">User Interface</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                </div>
                
                <!-- Current Organization Context -->
                <div style="margin-bottom: 20px; padding: 12px; background: #2a2a2a; border-radius: 8px; border: 1px solid #444;">
                    <div style="color: #ccc; font-size: 12px; margin-bottom: 4px;">Current Page:</div>
                    <div id="currentContext" style="color: #1FB8CD; font-size: 14px; font-weight: 500;"></div>
                </div>
                
                <!-- Feedback Text -->
                <div style="margin-bottom: 25px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Your Feedback <span style="color: #ff6b6b;">*</span></label>
                    <textarea id="feedbackText" 
                              required
                              placeholder="Please share your thoughts, suggestions, or report any issues..."
                              style="width: 100%; min-height: 120px; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px; resize: vertical; font-family: inherit;"></textarea>
                </div>
                
                <!-- Submit Button -->
                <div style="text-align: center;">
                    <button type="submit" 
                            style="background: #1FB8CD; color: white; border: none; padding: 14px 30px; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.3s;">
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set current context
    updateFeedbackContext();
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeFeedbackModal();
        }
    });
    
    // Add fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Function to close feedback modal
function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.remove();
    }
}

// Function to set star rating
function setRating(rating) {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('ratingText');
    
    // Update star colors
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffc107';
        } else {
            star.style.color = '#666';
        }
    });
    
    // Update rating text
    const ratingTexts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    ratingText.textContent = ratingTexts[rating];
    ratingText.style.color = '#1FB8CD';
    
    // Store rating
    window.currentRating = rating;
}

// Function to update feedback context
function updateFeedbackContext() {
    const contextEl = document.getElementById('currentContext');
    if (!contextEl) return;
    
    const orgName = document.getElementById('orgName')?.textContent || 'Dashboard';
    const activeTab = document.querySelector('.tab-btn.active')?.textContent || 'Overview';
    
    contextEl.textContent = `${orgName} - ${activeTab} Tab`;
}

// Function to submit feedback
function submitFeedback(event) {
    event.preventDefault();
    
    const email = document.getElementById('feedbackEmail').value;
    const rating = window.currentRating || 0;
    const category = document.getElementById('feedbackCategory').value;
    const text = document.getElementById('feedbackText').value;
    const context = document.getElementById('currentContext').textContent;
    
    if (!text.trim()) {
        alert('Please enter your feedback before submitting.');
        return;
    }
    
    // Create feedback object
    const feedback = {
        id: 'FB' + Date.now(),
        timestamp: new Date().toISOString(),
        email: email || 'Anonymous',
        rating: rating,
        category: category,
        text: text.trim(),
        context: context,
        userAgent: navigator.userAgent,
        url: window.location.href
    };
    
    // Store feedback (in production, send to server)
    feedbackData.push(feedback);
    
    // Show success message
    showFeedbackSuccess();
    
    // Close modal
    setTimeout(closeFeedbackModal, 2000);
    
    // Log feedback (for development)
    console.log('Feedback submitted:', feedback);
}

// Function to show success message
function showFeedbackSuccess() {
    const modal = document.getElementById('feedbackModal');
    if (!modal) return;
    
    modal.innerHTML = `
        <div style="background: #1f2121; border-radius: 12px; padding: 40px; max-width: 400px; width: 90%; text-align: center; border: 1px solid #444;">
            <div style="font-size: 48px; margin-bottom: 20px;">✅</div>
            <h3 style="color: #28a745; margin-bottom: 15px;">Thank You!</h3>
            <p style="color: #ccc; margin-bottom: 25px;">Your feedback has been submitted successfully. We appreciate your input!</p>
            <div style="color: #666; font-size: 12px;">This window will close automatically...</div>
        </div>
    `;
}

// Function to view all feedback (admin only)
function viewFeedback() {
    console.log('All Feedback:', feedbackData);
    
    if (feedbackData.length === 0) {
        alert('No feedback received yet.');
        return;
    }
    
    let feedbackSummary = 'Recent Feedback:\n\n';
    feedbackData.slice(-5).forEach(fb => {
        feedbackSummary += `ID: ${fb.id}\n`;
        feedbackSummary += `Rating: ${'⭐'.repeat(fb.rating)}\n`;
        feedbackSummary += `Category: ${fb.category}\n`;
        feedbackSummary += `Context: ${fb.context}\n`;
        feedbackSummary += `Feedback: ${fb.text}\n`;
        feedbackSummary += `Email: ${fb.email}\n`;
        feedbackSummary += `Time: ${new Date(fb.timestamp).toLocaleString()}\n`;
        feedbackSummary += '-'.repeat(50) + '\n';
    });
    
    alert(feedbackSummary);
}

// Initialize feedback button when page loads
setTimeout(() => {
    createFeedbackButton();
}, 3000);

// Make functions global
window.openFeedbackModal = openFeedbackModal;
window.closeFeedbackModal = closeFeedbackModal;
window.setRating = setRating;
window.submitFeedback = submitFeedback;
window.viewFeedback = viewFeedback; // For admin use

// Optional: Add keyboard shortcut to open feedback (Ctrl+Shift+F)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'F') {
        e.preventDefault();
        openFeedbackModal();
    }
});function openFeedbackModal() {
    // Check if modal already exists
    if (document.getElementById('feedbackModal')) return;
    
    const modal = document.createElement('div');
    modal.id = 'feedbackModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: #1f2121; border-radius: 12px; padding: 30px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative; border: 1px solid #444;">
            <button onclick="closeFeedbackModal()" style="position: absolute; top: 15px; right: 20px; background: none; border: none; color: #ccc; font-size: 24px; cursor: pointer; padding: 5px;">×</button>
            
            <h3 style="color: #fff; margin-bottom: 20px; text-align: center;">💬 Share Your Feedback</h3>
            <p style="color: #ccc; margin-bottom: 25px; text-align: center; font-size: 14px;">Help us improve our financial transparency dashboard</p>
            
            <form id="feedbackForm" onsubmit="submitFeedback(event)">
                <!-- Email Input -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Email Address (Optional)</label>
                    <input type="email" 
                           id="feedbackEmail" 
                           placeholder="your.email@example.com"
                           style="width: 100%; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px;">
                </div>
                
                <!-- FIXED Star Rating -->
                <div style="margin-bottom: 25px;">
                    <label style="display: block; color: #fff; margin-bottom: 12px; font-weight: 500;">Rate Your Experience</label>
                    <div id="starRating" style="display: flex; gap: 5px; justify-content: center; margin-bottom: 10px;">
                        <span class="star" data-rating="1" onclick="setRating(1)" onmouseover="hoverRating(1)" onmouseout="resetHover()" style="font-size: 35px; cursor: pointer; color: #666; transition: all 0.2s ease; user-select: none;">★</span>
                        <span class="star" data-rating="2" onclick="setRating(2)" onmouseover="hoverRating(2)" onmouseout="resetHover()" style="font-size: 35px; cursor: pointer; color: #666; transition: all 0.2s ease; user-select: none;">★</span>
                        <span class="star" data-rating="3" onclick="setRating(3)" onmouseover="hoverRating(3)" onmouseout="resetHover()" style="font-size: 35px; cursor: pointer; color: #666; transition: all 0.2s ease; user-select: none;">★</span>
                        <span class="star" data-rating="4" onclick="setRating(4)" onmouseover="hoverRating(4)" onmouseout="resetHover()" style="font-size: 35px; cursor: pointer; color: #666; transition: all 0.2s ease; user-select: none;">★</span>
                        <span class="star" data-rating="5" onclick="setRating(5)" onmouseover="hoverRating(5)" onmouseout="resetHover()" style="font-size: 35px; cursor: pointer; color: #666; transition: all 0.2s ease; user-select: none;">★</span>
                    </div>
                    <div id="ratingText" style="text-align: center; color: #ccc; font-size: 14px; font-weight: 500;">Click stars to rate</div>
                </div>
                
                <!-- Feedback Category -->
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Feedback Type</label>
                    <select id="feedbackCategory" 
                            style="width: 100%; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px;">
                        <option value="general">General Feedback</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="data">Data Accuracy</option>
                        <option value="ui">User Interface</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                </div>
                
                <!-- Current Organization Context -->
                <div style="margin-bottom: 20px; padding: 12px; background: #2a2a2a; border-radius: 8px; border: 1px solid #444;">
                    <div style="color: #ccc; font-size: 12px; margin-bottom: 4px;">Current Page:</div>
                    <div id="currentContext" style="color: #1FB8CD; font-size: 14px; font-weight: 500;"></div>
                </div>
                
                <!-- Feedback Text -->
                <div style="margin-bottom: 25px;">
                    <label style="display: block; color: #fff; margin-bottom: 8px; font-weight: 500;">Your Feedback <span style="color: #ff6b6b;">*</span></label>
                    <textarea id="feedbackText" 
                              required
                              placeholder="Please share your thoughts, suggestions, or report any issues..."
                              style="width: 100%; min-height: 120px; padding: 12px 16px; border: 2px solid #444; border-radius: 8px; background: #2a2a2a; color: #fff; font-size: 14px; resize: vertical; font-family: inherit;"></textarea>
                </div>
                
                <!-- Submit Button -->
                <div style="text-align: center;">
                    <button type="submit" 
                            style="background: #1FB8CD; color: white; border: none; padding: 14px 30px; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: background 0.3s;">
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Set current context
    updateFeedbackContext();
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeFeedbackModal();
        }
    });
    
    // Add fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// FIXED: Enhanced star rating functions
let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    updateStars(rating);
    
    const ratingText = document.getElementById('ratingText');
    const ratingTexts = ['', 'Poor 😞', 'Fair 😐', 'Good 🙂', 'Very Good 😊', 'Excellent 🤩'];
    
    if (ratingText) {
        ratingText.textContent = ratingTexts[rating];
        ratingText.style.color = getRatingColor(rating);
    }
    
    // Store rating globally
    window.currentRating = rating;
}

function hoverRating(rating) {
    updateStars(rating, true);
}

function resetHover() {
    updateStars(selectedRating);
}

function updateStars(rating, isHover = false) {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        const starRating = index + 1;
        
        if (starRating <= rating) {
            // Filled star
            star.style.color = isHover ? '#ffeb3b' : '#ffc107';
            star.style.textShadow = '0 0 10px rgba(255, 193, 7, 0.5)';
            star.style.transform = isHover ? 'scale(1.1)' : 'scale(1)';
        } else {
            // Empty star
            star.style.color = '#666';
            star.style.textShadow = 'none';
            star.style.transform = 'scale(1)';
        }
    });
}

function getRatingColor(rating) {
    const colors = ['', '#ff4444', '#ff8800', '#ffbb00', '#44bb44', '#00aa00'];
    return colors[rating] || '#ccc';
}

// Enhanced submit feedback function
function submitFeedback(event) {
    event.preventDefault();
    
    const email = document.getElementById('feedbackEmail').value;
    const rating = selectedRating;
    const category = document.getElementById('feedbackCategory').value;
    const text = document.getElementById('feedbackText').value;
    const context = document.getElementById('currentContext').textContent;
    
    if (!text.trim()) {
        alert('Please enter your feedback before submitting.');
        return;
    }
    
    if (rating === 0) {
        alert('Please select a star rating before submitting.');
        return;
    }
    
    // Create feedback object
    const feedback = {
        id: 'FB' + Date.now(),
        timestamp: new Date().toISOString(),
        email: email || 'Anonymous',
        rating: rating,
        category: category,
        text: text.trim(),
        context: context,
        userAgent: navigator.userAgent,
        url: window.location.href
    };
    
    // Store feedback (in production, send to server)
    feedbackData.push(feedback);
    
    // Show success message
    showFeedbackSuccess();
    
    // Close modal
    setTimeout(closeFeedbackModal, 2000);
    
    // Log feedback (for development)
    console.log('Feedback submitted:', feedback);
}

// Make hover functions global
window.hoverRating = hoverRating;
window.resetHover = resetHover;