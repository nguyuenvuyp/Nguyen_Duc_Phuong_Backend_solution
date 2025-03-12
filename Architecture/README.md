
## **📌 Overview**
This module provides an API service to manage a **live-updating scoreboard** for a website. It ensures:
- **Real-time updates** using WebSockets.
- **Secure score updates** to prevent unauthorized modifications.

## **📌 Features**
### **1️⃣ Retrieve Top 10 Scores**
- **Endpoint**: `GET /scores`
- **Description**: Returns the **top 10 users** with the highest scores.
- **Response (JSON)**:
  [
    { "userId": "user1", "score": 150 },
    { "userId": "user2", "score": 140 }
  ]

### **2️⃣ Update Score**
Endpoint: POST /score
Description: Updates the user’s score when they complete an action.
Request (JSON):
{ "userId": "user1", "authToken": "abc123" }
Response (JSON):
{ "success": true, "newScore": 160 }
Security:
Requires authentication (authToken).
Only valid users can update scores.

### **3️⃣ Real-time Score Updates**
Technology: Uses WebSockets for real-time updates.
How it works:
When a user’s score is updated, the server broadcasts the new top 10 leaderboard to all connected clients.


### **4️⃣ Execution Flow Diagram will be displayed in diagram.png**


### **5️⃣ Security Measures**
Authentication: Each request must have a valid authToken.
Rate-limiting: Prevent spamming score updates.
Database validation: Ensure only valid users exist.

Additional Improvements:
+ Implement leaderboards for different game modes.
+ Introduce caching to optimize score retrieval.
+ Use JWT authentication instead of plain authToken.

