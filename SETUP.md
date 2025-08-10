# Authentication Setup Guide

This guide explains how to set up and use the authentication system in your CodeCollab application.

## Backend Requirements

Your backend should have the following endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Expected Request/Response Format

#### Registration
**Request:**
```json
{
  "username": "string",
  "email": "string", 
  "password": "string"
}
```

**Response:**
```json
{
  "_id": "string",
  "username": "string",
  "email": "string",
  "token": "string"
}
```

#### Login
**Request:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "_id": "string",
  "username": "string", 
  "email": "string",
  "token": "string"
}
```

## Frontend Configuration

### 1. Environment Variables

Create a `.env.local` file in your frontend directory:

```bash
# Backend server URL
BACKEND_URL=http://localhost:5000

# Next.js configuration
NEXT_PUBLIC_APP_NAME=CodeCollab
```

**Important:** Make sure your backend server is running on the port specified in `BACKEND_URL`.

### 2. Backend Server Setup

Ensure your backend server is running and accessible. The default configuration expects it at `http://localhost:5000`.

If your backend runs on a different port or URL, update the `BACKEND_URL` in your environment file.

### 3. CORS Configuration

Make sure your backend allows requests from your frontend domain. Add CORS middleware to your Express server:

```javascript
import cors from 'cors';

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

## Features

### Form Validation
- **Username**: 3-20 characters, required
- **Email**: Valid email format, required
- **Password**: Minimum 6 characters, required
- **Confirm Password**: Must match password
- **Terms**: Must be agreed to

### Error Handling
- Real-time validation feedback
- API error display
- Form submission error handling
- Network error handling

### Security Features
- Password confirmation
- Input sanitization
- Secure token storage
- Automatic error clearing

### User Experience
- Loading states during submission
- Smooth transitions
- Responsive design
- Accessible form elements

## Usage

### Registration Flow
1. User fills out the signup form
2. Form validates input in real-time
3. On submit, data is sent to backend via Next.js API route
4. Backend processes registration and returns user data + token
5. Frontend stores authentication data and redirects to home page

### Login Flow
1. User enters email and password
2. Form validates input
3. On submit, credentials are sent to backend
4. Backend verifies credentials and returns user data + token
5. Frontend stores authentication data and redirects to home page

## File Structure

```
frontend/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.ts
│   │       └── register/
│   │           └── route.ts
│   ├── components/
│   │   └── auth/
│   │       ├── LoginForm.tsx
│   │       └── SignupForm.tsx
│   ├── config/
│   │   └── api.ts
│   └── utils/
│       └── auth.ts
```

## Testing

### 1. Start Backend Server
```bash
cd backend
npm start
# or
node server.js
```

### 2. Start Frontend Development Server
```bash
cd frontend
npm run dev
```

### 3. Test Authentication
- Navigate to `/signup` to test registration
- Navigate to `/login` to test login
- Check browser console for any errors
- Verify localStorage contains user data and token

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is configured correctly
2. **Connection Refused**: Check if backend server is running
3. **Invalid Endpoint**: Verify API routes are correctly configured
4. **Token Not Stored**: Check browser localStorage and console errors

### Debug Steps

1. Check browser Network tab for API requests
2. Verify backend server logs for incoming requests
3. Check frontend console for JavaScript errors
4. Verify environment variables are loaded correctly

## Security Considerations

- Passwords are sent over HTTPS (in production)
- Tokens are stored in localStorage (consider httpOnly cookies for production)
- Input validation on both frontend and backend
- Error messages don't reveal sensitive information
- Form data is sanitized before submission

## Production Deployment

1. Set `BACKEND_URL` to your production backend URL
2. Ensure HTTPS is enabled
3. Consider implementing refresh tokens
4. Add rate limiting to prevent brute force attacks
5. Implement proper logging and monitoring
6. Consider using httpOnly cookies instead of localStorage for tokens
