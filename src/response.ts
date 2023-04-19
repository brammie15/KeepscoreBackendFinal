enum StatusResponse {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
}    

function StandardResponse(StatusResponse: StatusResponse, data: any) {
    return {
        status: StatusResponse,
        data: data
    }
}

function StandardResponseMessageMeta(StatusResponse: StatusResponse, message: any, meta: any) {
    return {
        status: StatusResponse,
        message: message,
        meta: meta
    }
}

function StandardResponseMessage(StatusResponse: StatusResponse, message: any) {
    return {
        status: StatusResponse,
        message: message
    }
}

export { StatusResponse, StandardResponse, StandardResponseMessage, StandardResponseMessageMeta};