import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import Judge from "@/model/judge";

export async function GET(req,{params}) {
    try {
        await connectDb();

        const judgeById = await Judge.findById(params.id)

        if (!judgeById) {
            return NextResponse.json({message:"no judge by id found "},{
                status:404
            })
        }

        return NextResponse.json(judgeById,{status:200})
    } catch (error) {
        return NextResponse.json({})
    }
}