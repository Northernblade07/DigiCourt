import { connectDb } from "@/lib/db";
import { NextResponse,NextRequest } from "next/server";
import Judge from "@/model/judge";
import bcrypt from 'bcryptjs'

export async function POST(request) {
 try {

    const {username,email, password,specialCode} = request.json();
    if (specialCode === process.env.JUDGE_SECRET_KEY) {
        throw new Error("invalid registration")
    }
    if (!username||!email||!password) {
        return NextResponse.json({
            error:"email missing for judge"
        },{
            status:400
        })
    }
  const existingjudge = await Judge.findOne({email});
  if (existingjudge) {
    NextResponse.json({
        error:"judge already exists "
    },{
        status:400
    }
    )
  }

  const hashedPassword = await bcrypt.hash(password,10);

  const judge = await Judge.create({
    username,
    email,
    password,
    specialCode
  })

  return NextResponse.json({
    message:"judge registered successfully"
  })
 } catch (error) {
    
 }
}