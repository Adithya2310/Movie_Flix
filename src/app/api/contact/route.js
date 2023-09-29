import dbConnect from "@/utils/conDB";
import Contact from "@/models/ContactForm";
import { NextResponse } from "next/server";

export async function POST(req,res)
{
    try{
        const form=await req.json();
        await dbConnect();
        await Contact.create(form);
        return NextResponse.json({
            message:"form submitted successfully"
        },{
            status:200
        })
    }
    catch(e)
    {
        return NextResponse.json({
            message:"Server error please try again"
        },{
            status:200
        });
    }
}

// test code
// export async function GET(req,res)
// {
//    return NextResponse.json({
//     message:"Hello",
//    },{
//     status:500
//    })
// }