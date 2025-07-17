# Job Connect - Full Stack Job Portal 💼

A comprehensive job portal application built with the MERN stack that connects job seekers with recruiters. Features role-based authentication, company management, job posting, and application tracking.

![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)

## 🌟 Features

### For Job Seekers
- 🔍 Browse and search job opportunities
- 📄 One-click job applications
- 📊 Track application status
- 👤 Profile management with resume upload
- 🎯 Advanced job filtering

### For Recruiters
- 🏢 Company registration and management
- 📝 Post and manage job openings
- 👥 View and manage job applicants
- 📈 Application status tracking
- 🖼️ Company logo and branding

### General
- 🔐 Secure JWT-based authentication
- 📱 Responsive design for all devices
- ☁️ Cloud-based file storage
- 🔔 Real-time notifications
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React.js 18** - UI framework
- **Redux Toolkit** - State management
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **Axios** - HTTP client
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **bcryptjs** - Password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/job-connect.git
cd job-connect
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
```

4. **Environment Setup**

Create `.env` file in the backend directory:
```env
# Database
MONGO_URI=mongodb://localhost:27017/jobconnect

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=8000
```

Create `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

5. **Start the application**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

## 📁 Project Structure

```
job-connect/
├── backend/
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── admin/     # Recruiter components
│   │   │   ├── shared/    # Shared components
│   │   │   └── ui/        # UI components
│   │   ├── hooks/         # Custom hooks
│   │   ├── redux/         # State management
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `POST /api/v1/user/logout` - User logout
- `PUT /api/v1/user/profile/update` - Update profile

### Companies
- `POST /api/v1/company/register` - Register company
- `GET /api/v1/company/get` - Get user companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### Jobs
- `POST /api/v1/job/post` - Post new job
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `GET /api/v1/job/getadminjobs` - Get recruiter jobs

### Applications
- `POST /api/v1/application/apply/:id` - Apply to job
- `GET /api/v1/application/get` - Get user applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `POST /api/v1/application/status/:id/update` - Update application status

## 🎯 Database Models

### User Model
```javascript
{
  fullname: String,
  email: String (unique),
  phoneNumber: Number,
  password: String,
  role: ["student", "recruiter"],
  profile: {
    bio: String,
    skills: [String],
    resume: String,
    resumeOriginalName: String,
    company: ObjectId,
    profilePhoto: String
  }
}
```

### Company Model
```javascript
{
  name: String,
  description: String,
  website: String,
  location: String,
  logo: String,
  userId: ObjectId
}
```

### Job Model
```javascript
{
  title: String,
  description: String,
  requirements: [String],
  salary: Number,
  experienceLevel: Number,
  location: String,
  jobType: String,
  position: Number,
  company: ObjectId,
  created_by: ObjectId,
  applications: [ObjectId]
}
```

### Application Model
```javascript
{
  job: ObjectId,
  applicant: ObjectId,
  status: ["pending", "accepted", "rejected"]
}
```

## 🔧 Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Deploy using Git or GitHub integration

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for beautiful UI components
- [Lucide React](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Cloudinary](https://cloudinary.com/) for image storage

## 📧 Contact

Your Name - [uday.chauhan0408@gmail.com](mailto:your.email@example.com)

Project Link: [https://github.com/uday-0408/job-connect](https://github.com/yourusername/job-connect)

---

⭐ Don't forget to star this repo if you found