// Application State
let currentOrg = null;
let currentOrgType = null;
let currentRole = null;
let currentAccessLevel = 'public';

// Organization Data - Fixed structure
const organizationData = {
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
          {"month": "Jun", "income": 35247891, "expenses": 28456123},
          {"month": "Jul", "income": 42138567, "expenses": 33567234},
          {"month": "Aug", "income": 39456789, "expenses": 31234567},
          {"month": "Sep", "income": 46789123, "expenses": 28945612},
          {"month": "Oct", "income": 52341678, "expenses": 35678901},
          {"month": "Nov", "income": 38567234, "expires": 29123456},
          {"month": "Dec", "income": 45234567, "expenses": 32456789}
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
        "cost_per_meal": 18.50,
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
          "total_income": 285000000,
          "donations": 171000000,
          "government_grants": 71250000,
          "program_revenue": 28500000,
          "investment_income": 14250000
        },
        "expenses": {
          "total_expenses": 242250000,
          "program_expenses": 199500000,
          "administrative_expenses": 28500000,
          "fundraising_expenses": 14250000
        },
        "monthly_data": [
          {"month": "Jan", "income": 23750000, "expenses": 20187500},
          {"month": "Feb", "income": 23750000, "expenses": 20187500},
          {"month": "Mar", "income": 23750000, "expenses": 20187500},
          {"month": "Apr", "income": 23750000, "expenses": 20187500},
          {"month": "May", "income": 23750000, "expenses": 20187500},
          {"month": "Jun", "income": 23750000, "expenses": 20187500},
          {"month": "Jul", "income": 23750000, "expenses": 20187500},
          {"month": "Aug", "income": 23750000, "expenses": 20187500},
          {"month": "Sep", "income": 23750000, "expenses": 20187500},
          {"month": "Oct", "income": 23750000, "expenses": 20187500},
          {"month": "Nov", "income": 23750000, "expenses": 20187500},
          {"month": "Dec", "income": 23750000, "expenses": 20187500}
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
    }
  ],
  "government": [
    {
      "id": "swachh_bharat",
      "name": "Swachh Bharat Mission",
      "type": "Sanitation & Cleanliness",
      "financial": {
        "income": {
          "total_income": 1200000000,
          "central_funding": 720000000,
          "state_funding": 300000000,
          "corporate_csr": 120000000,
          "international_aid": 60000000
        },
        "expenses": {
          "total_expenses": 1020000000,
          "program_expenses": 840000000,
          "administrative_expenses": 120000000,
          "monitoring_expenses": 60000000
        },
        "monthly_data": [
          {"month": "Jan", "income": 100000000, "expenses": 85000000},
          {"month": "Feb", "income": 100000000, "expenses": 85000000},
          {"month": "Mar", "income": 100000000, "expenses": 85000000},
          {"month": "Apr", "income": 100000000, "expenses": 85000000},
          {"month": "May", "income": 100000000, "expenses": 85000000},
          {"month": "Jun", "income": 100000000, "expenses": 85000000},
          {"month": "Jul", "income": 100000000, "expenses": 85000000},
          {"month": "Aug", "income": 100000000, "expenses": 85000000},
          {"month": "Sep", "income": 100000000, "expenses": 85000000},
          {"month": "Oct", "income": 100000000, "expenses": 85000000},
          {"month": "Nov", "income": 100000000, "expenses": 85000000},
          {"month": "Dec", "income": 100000000, "expenses": 85000000}
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
    }
  ],
  "colleges": [
    {
      "id": "rvce",
      "name": "RV College of Engineering",
      "type": "Engineering",
      "financial": {
        "income": {
          "total_income": 450000000,
          "student_fees": 270000000,
          "government_grants": 112500000,
          "research_funding": 45000000,
          "endowment_income": 22500000
        },
        "expenses": {
          "total_expenses": 382500000,
          "faculty_salaries": 225000000,
          "infrastructure": 90000000,
          "research_expenses": 45000000,
          "administrative_expenses": 22500000
        },
        "monthly_data": [
          {"month": "Jan", "income": 37500000, "expenses": 31875000},
          {"month": "Feb", "income": 37500000, "expenses": 31875000},
          {"month": "Mar", "income": 37500000, "expenses": 31875000},
          {"month": "Apr", "income": 37500000, "expenses": 31875000},
          {"month": "May", "income": 37500000, "expenses": 31875000},
          {"month": "Jun", "income": 37500000, "expenses": 31875000},
          {"month": "Jul", "income": 37500000, "expenses": 31875000},
          {"month": "Aug", "income": 37500000, "expenses": 31875000},
          {"month": "Sep", "income": 37500000, "expenses": 31875000},
          {"month": "Oct", "income": 37500000, "expenses": 31875000},
          {"month": "Nov", "income": 37500000, "expenses": 31875000},
          {"month": "Dec", "income": 37500000, "expenses": 31875000}
        ]
      },
      "salaries": [
        {"role": "Principal/Director", "count": 1, "avg_salary": 2000000},
        {"role": "Professor", "count": 50, "avg_salary": 1200000},
        {"role": "Associate Professor", "count": 80, "avg_salary": 900000},
        {"role": "Assistant Professor", "count": 120, "avg_salary": 700000},
        {"role": "Administrative Staff", "count": 40, "avg_salary": 450000}
      ],
      "fraud_alerts": [
        {
          "alert_id": "CD001",
          "type": "Equipment Purchase",
          "description": "Inflated prices detected in laboratory equipment procurement",
          "severity": "Medium",
          "amount": "₹5,75,000",
          "status": "Under Review"
        }
      ],
      "impact": {
        "students_enrolled": 8000,
        "faculty_count": 251,
        "research_projects": 180,
        "cost_per_student": 47812,
        "infrastructure": {
          "buildings": 12,
          "laboratories": 85,
          "library_books": 125000,
          "placement_rate": "95%"
        }
      }
    }
  ]
};

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-IN').format(num);
}

