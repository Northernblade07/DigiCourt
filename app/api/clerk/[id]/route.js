import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Clerk from "@/model/Clerk";

export async function GET(req,{params}){
    try{
        await connectDb();
        const clerkById =  await Clerk.findById(params.id);
        if(!clerkById){
            return NextResponse.json({message:"clerk by id not found "},{ status : 404})
        }
        return NextResponse.json(clerkById , {status:200});
    }catch(error){
        return NextResponse.json({message:"Error fetching clerks by id"},{status:500})
    }

}