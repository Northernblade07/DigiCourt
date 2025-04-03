import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Clerk from "@/model/Clerk";

export async function GET(){
    try{
        await connectDb();
        const clerks = await Clerk.find({});
        if (!clerks){
            return NextResponse.json({message:"all clerks not found "})
        }
        if (clerks.length === 0) {
            return NextResponse.json({ message: "No clerks found" }, { status: 404 });
          }
        return NextResponse.json(clerks, {status:200});
    }catch(error){
        return NextResponse.json({message:"Error fetching all clerks"},{status:500})
    }

}