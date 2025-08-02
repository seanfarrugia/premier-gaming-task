import path from "path";
import { promises } from "fs";
import { Game } from "@/app/db/game";

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'app', 'db', 'games.json')
        const fileContents = await promises.readFile(filePath, 'utf-8')
        const data: Game[] = JSON.parse(fileContents)

        return Response.json(data)
    } catch (error) {
        return new Response('Error reading data file - ' + error, { status: 500 })
    }
}