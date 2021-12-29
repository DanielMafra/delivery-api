import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "4a25a3c1b18a438e70944201320a5d79") as IPayload;
    req.id_deliveryman = sub;
    return next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    })
  }
}