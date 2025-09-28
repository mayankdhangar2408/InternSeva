import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import jwt from 'jsonwebtoken'

export async function PUT(request) {
  try {
    const body = await request.json()
    const { profileData } = body

    // Get the token from cookies
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      )
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded.userId

    // Connect to database
    const { db } = await connectToDatabase()
    const users = db.collection('users')

    // Update user profile
    const result = await users.updateOne(
      { _id: new ObjectId(userId) },
      { 
        $set: {
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          phone: profileData.phone,
          dateOfBirth: profileData.dateOfBirth,
          gender: profileData.gender,
          address: profileData.address,
          city: profileData.city,
          state: profileData.state,
          pincode: profileData.pincode,
          education: profileData.education,
          institution: profileData.institution,
          graduationYear: profileData.graduationYear,
          cgpa: profileData.cgpa,
          skills: profileData.skills,
          bio: profileData.bio,
          linkedin: profileData.linkedin,
          github: profileData.github,
          portfolio: profileData.portfolio,
          projects: profileData.projects,
          updatedAt: new Date()
        }
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully'
    })

  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update profile' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    // Get the token from cookies
    const token = request.cookies.get('token')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Authentication required' },
        { status: 401 }
      )
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded.userId

    // Connect to database
    const { db } = await connectToDatabase()
    const users = db.collection('users')

    // Get user profile
    const user = await users.findOne(
      { _id: new ObjectId(userId) },
      { 
        projection: { 
          password: 0 // Exclude password from response
        } 
      }
    )

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      user: user
    })

  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}