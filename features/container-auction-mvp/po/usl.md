# User Story List

**PRD:** PRD-CA-001 - Container Auction MVP
**USM:** USM-CA-001
**Last Updated:** 2026-02-03

---

## Summary

| Priority | Count | Story Points |
|----------|-------|--------------|
| Must-have | 13 | 39 |
| Should-have | 1 | 3 |
| Could-have | 0 | 0 |
| **Total** | **14** | **42** |

---

## Stories by Module

### Inventory

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-001](#st-001-seller-lists-container-for-sale) | Seller lists container for sale | Must-have | Draft | 3 |
| [ST-002](#st-002-seller-creates-container-auction) | Seller creates container auction | Must-have | Draft | 3 |
| [ST-003](#st-003-seller-manages-active-listings) | Seller manages active listings | Must-have | Draft | 2 |

### Marketplace

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-004](#st-004-buyer-browses-and-searches-containers) | Buyer browses and searches containers | Must-have | Draft | 3 |
| [ST-005](#st-005-buyer-places-bid-on-auction) | Buyer places bid on auction | Must-have | Draft | 3 |
| [ST-006](#st-006-buyer-purchases-container-directly) | Buyer purchases container directly | Must-have | Draft | 3 |

### Maintenance

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-007](#st-007-owner-posts-maintenance-request) | Owner posts maintenance request | Must-have | Draft | 3 |
| [ST-008](#st-008-provider-browses-repair-jobs) | Provider browses repair jobs | Must-have | Draft | 3 |
| [ST-009](#st-009-provider-accepts-repair-job) | Provider accepts repair job | Must-have | Draft | 2 |
| [ST-010](#st-010-owner-selects-repair-partner) | Owner selects repair partner | Must-have | Draft | 2 |

### Platform

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-011](#st-011-admin-manages-users) | Admin manages users | Must-have | Draft | 3 |
| [ST-012](#st-012-user-manages-profile) | User manages profile | Must-have | Draft | 3 |
| [ST-013](#st-013-user-views-order-history) | User views order history | Should-have | Draft | 3 |
| [ST-014](#st-014-user-authentication-flow) | User authentication flow | Must-have | Draft | 3 |

---

## Story Details

### ST-001: Seller lists container for sale

- **Activity:** ACT-001 / **Step:** STEP-001
- **Module:** Inventory
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** inventory, selling, mvp
- **Dependencies:** —
- **Jira:** —

> As a Seller, I want to create a fixed-price listing for a container with photos and specs so that buyers can purchase it immediately.

### ST-002: Seller creates container auction

- **Activity:** ACT-001 / **Step:** STEP-002
- **Module:** Inventory
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** auctions, selling, mvp
- **Dependencies:** —
- **Jira:** —

> As a Seller, I want to create an auction with a starting bid and duration so that I can maximize the container's sale price.

### ST-003: Seller manages active listings

- **Activity:** ACT-001 / **Step:** STEP-003
- **Module:** Inventory
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 2
- **Tags:** inventory, dashboard, mvp
- **Dependencies:** ST-001, ST-002
- **Jira:** —

> As a Seller, I want to view my active sales and auctions so that I can monitor views and bids.

### ST-004: Buyer browses and searches containers

- **Activity:** ACT-002 / **Step:** STEP-004
- **Module:** Marketplace
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** search, buying, mvp
- **Dependencies:** ST-001
- **Jira:** —

> As a Buyer, I want to search for containers by type, location, and condition so that I can find exactly what I need.

### ST-005: Buyer places bid on auction

- **Activity:** ACT-002 / **Step:** STEP-005
- **Module:** Marketplace
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** auctions, bidding, mvp
- **Dependencies:** ST-002
- **Jira:** —

> As a Buyer, I want to place a bid on an active auction so that I can try to win the container at a good price.

### ST-006: Buyer purchases container directly

- **Activity:** ACT-002 / **Step:** STEP-006
- **Module:** Marketplace
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** buying, checkout, mvp
- **Dependencies:** ST-001
- **Jira:** —

> As a Buyer, I want to click 'Buy Now' on a fixed-price listing so that I can secure the container immediately.

### ST-007: Owner posts maintenance request

- **Activity:** ACT-003 / **Step:** STEP-007
- **Module:** Maintenance
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** maintenance, services, mvp
- **Dependencies:** —
- **Jira:** —

> As a Container Owner, I want to post a request for repair services with location and damage details so that providers can bid.

### ST-008: Provider browses repair jobs

- **Activity:** ACT-003 / **Step:** STEP-008
- **Module:** Maintenance
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** maintenance, provider, mvp
- **Dependencies:** ST-007
- **Jira:** —

> As a Repair Company, I want to view available repair jobs in my area so that I can find new business.

### ST-009: Provider accepts repair job

- **Activity:** ACT-003 / **Step:** STEP-009
- **Module:** Maintenance
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 2
- **Tags:** maintenance, bidding, mvp
- **Dependencies:** ST-008
- **Jira:** —

> As a Repair Company, I want to accept a job or submit a quote so that I can be hired.

### ST-010: Owner selects repair partner

- **Activity:** ACT-003 / **Step:** STEP-010
- **Module:** Maintenance
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 2
- **Tags:** maintenance, selection, mvp
- **Dependencies:** ST-009
- **Jira:** —

> As a Container Owner, I want to review provider bids and select one so that the repair work can begin.

### ST-011: Admin manages users

- **Activity:** ACT-004 / **Step:** STEP-011
- **Module:** Platform
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** admin, users, security, mvp
- **Dependencies:** —
- **Jira:** —

> As an Admin, I want to view and approve/suspend user accounts so that I can maintain platform safety.

### ST-012: User manages profile

- **Activity:** ACT-004 / **Step:** STEP-012
- **Module:** Platform
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** profile, account, mvp
- **Dependencies:** —
- **Jira:** —

> As a User, I want to update my contact and business details so that others can contact me correctly.

### ST-013: User views order history

- **Activity:** ACT-004 / **Step:** STEP-013
- **Module:** Platform
- **Priority:** Should-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** history, orders, dashboard
- **Dependencies:** ST-006
- **Jira:** —

> As a User, I want to see a list of my past purchases and sales so that I can keep track of my business.

### ST-014: User authentication flow

- **Activity:** ACT-004 / **Step:** STEP-014
- **Module:** Platform
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** authentication, login, security, mvp
- **Dependencies:** —
- **Jira:** —

> As a User, I want to log in and log out of the platform so that I can access my personalized features and manage my account securely.

**Navigation Requirements:**
- **Top Menu (Public):** Container Marketplace, Auctions
- **User Avatar Menu (Logged In):** User Profile, Manage Inventory, My Bids, Logout
- **User Avatar Menu (Not Logged In):** Login/Sign Up button
- **Authentication:** Simple modal-based login (no full auth system required for MVP)
