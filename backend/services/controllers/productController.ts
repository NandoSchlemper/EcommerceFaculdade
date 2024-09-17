// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from "express";

export async function getAllProducts(req: Request, res: Response) {}
export async function deleteProductById(req: Request, res: Response) {}
export async function createProduct(req: Request, res: Response) {}
export async function updateProduct(req: Request, res: Response) {}
export async function getSellerOfProduct(req: Request, res: Response) {}