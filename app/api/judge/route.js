import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Judge from "@/model/judge";

export async function GET() {
    try {
        await connectDb();

        const judges = await Judge.find({});
        if (!judges) {
            return NextResponse.json({message:"no judges found"},
            {
                status:404
            }
            )
        }
        return NextResponse.json(judges,{status:200});
    } catch (error) {
        return NextResponse.json({error:"error fetching judge"},{status:500})
    }
}