function showPage(pageId) {
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[data-tab="${tabId.replace('-tab', '')}"]`).classList.add('active');
}

// Landing Page Functions - Completely rewritten for better reliability
function initializeLandingPage() {
    // Add click listeners for dropdown items using a more direct approach
    function setupDropdownHandlers() {
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const orgId = this.dataset.org;
                const parentCard = this.closest('.org-type-card');
                const orgType = parentCard.dataset.type;
                
                console.log('Organization selected:', orgType, orgId);
                
                // Hide dropdown immediately
                const dropdown = this.closest('.org-dropdown');
                if (dropdown) {
                    dropdown.classList.add('hidden');
                }
                
                // Navigate to role selection
                selectOrganization(orgType, orgId);
            });
        });
    }

    // Handle organization card clicks for dropdown toggle
    document.querySelectorAll('.org-type-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdown = this.querySelector('.org-dropdown');
            
            // Hide all other dropdowns first
            document.querySelectorAll('.org-dropdown').forEach(dd => {
                if (dd !== dropdown) {
                    dd.classList.add('hidden');
                }
            });
            
            // Toggle current dropdown
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.org-type-card') && !e.target.closest('.org-dropdown')) {
            document.querySelectorAll('.org-dropdown').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });

    // Initialize dropdown handlers
    setupDropdownHandlers();
}

function selectOrganization(orgType, orgId) {
    console.log('Selecting organization:', orgType, orgId);
    
    // Map frontend types to data keys
    let dataKey = orgType;
    if (orgType === 'government') {
        dataKey = 'government';
    }
    
    currentOrgType = dataKey;
    
    // Find the organization data
    const orgList = organizationData[dataKey];
    if (orgList && orgList.length > 0) {
        currentOrg = orgList.find(org => org.id === orgId);
        
        if (currentOrg) {
            console.log('Organization found:', currentOrg.name);
            // Small delay to ensure smooth transition
            setTimeout(() => {
                showRoleSelection();
            }, 100);
        } else {
            console.error('Organization not found:', orgId, 'in', dataKey);
            console.log('Available orgs:', orgList.map(org => org.id));
        }
    } else {
        console.error('Organization type not found:', dataKey);
        console.log('Available types:', Object.keys(organizationData));
    }
}

// Role Selection Functions
function showRoleSelection() {
    const orgNameElement = document.getElementById('selected-org-name');
    const roleOptionsElement = document.getElementById('role-options');
    
    orgNameElement.textContent = `${currentOrg.name} - Select Your Role`;
    
    let roleOptions = [];
    
    if (currentOrgType === 'ngos') {
        roleOptions = [
            { role: 'supporter', name: 'Supporter/Donor', icon: 'fas fa-heart', access: 'public' },
            { role: 'admin', name: 'Administration', icon: 'fas fa-user-cog', access: 'admin' }
        ];
    } else if (currentOrgType === 'government') {
        roleOptions = [
            { role: 'civilian', name: 'Civilian', icon: 'fas fa-user', access: 'public' },
            { role: 'admin', name: 'Administration', icon: 'fas fa-user-shield', access: 'admin' }
        ];
    } else if (currentOrgType === 'colleges') {
        roleOptions = [
            { role: 'parent', name: 'Parent/Student', icon: 'fas fa-user-graduate', access: 'public' },
            { role: 'stakeholder', name: 'Stakeholder/Admin', icon: 'fas fa-briefcase', access: 'admin' }
        ];
    }
    
    roleOptionsElement.innerHTML = roleOptions.map(option => `
        <div class="role-card" data-role="${option.role}" data-access="${option.access}">
            <i class="${option.icon}"></i>
            <h4>${option.name}</h4>
        </div>
    `).join('');
    
    // Add event listeners to role cards
    const roleCards = roleOptionsElement.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            currentRole = this.dataset.role;
            currentAccessLevel = this.dataset.access;
            console.log('Role selected:', currentRole, currentAccessLevel);
            
            // Small delay for smooth transition
            setTimeout(() => {
                showDashboard();
            }, 100);
        });
    });
    
    showPage('role-selection-page');
}

// Dashboard Functions
function showDashboard() {
    const dashboardOrgName = document.getElementById('dashboard-org-name');
    const currentRoleElement = document.getElementById('current-role');
    
    dashboardOrgName.textContent = currentOrg.name;
    currentRoleElement.textContent = currentRole.charAt(0).toUpperCase() + currentRole.slice(1);
    
    // Initialize dashboard data
    populateOverviewTab();
    populateIncomeTab();
    populateExpensesTab();
    populateSalariesTab();
    populateFraudTab();
    populateImpactTab();
    
    showPage('dashboard-page');
}

function populateOverviewTab() {
    const financial = currentOrg.financial;
    
    document.getElementById('total-income').textContent = formatCurrency(financial.income.total_income);
    document.getElementById('total-expenses').textContent = formatCurrency(financial.expenses.total_expenses);
    document.getElementById('net-surplus').textContent = formatCurrency(financial.income.total_income - financial.expenses.total_expenses);
    
    setTimeout(() => {
        createBudgetChart();
        createMonthlyChart();
    }, 200);
}

function createBudgetChart() {
    try {
        const ctx = document.getElementById('budgetChart').getContext('2d');
        const income = currentOrg.financial.income;
        
        const incomeKeys = Object.keys(income).filter(key => key !== 'total_income');
        const incomeLabels = incomeKeys.map(key => key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
        const incomeValues = incomeKeys.map(key => income[key]);
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: incomeLabels,
                datasets: [{
                    data: incomeValues,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
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
    } catch (error) {
        console.error('Error creating budget chart:', error);
    }
}

function createMonthlyChart() {
    try {
        const ctx = document.getElementById('monthlyChart').getContext('2d');
        const monthlyData = currentOrg.financial.monthly_data;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.map(d => d.month),
                datasets: [{
                    label: 'Income',
                    data: monthlyData.map(d => d.income),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }, {
                    label: 'Expenses',
                    data: monthlyData.map(d => d.expenses || d.expires), // Fix typo in data
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value / 1000000).toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating monthly chart:', error);
    }
}

function populateIncomeTab() {
    setTimeout(() => {
        createIncomeSourceChart();
        createIncomeTrendChart();
    }, 200);
}

function createIncomeSourceChart() {
    try {
        const ctx = document.getElementById('incomeSourceChart').getContext('2d');
        const income = currentOrg.financial.income;
        
        const incomeKeys = Object.keys(income).filter(key => key !== 'total_income');
        const incomeLabels = incomeKeys.map(key => key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
        const incomeValues = incomeKeys.map(key => income[key]);
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: incomeLabels,
                datasets: [{
                    data: incomeValues,
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating income source chart:', error);
    }
}

function createIncomeTrendChart() {
    try {
        const ctx = document.getElementById('incomeTrendChart').getContext('2d');
        const monthlyData = currentOrg.financial.monthly_data;
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: monthlyData.map(d => d.month),
                datasets: [{
                    label: 'Monthly Income',
                    data: monthlyData.map(d => d.income),
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value / 1000000).toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating income trend chart:', error);
    }
}

function populateExpensesTab() {
    setTimeout(() => {
        createExpenseCategoryChart();
        createExpenseTrendChart();
    }, 200);
}

function createExpenseCategoryChart() {
    try {
        const ctx = document.getElementById('expenseCategoryChart').getContext('2d');
        const expenses = currentOrg.financial.expenses;
        
        const expenseKeys = Object.keys(expenses).filter(key => key !== 'total_expenses');
        const expenseLabels = expenseKeys.map(key => key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
        const expenseValues = expenseKeys.map(key => expenses[key]);
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: expenseLabels,
                datasets: [{
                    data: expenseValues,
                    backgroundColor: ['#B4413C', '#FFC185', '#5D878F', '#ECEBD5']
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
    } catch (error) {
        console.error('Error creating expense category chart:', error);
    }
}

function createExpenseTrendChart() {
    try {
        const ctx = document.getElementById('expenseTrendChart').getContext('2d');
        const monthlyData = currentOrg.financial.monthly_data;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.map(d => d.month),
                datasets: [{
                    label: 'Monthly Expenses',
                    data: monthlyData.map(d => d.expenses || d.expires), // Fix typo in data
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + (value / 1000000).toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating expense trend chart:', error);
    }
}

function populateSalariesTab() {
    const salaryContent = document.getElementById('salary-content');
    
    if (currentAccessLevel === 'admin') {
        // Show detailed salary information
        const totalSalaryBudget = currentOrg.salaries.reduce((total, role) => total + (role.count * role.avg_salary), 0);
        const totalEmployees = currentOrg.salaries.reduce((total, role) => total + role.count, 0);
        const avgSalary = totalSalaryBudget / totalEmployees;
        
        salaryContent.innerHTML = `
            <div class="salary-summary">
                <h4>Salary Overview</h4>
                <div class="salary-stats">
                    <div class="salary-stat">
                        <span class="number">${formatCurrency(totalSalaryBudget)}</span>
                        <span class="label">Total Budget</span>
                    </div>
                    <div class="salary-stat">
                        <span class="number">${totalEmployees}</span>
                        <span class="label">Total Employees</span>
                    </div>
                    <div class="salary-stat">
                        <span class="number">${formatCurrency(avgSalary)}</span>
                        <span class="label">Average Salary</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__body">
                    <h4>Detailed Salary Breakdown</h4>
                    <table class="salary-table">
                        <thead>
                            <tr>
                                <th>Role</th>
                                <th>Count</th>
                                <th>Average Salary</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${currentOrg.salaries.map(role => `
                                <tr>
                                    <td>${role.role}</td>
                                    <td>${role.count}</td>
                                    <td>${formatCurrency(role.avg_salary)}</td>
                                    <td>${formatCurrency(role.count * role.avg_salary)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        // Show only general budget information
        const totalSalaryBudget = currentOrg.salaries.reduce((total, role) => total + (role.count * role.avg_salary), 0);
        const totalEmployees = currentOrg.salaries.reduce((total, role) => total + role.count, 0);
        
        salaryContent.innerHTML = `
            <div class="salary-summary">
                <h4>General Salary Information</h4>
                <p>For privacy reasons, detailed salary information is only available to administrators.</p>
                <div class="salary-stats">
                    <div class="salary-stat">
                        <span class="number">${formatCurrency(totalSalaryBudget)}</span>
                        <span class="label">Total Salary Budget</span>
                    </div>
                    <div class="salary-stat">
                        <span class="number">${totalEmployees}</span>
                        <span class="label">Total Employees</span>
                    </div>
                </div>
            </div>
        `;
    }
}

function populateFraudTab() {
    const fraudAlertsElement = document.getElementById('fraud-alerts');
    
    if (currentOrg.fraud_alerts && currentOrg.fraud_alerts.length > 0) {
        fraudAlertsElement.innerHTML = `
            <h3>Fraud Detection Alerts</h3>
            ${currentOrg.fraud_alerts.map(alert => `
                <div class="fraud-alert ${alert.severity.toLowerCase()}">
                    <div class="fraud-alert-header">
                        <h4 class="fraud-alert-title">${alert.type}</h4>
                        <span class="fraud-alert-amount">${alert.amount}</span>
                    </div>
                    <p>${alert.description}</p>
                    <div class="fraud-alert-meta">
                        <span class="fraud-status ${alert.status.toLowerCase().replace(' ', '-')}">${alert.status}</span>
                        <span class="status status--${alert.severity.toLowerCase() === 'high' ? 'error' : alert.severity.toLowerCase() === 'medium' ? 'warning' : 'info'}">${alert.severity} Priority</span>
                    </div>
                </div>
            `).join('')}
        `;
    } else {
        fraudAlertsElement.innerHTML = `
            <div class="card">
                <div class="card__body">
                    <h3>No Active Alerts</h3>
                    <p>No fraud detection alerts are currently active for this organization.</p>
                </div>
            </div>
        `;
    }
}

function populateImpactTab() {
    const impactContent = document.getElementById('impact-content');
    const impact = currentOrg.impact;
    
    let impactMetrics = '';
    let infrastructureDetails = '';
    
    if (currentOrgType === 'ngos') {
        if (impact.meals_served) {
            impactMetrics = `
                <div class="impact-metric">
                    <span class="metric-number">${formatNumber(impact.meals_served)}</span>
                    <span class="metric-label">Meals Served</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">${formatNumber(impact.schools_covered)}</span>
                    <span class="metric-label">Schools Covered</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">${impact.states_operational}</span>
                    <span class="metric-label">States Operational</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">₹${impact.cost_per_meal}</span>
                    <span class="metric-label">Cost per Meal</span>
                </div>
            `;
            
            infrastructureDetails = `
                <div class="impact-details">
                    <h4>Kitchen Infrastructure</h4>
                    <div class="infrastructure-grid">
                        <div class="infra-item">
                            <span class="infra-number">${impact.kitchen_infrastructure.centralized_kitchens}</span>
                            <span class="metric-label">Centralized Kitchens</span>
                        </div>
                        <div class="infra-item">
                            <span class="infra-number">${impact.kitchen_infrastructure.school_kitchens}</span>
                            <span class="metric-label">School Kitchens</span>
                        </div>
                        <div class="infra-item">
                            <span class="infra-number">${impact.kitchen_infrastructure.total_capacity}</span>
                            <span class="metric-label">Daily Capacity</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            impactMetrics = `
                <div class="impact-metric">
                    <span class="metric-number">${formatNumber(impact.beneficiaries_served)}</span>
                    <span class="metric-label">Beneficiaries Served</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">${formatNumber(impact.programs_active)}</span>
                    <span class="metric-label">Active Programs</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">${impact.states_operational}</span>
                    <span class="metric-label">States Operational</span>
                </div>
                <div class="impact-metric">
                    <span class="metric-number">₹${impact.cost_per_beneficiary}</span>
                    <span class="metric-label">Cost per Beneficiary</span>
                </div>
            `;
            
            infrastructureDetails = `
                <div class="impact-details">
                    <h4>Program Infrastructure</h4>
                    <div class="infrastructure-grid">
                        <div class="infra-item">
                            <span class="infra-number">${impact.infrastructure.learning_centers}</span>
                            <span class="metric-label">Learning Centers</span>
                        </div>
                        <div class="infra-item">
                            <span class="infra-number">${impact.infrastructure.health_centers}</span>
                            <span class="metric-label">Health Centers</span>
                        </div>
                        <div class="infra-item">
                            <span class="infra-number">${impact.infrastructure.total_reach}</span>
                            <span class="metric-label">Geographic Reach</span>
                        </div>
                    </div>
                </div>
            `;
        }
    } else if (currentOrgType === 'government') {
        impactMetrics = `
            <div class="impact-metric">
                <span class="metric-number">${formatNumber(impact.toilets_built)}</span>
                <span class="metric-label">Toilets Built</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">${impact.districts_covered}</span>
                <span class="metric-label">Districts Covered</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">${impact.states_covered}</span>
                <span class="metric-label">States Covered</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">${impact.waste_processed_daily}</span>
                <span class="metric-label">Daily Waste Processing</span>
            </div>
        `;
        
        infrastructureDetails = `
            <div class="impact-details">
                <h4>Sanitation Infrastructure</h4>
                <div class="infrastructure-grid">
                    <div class="infra-item">
                        <span class="infra-number">${formatNumber(impact.infrastructure.solid_waste_plants)}</span>
                        <span class="metric-label">Solid Waste Plants</span>
                    </div>
                    <div class="infra-item">
                        <span class="infra-number">${formatNumber(impact.infrastructure.liquid_waste_plants)}</span>
                        <span class="metric-label">Liquid Waste Plants</span>
                    </div>
                    <div class="infra-item">
                        <span class="infra-number">${formatNumber(impact.infrastructure.community_toilets)}</span>
                        <span class="metric-label">Community Toilets</span>
                    </div>
                </div>
            </div>
        `;
    } else if (currentOrgType === 'colleges') {
        impactMetrics = `
            <div class="impact-metric">
                <span class="metric-number">${formatNumber(impact.students_enrolled)}</span>
                <span class="metric-label">Students Enrolled</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">${impact.faculty_count}</span>
                <span class="metric-label">Faculty Members</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">${impact.research_projects}</span>
                <span class="metric-label">Research Projects</span>
            </div>
            <div class="impact-metric">
                <span class="metric-number">₹${formatNumber(impact.cost_per_student)}</span>
                <span class="metric-label">Cost per Student</span>
            </div>
        `;
        
        infrastructureDetails = `
            <div class="impact-details">
                <h4>Campus Infrastructure</h4>
                <div class="infrastructure-grid">
                    <div class="infra-item">
                        <span class="infra-number">${impact.infrastructure.buildings}</span>
                        <span class="metric-label">Buildings</span>
                    </div>
                    <div class="infra-item">
                        <span class="infra-number">${impact.infrastructure.laboratories}</span>
                        <span class="metric-label">Laboratories</span>
                    </div>
                    <div class="infra-item">
                        <span class="infra-number">${formatNumber(impact.infrastructure.library_books)}</span>
                        <span class="metric-label">Library Books</span>
                    </div>
                    <div class="infra-item">
                        <span class="infra-number">${impact.infrastructure.placement_rate}</span>
                        <span class="metric-label">Placement Rate</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    impactContent.innerHTML = `
        <h3>Development Impact</h3>
        <div class="impact-metrics">
            ${impactMetrics}
        </div>
        ${infrastructureDetails}
        <div class="articles-section">
            <h4>Program Evidence & Documentation</h4>
            <div class="article-item">
                <div class="article-title">Annual Impact Report 2024</div>
                <div class="article-meta">Published: March 2024 | Type: Impact Assessment</div>
            </div>
            <div class="article-item">
                <div class="article-title">Third-Party Audit Results</div>
                <div class="article-meta">Published: February 2024 | Type: Financial Audit</div>
            </div>
            <div class="article-item">
                <div class="article-title">Beneficiary Testimonials</div>
                <div class="article-meta">Published: January 2024 | Type: Case Studies</div>
            </div>
        </div>
    `;
}

// Tab Navigation
function initializeTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab + '-tab';
            showTab(tabId);
        });
    });
}

// AI Assistant Functions
function initializeAIAssistant() {
    const aiToggle = document.getElementById('ai-toggle');
    const aiChat = document.getElementById('ai-chat');
    const aiClose = document.getElementById('ai-close');
    const aiSend = document.getElementById('ai-send');
    const aiInput = document.getElementById('ai-input');
    const aiMessages = document.getElementById('ai-messages');

    aiToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('AI assistant toggled');
        aiChat.classList.toggle('hidden');
    });

    aiClose.addEventListener('click', function() {
        aiChat.classList.add('hidden');
    });

    if (aiSend) {
        aiSend.addEventListener('click', sendMessage);
    }
    
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const message = aiInput.value.trim();
        if (!message) return;

        // Add user message
        aiMessages.innerHTML += `
            <div class="ai-message user-message">${message}</div>
        `;

        // Generate bot response
        const response = generateAIResponse(message);
        setTimeout(() => {
            aiMessages.innerHTML += `
                <div class="ai-message bot-message">${response}</div>
            `;
            aiMessages.scrollTop = aiMessages.scrollHeight;
        }, 500);

        aiInput.value = '';
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('navigate') || lowerMessage.includes('help') || lowerMessage.includes('how')) {
            return "I can help you navigate Abba Accounts! Use the tabs at the top to explore different sections: Overview shows key financials, Income & Expenses provide detailed breakdowns, Salaries shows employment costs, Fraud Detection highlights any irregularities, and Development Impact shows the organization's achievements.";
        } else if (lowerMessage.includes('income') || lowerMessage.includes('revenue')) {
            if (currentOrg) {
                return `${currentOrg.name} has a total income of ${formatCurrency(currentOrg.financial.income.total_income)} this year. The main sources include donations, grants, and program revenue. Check the Income tab for detailed breakdowns and trends.`;
            }
            return "Please select an organization first to view income information.";
        } else if (lowerMessage.includes('expense') || lowerMessage.includes('spending')) {
            if (currentOrg) {
                return `${currentOrg.name} has total expenses of ${formatCurrency(currentOrg.financial.expenses.total_expenses)} this year. The majority goes to program expenses, ensuring funds directly benefit the cause. See the Expenses tab for detailed analysis.`;
            }
            return "Please select an organization first to view expense information.";
        } else if (lowerMessage.includes('fraud') || lowerMessage.includes('alert')) {
            if (currentOrg) {
                const alertCount = currentOrg.fraud_alerts?.length || 0;
                return `There are currently ${alertCount} fraud detection alerts for ${currentOrg.name}. These alerts help maintain financial transparency and accountability. Check the Fraud Detection tab for details.`;
            }
            return "Please select an organization first to view fraud detection information.";
        } else if (lowerMessage.includes('impact') || lowerMessage.includes('beneficiary')) {
            if (currentOrg) {
                return `${currentOrg.name} has made significant impact in their field. Check the Development Impact tab to see specific metrics like beneficiaries served, programs active, and infrastructure developed.`;
            }
            return "Please select an organization first to view impact information.";
        } else if (lowerMessage.includes('salary') || lowerMessage.includes('employee')) {
            return `Salary information is available based on your access level. ${currentAccessLevel === 'admin' ? 'As an admin, you can see detailed salary breakdowns in the Salaries tab.' : 'As a public user, you can see general salary budget information in the Salaries tab.'}`;
        } else {
            return "I'm here to help you understand financial data and navigate the platform. You can ask me about income, expenses, fraud alerts, impact metrics, or how to use different features of Abba Accounts!";
        }
    }
}

// Back to Home Functions
function initializeBackButtons() {
    document.querySelectorAll('.back-to-home').forEach(btn => {
        btn.addEventListener('click', function() {
            showPage('landing-page');
            // Reset state
            currentOrg = null;
            currentOrgType = null;
            currentRole = null;
            currentAccessLevel = 'public';
        });
    });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Abba Accounts application...');
    initializeLandingPage();
    initializeTabs();
    initializeAIAssistant();
    initializeBackButtons();
    
    // Show landing page by default
    showPage('landing-page');
    console.log('Application initialized successfully');
});