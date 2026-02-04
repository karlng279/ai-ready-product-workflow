# USM: Container Auction MVP
id: USM-CA-001
prd_id: PRD-CA-001
owner: Technical PM
status: draft
last_updated: 2026-02-03

## User Activities

  - activity_id: ACT-001
    name: "Manage Container Inventory (Sellers)"
    description: "Major carriers and SMEs list containers for sale or auction."
    steps:
      - step_id: STEP-001
        name: "List container for direct sale"
        description: "Seller creates a listing with fixed price, photos, and specs."
        stories: [ST-001, ST-005]
      - step_id: STEP-002
        name: "Create container auction"
        description: "Seller creates a listing with starting bid, duration, and reserve price."
        stories: [ST-002]
      - step_id: STEP-003
        name: "Manage active listings"
        description: "Seller views and edits their active sales and auctions."
        stories: [ST-002, ST-005]

  - activity_id: ACT-002
    name: "Procure Containers (Buyers)"
    description: "SMEs and other buyers find and acquire containers."
    steps:
      - step_id: STEP-004
        name: "Browse and search containers"
        description: "Buyer searches for containers by type, location, condition, and price."
        stories: [ST-005]
      - step_id: STEP-005
        name: "Place bid on auction"
        description: "Buyer places a bid on an active auction."
        stories: [ST-005]
      - step_id: STEP-006
        name: "Purchase directly"
        description: "Buyer purchases a container immediately at the fixed price."
        stories: [ST-005]

  - activity_id: ACT-003
    name: "Manage Maintenance & Repairs"
    description: "Container owners request repairs and providers find jobs."
    steps:
      - step_id: STEP-007
        name: "Post maintenance request"
        description: "Owner (Carrier/SME) details repair needs and location."
        stories: [ST-003, ST-006]
      - step_id: STEP-008
        name: "Browse repair requests"
        description: "Repair company views available jobs in their area."
        stories: [ST-007]
      - step_id: STEP-009
        name: "Accept/Bid on repair job"
        description: "Repair company accepts a job or submits a quote."
        stories: [ST-007]
      - step_id: STEP-010
        name: "Select repair partner"
        description: "Owner reviews bids/profiles and selects a provider."
        stories: [ST-004]

  - activity_id: ACT-004
    name: "Platform Administration"
    description: "Admins oversee the marketplace and users manage their accounts."
    steps:
      - step_id: STEP-011
        name: "Manage user accounts"
        description: "Admin reviews and approves/suspends user accounts."
        stories: [ST-008]
      - step_id: STEP-012
        name: "Manage user profile"
        description: "User updates contact info, business details, and preferences."
        stories: [ST-009]
      - step_id: STEP-013
        name: "View order history"
        description: "User views past purchases, sales, and service records."
        stories: [ST-010]
      - step_id: STEP-014
        name: "User authentication"
        description: "User logs in/out via simple modal to access personalized features."
        stories: [ST-014]

## Notes
  - Story IDs (ST-xxx) map to the high-level stories in the PRD and will be detailed in the USL.
  - Initial MVP focuses on the core happy paths for Buying, Selling, Auctioning, and Repair matching.
  - Payment integration is out of scope; flows assume offline/external settlement.

## Navigation Structure (Updated)
  - **Top Menu:** Container Marketplace, Auctions (public access)
  - **User Menu (Logged In):** User Profile, Manage Inventory, My Bids, Logout
  - **User Menu (Not Logged In):** Login/Sign Up button
  - **Authentication:** Simple modal-based login for MVP (no full OAuth/SSO required)
