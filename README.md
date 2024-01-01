# Managing Employee Shifts - Backend with TypeScript

This application is designed to efficiently manage employee shifts. The backend is developed using Express, TypeScript, Mongoose, JWT, Bcrypt, and Zod. Global error handling ensures code reusability. Yarn is used as the package manager for the backend.

## Live Website and Source Code

- **Live Website:** [Managing Employee Shifts](https://m-e-s.netlify.app/)
- **GitHub Backend Code:** [GitHub - Backend](https://github.com/dev-rakibul1/managing-employee-shifts-backend-with-TS)
- **GitHub Front-end Code:** [GitHub - Frontend](https://github.com/dev-rakibul1/managing-employee-shifts-front-end)

## API Endpoints

### Step 01: Auth

1. **Login (POST):**

   - Endpoint: `http://localhost:5000/api/v1/auth/login`
   - Payload:
     ```json
     {
       "email": "fl.rakibul@gmail.com",
       "password": "Pass17452012"
     }
     ```

2. **Get Auth (GET):**

   - Endpoint: `http://localhost:5000/api/v1/get-auth/`

3. **Password Change (POST):**
   - Endpoint: `http://localhost:5000/api/v1/employee/password-change/6592b5a0fcfb6c2802a0e5e3`
   - Payload:
     ```json
     {
       "password": "Pass17452012",
       "newPassword": "Pass17452012"
     }
     ```

### Step 02: Employee

1. **Create Employee (POST):**

   - Endpoint: `http://localhost:5000/api/v1/employee/create-employee`
   - Payload:
     ```json
     {
       "firstName": "john@doe",
       "middleName": "",
       "lastName": "Islam",
       "email": "john@doe.com",
       "phone": "01614651839",
       "address": "123 Main Street",
       "role": "",
       "gender": "Male",
       "password": "Pass123456"
     }
     ```

2. **Get Supervisor (GET):**

   - Endpoint: `http://localhost:5000/api/v1/employee/supervisor?limit=2&sortBy=name&sortOrder=desc&firstName=abir&searchTerm=a`

3. **Get Single Employee (GET):**

   - Endpoint: `http://localhost:5000/api/v1/employee/658fc3e3a857bad875bb3ebf`

4. **Get All Employees (GET):**

   - Endpoint: `http://localhost:5000/api/v1/employee/`

5. **Get Supervisor (GET):**

   - Endpoint: `http://localhost:5000/api/v1/employee/supervisor/`

6. **Get Administrator (GET):**

   - Endpoint: `http://localhost:5000/api/v1/employee/administrator/`

7. **Update Employee (PATCH):**

   - Endpoint: `http://localhost:5000/api/v1/employee/658fc456a857bad875bb3ecb`
   - Payload:
     ```json
     {
       "firstName": "john",
       "middleName": "doe",
       "lastName": "smith",
       "email": "john@doe.com",
       "gender": "Male",
       "phone": "+450653501",
       "address": "Dhaka, Bangladesh",
       "role": "supervisor",
       "profilePicture": "https://picsum.photos/seed/405/200/300"
     }
     ```

8. **Delete Employee (DELETE):**
   - Endpoint: `http://localhost:5000/api/v1/employee/658fc456a857bad875bb3ecb`

### Step 03: Shift

1. **Create Shift (POST):**

   - Endpoint: `http://localhost:5000/api/v1/shift/create-shift`
   - Payload:
     ```json
     {
       "date": "2023-10-30",
       "startTime": "08:00 AM",
       "endTime": "04:00 PM",
       "employee": "658fc3e3a857bad875bb3ebf"
     }
     ```

2. **Get Shifts (GET):**

   - Endpoint: `http://localhost:5000/api/v1/shift?limit=2&sortBy=name&sortOrder=desc&firstName=abir&searchTerm=a`

3. **Get Single Shift (GET):**

   - Endpoint: `http://localhost:5000/api/v1/shift/658ef1fe190f6c298940e3ec`

4. **Update Shift (PATCH):**
   - Endpoint: `http://localhost:5000/api/v1/shift/658d0942d2937323df7b9087`
   - Payload:
     ```json
     {
       "date": "2023-12-30",
       "startTime": "09:00 AM",
       "endTime": "05:00 PM",
       "employee": "658cf92c332d011e1fb8df7d"
     }
     ```

### Frontend

The frontend is developed using React, Redux, and Ant Design. It provides an intuitive and visually appealing user interface. The application is fully responsive for a seamless experience on every device.

#### Setup

1. Clone the [Frontend Repository](https://github.com/dev-rakibul1/managing-employee-shifts-front-end).
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

### Backend Pagination, Filter, Search, Sort, Limit (Incomplete)

The backend supports pagination, filtering, searching, sorting, and limiting functionality, providing robust features for managing employee data efficiently.

Feel free to contribute to completing the integration with the frontend.

## Contributing

Contributions are welcome! If you find issues or have suggestions, please open an issue on the respective GitHub repositories.

Thank you for using Managing Employee Shifts!
