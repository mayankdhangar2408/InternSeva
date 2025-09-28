import clientPromise from '@/lib/mongodb'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  try {
    const formData = await request.json()
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      dateOfBirth, 
      gender, 
      education, 
      password,
      confirmPassword,
      agreeToTerms
    } = formData

    // Validation
    if (!firstName || !lastName || !email || !phone || !dateOfBirth || 
        !gender || !education || !password || !confirmPassword || !agreeToTerms) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (password !== confirmPassword) {
      return Response.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return Response.json(
        { error: 'Password must be at least 8 characters long' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Age validation
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    
    if (age < 18) {
      return Response.json(
        { error: 'You must be at least 18 years old to register' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('internseva')
    const users = db.collection('users')

    // Check if user already exists
    const existingUser = await users.findOne({ email: email.toLowerCase() })
    if (existingUser) {
      return Response.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const newUser = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      dateOfBirth,
      gender,
      education,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      isVerified: false,
      profileComplete: false
    }

    const result = await users.insertOne(newUser)

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: result.insertedId,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    // Return user data (without password)
    const userData = {
      id: result.insertedId,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
      dateOfBirth: newUser.dateOfBirth,
      gender: newUser.gender,
      education: newUser.education,
      createdAt: newUser.createdAt
    }

    return Response.json({
      success: true,
      user: userData,
      token,
      message: 'Account created successfully'
    })

  } catch (error) {
    console.error('Registration error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}