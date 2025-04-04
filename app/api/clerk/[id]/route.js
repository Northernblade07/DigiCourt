import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Clerk from "@/model/Clerk";

export async function GET(req,{params}){
    try{
        await connectDb();
        
        const {id} = await params;
        if (!params?.id) {
            return NextResponse.json(
              { message: "Clerk ID is required" },
              { status: 400 }
            );
          }
      
          // Check if ID is a valid MongoDB ObjectId
          if (!params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return NextResponse.json(
              { message: "Invalid Clerk ID format" },
              { status: 400 }
            );
          }
      
        //   const clerkById = await Clerk.findById(params.id);

        const clerkById =  await Clerk.findById(id);
        if(!clerkById){
            return NextResponse.json({message:"clerk by id not found "},{ status : 404})
        }
        return NextResponse.json(clerkById , {status:200});
    }catch(error){
        return NextResponse.json({message:"Error fetching clerks by id"},{status:500})
    }

}