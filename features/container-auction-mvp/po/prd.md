# Container Auction - Product Requirements Document (PRD)

## Problem Statement
Vietnam's shipping container market currently lacks a centralized digital platform. Transactions are inefficient, primarily conducted via offline phone calls or informal Facebook groups. With the rising demand for efficient trading (selling/auctioning) and maintenance services for used containers, there is a clear market need for a professional, consolidated marketplace to connect carriers, SMEs, and service providers.

## Goals & Success Metrics
### Goals
- **Goal 1:** Enable Major Shipping Carriers (e.g., MSK, ONE) to list containers and parts for direct sale or auction.
- **Goal 2:** Create a marketplace for container maintenance and repair services, allowing owners to post requests and providers to bid or accept jobs.
- **Goal 3:** Empower Small and Medium Enterprises (SMEs) to buy, sell, and rent containers via a transparent digital platform.

### Success Metrics (First 3 Months)
- **Growth:** Achieve 5,000 Monthly Active Users (MAU).
- **Volume:** Facilitate 1,000 total transactions.
- **Sales:** Relocate 5,000 containers via direct sale.
- **Auctions:** Process 5,000 container auctions.

## Target Users
1.  **Major Shipping Carriers** (e.g., Maersk, ONE)
    *   *Role:* Sellers, Auctioneers, Service Requesters.
2.  **Small & Medium Enterprises (SMEs)**
    *   *Role:* Buyers, Sellers, Renters.
3.  **Container Repair Companies**
    *   *Role:* Service Providers.
4.  **System Administrators**
    *   *Role:* Platform Management.

## User Stories (High-Level)

### 🚢 Major Shipping Carriers
1.  As a **Major Carrier**, I want to **list my containers and parts for sale**, so that I can liquidate inventory efficiently.
2.  As a **Major Carrier**, I want to **create auctions for my containers**, so that I can maximize revenue through competitive bidding.
3.  As a **Major Carrier**, I want to **post maintenance/repair requests**, so that I can find qualified partners to service my fleet.
4.  As a **Major Carrier**, I want to **browse and select repair partners**, so that I can ensure my containers are maintained at a good price.

### 🏢 Small & Medium Enterprises (SMEs)
5.  As an **SME**, I want to **buy, sell, or rent containers**, so that I can meet my logistics needs without complex offline negotiations.
6.  As an **SME**, I want to **post maintenance requests** for my owned containers, so that I can keep them operational.

### 🛠️ Service Providers
7.  As a **Repair Company**, I want to **view and accept repair jobs**, so that I can increase my business revenue.

### 👤 General / Admin
8.  As an **Admin**, I want to **manage users and permissions**, so that I can ensure the platform complies with policies.
9.  As a **User**, I want to **manage my profile settings**, so that I can keep my contact and business details up to date.
10. As a **User**, I want to **view and manage my order history**, so that I can track my purchases, sales, and service requests.
11. As a **User**, I want to **log in and log out securely**, so that I can access my personalized features (inventory, bids, profile).

## Out of Scope
*   **Analytics Dashboard** (Basic reporting only).
*   **In-App Notifications** (Email only for MVP).
*   **Integrated Payment Gateway** (Transactions handled off-platform or via simple transfer proof).
*   **Real-time Chat** (Communication via external comments or contact details).
*   **Advanced Authentication** (OAuth, SSO, 2FA - simple modal login only for MVP).

## Navigation Structure (MVP)
### Top Menu (Public)
- **Container Marketplace** - Browse all listings
- **Auctions** - View active auctions

### User Menu (Logged In)
Dropdown accessible via user avatar (top-right):
- **User Profile** - View/edit account details
- **Manage Inventory** - Access seller dashboard
- **My Bids** - Track active bids
- **Logout** - End session

### User Menu (Not Logged In)
- **Login/Sign Up** button (top-right)
- Clicking opens modal login form

## Design Resources
- [Link to wireframes/mockups if available]
