/**
 * ABBA Transactions Manager - JavaScript Implementation
 * Handles transaction data loading, searching, filtering, and display
 * Author: ABBA Development Team
 * Version: 1.0
 */

// Transaction data management system
class TransactionManager {
    constructor() {
        this.transactions = [];
        this.filteredTransactions = [];
        this.currentPage = 1;
        this.itemsPerPage = 25;
        this.currentSort = { field: 'date', direction: 'desc' };
        this.currentInstitution = null;
        
        // Institution-specific transaction data mapping
        this.institutionDataMap = {
            'iit_delhi': 'Indian_Institute_of_Technology_Delhi_Financial_Transactions.json',
            'iit_madras': 'Indian_Institute_of_Technology_Madras_Financial_Transactions.json',
            'nit_trichy': 'National_Institute_of_Technology_Tiruchirappalli_Financial_Transactions.json',
            'mgnrega': 'Mahatma_Gandhi_National_Rural_Employment_Guarantee_Act_Financial_Transactions.json'
        };
        
        this.initializeEventListeners();
    }

    /**
     * Initialize all event listeners for the transactions feature
     */
    initializeEventListeners() {
        // Tab click handler
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-tab="transactions"]')) {
                this.handleTransactionsTabClick(e);
            }
        });

        // Search input handler with debouncing
        let searchTimeout;
        document.addEventListener('input', (e) => {
            if (e.target.id === 'transactionSearch') {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.handleSearch(e.target.value);
                }, 300);
                this.toggleClearButton(e.target.value);
            }
        });

        // Filter handlers
        document.addEventListener('change', (e) => {
            if (e.target.matches('#typeFilter, #departmentFilter, #dateFilter')) {
                this.applyFilters();
            }
        });

        // Clear search button handler
        document.addEventListener('click', (e) => {
            if (e.target.closest('#clearSearch')) {
                this.clearSearch();
            }
        });

        // Table sorting handlers
        document.addEventListener('click', (e) => {
            if (e.target.closest('.sortable')) {
                const sortField = e.target.closest('.sortable').dataset.sort;
                this.handleSort(sortField);
            }
        });

        // Pagination handlers
        document.addEventListener('click', (e) => {
            if (e.target.id === 'prevPage') this.previousPage();
            if (e.target.id === 'nextPage') this.nextPage();
        });
    }

    /**
     * Handle transactions tab click - load data for current institution
     */
    async handleTransactionsTabClick(event) {
        try {
            // Show loading state
            this.showLoadingState();
            
            // Get current institution from global state or determine from context
            const institution = this.getCurrentInstitution();
            
            if (!institution) {
                throw new Error('No institution selected');
            }

            // Load transaction data for the institution
            await this.loadTransactionData(institution);
            
            // Initialize the transactions display
            this.initializeTransactionsDisplay();
            
        } catch (error) {
            console.error('Error loading transactions:', error);
            this.showErrorState('Failed to load transactions. Please try again.');
        }
    }

    /**
     * Determine the current institution based on application state
     */
    getCurrentInstitution() {
        // Check global variables first
        if (typeof currentOrg !== 'undefined' && currentOrg) {
            return currentOrg.id || currentOrg;
        }
        
        // Check for active organization in the UI
        const activeOrgElement = document.querySelector('.organization-card.active, .org-item.selected');
        if (activeOrgElement) {
            return activeOrgElement.dataset.orgId || activeOrgElement.dataset.id;
        }
        
        // Check URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const orgFromUrl = urlParams.get('org') || urlParams.get('institution');
        if (orgFromUrl) {
            return orgFromUrl;
        }
        
        // Default fallback - could be removed in production
        console.warn('No institution found, using default for demo');
        return 'iit_delhi';
    }

    /**
     * Load transaction data from JSON file based on institution
     */
    async loadTransactionData(institutionId) {
        try {
            this.currentInstitution = institutionId;
            
            // Map institution ID to correct JSON file
            const filename = this.getTransactionFilename(institutionId);
            
            if (!filename) {
                throw new Error(`No transaction data available for institution: ${institutionId}`);
            }

            // Fetch the JSON data
            const response = await fetch(filename);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Validate data structure
            if (!data.transactions || !Array.isArray(data.transactions)) {
                throw new Error('Invalid transaction data format');
            }
            
            // Store the transactions and process them
            this.transactions = data.transactions.map((transaction, index) => ({
                ...transaction,
                // Add unique identifier if missing
                id: transaction.transaction_id || `txn_${index}`,
                // Parse date for sorting
                parsedDate: new Date(transaction.date),
                // Normalize amount to number
                numericAmount: typeof transaction.amount === 'string' 
                    ? parseFloat(transaction.amount.replace(/[^0-9.-]/g, '')) 
                    : transaction.amount
            }));
            
            console.log(`Loaded ${this.transactions.length} transactions for ${data.institution}`);
            
        } catch (error) {
            console.error('Error loading transaction data:', error);
            throw error;
        }
    }

    /**
     * Map institution ID to transaction JSON filename
     */
    getTransactionFilename(institutionId) {
        const mapping = {
            'iit_delhi': 'Indian_Institute_of_Technology_Delhi_Financial_Transactions.json',
            'iit_madras': 'Indian_Institute_of_Technology_Madras_Financial_Transactions.json',
            'iit_bangalore': 'Indian_Institute_of_Technology_Delhi_Financial_Transactions.json', // Fallback
            'nit_trichy': 'National_Institute_of_Technology_Tiruchirappalli_Financial_Transactions.json',
            'mgnrega': 'Mahatma_Gandhi_National_Rural_Employment_Guarantee_Act_Financial_Transactions.json',
            // Add more mappings as needed
        };
        
        return mapping[institutionId] || mapping['iit_delhi']; // Default fallback
    }

    /**
     * Initialize the transactions display after data is loaded
     */
    initializeTransactionsDisplay() {
        // Populate department filter
        this.populateDepartmentFilter();
        
        // Apply initial filters and display
        this.applyFilters();
        
        // Update statistics
        this.updateStatistics();
        
        // Hide loading state
        this.hideLoadingState();
    }

    /**
     * Populate the department filter dropdown with unique departments
     */
    populateDepartmentFilter() {
        const departmentFilter = document.getElementById('departmentFilter');
        if (!departmentFilter) return;
        
        // Get unique departments from transactions
        const departments = [...new Set(this.transactions.map(t => t.department))].sort();
        
        // Clear existing options except the first one
        departmentFilter.innerHTML = '<option value="">All Departments</option>';
        
        // Add department options
        departments.forEach(department => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            departmentFilter.appendChild(option);
        });
    }

    /**
     * Handle search functionality
     */
    handleSearch(searchTerm) {
        const normalizedSearch = searchTerm.toLowerCase().trim();
        
        if (normalizedSearch === '') {
            // If search is empty, show all transactions
            this.filteredTransactions = [...this.transactions];
        } else {
            // Filter transactions based on search term
            this.filteredTransactions = this.transactions.filter(transaction => {
                return (
                    transaction.department.toLowerCase().includes(normalizedSearch) ||
                    transaction.description.toLowerCase().includes(normalizedSearch) ||
                    transaction.transaction_id.toLowerCase().includes(normalizedSearch) ||
                    transaction.type.toLowerCase().includes(normalizedSearch)
                );
            });
        }
        
        // Apply additional filters
        this.applyAdditionalFilters();
        
        // Reset to first page and update display
        this.currentPage = 1;
        this.updateDisplay();
    }

    /**
     * Apply all active filters
     */
    applyFilters() {
        // Start with all transactions
        this.filteredTransactions = [...this.transactions];
        
        // Apply search filter if search box has content
        const searchInput = document.getElementById('transactionSearch');
        if (searchInput && searchInput.value.trim()) {
            this.handleSearch(searchInput.value);
            return; // handleSearch will call applyAdditionalFilters
        }
        
        // Apply other filters
        this.applyAdditionalFilters();
        
        // Reset to first page and update display
        this.currentPage = 1;
        this.updateDisplay();
    }

    /**
     * Apply filters other than search
     */
    applyAdditionalFilters() {
        const typeFilter = document.getElementById('typeFilter')?.value;
        const departmentFilter = document.getElementById('departmentFilter')?.value;
        const dateFilter = document.getElementById('dateFilter')?.value;
        
        if (typeFilter) {
            this.filteredTransactions = this.filteredTransactions.filter(t => 
                t.type === typeFilter
            );
        }
        
        if (departmentFilter) {
            this.filteredTransactions = this.filteredTransactions.filter(t => 
                t.department === departmentFilter
            );
        }
        
        if (dateFilter) {
            const now = new Date();
            const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
            
            this.filteredTransactions = this.filteredTransactions.filter(t => {
                const transactionDate = new Date(t.date);
                
                if (dateFilter === 'recent') {
                    return transactionDate >= threeMonthsAgo;
                } else if (dateFilter === 'older') {
                    return transactionDate < threeMonthsAgo;
                }
                return true;
            });
        }
    }

    /**
     * Handle table column sorting
     */
    handleSort(field) {
        // Toggle sort direction if same field, otherwise default to ascending
        if (this.currentSort.field === field) {
            this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSort.field = field;
            this.currentSort.direction = 'asc';
        }
        
        // Sort the filtered transactions
        this.sortTransactions();
        
        // Update sort indicators in table headers
        this.updateSortIndicators();
        
        // Update display
        this.updateDisplay();
    }

    /**
     * Sort transactions based on current sort criteria
     */
    sortTransactions() {
        this.filteredTransactions.sort((a, b) => {
            let aValue = a[this.currentSort.field];
            let bValue = b[this.currentSort.field];
            
            // Handle special cases for different data types
            if (this.currentSort.field === 'date') {
                aValue = new Date(a.date);
                bValue = new Date(b.date);
            } else if (this.currentSort.field === 'amount') {
                aValue = a.numericAmount || 0;
                bValue = b.numericAmount || 0;
            } else if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }
            
            // Compare values
            let comparison = 0;
            if (aValue < bValue) comparison = -1;
            else if (aValue > bValue) comparison = 1;
            
            // Apply sort direction
            return this.currentSort.direction === 'desc' ? -comparison : comparison;
        });
    }

    /**
     * Update sort indicators in table headers
     */
    updateSortIndicators() {
        // Remove existing sort indicators
        document.querySelectorAll('.transactions-table th').forEach(th => {
            th.classList.remove('sorted');
            const icon = th.querySelector('.sort-icon');
            if (icon) icon.textContent = '↕';
        });
        
        // Add indicator to current sort column
        const currentSortHeader = document.querySelector(`[data-sort="${this.currentSort.field}"]`);
        if (currentSortHeader) {
            currentSortHeader.classList.add('sorted');
            const icon = currentSortHeader.querySelector('.sort-icon');
            if (icon) {
                icon.textContent = this.currentSort.direction === 'asc' ? '↑' : '↓';
            }
        }
    }

    /**
     * Update the main display (table, pagination, stats)
     */
    updateDisplay() {
        this.updateTransactionsTable();
        this.updatePagination();
        this.updateStatistics();
        this.checkEmptyState();
    }

    /**
     * Update the transactions table with current page data
     */
    updateTransactionsTable() {
        const tbody = document.getElementById('transactionsTableBody');
        if (!tbody) return;
        
        // Calculate pagination
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageTransactions = this.filteredTransactions.slice(startIndex, endIndex);
        
        // Clear existing rows
        tbody.innerHTML = '';
        
        // Add rows for current page
        pageTransactions.forEach(transaction => {
            const row = this.createTransactionRow(transaction);
            tbody.appendChild(row);
        });
    }

    /**
     * Create a table row for a transaction
     */
    createTransactionRow(transaction) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${this.formatDate(transaction.date)}</td>
            <td>
                <code class="transaction-id">${transaction.transaction_id}</code>
            </td>
            <td>
                <span class="department-name">${transaction.department}</span>
            </td>
            <td>
                <span class="transaction-type ${transaction.type}">
                    ${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                </span>
            </td>
            <td class="description-cell">
                <span class="transaction-description" title="${transaction.description}">
                    ${this.truncateText(transaction.description, 60)}
                </span>
            </td>
            <td>
                <span class="transaction-amount ${transaction.type}">
                    ${this.formatCurrency(transaction.amount)}
                </span>
            </td>
        `;
        
        return row;
    }

    /**
     * Update pagination controls and info
     */
    updatePagination() {
        const totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
        
        // Update pagination info
        const paginationInfo = document.getElementById('paginationInfo');
        if (paginationInfo) {
            paginationInfo.textContent = `Page ${this.currentPage} of ${totalPages}`;
        }
        
        // Update pagination buttons
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        
        if (prevBtn) prevBtn.disabled = this.currentPage <= 1;
        if (nextBtn) nextBtn.disabled = this.currentPage >= totalPages;
    }

    /**
     * Update statistics display
     */
    updateStatistics() {
        const totalTransactions = this.filteredTransactions.length;
        
        // Calculate totals
        const totals = this.filteredTransactions.reduce((acc, transaction) => {
            const amount = transaction.numericAmount || 0;
            
            if (transaction.type === 'income') {
                acc.income += amount;
            } else if (transaction.type === 'expense') {
                acc.expenses += amount;
            }
            
            return acc;
        }, { income: 0, expenses: 0 });
        
        const netAmount = totals.income - totals.expenses;
        
        // Update stat displays
        this.updateStatElement('totalTransactions', totalTransactions.toLocaleString());
        this.updateStatElement('totalIncome', this.formatCurrency(totals.income));
        this.updateStatElement('totalExpenses', this.formatCurrency(totals.expenses));
        this.updateStatElement('netAmount', this.formatCurrency(netAmount));
        
        // Update net amount styling
        const netAmountElement = document.getElementById('netAmount');
        if (netAmountElement) {
            netAmountElement.className = 'stat-value ' + (netAmount >= 0 ? 'income' : 'expense');
        }
    }

    /**
     * Update individual stat element
     */
    updateStatElement(elementId, value) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        }
    }

    /**
     * Check and show/hide empty state
     */
    checkEmptyState() {
        const noTransactionsDiv = document.getElementById('noTransactions');
        const tableContainer = document.querySelector('.transactions-table-container');
        const pagination = document.getElementById('transactionsPagination');
        
        if (this.filteredTransactions.length === 0) {
            if (noTransactionsDiv) noTransactionsDiv.style.display = 'block';
            if (tableContainer) tableContainer.style.display = 'none';
            if (pagination) pagination.style.display = 'none';
        } else {
            if (noTransactionsDiv) noTransactionsDiv.style.display = 'none';
            if (tableContainer) tableContainer.style.display = 'block';
            if (pagination) pagination.style.display = 'flex';
        }
    }

    /**
     * Pagination - go to previous page
     */
    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateDisplay();
        }
    }

    /**
     * Pagination - go to next page
     */
    nextPage() {
        const totalPages = Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.updateDisplay();
        }
    }

    /**
     * Clear search input and filters
     */
    clearSearch() {
        const searchInput = document.getElementById('transactionSearch');
        if (searchInput) {
            searchInput.value = '';
            this.toggleClearButton('');
        }
        
        // Reset filters
        document.getElementById('typeFilter').value = '';
        document.getElementById('departmentFilter').value = '';
        document.getElementById('dateFilter').value = '';
        
        // Reapply filters (which will show all transactions)
        this.applyFilters();
    }

    /**
     * Toggle visibility of clear search button
     */
    toggleClearButton(searchValue) {
        const clearBtn = document.getElementById('clearSearch');
        if (clearBtn) {
            if (searchValue.trim()) {
                clearBtn.classList.add('visible');
            } else {
                clearBtn.classList.remove('visible');
            }
        }
    }

    /**
     * Show loading state
     */
    showLoadingState() {
        const loadingDiv = document.getElementById('transactionsLoading');
        const contentAreas = document.querySelectorAll('.transactions-table-container, .transactions-stats, #transactionsPagination');
        
        if (loadingDiv) loadingDiv.style.display = 'block';
        contentAreas.forEach(area => area.style.display = 'none');
    }

    /**
     * Hide loading state
     */
    hideLoadingState() {
        const loadingDiv = document.getElementById('transactionsLoading');
        if (loadingDiv) loadingDiv.style.display = 'none';
    }

    /**
     * Show error state
     */
    showErrorState(message) {
        this.hideLoadingState();
        
        const noTransactionsDiv = document.getElementById('noTransactions');
        if (noTransactionsDiv) {
            noTransactionsDiv.innerHTML = `
                <div class="no-results-icon">⚠️</div>
                <h4>Error Loading Transactions</h4>
                <p>${message}</p>
            `;
            noTransactionsDiv.style.display = 'block';
        }
    }

    // Utility Methods

    /**
     * Format date for display
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    /**
     * Format currency amount
     */
    formatCurrency(amount) {
        if (typeof amount !== 'number') {
            amount = parseFloat(amount) || 0;
        }
        
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    /**
     * Truncate text to specified length
     */
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
}

// Initialize the TransactionManager when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing ABBA Transaction Manager...');
    
    // Create global instance
    window.transactionManager = new TransactionManager();
    
    console.log('Transaction Manager initialized successfully');
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TransactionManager;
}