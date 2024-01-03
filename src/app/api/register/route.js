import connectToDb from "@/database";
import User from "@/models/users";
import Joi from "joi";
import { NextResponse } from "next/server";



const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string()

})

export const dynamic = 'force-dynamic';



export async function POST(req) {
    await connectToDb();
    const { name, email, password, role } = await req.json();

    //   Validating a Schema

    const { error } = schema.validate({ name, email, password, role })

    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details(0)
        })
    }
    try {


        //Is user already registered?
        
        
        const userAlreadyExists = await  User.findOne({email});

        if(userAlreadyExists){
            return NextResponse.json({
                message: "User already exists! Use new email"
            })
        }

        else{
            const hashPassword = await hash(password, 12);
            
            const createUser = await User.create({
                name, email, password : hashPassword, role
            });

            if(createUser){
                return NextResponse.json({
                    message: 'Account created Successfully'
                })
            }
        }

    }
    catch (error) {

        console.log("Error while registering");

        return NextResponse.json({
            success: false,
            message: 'Something went wrong while registeration. Try again'


        })
    }

}