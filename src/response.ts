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

function StandardResponseMessage(StatusResponse: StatusResponse, message: any) {
    return {
        status: StatusResponse,
        message: message
    }
}

export { StatusResponse, StandardResponse, StandardResponseMessage};