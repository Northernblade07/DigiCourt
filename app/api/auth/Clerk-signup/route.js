import { connectDb } from "@/lib/db";
import { NextResponse,NextRequest } from "next/server";
// import Judge from "@/model/judge";
import bcrypt from 'bcryptjs'
import Clerk from "@/model/Clerk";

const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
export async function POST(request) {
 try {
    const {username,email, password,secretCode} = await request.json();
    console.log(secretCode);
    console.log(CLERK_SECRET_KEY);

    if (secretCode!== CLERK_SECRET_KEY) {
        // throw new Error("invalid registration")
        return NextResponse.json({
            error:"secretcode error"
        },{
            status:400
        })
    }
    if (!username||!email||!password) {
        return NextResponse.json({
            error:"email missing for judge"
        },{
            status:400
        })
    }
   await connectDb();
  const existingclerk = await Clerk.findOne({email});
  if (existingclerk) {
    NextResponse.json({
        error:"clerk already exists "
    },{
        status:400
    }
    )
  }

  const hashedPassword = await bcrypt.hash(password,10);

  const clerk = await Clerk.create({
    username,
    email,
    password:hashedPassword,
    secretCode,
    approvedCase:[],
    evidence:[]
  })

  return NextResponse.json({
    message:"clerk registered successfully"
  },{
 status:201,
  })
 } catch (error) {
    console.log(error);
    return NextResponse.json({error:"failed to register clerk"},{
        status:500,
    })
 }
}