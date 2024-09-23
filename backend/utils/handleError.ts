import type {Response} from 'express'

export function handleWebError(err: unknown, res: Response) {
    if (err instanceof Error) {
        console.error("Erro:", err.message);
        res.status(400).send({ error: err.message });
    } else {
        console.error("Erro desconhecido:", err);
        res.status(500).send({ error: "Erro desconhecido" });
    }
}

export function handleDevError(err: unknown) {
    if (err instanceof Error) {
        console.error("Erro:", err.message)
    } else {
        console.error("Erro desconhecido:", err)
    }
}