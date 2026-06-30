import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function successResponse(data: any, status = 200) {
    return NextResponse.json({ success: true, data }, { status });
}

export function errorResponse(message: string, status = 500, errors?: any) {
    return NextResponse.json({ success: false, error: message, details: errors }, { status });
}

export function handleApiError(error: any) {
    console.error("API Error:", error);

    if (error instanceof ZodError) {
        return errorResponse("Validation failed", 400, error.errors);
    }

    if (error instanceof Error) {
        return errorResponse(error.message, 500);
    }

    return errorResponse("Internal Server Error", 500);
}
