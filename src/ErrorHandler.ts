import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime";
import { StandardResponseMessage, StandardResponseMessageMeta, StatusResponse } from "./response";
import { Prisma } from "@prisma/client";

function HandlePostError(error: any) : any {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code == "P2003"){
            return StandardResponseMessageMeta(StatusResponse.ERROR, "Foreign key is invalid", error.meta);
        }
        if(error.code == "P2002"){
            return StandardResponseMessage(StatusResponse.ERROR, "Object already exists");
        }
    }else{
        return StandardResponseMessage(StatusResponse.ERROR, "Unknown error");
    }
}     

export { HandlePostError };